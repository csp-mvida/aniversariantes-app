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
      <div key={`pad-${i}`} className="aspect-square border-[0.5px] border-gray-100" />
    );
  }
  
  // Actual days
  for (let d = 1; d <= daysInMonth; d++) {
    const hasBirthday = birthdayDays.has(d);
    
    days.push(
      <div 
        key={`day-${d}`} 
        className="aspect-square flex items-center justify-center border-[0.5px] border-gray-100 relative"
        style={{ 
          backgroundColor: hasBirthday ? COLORS.primary : 'transparent',
          color: hasBirthday ? COLORS.white : '#4b5563'
        }}
      >
        <span className={`text-[10px] ${hasBirthday ? 'font-black scale-110' : 'font-medium'}`}>
          {d}
        </span>
      </div>
    );
  }
  
  return (
    <div className="w-full">
      {/* Weekdays Header */}
      <div className="grid grid-cols-7 mb-1">
        {WEEKDAYS.map(day => (
          <div 
            key={day} 
            className="text-center py-1 font-bold text-[8px] tracking-wider"
            style={{ color: COLORS.dark }}
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-7 border-[0.5px] border-gray-100 shadow-sm rounded-sm overflow-hidden">
        {days}
      </div>
    </div>
  );
};

export default CalendarGrid;