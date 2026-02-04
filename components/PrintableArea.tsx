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
  // Calcula o número do mês (1 a 12) e formata com zero à esquerda
  const monthNumber = String(month + 1).padStart(2, '0');
  const dynamicBackgroundPath = `/background-${monthNumber}.jpg`;

  return (
    <div
      className="a4-container a4-preview"
      id="printable-content"
      style={{
        position: "relative",
        // Usa o caminho dinâmico da imagem
        backgroundImage: `url('${dynamicBackgroundPath}')`,
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
      {/* WatermarkBalloons removido, pois o background já contém elementos gráficos */}
      
      <div
        className="w-full flex flex-col items-center relative z-10"
        style={{
          height: "100%",
          padding: "0 0",
        }}
      >
        {/* Bloco 1 (Calendário) - Ajustando a margem superior para o novo design do background */}
        <section className="w-[65%] mb-8 mt-[100mm]">
          <CalendarGrid
            month={month}
            year={year}
            birthdays={birthdays}
          />
        </section>

        {/* Bloco 2 (Lista) - Largura de 65% centralizada */}
        <section className="w-[65%]">
          <BirthdayTable birthdays={birthdays} month={month} />
        </section>
      </div>
    </div>
  );
};

export default PrintableArea;