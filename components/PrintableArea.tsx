"use client";

import React from 'react';
import { BirthdayEntry } from '../types';
import CalendarGrid from './CalendarGrid';
import BirthdayTable from './BirthdayTable';
import { MONTHS } from '../constants';

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
      style={{
        position: "relative",
        backgroundImage: "url('/background-aniversario.jpg')",
        backgroundSize: "210mm 297mm",
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        width: "210mm",
        height: "297mm",
        minWidth: "210mm",
        minHeight: "297mm",
        maxWidth: "210mm",
        maxHeight: "297mm",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        WebkitPrintColorAdjust: "exact",
      }}
    >
      {/* Overlay para o Mês/Ano sobre a tarja do background */}
      <div 
        className="absolute top-[118px] left-0 w-full text-center no-print"
        style={{ pointerEvents: 'none' }}
      >
        <span className="text-white font-bold text-[22px] lowercase tracking-widest">
          {MONTHS[month]} / {year}
        </span>
      </div>

      <div
        className="w-full flex flex-col items-center relative z-10"
        style={{
          height: "100%",
          padding: "0 0",
        }}
      >
        {/* Grade do calendário - Alinhada para começar após o cabeçalho da imagem */}
        <section className="w-full mb-3 mt-[60mm] px-[18mm]">
          <CalendarGrid
            month={month}
            year={year}
            birthdays={birthdays}
          />
        </section>

        {/* Lista de aniversariantes */}
        <section className="w-full px-[18mm]">
          <BirthdayTable birthdays={birthdays} month={month} />
        </section>
      </div>
    </div>
  );
};

export default PrintableArea;