import React from 'react';
import { BirthdayEntry } from '../types';
import { COLORS, WEEKDAYS } from '../constants';

interface CalendarGridProps {
  month: number;
  year: number;
  birthdays: BirthdayEntry[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ month, year, birthdays }) => {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const birthdayDays = new Set(birthdays.map(b => b.day));
  
  const days = [];
  
  // Padding for empty days
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(
      <div key={`pad-${i}`} className="aspect-square border-[0.5px] border-gray-200" />
    );
  }
  
  // Actual days
  for (let d = 1; d <= daysInMonth; d++) {
    const hasBirthday = birthdayDays.has(d);
    
    days.push(
      <div 
        key={`day-${d}`} 
        className="aspect-square flex items-center justify-center border-[0.5px] border-gray-200"
        style={{ 
          backgroundColor: hasBirthday ? COLORS.primary : 'transparent',
          color: hasBirthday ? COLORS.white : '#4b5563'
        }}
      >
        <span className={`text-[11px] ${hasBirthday ? 'font-black' : 'font-medium'}`}>
          {d}
        </span>
      </div>
    );
  }
  
  return (
    <div className="w-full">
      {/* Weekdays Header */}
      <div className="grid grid-cols-7 mb-3">
        {WEEKDAYS.map(day => (
          <div 
            key={day} 
            className="text-center py-1 font-bold text-[9px] tracking-widest"
            style={{ color: COLORS.primary }}
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-7 border-[0.5px] border-gray-200 shadow-sm">
        {days}
      </div>
    </div>
  );
};

export default CalendarGrid;