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
      <div key={`pad-start-${i}`} className={`${cellStyle} bg-[#f9fafb]`} />
    );
  }
  
  for (let d = 1; d <= daysInMonth; d++) {
    const hasBirthday = birthdayDays.has(d);
    
    // Ajuste de estilo para dias com aniversário: fundo colorido e borda branca sólida
    const dayCellStyle = hasBirthday 
      ? `aspect-[1.2/1] border-solid border-white border-[2px] flex items-center justify-center`
      : cellStyle;

    days.push(
      <div 
        key={`day-${d}`} 
        className={dayCellStyle}
        style={{ 
          backgroundColor: hasBirthday ? COLORS.detail : 'transparent',
          borderColor: hasBirthday ? COLORS.white : '#9ca3af'
        }}
      >
        <span 
          className={`text-[18px] ${hasBirthday ? 'text-white' : 'text-black'} font-normal`}
        >
          {d}
        </span>
      </div>
    );
  }

  const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
  for (let i = (firstDayOfMonth + daysInMonth); i < totalCells; i++) {
    days.push(
      <div key={`pad-end-${i}`} className={`${cellStyle} bg-[#f9fafb]`} />
    );
  }
  
  return (
    <div className="w-full">
      {/* Cabeçalho dos dias da semana - Design Minimalista e Retangular */}
      <div className="grid grid-cols-7 gap-px mb-4 bg-gray-200 border border-gray-200">
        {customWeekdays.map(day => (
          <div 
            key={day} 
            className="text-center py-2.5 font-black text-[11px] text-white tracking-[0.15em] uppercase"
            style={{ 
              backgroundColor: COLORS.dark,
            }}
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Grade de dias com linhas pontilhadas */}
      {/* Nota: A borda da grade externa precisa ser ajustada para não conflitar com as bordas internas brancas dos dias de aniversário */}
      <div className="grid grid-cols-7 border-t border-l border-dotted border-gray-400">
        {days}
      </div>
    </div>
  );
};

export default CalendarGrid;