import React from 'react';
import { BirthdayEntry } from '../types';
import { COLORS } from '../constants';

interface BirthdayTableProps {
  birthdays: BirthdayEntry[];
}

const BirthdayTable: React.FC<BirthdayTableProps> = ({ birthdays }) => {
  if (birthdays.length === 0) {
    return (
      <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-2xl">
        <p className="text-gray-300 font-medium">Aguardando lista de aniversariantes...</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Column Headers */}
      <div className="flex px-5 mb-1">
        <span className="w-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Dia</span>
        <span className="flex-grow text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Nome</span>
        <span className="w-32 text-right text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Setor</span>
      </div>

      {/* Rows */}
      {birthdays.map((person, idx) => (
        <div 
          key={`${person.day}-${person.name}-${idx}`}
          className="flex items-center px-5 py-3.5 rounded-xl"
          style={{ backgroundColor: COLORS.secondaryBg }}
        >
          <div className="w-12">
            <span className="text-base font-black" style={{ color: COLORS.primary }}>
              {person.day.toString().padStart(2, '0')}
            </span>
          </div>
          <div className="flex-grow">
            <span className="text-[13px] font-bold text-gray-700">
              {person.name.toUpperCase()}
            </span>
          </div>
          <div className="w-48 text-right">
            <span className="text-[10px] font-black tracking-[0.05em] uppercase text-gray-500">
              {person.department}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BirthdayTable;