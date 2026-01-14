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
    <div className="w-full grid grid-cols-1 gap-y-0.5">
      {birthdays.map((person, idx) => (
        <div 
          key={`${person.day}-${person.name}-${idx}`}
          className="w-full text-left border-b border-gray-50 pb-0.5"
        >
          <p className="text-[11px] text-gray-800 leading-none py-0.5">
            <span className="font-black text-[#4a8d7a]">
              {person.day.toString().padStart(2, '0')}/{formatMonth}
            </span>
            {" "}
            <span className="font-bold uppercase tracking-tight">
              {person.name}
            </span>
            <span className="text-gray-400 font-medium ml-1 italic">
              - {person.department}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BirthdayTable;