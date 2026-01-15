import React, { useState, useEffect } from 'react';
import { BirthdayEntry, AppState } from './types';
import { COLORS } from './constants';
import ConfigForm from './components/ConfigForm';
import PrintableArea from './components/PrintableArea';

// Dimensões A4 em pixels (aproximadamente 794px x 1122px para 96dpi)
const A4_WIDTH_PX = 794;
const A4_HEIGHT_PX = 1122;

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    rawList: '',
    parsedBirthdays: []
  });
  
  const [scale, setScale] = useState(1);

  // Lógica para calcular a escala em telas pequenas
  useEffect(() => {
    const calculateScale = () => {
      // Verifica se estamos em modo de impressão
      if (window.matchMedia('print').matches) {
        setScale(1);
        return;
      }

      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        // 16px de padding total (8px de cada lado, ou 1rem)
        const availableWidth = screenWidth - 32; 
        const newScale = availableWidth / A4_WIDTH_PX;
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

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

  // Altura escalada da folha A4 em px
  const scaledHeight = scale < 1 ? `${A4_HEIGHT_PX * scale}px` : undefined;

  return (
    <div className="flex flex-col items-center py-4 md:py-8 px-4 sm:px-6 print:p-0 print:m-0">
      {/* Configuration Header - Hidden on Print */}
      <div className="w-full max-w-4xl no-print mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left" style={{ color: COLORS.dark }}>
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

      {/* Preview and Printable Area Wrapper */}
      <div 
        className="w-full flex justify-center pb-0 print:overflow-visible print:pb-0 md:items-center md:min-h-[calc(100vh-180px)]"
        style={{
          overflowX: scale < 1 ? 'hidden' : 'auto',
          position: scale < 1 ? 'relative' : undefined,
          height: scale < 1 ? scaledHeight : undefined,
          minHeight: scale < 1 ? scaledHeight : undefined,
          alignItems: scale < 1 ? 'flex-start' : undefined,
        }}
      >
        <div 
          className="print:block"
          style={{ 
            position: scale < 1 ? 'absolute' : undefined,
            top: scale < 1 ? 0 : undefined,
            left: scale < 1 ? '50%' : undefined,
            transform: scale < 1 
              ? `translateX(-50%) scale(${scale})` 
              : `scale(${scale})`,
            transformOrigin: 'top center',
            margin: '0 auto',
            display: 'block'
          }}
        >
          <PrintableArea 
            birthdays={state.parsedBirthdays}
            month={state.month}
            year={state.year}
          />
        </div>
      </div>

      {/* Floating Instructions - Hidden on Print */}
      <div className="no-print mt-4 max-w-2xl text-center text-gray-500 text-sm px-4">
        <p>Utilize o formato <b>DIA / NOME / DEPARTAMENTO</b> para preencher a lista.</p>
        <p className="mt-1 opacity-75">A visualização acima respeita as proporções da folha A4.</p>
      </div>
    </div>
  );
};

export default App;