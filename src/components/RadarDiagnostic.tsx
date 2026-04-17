import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

export const RadarDiagnostic = ({ type }: { type: 'complete' | 'potential' }) => {
  const { language } = useLanguage();

  const dataComplete = [
    { subject: language === 'es' ? 'Talento Humano' : 'Human Talent', A: 0.1, fullMark: 100 },
    { subject: language === 'es' ? 'Direccionamiento estratégico' : 'Strategic Alignment', A: 100, fullMark: 100 },
    { subject: language === 'es' ? 'Tecnología e innovación' : 'Technology and Innovation', A: 25, fullMark: 100 },
    { subject: language === 'es' ? 'Sostenibilidad' : 'Sustainability', A: 41.2, fullMark: 100 },
    { subject: language === 'es' ? 'Potencial de internacionalización' : 'Internationalization Potential', A: 43.9, fullMark: 100 },
  ];
  
  const dataPotential = [
    { subject: language === 'es' ? 'Exportación e Importación (Bienes)' : 'Export & Import (Goods)', A: 70, fullMark: 100 },
    { subject: language === 'es' ? 'Exportación (Servicios)' : 'Export (Services)', A: 4.25, fullMark: 100 },
    { subject: language === 'es' ? 'Inversión Extranjera Directa' : 'Foreign Direct Investment', A: 12.5, fullMark: 100 },
    { subject: language === 'es' ? 'Licencias y Franquicias' : 'Licenses & Franchises', A: 0, fullMark: 100 },
    { subject: language === 'es' ? 'Alianzas Estratégicas' : 'Strategic Alliances', A: 100, fullMark: 100 },
    { subject: language === 'es' ? 'Producto/Servicio' : 'Product/Service', A: 60.95, fullMark: 100 },
  ];

  const data = type === 'complete' ? dataComplete : dataPotential;
  const title = type === 'complete' 
    ? (language === 'es' ? 'Diagnóstico Completo' : 'Complete Diagnostic') 
    : (language === 'es' ? 'Potencial de Internacionalización' : 'Internationalization Potential');

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h4 className="text-xs font-bold text-textSecondary uppercase tracking-widest mb-4 opacity-70">
        {title}
      </h4>
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#333" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#9ca3af', fontSize: 9, fontWeight: 500 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fill: '#666', fontSize: 10 }}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Radar
              name={language === 'es' ? 'Diagnóstico' : 'Diagnostic'}
              dataKey="A"
              stroke="#f97316"
              fill="#f97316"
              fillOpacity={0.4}
              dot={{ r: 3, fill: '#f97316' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
