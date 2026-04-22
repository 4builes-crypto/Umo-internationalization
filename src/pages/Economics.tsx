import { motion } from 'framer-motion';
import { Globe, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { EconomicsCharts } from '../components/EconomicsCharts';

export const Economics = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 8' : 'Section 8'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Panorama Económico' : 'Economic Outlook'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Análisis del contexto macroeconómico y financiero para la internacionalización de UMO.'
            : 'Analysis of the macroeconomic and financial context for UMO\'s internationalization.'}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-6 md:p-8 flex flex-col"
        >
          <h3 className="text-xl font-bold text-unoOrange mb-6 flex items-center gap-3">
            <Globe className="w-6 h-6" /> {language === 'es' ? 'Contexto Global' : 'Global Context'}
          </h3>
          <div className="space-y-4 flex-1">
            <p className="text-sm text-textSecondary border-l-2 border-surfaceHover pl-4 leading-relaxed">
              {language === 'es'
                ? 'Análisis de las variables macroeconómicas fundamentales en los Estados Unidos que condicionan el entorno de negocios y la viabilidad financiera del proyecto.'
                : 'Analysis of the fundamental macroeconomic variables in the United States that condition the business environment and the project\'s financial viability.'}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 md:p-8 flex flex-col"
        >
          <h3 className="text-xl font-bold text-unoOrange mb-6 flex items-center gap-3">
            <DollarSign className="w-6 h-6" /> {language === 'es' ? 'Análisis Regional' : 'Regional Analysis'}
          </h3>
          <div className="space-y-4 flex-1">
            <p className="text-sm text-textSecondary border-l-2 border-surfaceHover pl-4 leading-relaxed">
              {language === 'es'
                ? 'Evaluación sistemática de indicadores de crecimiento y competitividad en Arizona y California para sustentar la toma de decisiones estratégicas de expansión.'
                : 'Systematic evaluation of growth and competitiveness indicators in Arizona and California to support strategic expansion decisions.'}
            </p>
          </div>
        </motion.div>
      </div>

      <EconomicsCharts />
    </div>
  );
};
