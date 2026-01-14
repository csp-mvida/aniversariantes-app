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
      className="a4-container bg-white w-[210mm] h-[297mm] flex flex-col items-center"
      id="printable-content"
      style={{ boxSizing: 'border-box', overflow: 'hidden' }}
    >
      {/* Cabeçalho */}
      <header className="flex flex-col items-center w-full" style={{ flex: '0 0 60px' }}>
        <div className="w-full h-1 rounded-full mb-2" style={{ backgroundColor: COLORS.primary }}></div>
        <div className="flex flex-col items-center">
          <h1 
            className="text-2xl font-black uppercase tracking-tighter mb-1 text-center"
            style={{ color: COLORS.dark }}
          >
            Aniversariantes
          </h1>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.detail }}></div>
            <div className="h-[1px] w-6" style={{ backgroundColor: COLORS.detail }}></div>
            <div 
              className="px-3 py-1 rounded-full border flex items-center justify-center bg-gray-50/50"
              style={{ borderColor: COLORS.detail }}
            >
              <p className="text-sm font-black uppercase tracking-widest" style={{ color: COLORS.dark }}>
                {MONTHS[month]} | {year}
              </p>
            </div>
            <div className="h-[1px] w-6" style={{ backgroundColor: COLORS.detail }}></div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.detail }}></div>
          </div>
        </div>
      </header>

      {/* Calendário */}
      <section className="w-full" style={{ flex: '0 0 180px' }}>
        <CalendarGrid 
          month={month} 
          year={year} 
          birthdays={birthdays} 
        />
      </section>

      {/* Lista de Aniversariantes */}
      <section className="w-full flex-grow min-h-0 flex flex-col">
        <BirthdayTable birthdays={birthdays} />
      </section>

      {/* Rodapé */}
      <footer className="w-full flex flex-col items-center" style={{ flex: '0 0 50px' }}>
        <div className="w-full h-[0.5px] bg-gray-200 mb-1"></div>
        <img 
          src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
          alt="Logo Missão Vida" 
          className="h-8 object-contain"
        />
      </footer>
    </div>
  );
};

export default PrintableArea;