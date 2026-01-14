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
      className="a4-container bg-white w-[210mm] h-[297mm] p-8 shadow-2xl border border-gray-200 flex flex-col items-center"
      id="printable-content"
      style={{ boxSizing: 'border-box' }}
    >
      {/* Cabeçalho */}
      <header className="mb-4 flex flex-col items-center w-full">
        <div className="w-full h-1 rounded-full mb-2" style={{ backgroundColor: COLORS.primary }}></div>
        
        <div className="flex flex-col items-center">
          <h1 
            className="text-3xl font-black uppercase tracking-tighter mb-2 text-center"
            style={{ color: COLORS.dark }}
          >
            Aniversariantes
          </h1>
          
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.detail }}></div>
            <div className="h-[1px] w-8" style={{ backgroundColor: COLORS.detail }}></div>
            
            <div 
              className="px-4 py-1 rounded-full border flex items-center justify-center bg-gray-50/50"
              style={{ borderColor: COLORS.detail }}
            >
              <p className="text-base font-black uppercase tracking-widest" style={{ color: COLORS.dark }}>
                {MONTHS[month]} | {year}
              </p>
            </div>
            
            <div className="h-[1px] w-8" style={{ backgroundColor: COLORS.detail }}></div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.detail }}></div>
          </div>
        </div>
      </header>

      {/* Calendário */}
      <section className="mb-4 w-full">
        <CalendarGrid 
          month={month} 
          year={year} 
          birthdays={birthdays} 
        />
      </section>

      {/* Lista de Aniversariantes */}
      <section className="w-full flex-grow flex flex-col">
        <BirthdayTable birthdays={birthdays} />
      </section>

      {/* Rodapé */}
      <footer className="mt-auto pt-4 w-full flex flex-col items-center">
        <div className="w-full h-[0.5px] bg-gray-200 mb-2"></div>
        <img 
          src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
          alt="Logo Missão Vida" 
          className="h-10 object-contain"
        />
      </footer>
    </div>
  );
};

export default PrintableArea;