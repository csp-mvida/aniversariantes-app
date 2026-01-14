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
      className="a4-container bg-white w-[210mm] h-[297mm] py-4 px-4 shadow-2xl border border-gray-200 flex flex-col items-center relative overflow-hidden"
      id="printable-content"
    >
      {/* Cabeçalho */}
      <header className="relative mb-2 flex flex-col items-center w-[85%] shrink-0">
        <div className="w-full h-1 rounded-full mb-2" style={{ backgroundColor: COLORS.primary }}></div>
        
        <div className="flex flex-col items-center">
          <h1 
            className="text-2xl font-black uppercase tracking-tighter mb-2 text-center"
            style={{ color: COLORS.dark }}
          >
            Aniversariantes
          </h1>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.detail }}></div>
              <div className="h-[1px] w-6" style={{ backgroundColor: COLORS.detail }}></div>
            </div>
            
            <div 
              className="px-3 py-0.5 rounded-full border flex items-center justify-center bg-gray-50/50"
              style={{ borderColor: COLORS.detail }}
            >
              <p className="text-sm font-black uppercase tracking-widest" style={{ color: COLORS.dark }}>
                {MONTHS[month]} <span className="font-light opacity-60">|</span> {year}
              </p>
            </div>
            
            <div className="flex items-center gap-1">
              <div className="h-[1px] w-6" style={{ backgroundColor: COLORS.detail }}></div>
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.detail }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Calendário */}
      <section className="mb-3 w-[85%] shrink-0">
        <CalendarGrid 
          month={month} 
          year={year} 
          birthdays={birthdays} 
        />
      </section>

      {/* Lista de Aniversariantes */}
      <section className="w-[85%] flex-grow overflow-hidden">
        <BirthdayTable birthdays={birthdays} />
      </section>

      {/* Rodapé fixo no fundo absoluto da página A4 */}
      <footer 
        className="absolute bottom-2 left-0 right-0 flex flex-col items-center w-full py-1 bg-white"
      >
        <div className="w-[85%] h-[0.5px] bg-gray-100 mb-1"></div>
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