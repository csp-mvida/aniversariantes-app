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
      {/* Header Section */}
      <header className="flex flex-col items-center mb-8 text-center w-full">
        <h1 
          className="text-4xl font-[900] uppercase tracking-widest mb-[-10px]"
          style={{ color: '#4a8d7a' }}
        >
          Aniversariantes
        </h1>
        <p className="font-cursive text-6xl text-black lowercase">
          de {MONTHS[month]}
        </p>
      </header>

      {/* Calendar Section - Reduzi a largura para 130mm (de 210mm totais) */}
      <section className="w-[130mm] mb-10">
        <CalendarGrid 
          month={month} 
          year={year} 
          birthdays={birthdays} 
        />
      </section>

      {/* List Section */}
      <section className="w-full flex-grow overflow-hidden">
        <BirthdayTable birthdays={birthdays} month={month} />
      </section>

      {/* Footer Section */}
      <footer className="mt-auto py-6">
        <img 
          src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png" 
          alt="Logo Missão Vida" 
          className="h-16 object-contain"
        />
      </footer>
    </div>
  );
};

export default PrintableArea;