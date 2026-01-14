import React from 'react';
import { BirthdayEntry } from '../types';
import { WEEKDAYS } from '../constants';

interface CalendarGridProps {
  month: number;
  year: number;
  birthdays: BirthdayEntry[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ month, year, birthdays }) => {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const birthdayDays = new Set(birthdays.map(b => b.day));
  
  // Custom weekdays to match the image
  const customWeekdays = ['DOM', 'SEG', 'TER', 'QUAR', 'QUIN', 'SEX', 'SÁB'];
  
  const days = [];
  
  // Padding for empty days at start (Grey background)
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(
      <div key={`pad-start-${i}`} className="aspect-[1.5/1] border-[1px] border-dotted border-black bg-[#d1d5db]" />
    );
  }
  
  // Actual days
  for (let d = 1; d <= daysInMonth; d++) {
    const hasBirthday = birthdayDays.has(d);
    
    days.push(
      <div 
        key={`day-${d}`} 
        className="aspect-[1.5/1] flex items-center justify-center border-[1px] border-dotted border-black"
        style={{ 
          backgroundColor: hasBirthday ? '#70ac97' : 'transparent',
        }}
      >
        <span className="text-sm font-bold text-black">
          {d}
        </span>
      </div>
    );
  }

  // Padding for empty days at end to complete the grid (Grey background)
  const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
  for (let i = (firstDayOfMonth + daysInMonth); i < totalCells; i++) {
    days.push(
      <div key={`pad-end-${i}`} className="aspect-[1.5/1] border-[1px] border-dotted border-black bg-[#d1d5db]" />
    );
  }
  
  return (
    <div className="w-full border-[1px] border-dotted border-black">
      {/* Weekdays Header */}
      <div className="grid grid-cols-7">
        {customWeekdays.map(day => (
          <div 
            key={day} 
            className="text-center py-2 font-black text-[11px] border-[1px] border-dotted border-black bg-[#d1d5db] text-black"
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-7">
        {days}
      </div>
    </div>
  );
};

export default CalendarGrid;