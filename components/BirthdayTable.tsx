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
    <div className="w-full flex flex-col items-start gap-1 px-4">
      {birthdays.map((person, idx) => (
        <div 
          key={`${person.day}-${person.name}-${idx}`}
          className="w-full text-left"
        >
          <span className="text-[12px] text-gray-800 leading-tight">
            <span className="font-black">
              {person.day.toString().padStart(2, '0')}/{formatMonth}
            </span>
            {" "}
            <span className="font-bold uppercase tracking-tight">
              {person.name} - {person.department}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default BirthdayTable;