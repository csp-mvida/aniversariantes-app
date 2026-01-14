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
      className="a4-container a4-preview"
      id="printable-content"
    >
      {/* Premium Header */}
      <header className="flex flex-col items-center mb-8 text-center w-full relative">
        <div className="w-20 h-1 mb-6" style={{ backgroundColor: COLORS.primary }}></div>
        <h1 
          className="text-4xl font-[900] uppercase tracking-[0.3em] mb-[-12px]"
          style={{ color: COLORS.primary }}
        >
          Aniversariantes
        </h1>
        <p className="font-cursive text-6xl text-gray-800 lowercase relative z-10">
          de {MONTHS[month]}
        </p>
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-100 -z-10"></div>
      </header>

      {/* Main Content Area - Alinhada a 145mm para mais destaque */}
      <div className="w-[145mm] flex flex-col items-center">
        {/* Calendar Section */}
        <section className="w-full mb-10">
          <CalendarGrid 
            month={month} 
            year={year} 
            birthdays={birthdays} 
          />
        </section>

        {/* List Section */}
        <section className="w-full flex-grow overflow-hidden mb-8">
          <BirthdayTable birthdays={birthdays} month={month} />
        </section>
      </div>

      {/* Footer Section - Logo Restaurada */}
      <footer className="mt-auto pt-8 w-full flex flex-col items-center gap-4">
        <div className="w-full h-[1px]" style={{ backgroundColor: COLORS.secondaryBg }}></div>
        <img 
          src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
          alt="Logo Missão Vida" 
          className="h-12 object-contain"
        />
      </footer>
    </div>
  );
};

export default PrintableArea;