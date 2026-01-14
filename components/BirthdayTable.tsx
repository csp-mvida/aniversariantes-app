import React from 'react';
import { BirthdayEntry } from '../types';
import { COLORS } from '../constants';

interface BirthdayTableProps {
  birthdays: BirthdayEntry[];
}

const BirthdayTable: React.FC<BirthdayTableProps> = ({ birthdays }) => {
  if (birthdays.length === 0) {
    return (
      <div className="text-center py-8 border-2 border-dashed border-gray-100 rounded-xl">
        <p className="text-gray-300 font-medium text-sm">Nenhum aniversariante para exibir.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <table className="w-full text-left border-separate border-spacing-y-1.5">
        <thead>
          <tr>
            <th className="pb-2 px-3 text-[9px] uppercase tracking-[0.2em] font-black text-gray-400 w-12">Dia</th>
            <th className="pb-2 px-3 text-[9px] uppercase tracking-[0.2em] font-black text-gray-400">Nome</th>
            <th className="pb-2 px-3 text-[9px] uppercase tracking-[0.2em] font-black text-gray-400 text-right">Setor</th>
          </tr>
        </thead>
        <tbody>
          {birthdays.map((person, idx) => (
            <tr key={`${person.day}-${person.name}-${idx}`} className="group">
              <td className="py-2 px-3 first:rounded-l-lg" style={{ backgroundColor: COLORS.secondaryBg }}>
                <span className="text-xs font-black" style={{ color: COLORS.primary }}>
                  {person.day.toString().padStart(2, '0')}
                </span>
              </td>
              <td className="py-2 px-3" style={{ backgroundColor: COLORS.secondaryBg }}>
                <span className="text-sm font-bold text-gray-700 capitalize">
                  {person.name.toLowerCase()}
                </span>
              </td>
              <td className="py-2 px-3 last:rounded-r-lg text-right" style={{ backgroundColor: COLORS.secondaryBg }}>
                <span className="text-[10px] font-black tracking-wider uppercase text-gray-500">
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