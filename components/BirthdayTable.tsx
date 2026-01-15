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
    <div className="w-full flex flex-col gap-y-0">
      {/* Cabeçalho das colunas - Ajustada a largura da primeira coluna e o padding da segunda */}
      <div className="grid grid-cols-[75px_1fr_170px] items-center pb-0.5 mb-0.5">
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide text-left">
          Data
        </span>
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide text-left pl-2">
          Aniversariantes
        </span>
        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wide text-left pl-4">
          Núcleo/Departamento
        </span>
      </div>
      {birthdays.map((person, idx) => (
        <div 
          key={`${person.day}-${person.name}-${idx}`}
          className="grid grid-cols-[75px_1fr_170px] items-center py-0"
          style={{ 
            borderBottom: '1px dotted #dbdbdb',
          }}
        >
          <span className="flex items-center gap-1.5 py-0.5">
            <Cake size={18} color={COLORS.primary} className="opacity-80" />
            <span className="font-black text-[14px]" style={{ color: COLORS.primary }}>
              {person.day.toString().padStart(2, '0')}/{formatMonth}
            </span>
          </span>
          
          <span className="font-bold text-[15.5px] text-gray-900 tracking-tight pl-2 whitespace-nowrap overflow-hidden text-ellipsis">
            {capitalizeName(person.name)}
          </span>
          
          <span className="text-[10px] text-gray-400 font-medium italic uppercase pl-4">
            {person.department}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BirthdayTable;