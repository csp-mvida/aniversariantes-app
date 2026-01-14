
import React, { useState } from 'react';
import { MONTHS, COLORS } from '../constants';

interface ConfigFormProps {
  initialData: {
    month: number;
    year: number;
    rawList: string;
  };
  onGenerate: (rawList: string, month: number, year: number) => void;
  onPrint: () => void;
}

const ConfigForm: React.FC<ConfigFormProps> = ({ initialData, onGenerate, onPrint }) => {
  const [month, setMonth] = useState(initialData.month);
  const [year, setYear] = useState(initialData.year);
  const [rawList, setRawList] = useState(initialData.rawList);

  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - 1 + i);

  return (
    <div 
      className="p-6 rounded-xl shadow-sm border border-gray-200"
      style={{ backgroundColor: COLORS.secondaryBg }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: COLORS.dark }}>
            Lista de Aniversariantes
          </label>
          <textarea
            className="w-full h-40 p-3 rounded-lg border-2 border-gray-300 focus:border-[#008b5a] outline-none resize-none bg-white font-mono text-sm"
            placeholder="Exemplo:\n05 / João Silva / Tecnologia\n12 / Ana Santos / Marketing"
            value={rawList}
            onChange={(e) => setRawList(e.target.value)}
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: COLORS.dark }}>
                Mês
              </label>
              <select
                className="w-full p-2.5 rounded-lg border-2 border-gray-300 focus:border-[#008b5a] outline-none bg-white"
                value={month}
                onChange={(e) => setMonth(parseInt(e.target.value))}
              >
                {MONTHS.map((m, idx) => (
                  <option key={m} value={idx}>{m}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: COLORS.dark }}>
                Ano
              </label>
              <input
                type="number"
                className="w-full p-2.5 rounded-lg border-2 border-gray-300 focus:border-[#008b5a] outline-none bg-white"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                min="2000"
                max="2100"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => onGenerate(rawList, month, year)}
              className="w-full py-3 rounded-lg font-bold text-white transition-all shadow-md active:scale-95"
              style={{ backgroundColor: COLORS.primary }}
            >
              GERAR CALENDÁRIO
            </button>
            <button
              onClick={onPrint}
              className="w-full py-3 rounded-lg font-bold text-white transition-all shadow-md active:scale-95"
              style={{ backgroundColor: COLORS.dark }}
            >
              🖨️ IMPRIMIR FOLHA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigForm;
