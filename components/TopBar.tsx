import React from 'react';
import { Cake } from 'lucide-react';
import { COLORS } from '../constants';

const TopBar: React.FC = () => (
  <div
    className="w-full flex justify-center items-center"
    style={{
      backgroundColor: COLORS.primary,
      minHeight: 48,
      height: 48,
      padding: '0 1rem',
    }}
  >
    <div className="flex items-center gap-2">
      <Cake size={26} color="#fff" className="flex-shrink-0" />
      <span
        className="text-white text-lg md:text-xl font-bold tracking-wide select-none"
        style={{
          fontFamily: "'Cairo Play', sans-serif",
        }}
      >
        Gerador de Calendário
      </span>
    </div>
  </div>
);

export default TopBar;