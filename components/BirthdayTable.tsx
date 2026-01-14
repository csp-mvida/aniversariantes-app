import React from 'react';
import { BirthdayEntry } from '../types';

interface BirthdayTableProps {
  birthdays: BirthdayEntry[];
  month: number;
}

const BirthdayTable: React.FC<BirthdayTableProps> = ({ birthdays, month }) => {
  if (birthdays.length === 0) {
    return null;
  }

  const formatMonth = (month + 1).toString().padStart(2, '0');

  return (
    <div className="w-full flex flex-col gap-y-1.5">
      {birthdays.map((person, idx) => (
        <div 
          key={`${person.day}-${person.name}-${idx}`}
          className="w-full flex items-baseline border-b border-gray-100 pb-1"
        >
          <span className="font-black text-[13px] text-[#4a8d7a] w-14 flex-shrink-0">
            {person.day.toString().padStart(2, '0')}/{formatMonth}
          </span>
          
          <span className="font-extrabold text-[14px] text-gray-900 uppercase tracking-tight flex-grow">
            {person.name}
          </span>
          
          <span className="text-[11px] text-gray-400 font-medium italic uppercase ml-2">
            - {person.department}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BirthdayTable;