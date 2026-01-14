import React from 'react';
import { Balloon, Cake, PartyPopper } from 'lucide-react';
import { MONTHS, COLORS } from '../constants';

interface BirthdayHeaderProps {
  month: number;
  year: number;
}

const iconSize = 38;

const BirthdayHeader: React.FC<BirthdayHeaderProps> = ({ month, year }) => (
  <header className="w-full flex flex-col items-center text-center relative mb-6 mt-2">
    {/* Linha de balões e confetes */}
    <div className="flex items-center justify-center gap-2 mb-2">
      <Balloon size={iconSize} color={COLORS.detail} className="rotate-[-10deg]" />
      <PartyPopper size={iconSize} color={COLORS.primary} className="rotate-[8deg]" />
      <Cake size={iconSize} color={COLORS.dark} className="rotate-[-6deg]" />
      <PartyPopper size={iconSize} color={COLORS.primary} className="rotate-[-8deg]" />
      <Balloon size={iconSize} color={COLORS.detail} className="rotate-[10deg]" />
    </div>
    {/* Título principal */}
    <h1 
      className="font-cairo-play text-4xl sm:text-5xl font-extrabold tracking-wide mb-[-8px]"
      style={{ color: COLORS.primary, letterSpacing: '0.04em' }}
    >
      Aniversariantes do Mês
    </h1>
    {/* Mês e ano com fonte cursiva */}
    <div className="flex flex-col items-center mt-1">
      <span 
        className="font-cursive text-4xl sm:text-5xl text-gray-700"
        style={{ lineHeight: 1.1 }}
      >
        {MONTHS[month]}
      </span>
      <span className="text-lg text-gray-400 font-semibold mt-[-2px]">
        {year}
      </span>
    </div>
    {/* Linha colorida decorativa */}
    <div 
      className="w-24 h-2 rounded-full mt-3"
      style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.detail}, ${COLORS.dark})` }}
    />
  </header>
);

export default BirthdayHeader;