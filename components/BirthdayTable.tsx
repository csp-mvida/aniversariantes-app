
import React from 'react';
import { BirthdayEntry } from '../types';
import { COLORS } from '../constants';

interface BirthdayTableProps {
  birthdays: BirthdayEntry[];
}

const BirthdayTable: React.FC<BirthdayTableProps> = ({ birthdays }) => {
  if (birthdays.length === 0) {
    return (
      <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-xl">
        <p className="text-gray-400 font-medium">Nenhum aniversariante cadastrado para este período.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2" style={{ borderColor: COLORS.detail }}>
            <th className="py-2 px-2 text-[10px] uppercase tracking-wider font-black w-12" style={{ color: COLORS.dark }}>Dia</th>
            <th className="py-2 px-2 text-[10px] uppercase tracking-wider font-black" style={{ color: COLORS.dark }}>Nome</th>
            <th className="py-2 px-2 text-[10px] uppercase tracking-wider font-black text-right" style={{ color: COLORS.dark }}>Setor</th>
          </tr>
        </thead>
        <tbody>
          {birthdays.map((person, idx) => (
            <tr 
              key={`${person.day}-${person.name}-${idx}`}
              className="border-b border-gray-100 last:border-0"
            >
              <td className={`px-2 ${idx === 0 ? 'pt-6 pb-1' : 'py-1'}`}>
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-sm"
                  style={{ backgroundColor: COLORS.secondaryBg, color: COLORS.primary }}
                >
                  {person.day}
                </div>
              </td>
              <td className={`px-2 font-bold text-gray-800 text-sm capitalize truncate max-w-[200px] ${idx === 0 ? 'pt-6 pb-1' : 'py-1'}`}>
                {person.name.toLowerCase()}
              </td>
              <td className={`px-2 text-right ${idx === 0 ? 'pt-6 pb-1' : 'py-1'}`}>
                <span 
                  className="text-[9px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded border inline-block"
                  style={{ color: COLORS.primary, borderColor: COLORS.detail }}
                >
                  {person.department}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BirthdayTable;
