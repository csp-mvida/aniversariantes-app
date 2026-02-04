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
  
  // Estilo base: bordas apenas à direita e abaixo para evitar sobreposição
  const cellBaseStyle = "aspect-[1.2/1] border-r border-b border-dotted border-gray-400 flex items-center justify-center box-border";
  
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(
      <div key={`pad-start-${i}`} className={`${cellBaseStyle} bg-[#f9fafb]`} />
    );
  }
  
  for (let d = 1; d <= daysInMonth; d++) {
    const hasBirthday = birthdayDays.has(d);
    
    days.push(
      <div 
        key={`day-${d}`} 
        className={cellBaseStyle}
        style={{ 
          backgroundColor: hasBirthday ? COLORS.detail : 'transparent',
        }}
      >
        <div className={`w-full h-full flex items-center justify-center ${hasBirthday ? 'border-2 border-white border-solid' : ''}`}>
          <span 
            className={`text-[18px] ${hasBirthday ? 'text-white' : 'text-black'} font-normal`}
          >
            {d}
          </span>
        </div>
      </div>
    );
  }

  const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
  for (let i = (firstDayOfMonth + daysInMonth); i < totalCells; i++) {
    days.push(
      <div key={`pad-end-${i}`} className={`${cellBaseStyle} bg-[#f9fafb]`} />
    );
  }
  
  return (
    <div className="w-full">
      {/* Cabeçalho dos dias da semana - Reduzido de py-2.5 para py-1.5 */}
      <div className="grid grid-cols-7 gap-px mb-2 bg-gray-200 border border-gray-200">
        {customWeekdays.map(day => (
          <div 
            key={day} 
            className="text-center py-1.5 font-bold text-[13px] text-white tracking-[0.15em] uppercase"
            style={{ 
              backgroundColor: COLORS.dark,
            }}
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Grade de dias - Container fornece borda superior e esquerda */}
      <div className="grid grid-cols-7 border-t border-l border-dotted border-gray-400">
        {days}
      </div>
    </div>
  );
};

export default CalendarGrid;