import { motion } from 'framer-motion';
import { Mountain, Calendar, Sun, ShieldCheck, Zap, Info, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const TechEnvironmental = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 11' : 'Section 11'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Análisis Tecnológico y Geoambiental' : 'Technological & Environmental Analysis'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Estudio profundo de los factores críticos de interacción entre el terreno y la tecnología de UMO en los mercados de Arizona y California.'
            : 'Deep study of the critical interaction factors between terrain and UMO technology in the Arizona and California markets.'}
        </p>
      </header>

      {/* 1. Topografía, Compactación y WBV */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Mountain className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '1. Topografía, Compactación del Suelo y Estrés Mecánico por Vibración (WBV)' 
              : '1. Topography, Soil Compaction & Whole-Body Vibration (WBV)'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-4">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'El análisis de la interacción física entre el vehículo y el terreno es un factor crítico para determinar la tasa de sustitución de componentes en maquinaria de paisajismo comercial. Las podadoras eléctricas de tipo ride-on, al carecer de sistemas de suspensión independientes complejos, dependen casi en su totalidad de los neumáticos y del diseño del asiento para amortiguar las irregularidades del entorno.'
                  : 'Physical interaction analysis between vehicle and terrain is a critical factor in determining the replacement rate of components in commercial landscaping machinery. Ride-on electric mowers, lacking complex independent suspension systems, rely almost entirely on tires and seat design to dampen environmental irregularities.'}
              </p>
              <div className="bg-unoOrange/5 border border-unoOrange/10 p-4 rounded-xl flex gap-3 items-start mt-4">
                <Info className="text-unoOrange shrink-0 w-4 h-4 mt-0.5" />
                <p className="text-xs text-white italic leading-relaxed">
                  {language === 'es'
                    ? 'Este fenómeno se clasifica técnicamente como Vibración de Cuerpo Completo (Whole-Body Vibration o WBV) y es el principal responsable de la fatiga estructural de las sillas convencionales.'
                    : 'This phenomenon is technically classified as Whole-Body Vibration (WBV) and is the main culprit for structural fatigue in conventional seats.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-5 border-zinc-800">
                <h4 className="text-unoOrange font-black mb-2 tracking-tighter uppercase text-[10px]">ARIZONA</h4>
                <p className="text-xs text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'El área metropolitana presenta caliche en el subsuelo, una capa cementada con dureza equivalente a la del hormigón (NRCS, 2024).'
                    : 'The metropolitan area features caliche in the subsoil, a cemented layer with hardness equivalent to concrete (NRCS, 2024).'}
                </p>
                <p className="text-[10px] text-unoOrange/80 mt-2 font-bold uppercase">
                  {language === 'es' ? '→ Precipita el colapso de materiales.' : '→ Precipitates material collapse.'}
                </p>
              </div>
              <div className="glass-card p-5 border-zinc-800">
                <h4 className="text-blue-400 font-black mb-2 tracking-tighter uppercase text-[10px]">CALIFORNIA</h4>
                <p className="text-xs text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Suelos aluviales más profundos, blandos y porosos (NRCS, 2024). El impacto por rigidez vertical es significativamente menor.'
                    : 'Deeper, softer, and more porous alluvial soils (NRCS, 2024). Vertical stiffness impact is significantly lower.'}
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5 glass-card p-6 border-unoOrange/20 bg-unoOrange/5 relative overflow-hidden"
          >
            <Zap className="absolute -right-4 -top-4 w-20 h-20 text-unoOrange/10" />
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="text-unoOrange w-5 h-5" /> 
              {language === 'es' ? 'Solución UMO' : 'UMO Solution'}
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-white font-medium leading-relaxed">
                {language === 'es'
                  ? 'Tecnología de poliuretano de alta resiliencia combinada con mallas 3D estructurales.'
                  : 'High-resilience polyurethane technology combined with structural 3D mesh.'}
              </p>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                  <p className="text-xs text-textSecondary">{language === 'es' ? 'Neutralización activa de vibraciones.' : 'Active vibration neutralization.'}</p>
                </div>
                <div className="flex gap-2">
                  <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                  <p className="text-xs text-textSecondary">{language === 'es' ? 'Memoria elástica a largo plazo.' : 'Long-term elastic memory.'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Temporada de Corte e Intensidad */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Calendar className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '2. Temporada de Corte e Intensidad Operativa' 
              : '2. Mowing Season & Operational Intensity'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-unoOrange">{language === 'es' ? 'El Desafío' : 'The Challenge'}</h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'La continuidad anual del servicio define las horas de uso. A mayor rodaje continuo, el desgaste por fricción mecánica se acelera exponencialmente.'
                : 'Annual service continuity defines usage hours. More continuous running means mechanical friction wear accelerates exponentially.'}
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-zinc-900/80 rounded-xl border-l-2 border-unoOrange">
                <h4 className="text-white font-bold text-xs mb-1">ARIZONA</h4>
                <p className="text-[11px] text-textSecondary">
                  {language === 'es' ? 'Ciclo ininterrumpido de 12 meses. Flotas operan a máxima capacidad constante.' : 'Uninterrupted 12-month cycle. Fleets operate at constant maximum capacity.'}
                </p>
              </div>
              <div className="p-4 bg-zinc-900/80 rounded-xl border-l-2 border-blue-400">
                <h4 className="text-white font-bold text-xs mb-1">CALIFORNIA</h4>
                <p className="text-[11px] text-textSecondary">
                  {language === 'es' ? 'Estacionalidad mediterránea. Actividad intensiva entre abril y octubre.' : 'Mediterranean seasonality. Intensive activity between April and October.'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-unoOrange">{language === 'es' ? 'Disrupción UMO' : 'UMO Disruption'}</h3>
            <div className="bg-unoOrange/10 p-6 rounded-2xl border border-unoOrange/20">
              <p className="text-sm text-white font-bold mb-2">
                {language === 'es' ? 'Reposición Acelerada' : 'Accelerated Replacement'}
              </p>
              <p className="text-xs text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'El uso de 12 meses en Arizona somete a los asientos convencionales a un estrés diario, generando una demanda constante. UMO retiene su memoria elástica a pesar del uso ininterrumpido.'
                  : '12-month use in Arizona subjects conventional seats to daily stress, generating constant demand. UMO retains its elastic memory despite uninterrupted use.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Degradación Térmica y UV */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Sun className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '3. Degradación Térmica y Radiación UV' 
              : '3. Thermal Degradation & UV Radiation'}
          </h2>
        </div>

        <div className="glass-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-unoOrange/5 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 inline-block">
                {language === 'es' ? 'Desafío Geoambiental' : 'Geoenvironmental Challenge'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Los polímeros convencionales sufren fotodegradación y choque térmico. La radiación solar genera grietas que permiten la filtración de humedad.'
                  : 'Conventional polymers suffer from photodegradation and thermal shock. Solar radiation creates cracks that allow moisture filtration.'}
              </p>
              <div className="flex gap-6">
                <div>
                  <span className="text-unoOrange font-bold text-[10px] uppercase">ARIZONA:</span>
                  <p className="text-[10px] text-textSecondary">Extremo (+100 días &gt; 38°C) con UV severo.</p>
                </div>
                <div>
                  <span className="text-blue-400 font-bold text-[10px] uppercase">CALIFORNIA:</span>
                  <p className="text-[10px] text-textSecondary">Insolación y UV en rangos moderados.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 relative">
              <Zap className="absolute top-2 right-2 text-unoOrange w-4 h-4 opacity-30" />
              <h3 className="text-base font-bold text-white mb-3">{language === 'es' ? 'Resiliencia Activa' : 'Active Resilience'}</h3>
              <p className="text-xs text-textSecondary leading-relaxed mb-4">
                {language === 'es'
                  ? 'La malla 3D funciona como un escudo térmico activo, permitiendo la circulación de aire constante.'
                  : 'The 3D mesh functions as an active thermal shield, allowing constant air circulation.'}
              </p>
              <p className="text-[10px] text-white font-medium italic border-l border-unoOrange pl-3">
                {language === 'es'
                  ? '"Mientras la competencia se quiebra bajo el sol de Phoenix, UMO resiste."'
                  : '"While competition cracks under the Phoenix sun, UMO resists."'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
