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
      className="a4-container bg-white w-[210mm] h-[297mm] flex flex-col items-center px-[25mm] py-[20mm]"
      id="printable-content"
      style={{ boxSizing: 'border-box', overflow: 'hidden' }}
    >
      {/* Header Section */}
      <header className="flex flex-col items-center mb-12 text-center">
        <h1 
          className="text-6xl font-[900] uppercase tracking-wider mb-[-15px]"
          style={{ color: '#4a8d7a' }} // Specific green from the image
        >
          Aniversariantes
        </h1>
        <p className="font-cursive text-7xl text-black lowercase">
          de {MONTHS[month]}
        </p>
      </header>

      {/* Calendar Section */}
      <section className="w-full mb-12">
        <CalendarGrid 
          month={month} 
          year={year} 
          birthdays={birthdays} 
        />
      </section>

      {/* List Section */}
      <section className="w-full flex-grow overflow-hidden text-center">
        <BirthdayTable birthdays={birthdays} month={month} />
      </section>

      {/* Footer Section */}
      <footer className="mt-auto py-8">
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