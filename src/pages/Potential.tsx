import { motion } from 'framer-motion';
import { TrendingUp, Globe2, BarChart2, PieChart } from 'lucide-react';
import { DiagnosticSummary } from '../components/DiagnosticSummary';
import { RadarDiagnostic } from '../components/RadarDiagnostic';
import { MarketGrowthChart } from '../components/MarketGrowthChart';
import { RegulationImpactChart } from '../components/RegulationImpactChart';
import { useLanguage } from '../contexts/LanguageContext';

export const Potential = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 3' : 'Section 3'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' 
            ? 'Diagnóstico De Potencialidades' 
            : 'Internationalization Potential Diagnostic'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Evaluación visual y técnica de la capacidad instalada y demanda proyectada en los Estados Unidos que validan la inserción en este mercado competitivo.'
            : 'Visual and technical evaluation of installed capacity and projected demand in the United States that validate entry into this competitive market.'}
        </p>
      </header>

      {/* Main Diagnostic Result */}
      <div className="py-4">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-unoOrange" /> 
          {language === 'es' ? 'Resultado Numérico del Diagnóstico' : 'Numerical Diagnostic Result'}
        </h3>
        <DiagnosticSummary />
      </div>

      {/* Visual Charts Section */}
      <div className="py-4 mt-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-unoOrange" /> 
          {language === 'es' ? 'Visualización de Red (Radar Charts)' : 'Network Visualization (Radar Charts)'}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-6 min-h-[400px]"
          >
            <RadarDiagnostic type="complete" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 min-h-[400px]"
          >
            <RadarDiagnostic type="potential" />
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe2 className="w-6 h-6 text-unoOrange" />
            <h3 className="text-xl font-bold text-white">{language === 'es' ? 'Factores Macro' : 'Macro Factors'}</h3>
          </div>
          <ul className="space-y-3 text-sm md:text-base text-textSecondary">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-unoOrange shrink-0" />
              {language === 'es' 
                ? 'Alta demanda de maquinaria agrícola debido a las extensas zonas de cultivo y jardinería comercial (Sun Belt / Midwest).'
                : 'High demand for agricultural machinery due to extensive farming and commercial gardening zones (Sun Belt / Midwest).'}
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-unoOrange shrink-0" />
              {language === 'es'
                ? 'Efecto nearshoring que favorece a fabricantes latinoamericanos sobre los asiáticos por costos de flete y respuesta rápida.'
                : 'Nearshoring effect that favors Latin American manufacturers over Asian ones due to freight costs and rapid response.'}
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-unoOrange shrink-0" />
              {language === 'es'
                ? 'TLC (Tratado de Libre Comercio), eliminando aranceles prohibitivos.'
                : 'FTA (Free Trade Agreement), eliminating prohibitive tariffs.'}
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-unoOrange" />
            <h3 className="text-xl font-bold text-white">{language === 'es' ? 'Factores Micro (Empresa)' : 'Micro Factors (Company)'}</h3>
          </div>
          <ul className="space-y-3 text-sm md:text-base text-textSecondary">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-unoOrange shrink-0" />
              {language === 'es'
                ? 'Capacidad instalada para escalar producción gracias a estandarización de ensambles.'
                : 'Installed capacity to scale production thanks to assembly standardization.'}
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-unoOrange shrink-0" />
              {language === 'es'
                ? 'Control experto en inyección de poliuretano y tapizado impermeable, superando competidores de bajo costo.'
                : 'Expert control in polyurethane injection and waterproof upholstery, outperforming low-cost competitors.'}
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-unoOrange shrink-0" />
              {language === 'es'
                ? 'Posibilidad de adaptar el producto como repuesto universal o bajo diseño propietario (OEM).'
                : 'Ability to adapt the product as a universal replacement or under proprietary design (OEM).'}
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Real Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 min-h-[300px]"
        >
          <h4 className="text-sm font-bold text-textSecondary uppercase tracking-widest mb-4">
            {language === 'es' ? 'Tendencia de Crecimiento' : 'Growth Trend'}
          </h4>
          <MarketGrowthChart />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 min-h-[300px]"
        >
          <h4 className="text-sm font-bold text-textSecondary uppercase tracking-widest mb-4">
            {language === 'es' ? 'Impacto Normativo (AB 1346)' : 'Regulatory Impact (AB 1346)'}
          </h4>
          <RegulationImpactChart />
        </motion.div>
      </div>
    </div>
  );
};
