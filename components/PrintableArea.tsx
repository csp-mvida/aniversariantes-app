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
      {/* Header Section - Margens bem reduzidas */}
      <header className="flex flex-col items-center mb-2 text-center w-full">
        <h1 
          className="text-3xl font-[900] uppercase tracking-[0.2em] mb-[-12px]"
          style={{ color: '#4a8d7a' }}
        >
          Aniversariantes
        </h1>
        <p className="font-cursive text-5xl text-black lowercase">
          de {MONTHS[month]}
        </p>
      </header>

      {/* Calendar Section - Reduzi a largura para garantir centralização e espaço */}
      <section className="w-[120mm] mb-4 mx-auto">
        <CalendarGrid 
          month={month} 
          year={year} 
          birthdays={birthdays} 
        />
      </section>

      {/* List Section - flex-grow garante que use apenas o espaço disponível */}
      <section className="w-full flex-grow overflow-hidden px-4 mb-2">
        <BirthdayTable birthdays={birthdays} month={month} />
      </section>

      {/* Footer Section - Compactado e fixado no fundo do container */}
      <footer className="mt-auto py-2 border-t border-gray-50 w-full flex justify-center">
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