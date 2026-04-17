import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const data = [
  { year: '2025', value: 7.10 },
  { year: '2026', value: 7.48 },
  { year: '2031', value: 9.71 },
];

export const MarketGrowthChart = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full h-full flex flex-col pt-4">
      <div className="flex justify-between items-end mb-2 px-2">
        <span className="text-[10px] text-textSecondary uppercase font-bold tracking-tighter">
          {language === 'es' ? 'Tamaño de Mercado (Miles de Millones USD)' : 'Market Size (USD Billion)'}
        </span>
        <div className="flex flex-col items-end">
          <span className="text-xs font-black text-unoOrange">5.35% CAGR</span>
          <span className="text-[8px] text-textSecondary opacity-50 uppercase leading-none">
            {language === 'es' ? 'Proyección 2026-2031' : '2026-2031 Projection'}
          </span>
        </div>
      </div>
      <div className="w-full h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="year" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              hide={true}
              domain={[0, 11]}
            />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.02)' }}
              contentStyle={{ 
                backgroundColor: '#171717', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#fff'
              }}
              itemStyle={{ color: '#f97316' }}
              formatter={(value: any) => [`$${value} ${language === 'es' ? 'Billones' : 'Billion'}`, language === 'es' ? 'Tamaño de Mercado' : 'Market Size']}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === 2 ? '#f97316' : 'rgba(249, 115, 22, 0.4)'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-[9px] text-textSecondary/40 text-center mt-4 italic">
        {language === 'es' ? 'Fuente: Mordor Intelligence (2026)' : 'Source: Mordor Intelligence (2026)'}
      </p>
    </div>
  );
};
