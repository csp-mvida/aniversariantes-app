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
  
  // Preenchimento inicial (dias vazios do mês anterior)
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(
      <div 
        key={`pad-${i}`} 
        className="aspect-square bg-gray-50/30 border border-gray-100 flex items-center justify-center"
      >
        <span className="text-xs text-gray-400">{/* Espaço em branco para dias que não pertencem ao mês */}</span>
      </div>
    );
  }
  
  // Dias reais do mês
  for (let d = 1; d <= daysInMonth; d++) {
    const hasBirthday = birthdayDays.has(d);
    
    days.push(
      <div 
        key={`day-${d}`} 
        className="aspect-square flex items-center justify-center border border-gray-100 relative transition-colors"
        style={{ 
          backgroundColor: hasBirthday ? COLORS.primary : 'transparent',
          color: hasBirthday ? COLORS.white : 'inherit' // Mantém a cor padrão se não tiver aniversariante
        }}
      >
        <span className={`font-bold ${hasBirthday ? 'text-base scale-110' : 'text-xs'}`}>
          {d}
        </span>
      </div>
    );
  }
  
  return (
    <div className="w-full text-xs">
      {/* Cabeçalho com os dias da semana */}
      <div className="grid grid-cols-7 border-b mb-1" style={{ borderColor: COLORS.dark }}>
        {WEEKDAYS.map(day => (
          <div 
            key={day} 
            className="text-center py-1 font-black text-[10px]"
            style={{ color: COLORS.dark }}
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Grade do calendário */}
      <div className="grid grid-cols-7 border-l border-t border-gray-100">
        {days}
      </div>
    </div>
  );
};

export default CalendarGrid;