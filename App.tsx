
import React, { useState, useMemo } from 'react';
import { BirthdayEntry, AppState } from './types';
import { MONTHS, COLORS } from './constants';
import ConfigForm from './components/ConfigForm';
import PrintableArea from './components/PrintableArea';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    rawList: '',
    parsedBirthdays: []
  });

  const handleGenerate = (rawList: string, month: number, year: number) => {
    const lines = rawList.split('\n').filter(line => line.trim() !== '');
    const birthdays: BirthdayEntry[] = lines.map(line => {
      const parts = line.split('/').map(p => p.trim());
      if (parts.length < 2) return null;
      
      const day = parseInt(parts[0], 10);
      const name = parts[1];
      const department = parts[2] || 'GERAL';
      
      if (isNaN(day)) return null;
      
      return { day, name, department };
    }).filter((b): b is BirthdayEntry => b !== null);

    // Sort by day
    birthdays.sort((a, b) => a.day - b.day);

    setState(prev => ({
      ...prev,
      month,
      year,
      rawList,
      parsedBirthdays: birthdays
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Configuration Header - Hidden on Print */}
      <div className="w-full max-w-4xl no-print mb-8">
        <h1 className="text-3xl font-bold mb-6" style={{ color: COLORS.dark }}>
          🎂 Gerador de Aniversariantes
        </h1>
        <ConfigForm 
          initialData={{ 
            month: state.month, 
            year: state.year, 
            rawList: state.rawList 
          }}
          onGenerate={handleGenerate}
          onPrint={handlePrint}
        />
      </div>

      {/* Preview and Printable Area */}
      <div className="w-full max-w-4xl print:max-w-none flex justify-center">
        <PrintableArea 
          birthdays={state.parsedBirthdays}
          month={state.month}
          year={state.year}
        />
      </div>

      {/* Floating Instructions - Hidden on Print */}
      <div className="no-print mt-12 max-w-2xl text-center text-gray-500 text-sm">
        <p>Utilize o formato <b>DIA / NOME / DEPARTAMENTO</b> (ex: 15 / Maria Silva / Financeiro) para preencher a lista. </p>
        <p>A área branca acima é uma simulação da folha A4 que será impressa.</p>
      </div>
    </div>
  );
};

export default App;
