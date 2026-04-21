import { motion } from 'framer-motion';
import { TrendingUp, Globe, DollarSign, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
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
                ? 'Análisis de las tendencias económicas globales, inflación y tasas de interés que afectan el sector industrial.'
                : 'Analysis of global economic trends, inflation, and interest rates affecting the industrial sector.'}
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
            <DollarSign className="w-6 h-6" /> {language === 'es' ? 'Indicadores Financieros' : 'Financial Indicators'}
          </h3>
          <div className="space-y-4 flex-1">
            <p className="text-sm text-textSecondary border-l-2 border-surfaceHover pl-4 leading-relaxed">
              {language === 'es'
                ? 'Comportamiento de divisas y proyecciones de inversión en infraestructura y equipos.'
                : 'Currency behavior and investment projections in infrastructure and equipment.'}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-8 flex flex-col items-center justify-center text-center space-y-4"
      >
        <BarChart3 className="w-12 h-12 text-unoOrange opacity-50" />
        <h3 className="text-xl font-bold text-white">
          {language === 'es' ? 'Próximamente: Dashboard Financiero' : 'Coming Soon: Financial Dashboard'}
        </h3>
        <p className="text-textSecondary max-w-lg">
          {language === 'es'
            ? 'Estamos preparando un panel interactivo con datos en tiempo real sobre el mercado de autopartes y maquinaria.'
            : 'We are preparing an interactive panel with real-time data on the auto parts and machinery market.'}
        </p>
      </motion.div>
    </div>
  );
};
