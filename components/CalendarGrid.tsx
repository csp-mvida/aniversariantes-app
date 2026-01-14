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
  
  // Estilo comum para as células pontilhadas
  const cellStyle = "aspect-[1.2/1] border-dotted border-gray-400 border-[1px] flex items-center justify-center";
  
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(
      <div key={`pad-start-${i}`} className={`${cellStyle} bg-[#efefef]`} />
    );
  }
  
  for (let d = 1; d <= daysInMonth; d++) {
    const hasBirthday = birthdayDays.has(d);
    days.push(
      <div 
        key={`day-${d}`} 
        className={cellStyle}
        style={{ 
          backgroundColor: hasBirthday ? COLORS.detail : 'transparent',
          borderColor: hasBirthday ? COLORS.detail : '#9ca3af'
        }}
      >
        <span 
          className="font-bold"
          style={{ 
            fontSize: hasBirthday ? '14px' : '10px',
            color: hasBirthday ? COLORS.white : 'black'
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
      <div key={`pad-end-${i}`} className={`${cellStyle} bg-[#efefef]`} />
    );
  }
  
  return (
    <div className="w-full">
      {/* Cabeçalho dos dias da semana - Afastado do calendário */}
      <div className="grid grid-cols-7 mb-2">
        {customWeekdays.map(day => (
          <div 
            key={day} 
            className="text-center py-2 font-black text-[12px] text-white rounded-sm"
            style={{ backgroundColor: COLORS.primary }}
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Grade de dias com linhas pontilhadas */}
      <div className="grid grid-cols-7 border-t border-l border-dotted border-gray-400">
        {days}
      </div>
    </div>
  );
};

export default CalendarGrid;