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
            background: "linear-gradient(45deg, #b2f7ef 0%, #a0c4ff 60%, #e0f7ef 100%)",
            borderRadius: "22px 22px 0 0",
            boxShadow: "0 4px 24px 0 rgba(0,139,90,0.10)",
            padding: "32px 0 22px 0",
            borderBottom: `6px solid ${COLORS.primary}`,
            marginTop: "-18px",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Efeito de brilho sutil */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 100%)",
              pointerEvents: "none",
              borderRadius: "22px 22px 0 0",
              zIndex: 1,
            }}
          />
          <div className="flex items-center gap-3 mb-2 relative z-10">
            <Balloon size={44} color={COLORS.primary} strokeWidth={2.2} className="opacity-90 drop-shadow" />
            <h1
              className="font-sans font-extrabold tracking-widest uppercase text-[2.3rem] sm:text-[2.7rem] text-[#04724b] drop-shadow"
              style={{
                letterSpacing: "0.13em",
                fontFamily: "'Cairo Play', 'Inter', sans-serif",
                textShadow: "0 2px 12px #b2f7ef",
              }}
            >
              Aniversariantes
            </h1>
          </div>
          <span
            className="block text-[2.9rem] sm:text-[3.4rem] font-cursive text-[#03c17e] font-bold leading-none mb-1 relative z-10"
            style={{
              fontFamily: "'Dancing Script', cursive",
              textShadow: "0 2px 12px #a0c4ff",
              letterSpacing: "0.04em",
            }}
          >
            de {MONTHS[month]}
          </span>
          <span
            className="block text-[1.1rem] text-gray-600 font-medium tracking-wide mt-1 relative z-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.04em",
              textShadow: "0 1px 4px #e0f7ef",
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