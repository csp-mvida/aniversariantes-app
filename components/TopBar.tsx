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
      <Cake size={22} color="#fff" className="flex-shrink-0" />
      <span
        className="text-white text-base md:text-lg font-medium tracking-wide select-none uppercase font-['Roboto',sans-serif]"
        style={{ letterSpacing: '0.08em' }}
      >
        Gerador de Calendário
      </span>
    </div>
  </div>
);

export default TopBar;