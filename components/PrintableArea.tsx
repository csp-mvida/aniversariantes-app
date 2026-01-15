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
      style={{ 
        position: "relative",
        backgroundImage: "url('/background-aniversario.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "210mm",
        height: "297mm",
        minWidth: "210mm",
        minHeight: "297mm",
        maxWidth: "210mm",
        maxHeight: "297mm",
      }}
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
        {/* Header Premium Linha Única */}
        <header
          className="w-full flex items-center justify-between gap-2 mb-4"
          style={{
            background: COLORS.white,
            borderRadius: "18px 18px 0 0",
            boxShadow: "0 4px 18px 0 rgba(4,114,75,0.10)",
            padding: "18px 32px 18px 28px",
            borderBottom: `6px solid ${COLORS.primary}`,
            marginTop: "-18px",
            minHeight: "80px",
          }}
        >
          {/* Ícone e Título */}
          <div className="flex items-center gap-3 min-w-0">
            <Balloon size={36} color={COLORS.primary} strokeWidth={2.2} className="opacity-90 drop-shadow" />
            <span
              className="font-extrabold uppercase tracking-widest text-[1.45rem] sm:text-[1.7rem] text-[#04724b] truncate"
              style={{
                fontFamily: "'Cairo Play', 'Inter', sans-serif",
                letterSpacing: "0.13em",
                textShadow: "0 2px 8px #e0f7ef",
                whiteSpace: "nowrap",
              }}
            >
              Aniversariantes
            </span>
          </div>
          {/* Mês centralizado */}
          <span
            className="font-cursive text-[#03c17e] font-bold text-[2.1rem] sm:text-[2.5rem] leading-none mx-4"
            style={{
              fontFamily: "'Dancing Script', cursive",
              textShadow: "0 2px 8px #a0c4ff",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            de {MONTHS[month]}
          </span>
          {/* Subtítulo à direita */}
          <span
            className="text-[1.05rem] text-gray-600 font-medium tracking-wide text-right min-w-0 truncate"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.04em",
              textShadow: "0 1px 4px #e0f7ef",
              whiteSpace: "nowrap",
            }}
          >
            {year}
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