"use client";

import React from 'react';
import { BirthdayEntry } from '../types';
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
      <div
        className="w-full flex flex-col items-center relative z-10"
        style={{
          height: "100%",
          padding: "0 0",
        }}
      >
        {/* Grade do calendário - Largura reduzida para 75% e centralizada */}
        <section className="w-[75%] mb-3 mt-[60mm]">
          <CalendarGrid
            month={month}
            year={year}
            birthdays={birthdays}
          />
        </section>

        {/* Lista de aniversariantes - Largura reduzida para 75% e centralizada */}
        <section className="w-[75%]">
          <BirthdayTable birthdays={birthdays} month={month} />
        </section>
      </div>
    </div>
  );
};

export default PrintableArea;