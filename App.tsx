import React, { useState, useEffect, useRef } from 'react';
import { BirthdayEntry, AppState } from './types';
import { COLORS } from './constants';
import ConfigForm from './components/ConfigForm';
import PrintableArea from './components/PrintableArea';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    rawList: '',
    parsedBirthdays: []
  });

  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calcula a escala necessária para a folha A4 (210x297mm) caber na tela
  const updateScale = () => {
    if (!containerRef.current) return;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Dimensões A4 em pixels aproximados (96 DPI)
    const a4Width = 794; 
    const a4Height = 1123;

    // Margens de segurança
    const padding = 20;
    
    // Espaço ocupado pelo formulário (estimado no mobile)
    const headerElement = document.querySelector('.no-print');
    const headerHeight = headerElement ? headerElement.getBoundingClientRect().height : 300;

    const availableWidth = windowWidth - padding;
    const availableHeight = windowHeight - headerHeight - padding;

    const scaleW = availableWidth / a4Width;
    const scaleH = availableHeight / a4Height;
    
    // Usa o menor scale para garantir que caiba tanto na largura quanto na altura
    let newScale = Math.min(scaleW, scaleH);
    
    // No desktop, não escala para cima (máximo 1)
    if (newScale > 1) newScale = 1;
    // No mobile, garante um mínimo para não sumir
    if (newScale < 0.2) newScale = 0.2;

    setScale(newScale);
  };

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [state.parsedBirthdays]);

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

    birthdays.sort((a, b) => a.day - b.day);

    setState(prev => ({
      ...prev,
      month,
      year,
      rawList,
      parsedBirthdays: birthdays
    }));
    
    // Recalcula escala após gerar novos dados
    setTimeout(updateScale, 100);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-4 md:py-8 px-4 sm:px-6 print:p-0 print:m-0">
      {/* Configuração */}
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

      {/* Área do Preview com Escala Automática */}
      <div 
        ref={containerRef}
        className="w-full flex justify-center items-start overflow-hidden print:overflow-visible"
        style={{ 
          height: scale < 1 ? `calc(1123px * ${scale})` : 'auto',
          minHeight: scale < 1 ? `calc(1123px * ${scale})` : '1123px'
        }}
      >
        <div 
          className="origin-top transition-transform duration-300 ease-out print:transform-none"
          style={{ transform: `scale(${scale})` }}
        >
          <PrintableArea 
            birthdays={state.parsedBirthdays}
            month={state.month}
            year={state.year}
          />
        </div>
      </div>

      {/* Instruções */}
      <div className="no-print mt-8 max-w-2xl text-center text-gray-500 text-sm px-4 pb-10">
        <p>Utilize o formato <b>DIA / NOME / DEPARTAMENTO</b> para preencher a lista.</p>
        <p className="mt-1 opacity-75">O preview acima se ajusta automaticamente para caber na sua tela.</p>
      </div>
    </div>
  );
};

export default App;