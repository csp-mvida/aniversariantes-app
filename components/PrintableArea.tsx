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
      className="a4-container bg-white w-[210mm] h-[297mm] py-12 px-8 shadow-2xl border border-gray-200 flex flex-col items-center overflow-hidden relative"
      id="printable-content"
    >
      {/* Cabeçalho */}
      <header className="relative mb-8 flex flex-col items-center w-[85%] shrink-0">
        <div className="w-full h-1.5 rounded-full mb-6" style={{ backgroundColor: COLORS.primary }}></div>
        
        <div className="flex flex-col items-center">
          <h1 
            className="text-4xl font-black uppercase tracking-tighter mb-4 text-center"
            style={{ color: COLORS.dark }}
          >
            Aniversariantes
          </h1>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.detail }}></div>
              <div className="h-[1.5px] w-12" style={{ backgroundColor: COLORS.detail }}></div>
            </div>
            
            <div 
              className="px-10 py-1.5 rounded-full border-2 flex items-center justify-center bg-gray-50/50"
              style={{ borderColor: COLORS.detail }}
            >
              <p className="text-xl font-black uppercase tracking-widest" style={{ color: COLORS.dark }}>
                {MONTHS[month]} <span className="font-light opacity-60">|</span> {year}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-[1.5px] w-12" style={{ backgroundColor: COLORS.detail }}></div>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.detail }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Calendário */}
      <section className="mb-10 w-[85%] shrink-0">
        <CalendarGrid 
          month={month} 
          year={year} 
          birthdays={birthdays} 
        />
      </section>

      {/* Lista de Aniversariantes com espaço reservado para o rodapé */}
      <section className="w-[85%] flex-grow overflow-hidden relative pb-40">
        <BirthdayTable birthdays={birthdays} />
      </section>

      {/* Rodapé fixo no fundo absoluto da página */}
      <footer 
        className="absolute bottom-12 left-0 right-0 flex flex-col items-center w-full"
      >
        <div className="w-[85%] h-[1px] bg-gray-100 mb-6"></div>
        <img 
          src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
          alt="Logo Missão Vida" 
          className="h-20 object-contain"
        />
      </footer>
    </div>
  );
};

export default PrintableArea;