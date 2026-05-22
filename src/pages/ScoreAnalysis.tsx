import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, ShieldCheck, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const scoreData = [
  {
    category: { es: 'Panorama Económico', en: 'Economic Outlook' },
    arizona: 4.52,
    california: 4.23
  },
  {
    category: { es: 'Político - Legal', en: 'Political - Legal' },
    arizona: 4.00,
    california: 4.05
  },
  {
    category: { es: 'Tecnológico y Geoambiental', en: 'Technological & Environmental' },
    arizona: 5.00,
    california: 3.28
  },
  {
    category: { es: 'Sociocultural', en: 'Socio-Cultural' },
    arizona: 2.00,
    california: 4.67
  },
  {
    category: { es: 'Comercio Internacional', en: 'International Trade' },
    arizona: 2.87,
    california: 4.50
  },
  {
    category: { es: 'Inversión Extranjera', en: 'Foreign Investment' },
    arizona: 3.40,
    california: 4.33
  }
];

export const ScoreAnalysis = () => {
  const { language } = useLanguage();

  const azAverage = scoreData.reduce((acc, curr) => acc + curr.arizona, 0) / scoreData.length;
  const caAverage = scoreData.reduce((acc, curr) => acc + curr.california, 0) / scoreData.length;

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 14' : 'Section 14'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4 flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-unoOrange" />
          {language === 'es' ? 'Análisis de Puntajes y Viabilidad' : 'Score Analysis & Viability'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Recopilación comparativa de los indicadores de viabilidad en todas las dimensiones del análisis estratégico.'
            : 'Comparative compilation of viability indicators across all dimensions of the strategic analysis.'}
        </p>
      </header>

      <section className="space-y-8">
        <div className="glass-card overflow-hidden border-zinc-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
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
              <tbody className="divide-y divide-glassBorder">
                {scoreData.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {language === 'es' ? row.category.es : row.category.en}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-unoOrange/10 text-unoOrange font-bold text-sm">
                        {row.arizona.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 font-bold text-sm">
                        {row.california.toFixed(2)}
                      </span>
                    </td>
                  </motion.tr>
                ))}
                <tr className="bg-white/5 border-t-2 border-unoOrange/30">
                  <td className="px-6 py-8 text-base font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <Star className="w-5 h-5 text-unoOrange" />
                    {language === 'es' ? 'PROMEDIO FINAL DE VIABILIDAD' : 'FINAL VIABILITY AVERAGE'}
                  </td>
                  <td className="px-6 py-8 text-center">
                    <span className="text-3xl font-black text-unoOrange">
                      {azAverage.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-6 py-8 text-center">
                    <span className="text-3xl font-black text-blue-400">
                      {caAverage.toFixed(2)}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8 bg-unoOrange/5 border-unoOrange/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-unoOrange" />
              {language === 'es' ? 'Interpretación: Arizona' : 'Interpretation: Arizona'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'Arizona presenta una puntuación final de 3.63, manteniéndose altamente competitiva en la dimensión tecnológica (5.00) y por un entorno político-legal y fiscal favorable (4.00). No obstante, su menor escala poblacional y la saturación del comercio transfronterizo con México moderan su puntuación de viabilidad global.'
                : 'Arizona presents a final score of 3.63, remaining highly competitive in the technological dimension (5.00) and due to a favorable political-legal and fiscal environment (4.00). However, its smaller population scale and the saturation of cross-border trade with Mexico moderate its overall viability score.'}
            </p>
          </div>
          <div className="glass-card p-8 bg-blue-400/5 border-blue-400/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              {language === 'es' ? 'Interpretación: California' : 'Interpretation: California'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'California lidera con una puntuación final de 4.18, impulsada por su inigualable acceso logístico y portuario directo (4.50), una sólida base demográfica en su mercado sociocultural (4.67) y un gran volumen comercial y de inversión extranjera. Esto compensa los mayores costos regulatorios y operativos que presenta el estado.'
                : 'California leads with a final score of 4.18, driven by its unmatched direct port and logistics access (4.50), a solid demographic base in its socio-cultural market (4.67), and a large volume of trade and foreign investment. This offsets the higher regulatory and operational costs in the state.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
