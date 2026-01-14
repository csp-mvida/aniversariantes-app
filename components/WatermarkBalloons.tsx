import React from 'react';
import { Balloon } from 'lucide-react';

const balloonPositions = [
  // Alternando entre canto superior esquerdo, direito, inferior, centro, etc.
  { top: '30mm', left: '10mm', size: 70, opacity: 0.10 },
  { top: '60mm', right: '20mm', size: 40, opacity: 0.13 },
  { bottom: '35mm', left: '25mm', size: 100, opacity: 0.08 },
  { bottom: '60mm', right: '30mm', size: 50, opacity: 0.12 },
  { top: '120mm', left: '60mm', size: 80, opacity: 0.09 },
  { top: '180mm', right: '50mm', size: 45, opacity: 0.11 },
];

const balloonColor = "#7ed9b6"; // Verde claro e discreto

const WatermarkBalloons: React.FC = () => (
  <div className="pointer-events-none select-none absolute inset-0 w-full h-full z-0 print:z-0">
    {balloonPositions.map((pos, idx) => (
      <Balloon
        key={idx}
        size={pos.size}
        style={{
          position: 'absolute',
          ...('top' in pos ? { top: pos.top } : {}),
          ...('bottom' in pos ? { bottom: pos.bottom } : {}),
          ...('left' in pos ? { left: pos.left } : {}),
          ...('right' in pos ? { right: pos.right } : {}),
          opacity: pos.opacity,
          color: balloonColor,
          zIndex: 0,
        }}
        strokeWidth={1.5}
        className="print:opacity-10"
      />
    ))}
  </div>
);

export default WatermarkBalloons;