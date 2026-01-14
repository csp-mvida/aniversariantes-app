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
      className="a4-container bg-white w-[210mm] h-[297mm] flex flex-col p-[15mm]"
      id="printable-content"
      style={{ boxSizing: 'border-box', overflow: 'hidden' }}
    >
      {/* Top Decoration */}
      <div className="w-full h-1.5 rounded-full mb-6" style={{ backgroundColor: COLORS.primary }}></div>

      {/* Header */}
      <header className="flex justify-between items-end mb-8">
        <div>
          <h1 
            className="text-3xl font-black uppercase tracking-tighter leading-none"
            style={{ color: COLORS.dark }}
          >
            Aniversariantes
          </h1>
          <p className="text-lg font-medium uppercase tracking-[0.2em] mt-1" style={{ color: COLORS.primary }}>
            {MONTHS[month]} {year}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="h-px w-24 mb-2" style={{ backgroundColor: COLORS.detail }}></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Missão Vida</span>
        </div>
      </header>

      <div className="flex flex-col gap-10 flex-grow">
        {/* Calendar Section - Now more compact */}
        <section className="w-full flex justify-center">
          <div className="w-[80%]">
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

      {/* Footer */}
      <footer className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
        <div className="flex gap-4 items-center">
          <img 
            src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
            alt="Logo Missão Vida" 
            className="h-8 object-contain"
          />
        </div>
        <p className="text-[9px] text-gray-400 font-medium">
          Gerado em {new Date().toLocaleDateString('pt-BR')}
        </p>
      </footer>
    </div>
  );
};

export default PrintableArea;