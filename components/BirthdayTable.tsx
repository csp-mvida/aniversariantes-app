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
    <div className="w-full flex flex-col gap-y-0 pb-10">
      {/* Cabeçalho das colunas */}
      <div className="grid grid-cols-[75px_1fr_170px] items-center pb-1 mb-1 border-b border-gray-200">
        <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider text-left">
          Data
        </span>
        <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider text-left pl-2">
          Aniversariantes
        </span>
        <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider text-left pl-4">
          Núcleo/Departamento
        </span>
      </div>
      
      {birthdays.map((person, idx) => (
        <div 
          key={`${person.day}-${person.name}-${idx}`}
          className="grid grid-cols-[75px_1fr_170px] items-center py-1" /* Ajustado de py-0.5 para py-1 */
          style={{ 
            borderBottom: '1px dotted #dbdbdb',
          }}
        >
          <span className="flex items-center gap-1.5">
            <Cake size={16} color={COLORS.primary} className="opacity-80" />
            <span className="font-black text-[14px]" style={{ color: COLORS.primary }}>
              {person.day.toString().padStart(2, '0')}/{formatMonth}
            </span>
          </span>
          
          <span className="font-bold text-[14px] text-gray-900 tracking-tight pl-2 whitespace-nowrap overflow-hidden text-ellipsis">
            {capitalizeName(person.name)}
          </span>
          
          <span className="text-[10px] text-gray-400 font-medium italic uppercase pl-4 truncate">
            {person.department}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BirthdayTable;