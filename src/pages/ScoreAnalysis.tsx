import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, ShieldCheck, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SubScore {
  label: { es: string; en: string };
  arizona: number;
  california: number;
}

interface ScoreCategory {
  id: string;
  category: { es: string; en: string };
  arizona: number;
  california: number;
  subscores: SubScore[];
}

const scoreData: ScoreCategory[] = [
  {
    id: 'eco',
    category: { es: 'Panorama Económico', en: 'Economic Outlook' },
    arizona: 4.52,
    california: 4.23,
    subscores: [
      { label: { es: 'Consumo de los hogares', en: 'Household Consumption' }, arizona: 4.15, california: 5.00 },
      { label: { es: 'Tasa de Desempleo', en: 'Unemployment Rate' }, arizona: 5.00, california: 3.98 },
      { label: { es: 'Estabilidad Fiscal (Sales Tax)', en: 'Fiscal Stability' }, arizona: 5.00, california: 3.86 },
      { label: { es: 'PIB per capita', en: 'GDP per capita' }, arizona: 3.47, california: 5.00 },
      { label: { es: 'Control de Inflación', en: 'Inflation Control' }, arizona: 5.00, california: 3.33 },
    ]
  },
  {
    id: 'pol',
    category: { es: 'Político y Legal', en: 'Political & Legal' },
    arizona: 2.50,
    california: 4.50,
    subscores: [
      { label: { es: 'Regulación de Emisiones', en: 'Emissions Regulation' }, arizona: 2.00, california: 5.00 },
      { label: { es: 'Entorno Arancelario (TPA/Sec 122)', en: 'Tariff Environment' }, arizona: 3.50, california: 3.50 },
      { label: { es: 'Normas de Seguridad Laboral', en: 'Safety Standards' }, arizona: 2.00, california: 5.00 },
    ]
  },
  {
    id: 'tech',
    category: { es: 'Tecnológico y Geoambiental', en: 'Technological & Environmental' },
    arizona: 5.00,
    california: 3.33,
    subscores: [
      { label: { es: 'Topografía y Vibración (WBV)', en: 'Topography & Vibration' }, arizona: 5.00, california: 3.50 },
      { label: { es: 'Intensidad de Ciclo Operativo', en: 'Operating Cycle Intensity' }, arizona: 5.00, california: 3.00 },
      { label: { es: 'Degradación Térmica y UV', en: 'Thermal & UV Degradation' }, arizona: 5.00, california: 3.50 },
    ]
  },
  {
    id: 'soc',
    category: { es: 'Sociocultural', en: 'Socio-Cultural' },
    arizona: 4.00,
    california: 5.00,
    subscores: [
      { label: { es: 'Cultura de Exterior y Propiedad', en: 'Outdoor Culture & Ownership' }, arizona: 4.00, california: 5.00 },
    ]
  },
  {
    id: 'trade',
    category: { es: 'Comercio Internacional', en: 'International Trade' },
    arizona: 4.67,
    california: 4.00,
    subscores: [
      { label: { es: 'Especialización en Maquinaria', en: 'Machinery Specialization' }, arizona: 4.00, california: 5.00 },
      { label: { es: 'Facilitación Aduanera y FTZ', en: 'Customs & FTZ' }, arizona: 5.00, california: 3.00 },
      { label: { es: 'Crecimiento USMCA (T-MEC)', en: 'USMCA Growth' }, arizona: 5.00, california: 4.00 },
    ]
  },
  {
    id: 'inv',
    category: { es: 'Inversión Extranjera', en: 'Foreign Investment' },
    arizona: 4.83,
    california: 4.00,
    subscores: [
      { label: { es: 'Manufactura Avanzada (IED)', en: 'Advanced Manufacturing' }, arizona: 5.00, california: 4.00 },
      { label: { es: 'Zonas de Comercio Exterior', en: 'Foreign-Trade Zones' }, arizona: 5.00, california: 3.00 },
      { label: { es: 'Madurez Electromovilidad', en: 'Electromobility Maturity' }, arizona: 4.50, california: 5.00 },
    ]
  }
];

export const ScoreAnalysis = () => {
  const { language } = useLanguage();
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleRow = (id: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const azAverage = scoreData.reduce((acc, curr) => acc + curr.arizona, 0) / scoreData.length;
  const caAverage = scoreData.reduce((acc, curr) => acc + curr.california, 0) / scoreData.length;

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 15' : 'Section 15'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4 flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-unoOrange" /> 
          {language === 'es' ? 'Análisis de Puntajes y Viabilidad' : 'Score Analysis & Viability'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Explora el desglose detallado de los indicadores de viabilidad haciendo clic en cada apartado.'
            : 'Explore the detailed breakdown of viability indicators by clicking on each section.'}
        </p>
      </header>

      <section className="space-y-8">
        <div className="glass-card overflow-hidden border-zinc-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface/50 border-b border-glassBorder">
                  <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">
                    {language === 'es' ? 'Dimensión del Análisis' : 'Analysis Dimension'}
                  </th>
                  <th className="px-6 py-4 text-sm font-bold text-unoOrange uppercase tracking-wider text-center">
                    ARIZONA
                  </th>
                  <th className="px-6 py-4 text-sm font-bold text-blue-400 uppercase tracking-wider text-center">
                    CALIFORNIA
                  </th>
                </tr>
              </thead>
              <tbody>
                {scoreData.map((category) => (
                  <React.Fragment key={category.id}>
                    <tr 
                      onClick={() => toggleRow(category.id)}
                      className="hover:bg-white/5 transition-colors cursor-pointer group border-b border-glassBorder/30"
                    >
                      <td className="px-6 py-5 text-sm font-medium text-white flex items-center gap-3">
                        <div className="p-1 rounded bg-white/5 group-hover:bg-unoOrange/20 transition-colors">
                          {expandedRows[category.id] ? <ChevronUp className="w-4 h-4 text-unoOrange" /> : <ChevronDown className="w-4 h-4 text-textSecondary" />}
                        </div>
                        {language === 'es' ? category.category.es : category.category.en}
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-unoOrange/10 text-unoOrange font-bold text-sm">
                          {category.arizona.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 font-bold text-sm">
                          {category.california.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                    
                    <AnimatePresence>
                      {expandedRows[category.id] && (
                        <motion.tr
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-black/20"
                        >
                          <td colSpan={3} className="px-0 py-0">
                            <div className="overflow-hidden">
                              <table className="w-full">
                                <tbody>
                                  {category.subscores.map((sub, sIdx) => (
                                    <tr key={sIdx} className="border-b border-white/5 last:border-0">
                                      <td className="pl-16 pr-6 py-3 text-xs text-textSecondary italic">
                                        • {language === 'es' ? sub.label.es : sub.label.en}
                                      </td>
                                      <td className="px-6 py-3 text-center text-xs font-semibold text-unoOrange/80">
                                        {sub.arizona.toFixed(2)}
                                      </td>
                                      <td className="px-6 py-3 text-center text-xs font-semibold text-blue-400/80">
                                        {sub.california.toFixed(2)}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ))}
                
                <tr className="bg-white/10 border-t-2 border-unoOrange/30">
                  <td className="px-6 py-8 text-base font-bold text-white uppercase tracking-widest flex items-center gap-3">
                    <Star className="w-6 h-6 text-unoOrange" />
                    {language === 'es' ? 'PROMEDIO FINAL DE VIABILIDAD' : 'FINAL VIABILITY AVERAGE'}
                  </td>
                  <td className="px-6 py-8 text-center">
                    <span className="text-3xl font-black text-unoOrange drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                      {azAverage.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <span className="text-3xl font-black text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      {caAverage.toFixed(2)}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interpretations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 bg-unoOrange/5 border-unoOrange/20 relative group"
          >
            <div className="absolute top-4 right-4 text-unoOrange/20 group-hover:text-unoOrange/40 transition-colors">
              <TrendingUp className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-unoOrange rounded-full" />
              {language === 'es' ? 'Interpretación: Arizona' : 'Interpretation: Arizona'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed relative z-10">
              {language === 'es'
                ? 'Arizona lidera el índice (4.25) gracias a su entorno de "Silicon Desert". Su máxima puntuación en dimensiones tecnológicas y de inversión compensa los retos regulatorios menores en comparación con California.'
                : 'Arizona leads the index (4.25) thanks to its "Silicon Desert" environment. Its maximum scores in technological and investment dimensions offset the minor regulatory challenges compared to California.'}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 bg-blue-400/5 border-blue-400/20 relative group"
          >
            <div className="absolute top-4 right-4 text-blue-400/20 group-hover:text-blue-400/40 transition-colors">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-400 rounded-full" />
              {language === 'es' ? 'Interpretación: California' : 'Interpretation: California'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed relative z-10">
              {language === 'es'
                ? 'Con un robusto 4.18, California es el mercado de "valor por cumplimiento". Su ecosistema legal obliga a la adopción de tecnologías ergonómicas, lo que garantiza una demanda orgánica para UMO a pesar de los costos operativos.'
                : 'With a robust 4.18, California is the "value through compliance" market. Its legal ecosystem forces the adoption of ergonomic technologies, ensuring organic demand for UMO despite operational costs.'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
