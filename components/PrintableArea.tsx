
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
      className="a4-container bg-white w-[210mm] h-[297mm] py-6 px-8 shadow-2xl border border-gray-200 flex flex-col items-center overflow-hidden relative"
      id="printable-content"
    >
      {/* Professional Header */}
      <header className="relative mb-4 flex flex-col items-center w-[70%] shrink-0">
        {/* Decorative Top Bar */}
        <div className="w-full h-1.5 rounded-full mb-4" style={{ backgroundColor: COLORS.primary }}></div>
        
        <div className="flex flex-col items-center">
          <h1 
            className="text-3xl font-black uppercase tracking-tighter mb-2 text-center mt-2"
            style={{ color: COLORS.dark }}
          >
            Aniversariantes
          </h1>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.detail }}></div>
              <div className="h-[1px] w-8" style={{ backgroundColor: COLORS.detail }}></div>
            </div>
            
            <div 
              className="px-8 py-1 rounded-full border flex items-center justify-center bg-gray-50/50"
              style={{ borderColor: COLORS.detail }}
            >
              <p className="text-lg font-black uppercase tracking-widest" style={{ color: COLORS.dark }}>
                {MONTHS[month]} <span className="font-light opacity-60">|</span> {year}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-8" style={{ backgroundColor: COLORS.detail }}></div>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.detail }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Calendar Section */}
      <section className="mb-10 w-[70%] shrink-0">
        <CalendarGrid 
          month={month} 
          year={year} 
          birthdays={birthdays} 
        />
      </section>

      {/* List Section */}
      <section className="flex-grow w-[70%] overflow-hidden relative">
        <BirthdayTable birthdays={birthdays} />
      </section>

      {/* Footer Branding */}
      <footer className="mt-2 flex flex-col items-center shrink-0 w-[70%]">
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
