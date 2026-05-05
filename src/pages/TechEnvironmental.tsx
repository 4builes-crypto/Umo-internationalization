import { motion } from 'framer-motion';
import { Mountain, Calendar, Sun, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const TechEnvironmental = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 11' : 'Section 11'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Análisis Tecnológico y Ambiental' : 'Technological & Environmental Analysis'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4 text-lg">
          {language === 'es'
            ? 'Evaluación de los desafíos geoambientales y mecánicos en los mercados de Arizona y California, y cómo la ingeniería de UMO responde a estas exigencias extremas.'
            : 'Evaluation of geoenvironmental and mechanical challenges in the Arizona and California markets, and how UMO engineering responds to these extreme demands.'}
        </p>
      </header>

      {/* Point 1: Topography and WBV */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Mountain className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {language === 'es' 
              ? '1. Topografía, Compactación del Suelo y Estrés Mecánico' 
              : '1. Topography, Soil Compaction & Mechanical Stress'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4 text-textSecondary leading-relaxed">
            <p>
              {language === 'es'
                ? 'El análisis de la interacción física entre el vehículo y el terreno es crítico. Las podadoras "ride-on" carecen de suspensión compleja, delegando la amortiguación a los neumáticos y al asiento. Este fenómeno de Vibración de Cuerpo Completo (WBV) es el principal responsable de la fatiga estructural.'
                : 'Physical interaction analysis between vehicle and terrain is critical. "Ride-on" mowers lack complex suspension, delegating damping to tires and seats. This Whole-Body Vibration (WBV) phenomenon is primarily responsible for structural fatigue.'}
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex gap-4">
                <div className="font-bold text-unoOrange min-w-[80px]">ARIZONA:</div>
                <p className="text-sm">
                  {language === 'es'
                    ? 'Condiciones edáficas severas por el "caliche" (suelo cementado con dureza de hormigón). Genera microvibraciones de alta frecuencia que precipitan el colapso de asientos comunes.'
                    : 'Severe soil conditions due to "caliche" (naturally cemented soil with concrete hardness). Generates high-frequency microvibrations that precipitate standard seat collapse.'}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-textSecondary min-w-[80px]">CALIFORNIA:</div>
                <p className="text-sm">
                  {language === 'es'
                    ? 'Suelos aluviales más blandos y porosos. Aunque hay colinas con carga lateral, el impacto por rigidez vertical es significativamente menor.'
                    : 'Softer and more porous alluvial soils. Although there are hills with lateral loading, the vertical stiffness impact is significantly lower.'}
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-unoOrange/30 bg-unoOrange/5 relative overflow-hidden"
          >
            <Zap className="absolute -right-8 -top-8 w-32 h-32 text-unoOrange/10 rotate-12" />
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="text-unoOrange" /> 
              {language === 'es' ? 'Ventaja Disruptiva UMO' : 'UMO Disruptive Advantage'}
            </h3>
            <p className="text-textSecondary text-sm leading-relaxed mb-4">
              {language === 'es'
                ? 'Nuestras sillas incorporan poliuretano de alta resiliencia y mallas 3D estructurales que neutralizan activamente las ondas de choque antes de que lleguen al operador.'
                : 'Our seats feature high-resilience polyurethane and structural 3D mesh that actively neutralize shock waves before they reach the operator.'}
            </p>
            <p className="text-textSecondary text-sm leading-relaxed italic">
              {language === 'es'
                ? 'Mientras la competencia pierde confort bajo el rigor del suelo de Arizona, la tecnología UMO garantiza memoria elástica y ergonomía a largo plazo.'
                : 'While competitors lose comfort under the rigors of Arizona soil, UMO technology ensures long-term elastic memory and ergonomics.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Point 2: Operating Cycle */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Calendar className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {language === 'es' 
              ? '2. Temporada de Corte e Intensidad Operativa' 
              : '2. Mowing Season & Operational Intensity'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-zinc-700 bg-zinc-900/50"
          >
            <h3 className="text-xl font-bold text-white mb-4">{language === 'es' ? 'El Desafío Operativo' : 'The Operational Challenge'}</h3>
            <ul className="space-y-3 text-textSecondary text-sm">
              <li className="flex gap-2">
                <span className="text-unoOrange">•</span>
                {language === 'es' ? 'Uso ininterrumpido de 12 meses en Arizona (césped Bermuda y Ryegrass).' : 'Uninterrupted 12-month use in Arizona (Bermuda and Ryegrass).'}
              </li>
              <li className="flex gap-2">
                <span className="text-unoOrange">•</span>
                {language === 'es' ? 'California presenta estacionalidad marcada (Abril-Octubre).' : 'California presents marked seasonality (April-October).'}
              </li>
              <li className="flex gap-2">
                <span className="text-unoOrange">•</span>
                {language === 'es' ? 'La falta de inactividad estacional acelera la fatiga ergonómica.' : 'Lack of seasonal downtime accelerates ergonomic fatigue.'}
              </li>
            </ul>
          </motion.div>

          <div className="flex flex-col justify-center space-y-4">
            <div className="p-6 bg-unoOrange/10 border-l-4 border-unoOrange rounded-r-2xl">
              <h4 className="text-white font-bold mb-2">{language === 'es' ? 'Oportunidad Comercial' : 'Commercial Opportunity'}</h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                {language === 'es'
                  ? 'El uso continuo en Arizona convierte al estado en un mercado de reposición acelerada. La solución UMO soporta turnos prolongados sin colapso estructural, reduciendo el costo de propiedad para flotas comerciales.'
                  : 'Continuous use in Arizona makes the state an accelerated replacement market. The UMO solution withstands prolonged shifts without structural collapse, reducing ownership costs for commercial fleets.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Point 3: Thermal Degradation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Sun className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {language === 'es' 
              ? '3. Degradación Térmica y Radiación UV' 
              : '3. Thermal Degradation & UV Radiation'}
          </h2>
        </div>

        <div className="glass-card p-8 md:p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-unoOrange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="md:col-span-2 space-y-6">
              <p className="text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Los polímeros convencionales sufren fotodegradación por el choque térmico y la radiación solar, generando grietas que destruyen la espuma interna. Arizona registra más de 100 días al año sobre los 38°C con índices UV severos.'
                  : 'Conventional polymers suffer photodegradation from thermal shock and solar radiation, creating cracks that destroy internal foam. Arizona records over 100 days a year above 38°C with severe UV indices.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h5 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">{language === 'es' ? 'El Sol de Arizona' : 'Arizona Sun'}</h5>
                  <p className="text-xs text-textSecondary">
                    {language === 'es' ? 'Catalizador que tuesta y destruye materiales sintéticos ordinarios de forma prematura.' : 'Catalyst that toasts and destroys ordinary synthetic materials prematurely.'}
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h5 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">{language === 'es' ? 'Solución UMO' : 'UMO Solution'}</h5>
                  <p className="text-xs text-textSecondary">
                    {language === 'es' ? 'Malla 3D que funciona como un escudo de disipación térmica activa y circulación de aire.' : '3D mesh that functions as an active thermal dissipation shield and air circulation system.'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center text-center p-6 bg-unoOrange/10 rounded-2xl border border-unoOrange/20">
              <Sun className="w-12 h-12 text-unoOrange mb-4 animate-pulse" />
              <p className="text-white font-bold text-lg mb-2">{language === 'es' ? 'Resistencia UV' : 'UV Resistance'}</p>
              <p className="text-xs text-textSecondary leading-relaxed">
                {language === 'es' 
                  ? 'Mantiene la flexibilidad y el confort bajo el sol de Phoenix sin rigidizarse ni quebrarse.' 
                  : 'Maintains flexibility and comfort under the Phoenix sun without becoming stiff or cracking.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
