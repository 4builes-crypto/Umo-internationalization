import { TrendingUp, Map, Users } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

export const SunBeltInfographic = () => {
  const { language } = useLanguage();

  const dataPie = [
    { name: language === 'es' ? 'Dueños' : 'Owners', value: 66 },
    { name: language === 'es' ? 'Otros' : 'Others', value: 34 },
  ];

  return (
    <div className="w-full space-y-6 pt-4">
      {/* Top Section: ownership and resale */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex flex-col items-center">
          <div className="h-16 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="100%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={30}
                  outerRadius={45}
                  paddingAngle={0}
                  dataKey="value"
                >
                  <Cell fill="#f97316" />
                  <Cell fill="rgba(255,255,255,0.05)" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
              <span className="text-sm font-black text-white leading-none">66%</span>
              <span className="text-[7px] text-textSecondary uppercase font-bold">
                {language === 'es' ? 'Propiedad' : 'Ownership'}
              </span>
            </div>
          </div>
          <p className="text-[8px] text-textSecondary text-center mt-1 leading-tight opacity-70">
            {language === 'es' ? 'Tasa estabilizada EE.UU. 2024' : 'Stabilized US Rate 2024'}
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <span className="text-[10px] font-bold text-white uppercase italic">+5% {language === 'es' ? 'a' : 'to'} +10%</span>
          </div>
          <p className="text-[8px] text-textSecondary leading-tight">
            {language === 'es' ? 'Incremento en valor de ' : 'Increase in '}
            <span className="text-white font-medium">resale</span> 
            {language === 'es' ? ' por paisajismo de alta calidad.' : ' value from high-quality landscaping.'}
          </p>
        </div>
      </div>

      {/* Sun Belt and Mowers Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 bg-unoOrange/10 p-2 rounded-lg border border-unoOrange/20">
          <Map className="w-4 h-4 text-unoOrange shrink-0" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-white uppercase tracking-tighter italic">Texas · Florida · Arizona</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-start gap-3 p-2 bg-white/[0.02] rounded-lg border border-white/5">
            <Users className="w-4 h-4 text-textSecondary mt-1" />
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-white uppercase">
                {language === 'es' ? 'DIY & Contratistas' : 'DIY & Contractors'}
              </span>
              <p className="text-[8px] text-textSecondary leading-relaxed">
                {language === 'es' ? 'Lotes > 0.25 acres exigen ' : 'Lots > 0.25 acres enforce '}
                <span className="text-unoOrange font-medium italic">Ride-on / Zero-turn</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-unoOrange/30 to-transparent rounded-full" />
        <p className="text-[7px] text-textSecondary/40 text-center mt-2 uppercase tracking-widest font-bold">
          {language === 'es' ? 'Aftermarket Estratégico UMO' : 'UMO Strategic Aftermarket'}
        </p>
      </div>
    </div>
  );
};
