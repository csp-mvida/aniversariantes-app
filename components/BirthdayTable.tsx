import React from 'react';
import { BirthdayEntry } from '../types';
import { COLORS } from '../constants';

interface BirthdayTableProps {
  birthdays: BirthdayEntry[];
}

const BirthdayTable: React.FC<BirthdayTableProps> = ({ birthdays }) => {
  if (birthdays.length === 0) {
    return (
      <div className="text-center py-4 border-2 border-dashed border-gray-200 rounded-lg">
        <p className="text-gray-400 font-medium text-sm">Nenhum aniversariante cadastrado para este período.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2" style={{ borderColor: COLORS.detail }}>
            <th 
              className="py-1 px-2 text-[10px] uppercase tracking-wider font-black w-12" 
              style={{ color: COLORS.dark }}
            >
              Dia
            </th>
            <th 
              className="py-1 px-2 text-[10px] uppercase tracking-wider font-black" 
              style={{ color: COLORS.dark }}
            >
              Nome
            </th>
            <th 
              className="py-1 px-2 text-[10px] uppercase tracking-wider font-black text-right" 
              style={{ color: COLORS.dark }}
            >
              Setor
            </th>
          </tr>
        </thead>
        <tbody>
          {birthdays.map((person, idx) => (
            <tr 
              key={`${person.day}-${person.name}-${idx}`} 
              className="border-b border-gray-100 last:border-0"
            >
              <td className="px-2 py-1">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-sm"
                  style={{ 
                    backgroundColor: COLORS.primary, 
                    color: COLORS.white 
                  }}
                >
                  {person.day}
                </div>
              </td>
              <td className="px-2 py-1">
                <span className="text-sm font-bold text-gray-800 capitalize">
                  {person.name.toLowerCase()}
                </span>
              </td>
              <td className="px-2 py-1 text-right">
                <span 
                  className="text-xs font-bold tracking-wide uppercase px-2 py-1 rounded border inline-block"
                  style={{ 
                    color: COLORS.primary, 
                    borderColor: COLORS.detail,
                    backgroundColor: COLORS.secondaryBg
                  }}
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