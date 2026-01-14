import React from 'react';
import { BirthdayEntry } from '../types';
import { COLORS } from '../constants';

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
    <div className="w-full flex flex-col gap-y-1">
      {birthdays.map((person, idx) => (
        <div 
          key={`${person.day}-${person.name}-${idx}`}
          className="w-full flex items-baseline pb-1"
          style={{ 
            borderBottom: '2px dotted #6b7280',
          }}
        >
          <span className="font-black text-[13px] w-14 flex-shrink-0" style={{ color: COLORS.primary }}>
            {person.day.toString().padStart(2, '0')}/{formatMonth}
          </span>
          
          <span className="font-medium text-[14px] text-gray-900 tracking-tight flex-grow">
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