"use client";

import React from 'react';
import { BirthdayEntry } from '../types';
import { MONTHS, COLORS } from '../constants';
import CalendarGrid from './CalendarGrid';
import BirthdayTable from './BirthdayTable';
import WatermarkBalloons from './WatermarkBalloons';

interface PrintableAreaProps {
  birthdays: BirthdayEntry[];
  month: number;
  year: number;
}

const FOOTER_HEIGHT_MM = 38;

const PrintableArea: React.FC<PrintableAreaProps> = ({ birthdays, month, year }) => {
  return (
    <div 
      className="a4-container a4-preview flex flex-col items-center relative overflow-hidden" 
      id="printable-content"
      style={{ position: "relative" }}
    >
      {/* Marca d'água de balões */}
      <WatermarkBalloons />

      {/* Conteúdo principal, reservando espaço para o footer */}
      <div
        className="w-[145mm] flex flex-col items-center relative z-10"
        style={{
          minHeight: `calc(100% - ${FOOTER_HEIGHT_MM}mm)`,
          maxHeight: `calc(100% - ${FOOTER_HEIGHT_MM}mm)`,
        }}
      >
        {/* Bloco 1: Header */}
        <header className="flex flex-col items-center text-center w-full relative -mt-10 mb-4">
          <div className="w-16 h-1 mb-3" style={{ backgroundColor: COLORS.primary }}></div>
          <h1 
            className="text-4xl font-cairo-play font-[800] tracking-[0.1em] mb-[-12px]"
            style={{ color: COLORS.primary }}
          >
            Aniversariantes
          </h1>
          <p className="font-cursive text-6xl text-gray-800 lowercase relative z-10">
            de {MONTHS[month]}
          </p>
        </header>

        {/* Bloco 2: Calendar Section */}
        <section className="w-full mb-3">
          <CalendarGrid 
            month={month} 
            year={year} 
            birthdays={birthdays} 
          />
        </section>

        {/* Bloco 3: List Section */}
        <section className="w-full">
          <BirthdayTable birthdays={birthdays} month={month} />
        </section>
      </div>

      {/* Bloco 4: Footer verde, ocupa toda a largura inferior da página */}
      <footer
        className="flex items-center justify-center print-footer-safe"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "210mm",
          height: `${FOOTER_HEIGHT_MM}mm`,
          backgroundColor: COLORS.primary,
          borderRadius: "0 0 12px 12px",
          zIndex: 20,
          display: "flex",
        }}
      >
        <img
          src="https://mvida.org.br/wp-content/uploads/2023/05/Logo-Missao-Vida-2020.png"
          alt="Logo Missão Vida"
          className="h-12 object-contain print:block"
          style={{
            filter: "brightness(0) invert(1)",
            margin: "0 auto",
            display: "block",
            maxWidth: "80mm",
            maxHeight: "70%",
          }}
        />
      </footer>
    </div>
  );
};

export default PrintableArea;