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
      <Cake size={20} color="#fff" className="flex-shrink-0" />
      <span
        className="text-white text-sm md:text-base font-medium tracking-normal select-none font-['Roboto',sans-serif]"
        style={{ textTransform: 'none' }}
      >
        Gerador de <span className="lowercase">de</span> Calendário
        <span
          className="ml-1 font-extrabold"
          style={{ color: COLORS.detail }}
        >
          /2026
        </span>
      </span>
    </div>
  </div>
);

export default TopBar;