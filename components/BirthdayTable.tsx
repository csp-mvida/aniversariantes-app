import React from 'react';
import { BirthdayEntry } from '../types';
import { COLORS } from '../constants';
import { Cake } from 'lucide-react';

interface BirthdayTableProps {
  birthdays: BirthdayEntry[];
  month: number;
}

// Função para capitalizar apenas as iniciais dos nomes próprios
function capitalizeName(name: string) {
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const BirthdayTable: React.FC<BirthdayTableProps> = ({ birthdays, month }) => {
  if (birthdays.length === 0) {
    return null;
  }

  const formatMonth = (month + 1).toString().padStart(2, '0');

  return (
    <div className="w-full flex flex-col gap-y-0.5">
      {/* Cabeçalho das colunas */}
      <div className="w-full flex items-baseline pb-1 mb-1">
        <span className="w-20 flex-shrink-0 text-[11px] text-gray-500 font-semibold uppercase tracking-wide">
          Data
        </span>
        <span className="flex-grow text-[11px] text-gray-500 font-semibold uppercase tracking-wide">
          Aniversariantes
        </span>
        <span className="ml-2 text-[11px] text-gray-500 font-semibold uppercase tracking-wide">
          Núcleo/Departamento
        </span>
      </div>
      {birthdays.map((person, idx) => (
        <div 
          key={`${person.day}-${person.name}-${idx}`}
          className="w-full flex items-baseline py-0.5"
          style={{ 
            borderBottom: '1px dotted #bdbdbd',
          }}
        >
          <span className="flex items-center gap-1 w-20 flex-shrink-0">
            <Cake size={16} color={COLORS.primary} className="opacity-80" />
            <span className="font-black text-[13px]" style={{ color: COLORS.primary }}>
              {person.day.toString().padStart(2, '0')}/{formatMonth}
            </span>
          </span>
          
          <span className="font-medium text-[17px] text-gray-900 tracking-tight flex-grow">
            {capitalizeName(person.name)}
          </span>
          
          <span className="text-[10px] text-gray-400 font-medium italic uppercase ml-2">
            - {person.department}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BirthdayTable;