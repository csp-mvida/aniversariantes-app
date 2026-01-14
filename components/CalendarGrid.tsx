import React from 'react';
import { BirthdayEntry } from '../types';
import { COLORS } from '../constants';

interface CalendarGridProps {
  month: number;
  year: number;
  birthdays: BirthdayEntry[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ month, year, birthdays }) => {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const birthdayDays = new Set(birthdays.map(b => b.day));
  
  const customWeekdays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  
  const days = [];
  
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(
      <div key={`pad-start-${i}`} className="aspect-[1.2/1] border-[1px] border-solid border-[#008b5a] bg-[#efefef]" />
    );
  }
  
  for (let d = 1; d <= daysInMonth; d++) {
    const hasBirthday = birthdayDays.has(d);
    days.push(
      <div 
        key={`day-${d}`} 
        className="aspect-[1.2/1] flex items-center justify-center border-[1px] border-solid border-[#008b5a]"
        style={{ 
          backgroundColor: hasBirthday ? COLORS.detail : 'transparent',
        }}
      >
        <span 
          className="font-bold text-black"
          style={{ 
            fontSize: hasBirthday ? '20px' : '10px' 
          }}
        >
          {d}
        </span>
      </div>
    );
  }

  const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
  for (let i = (firstDayOfMonth + daysInMonth); i < totalCells; i++) {
    days.push(
      <div key={`pad-end-${i}`} className="aspect-[1.2/1] border-[1px] border-solid border-[#008b5a] bg-[#efefef]" />
    );
  }
  
  return (
    <div className="w-full border-[1px] border-solid border-[#008b5a]">
      <div className="grid grid-cols-7">
        {customWeekdays.map(day => (
          <div 
            key={day} 
            className="text-center py-1.5 font-black text-[9px] border-[1px] border-solid border-[#008b5a] bg-[#008b5a] text-white"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {days}
      </div>
    </div>
  );
};

export default CalendarGrid;