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
      {/* Header Section - Adicionado mb-6 para mais respiro */}
      <header className="flex flex-col items-center mb-6 text-center w-full">
        <h1 
          className="text-3xl font-[900] uppercase tracking-[0.2em] mb-[-10px]"
          style={{ color: '#4a8d7a' }}
        >
          Aniversariantes
        </h1>
        <p className="font-cursive text-5xl text-black lowercase">
          de {MONTHS[month]}
        </p>
      </header>

      {/* Calendar Section - mb-8 para separar bem da lista */}
      <section className="w-[125mm] mb-8 mx-auto">
        <CalendarGrid 
          month={month} 
          year={year} 
          birthdays={birthdays} 
        />
      </section>

      {/* List Section - flex-grow ocupa o espaço central de forma equilibrada */}
      <section className="w-full flex-grow overflow-hidden px-2 mb-6">
        <BirthdayTable birthdays={birthdays} month={month} />
      </section>

      {/* Footer Section - Aumentado o pt (padding top) para dar distância da margem inferior */}
      <footer className="mt-auto pt-6 border-t border-gray-100 w-full flex justify-center">
        <img 
          src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
          alt="Logo Missão Vida" 
          className="h-10 object-contain opacity-90"
        />
      </footer>
    </div>
  );
};

export default PrintableArea;