import React from 'react';
import { BirthdayEntry } from '../types';
import { COLORS } from '../constants';

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
    <div className="w-full flex flex-col gap-y-2">
      {birthdays.map((person, idx) => (
        <div 
          key={`${person.day}-${person.name}-${idx}`}
          className="w-full flex items-baseline border-b border-[#efefef] pb-1"
        >
          <span className="font-black text-[14px] w-14 flex-shrink-0" style={{ color: COLORS.primary }}>
            {person.day.toString().padStart(2, '0')}/{formatMonth}
          </span>
          
          <span className="font-extrabold text-[15px] text-gray-900 uppercase tracking-tight flex-grow">
            {person.name}
          </span>
          
          <span className="text-[11px] text-gray-500 font-medium italic uppercase ml-2">
            - {person.department}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BirthdayTable;