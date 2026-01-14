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
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Header Section - Reduzi a margem inferior de mb-8 para mb-4 */}
      <header className="flex flex-col items-center mb-4 text-center w-full">
        <h1 
          className="text-3xl font-[900] uppercase tracking-widest mb-[-8px]"
          style={{ color: '#4a8d7a' }}
        >
          Aniversariantes
        </h1>
        <p className="font-cursive text-5xl text-black lowercase">
          de {MONTHS[month]}
        </p>
      </header>

      {/* Calendar Section - Reduzi a margem inferior de mb-10 para mb-6 */}
      <section className="w-[125mm] mb-6 mx-auto">
        <CalendarGrid 
          month={month} 
          year={year} 
          birthdays={birthdays} 
        />
      </section>

      {/* List Section - O flex-grow com overflow-hidden garante que a lista respeite o espaço restante */}
      <section className="w-full flex-grow overflow-hidden px-2">
        <BirthdayTable birthdays={birthdays} month={month} />
      </section>

      {/* Footer Section - Fixado no final com margem mínima */}
      <footer className="mt-4 pt-4 pb-2 border-t border-gray-100 w-full flex justify-center">
        <img 
          src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
          alt="Logo Missão Vida" 
          className="h-14 object-contain"
        />
      </footer>
    </div>
  );
};

export default PrintableArea;