"use client";

import React from 'react';
import { BirthdayEntry } from '../types';
import { MONTHS } from '../constants';
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
      className="a4-container a4-preview"
      id="printable-content"
    >
      {/* Premium Header */}
      <header className="flex flex-col items-center mb-10 text-center w-full relative">
        <div className="w-20 h-0.5 bg-[#4a8d7a] mb-6 opacity-30"></div>
        <h1 
          className="text-4xl font-[900] uppercase tracking-[0.3em] mb-[-12px] opacity-90"
          style={{ color: '#4a8d7a' }}
        >
          Aniversariantes
        </h1>
        <p className="font-cursive text-6xl text-gray-900 lowercase relative z-10">
          de {MONTHS[month]}
        </p>
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-100 -z-10"></div>
      </header>

      {/* Main Content Area - Alinhada a 125mm */}
      <div className="w-[125mm] flex flex-col items-center">
        {/* Calendar Section */}
        <section className="w-full mb-10">
          <CalendarGrid 
            month={month} 
            year={year} 
            birthdays={birthdays} 
          />
        </section>

        {/* List Section - Agora com a mesma largura do calendário */}
        <section className="w-full flex-grow overflow-hidden mb-8">
          <BirthdayTable birthdays={birthdays} month={month} />
        </section>
      </div>

      {/* Footer Section */}
      <footer className="mt-auto pt-8 w-full flex flex-col items-center gap-4">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <img 
          src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
          alt="Logo Missão Vida" 
          className="h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
        />
      </footer>
    </div>
  );
};

export default PrintableArea;