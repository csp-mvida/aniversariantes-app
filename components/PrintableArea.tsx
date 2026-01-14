"use client";

import React from 'react';
import { BirthdayEntry } from '../types';
import { COLORS, MONTHS } from '../constants';
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
      className="a4-container bg-white w-[210mm] h-[297mm] flex flex-col p-[20mm]"
      id="printable-content"
      style={{ boxSizing: 'border-box', overflow: 'hidden' }}
    >
      {/* Header */}
      <header className="flex justify-between items-start mb-12">
        <div>
          <h1 
            className="text-4xl font-black uppercase tracking-tight leading-none"
            style={{ color: COLORS.primary }}
          >
            Aniversariantes
          </h1>
          <p className="text-xl font-medium uppercase tracking-[0.3em] mt-3" style={{ color: COLORS.primary }}>
            {MONTHS[month]} {year}
          </p>
        </div>
        <div className="flex flex-col items-end pt-2">
          <div className="h-[2px] w-32 mb-2" style={{ backgroundColor: COLORS.primary }}></div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Missão Vida</span>
        </div>
      </header>

      <div className="flex flex-col gap-12 flex-grow">
        {/* Calendar Section */}
        <section className="w-full flex justify-center">
          <div className="w-[85%]">
            <CalendarGrid 
              month={month} 
              year={year} 
              birthdays={birthdays} 
            />
          </div>
        </section>

        {/* List Section */}
        <section className="w-full flex-grow overflow-hidden">
          <BirthdayTable birthdays={birthdays} />
        </section>
      </div>

      {/* Footer - Only visible if there's space */}
      <footer className="mt-auto pt-6 flex justify-between items-center border-t border-gray-50">
        <div className="flex gap-4 items-center">
          <img 
            src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
            alt="Logo Missão Vida" 
            className="h-10 object-contain opacity-80"
          />
        </div>
        <p className="text-[10px] text-gray-300 font-medium">
          Gerado em {new Date().toLocaleDateString('pt-BR')}
        </p>
      </footer>
    </div>
  );
};

export default PrintableArea;