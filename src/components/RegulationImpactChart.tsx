import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Bar,
  Legend,
} from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const data = [
  { year: '2022', totalMowers: 5, operational: 3, sales: 8, demand: 2 },
  { year: '2023', totalMowers: 10, operational: 6, sales: 12, demand: 4 },
  { year: '2024', totalMowers: 18, operational: 10, sales: 25, demand: 7 }, // BAN
  { year: '2025', totalMowers: 35, operational: 20, sales: 50, demand: 12 },
  { year: '2026', totalMowers: 60, operational: 35, sales: 70, demand: 30 }, // Peak
  { year: '2027', totalMowers: 95, operational: 60, sales: 90, demand: 85 },
];

export const RegulationImpactChart = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full h-full flex flex-col pt-4">
      <div className="flex justify-between items-end mb-4 px-2">
        <div className="flex flex-col">
          <span className="text-[10px] text-textSecondary uppercase font-bold tracking-tight">
            {language === 'es' ? 'Impacto California AB 1346' : 'California AB 1346 Impact'}
          </span>
          <span className="text-[8px] text-textSecondary/60 italic leading-none">
            {language === 'es' ? 'Demanda Aftermarket vs Tendencia de Ventas' : 'Aftermarket Demand vs Sales Trend'}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs font-black text-unoOrange italic">2-YEAR CYCLE</span>
          <span className="text-[8px] text-textSecondary opacity-50 uppercase leading-none">
            {language === 'es' ? 'Uso Intensivo' : 'Intensive Use'}
          </span>
        </div>
      </div>
      
      <div className="w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 5, left: -30, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
            <XAxis 
              dataKey="year" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10, fontWeight: 600 }}
              dy={10}
            />
            <YAxis hide={true} domain={[0, 100]} />
            
            <Tooltip
              content={({ active, label }) => {
                if (active && label) {
                  return (
                    <div className="bg-[#171717] border border-white/10 p-2 px-3 rounded-lg shadow-xl">
                      <p className="text-white font-bold text-xs mb-1">{label}</p>
                      <p className="text-unoOrange text-[11px] font-medium">
                        {language === 'es' ? 'Demanda UMO (Aftermarket)' : 'UMO Demand (Aftermarket)'}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
              cursor={{ fill: 'rgba(255,255,255,0.02)' }}
            />
            
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="circle"
              wrapperStyle={{ fontSize: '9px', paddingTop: '20px', textTransform: 'uppercase', letterSpacing: '-0.2px' }}
            />

            <ReferenceLine 
              x="2024" 
              stroke="#ef4444" 
              strokeDasharray="3 3" 
              label={{ position: 'top', value: 'AB 1346 BAN', fill: '#ef4444', fontSize: 8, fontWeight: 'bold', dy: -10 }} 
            />

            {/* Background Bars (Operational vs Replacement) */}
            <Bar dataKey="operational" stackId="a" fill="#10b981" fillOpacity={0.2} radius={[0, 0, 0, 0]} name={language === 'es' ? 'Operativas' : 'Operational'} />
            <Bar dataKey="totalMowers" stackId="a" fill="#10b981" fillOpacity={0.4} radius={[2, 2, 0, 0]} name={language === 'es' ? 'Total Eléctricas' : 'Total Electric'} />

            {/* Lines */}
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={{ r: 2, fill: '#3b82f6', strokeWidth: 0 }}
              name={language === 'es' ? 'Ventas (California)' : 'Sales (California)'} 
            />
            <Line 
              type="monotone" 
              dataKey="demand" 
              stroke="#f97316" 
              strokeWidth={3}
              dot={{ r: 3, fill: '#f97316', strokeWidth: 0 }}
              name={language === 'es' ? 'Demanda UMO (Aftermarket)' : 'UMO Demand (Aftermarket)'} 
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
