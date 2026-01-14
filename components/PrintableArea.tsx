"use client";

import React from 'react';
import { BirthdayEntry } from '../types';
import { MONTHS, COLORS } from '../constants';
import CalendarGrid from './CalendarGrid';
import BirthdayTable from './BirthdayTable';

interface PrintableAreaProps {
  birthdays: BirthdayEntry[];
  month: number;
  year: number;
}

const PrintableArea: React.FC<PrintableAreaProps> = ({ birthdays, month, year }) => {
  return (
    <div 
      className="a4-container a4-preview flex flex-col items-center" 
      id="printable-content"
    >
      {/* Container principal que define a área de 145mm e usa flex-col para distribuição vertical */}
      <div className="w-[145mm] h-full flex flex-col items-center">
        
        {/* Bloco 1: Header - Subindo apenas este bloco com margem negativa */}
        <header className="flex flex-col items-center text-center w-full relative -mt-10 mb-10">
          <div className="w-16 h-1 mb-3" style={{ backgroundColor: COLORS.primary }}></div>
          <h1 
            className="text-4xl font-cairo-play font-[800] tracking-[0.1em] mb-[-12px]"
            style={{ color: COLORS.primary }}
          >
            Aniversariantes
          </h1>
          <p className="font-cursive text-6xl text-gray-800 lowercase relative z-10">
            de {MONTHS[month]}
          </p>
        </header>

        {/* Bloco 2: Calendar Section - Mantendo mb-6 para separação da lista */}
        <section className="w-full mb-6">
          <CalendarGrid 
            month={month} 
            year={year} 
            birthdays={birthdays} 
          />
        </section>

        {/* Bloco 3: List Section - Sem margem inferior */}
        <section className="w-full">
          <BirthdayTable birthdays={birthdays} month={month} />
        </section>

        {/* Bloco 4: Footer - Usando mt-auto para empurrar para o final */}
        <footer className="w-full flex flex-col items-center gap-4 mt-auto">
          <div className="w-32 h-[1px] bg-gray-200"></div>
          <img 
            src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
            alt="Logo Missão Vida" 
            className="h-10 object-contain print:block"
          />
        </footer>
      </div>
    </div>
  );
};

export default PrintableArea;