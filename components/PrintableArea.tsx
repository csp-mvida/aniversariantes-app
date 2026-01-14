"use client";

import React from 'react';
import { BirthdayEntry } from '../types';
import { MONTHS, COLORS } from '../constants';
import CalendarGrid from './CalendarGrid';
import BirthdayTable from './BirthdayTable';
import WatermarkBalloons from './WatermarkBalloons';
import { Balloon } from 'lucide-react';

interface PrintableAreaProps {
  birthdays: BirthdayEntry[];
  month: number;
  year: number;
}

const FOOTER_HEIGHT_MM = 19;

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
        {/* Header Premium */}
        <header
          className="w-full flex flex-col items-center justify-center relative mb-4"
          style={{
            background: "linear-gradient(90deg, #e0f7ef 0%, #f8fafc 100%)",
            borderRadius: "18px",
            boxShadow: "0 2px 16px 0 rgba(0,139,90,0.07)",
            padding: "28px 0 18px 0",
            marginTop: "-18px",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Balloon size={38} color={COLORS.primary} strokeWidth={2.2} className="opacity-80 drop-shadow" />
            <h1
              className="font-sans font-extrabold tracking-widest uppercase text-[2.1rem] sm:text-[2.5rem] text-[#04724b] drop-shadow"
              style={{
                letterSpacing: "0.13em",
                fontFamily: "'Cairo Play', 'Inter', sans-serif",
                textShadow: "0 2px 8px #e0f7ef",
              }}
            >
              Aniversariantes
            </h1>
          </div>
          <span
            className="block text-[2.7rem] sm:text-[3.2rem] font-cursive text-[#03c17e] font-bold leading-none mb-1"
            style={{
              fontFamily: "'Dancing Script', cursive",
              textShadow: "0 2px 8px #e0f7ef",
              letterSpacing: "0.04em",
            }}
          >
            de {MONTHS[month]}
          </span>
          <span
            className="block text-[1.05rem] text-gray-500 font-medium tracking-wide mt-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            Lista de aniversariantes {year}
          </span>
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
          className="h-8 object-contain print:block"
          style={{
            filter: "brightness(0) invert(1)",
            margin: "0 auto",
            display: "block",
            maxWidth: "60mm",
            maxHeight: "80%",
          }}
        />
      </footer>
    </div>
  );
};

export default PrintableArea;