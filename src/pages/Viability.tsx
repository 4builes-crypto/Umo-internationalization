import { motion } from 'framer-motion';
import { Target, ShieldCheck, Activity, Home } from 'lucide-react';
import { MarketGrowthChart } from '../components/MarketGrowthChart';
import { RegulationImpactChart } from '../components/RegulationImpactChart';
import { SunBeltInfographic } from '../components/SunBeltInfographic';
import { useLanguage } from '../contexts/LanguageContext';

export const Viability = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 6' : 'Section 6'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Análisis De Viabilidad De Internacionalización' : 'Internationalization Viability Analysis'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Evaluación técnica y comercial de la penetración de los asientos UMO en el mercado de Estados Unidos.'
            : 'Technical and commercial evaluation of UMO seats penetration in the United States market.'}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-6 md:p-8 flex flex-col"
        >
          <h3 className="text-xl font-bold text-unoOrange mb-6 flex items-center gap-3">
            <Activity className="w-6 h-6" /> {language === 'es' ? 'Regulaciones' : 'Regulations'}
          </h3>
          <div className="space-y-4 flex-1">
            <p className="text-sm text-textSecondary border-l-2 border-surfaceHover pl-4 leading-relaxed">
              <strong className="text-white block mb-1">
                {language === 'es' ? 'Ley AB 1346 (California)' : 'Law AB 1346 (California)'}
              </strong>
              {language === 'es'
                ? 'Prohíbe la venta de motores de combustión para maquinaria pequeña desde 2024. Esto aumenta la venta de podadoras eléctricas y el mercado aftermarket en el que opera UMO (CARB, 2022).'
                : 'Prohibits the sale of combustion engines for small machinery from 2024. This increases the sale of electric mowers and the aftermarket where UMO operates (CARB, 2022).'}
            </p>
            <RegulationImpactChart />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 md:p-8 flex flex-col"
        >
          <h3 className="text-xl font-bold text-unoOrange mb-6 flex items-center gap-3">
            <Target className="w-6 h-6" /> {language === 'es' ? 'Expansión USA' : 'USA Expansion'}
          </h3>
          <div className="space-y-4 flex-1">
            <p className="text-sm text-textSecondary border-l-2 border-surfaceHover pl-4 leading-relaxed">
              <strong className="text-white block mb-1">
                {language === 'es' ? 'Proyección 2026-2031' : '2026-2031 Projection'}
              </strong>
              {language === 'es'
                ? 'Mercado valorado en $7.1 billones (2025) con meta de $9.71 billones para 2031. El auge de maquinaria asegura que el mercado de repuestos será altamente apetecido (Mordor Intelligence, 2026).'
                : 'Market valued at $7.1 billion (2025) with a target of $9.71 billion by 2031. The machinery boom ensures the replacement market will be highly desired (Mordor Intelligence, 2026).'}
            </p>
            <MarketGrowthChart />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 md:p-8 flex flex-col"
        >
          <h3 className="text-xl font-bold text-unoOrange mb-6 flex items-center gap-3">
            <Home className="w-6 h-6" /> {language === 'es' ? 'Vivienda y Sun Belt' : 'Housing & Sun Belt'}
          </h3>
          <div className="space-y-4 flex-1">
            <p className="text-sm text-textSecondary border-l-2 border-surfaceHover pl-4 leading-relaxed">
              <strong className="text-white block mb-1">
                {language === 'es' ? 'Propiedad del 66%' : '66% Homeownership'}
              </strong>
              {language === 'es'
                ? 'Tasa estable que asegura demanda base. En el "Sun Belt", lotes > 0.25 acres obligan al uso de podadoras de conducción, impulsando el ciclo de repuestos (Mordor Intelligence, 2026).'
                : 'Stable rate ensuring baseline demand. In the "Sun Belt", lots > 0.25 acres enforce the use of riding mowers, driving the replacement cycle (Mordor Intelligence, 2026).'}
            </p>
            <SunBeltInfographic />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6 mt-6 border-green-500/20 bg-green-500/5 flex items-center gap-4"
      >
        <ShieldCheck className="w-10 h-10 text-green-500 shrink-0" />
        <div>
          <h4 className="text-lg font-bold text-white mb-1">
            {language === 'es' ? 'Conclusión General' : 'General Conclusion'}
          </h4>
          <p className="text-sm text-textSecondary">
            {language === 'es' ? 'El proyecto es ' : 'The project is '}
            <strong className="text-green-400">
              {language === 'es' ? 'Altamente Viable' : 'Highly Viable'}
            </strong>
            {language === 'es'
              ? '. El conocimiento previo del mercado de internacionalización permite a UMO capitalizar las proyecciones de expansión hacia los $9.71 billones. La transición a podadoras eléctricas (Ley AB 1346) y la necesidad de modelos ride-on por el tamaño de los lotes en California y Arizona, aseguran una demanda alta en el mercado secundario B2B norteamericano.'
              : '. Prior knowledge of the internationalization market allows UMO to capitalize on expansion projections reaching $9.71 billion. The transition to electric mowers (Law AB 1346) and the need for ride-on models due to lot sizes in California and Arizona ensure high demand in the North American B2B secondary market.'}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
