import { motion } from 'framer-motion';
import { Mountain, Calendar, Sun, ShieldCheck, Zap, Info, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const TechEnvironmental = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-16 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <header className="space-y-6">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 11' : 'Section 11'}
        </h2>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white border-b border-glassBorder pb-6">
          {language === 'es' ? 'Análisis Tecnológico y Geoambiental' : 'Technological & Environmental Analysis'}
        </h1>
        <p className="text-textSecondary max-w-4xl leading-relaxed text-xl">
          {language === 'es'
            ? 'Estudio profundo de los factores críticos de interacción entre el terreno y la tecnología de UMO en los mercados de Arizona y California.'
            : 'Deep study of the critical interaction factors between terrain and UMO technology in the Arizona and California markets.'}
        </p>
      </header>

      {/* 1. Topografía, Compactación y WBV */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-unoOrange pl-6 py-2">
          <div className="w-14 h-14 rounded-2xl bg-unoOrange/20 flex items-center justify-center text-unoOrange shadow-lg shadow-unoOrange/10">
            <Mountain className="w-7 h-7" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            {language === 'es' 
              ? '1. Topografía, Compactación del Suelo y Estrés Mecánico por Vibración (WBV)' 
              : '1. Topography, Soil Compaction & Whole-Body Vibration (WBV)'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'El análisis de la interacción física entre el vehículo y el terreno es un factor crítico para determinar la tasa de sustitución de componentes en maquinaria de paisajismo comercial. Las podadoras eléctricas de tipo ride-on, al carecer de sistemas de suspensión independientes complejos, dependen casi en su totalidad de los neumáticos y del diseño del asiento para amortiguar las irregularidades del entorno.'
                  : 'Physical interaction analysis between vehicle and terrain is a critical factor in determining the replacement rate of components in commercial landscaping machinery. Ride-on electric mowers, lacking complex independent suspension systems, rely almost entirely on tires and seat design to dampen environmental irregularities.'}
              </p>
              <div className="bg-unoOrange/5 border border-unoOrange/20 p-5 rounded-xl flex gap-4 items-start">
                <Info className="text-unoOrange shrink-0 mt-1" />
                <p className="text-sm text-white italic">
                  {language === 'es'
                    ? 'Este fenómeno se clasifica técnicamente como Vibración de Cuerpo Completo (Whole-Body Vibration o WBV) y es el principal responsable de la fatiga estructural de las sillas convencionales.'
                    : 'This phenomenon is technically classified as Whole-Body Vibration (WBV) and is the main culprit for structural fatigue in conventional seats.'}
                </p>
              </div>
            </div>

            {/* Arizona vs California Comparison Boxes - Improved to avoid overlap */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-colors">
                <h4 className="text-unoOrange font-black mb-3 tracking-tighter uppercase text-sm">ARIZONA</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'El área metropolitana presenta una de las condiciones edáficas más severas debido a la presencia generalizada de caliche en el subsuelo. El caliche es una capa donde las partículas de tierra están cementadas con carbonato de calcio, creando una estructura con una dureza equivalente a la del hormigón (NRCS, 2024).'
                    : 'The metropolitan area presents some of the most severe soil conditions due to the widespread presence of caliche in the subsoil. Caliche is a layer where soil particles are cemented with calcium carbonate, creating a structure with hardness equivalent to concrete (NRCS, 2024).'}
                </p>
                <p className="text-xs text-unoOrange/80 mt-3 font-medium">
                  {language === 'es' ? '→ Genera microvibraciones constantes que precipitan el colapso de materiales.' : '→ Generates constant microvibrations that precipitate material collapse.'}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <h4 className="text-blue-400 font-black mb-3 tracking-tighter uppercase text-sm">CALIFORNIA</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Domina una topografía de valles fluviales con suelos aluviales más profundos, blandos y porosos (NRCS, 2024). Aunque la periferia presenta colinas que añaden esfuerzos de carga lateral al chasis, el impacto por rigidez vertical es significativamente menor.'
                    : 'A topography of river valleys dominates with deeper, softer, and more porous alluvial soils (NRCS, 2024). Although the periphery features hills that add lateral load stresses to the chassis, the vertical stiffness impact is significantly lower.'}
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5 glass-card p-8 border-unoOrange/40 bg-unoOrange/5 relative overflow-hidden h-full flex flex-col"
          >
            <Zap className="absolute -right-8 -top-8 w-40 h-40 text-unoOrange/10 rotate-12" />
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <ShieldCheck className="text-unoOrange w-8 h-8" /> 
              {language === 'es' ? 'Solución Tecnológica UMO' : 'UMO Technological Solution'}
            </h3>
            <div className="space-y-6 flex-1">
              <p className="text-white text-base leading-relaxed font-medium">
                {language === 'es'
                  ? 'Nuestras sillas incorporan tecnología avanzada de poliuretano de alta resiliencia combinada con mallas 3D de ingeniería estructural.'
                  : 'Our seats incorporate advanced high-resilience polyurethane technology combined with structural engineering 3D mesh.'}
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <ArrowRight className="text-unoOrange shrink-0 w-5 h-5" />
                  <p className="text-sm text-textSecondary">
                    {language === 'es' ? 'Neutralización activa de ondas de choque y vibraciones mecánicas.' : 'Active neutralization of shock waves and mechanical vibrations.'}
                  </p>
                </div>
                <div className="flex gap-3">
                  <ArrowRight className="text-unoOrange shrink-0 w-5 h-5" />
                  <p className="text-sm text-textSecondary">
                    {language === 'es' ? 'Mantenimiento de la memoria elástica del asiento a largo plazo.' : 'Long-term maintenance of the seat\'s elastic memory.'}
                  </p>
                </div>
                <div className="flex gap-3">
                  <ArrowRight className="text-unoOrange shrink-0 w-5 h-5" />
                  <p className="text-sm text-textSecondary">
                    {language === 'es' ? 'Disipación eficiente del calor solar en jornadas extensas.' : 'Efficient solar heat dissipation on long shifts.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Temporada de Corte e Intensidad */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-unoOrange pl-6 py-2">
          <div className="w-14 h-14 rounded-2xl bg-unoOrange/20 flex items-center justify-center text-unoOrange shadow-lg shadow-unoOrange/10">
            <Calendar className="w-7 h-7" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            {language === 'es' 
              ? '2. Extensión de la Temporada de Corte e Intensidad del Ciclo Operativo' 
              : '2. Mowing Season Extension & Operating Cycle Intensity'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-unoOrange">{language === 'es' ? 'El Desafío Operativo' : 'The Operational Challenge'}</h3>
            <p className="text-textSecondary leading-relaxed text-lg">
              {language === 'es'
                ? 'La continuidad anual del servicio de paisajismo define directamente las horas de uso acumuladas por las podadoras ride-on. A mayor cantidad de horas de rodaje continuo, la fatiga ergonómica y el desgaste por fricción mecánica del asiento se aceleran exponencialmente.'
                : 'Annual landscaping service continuity directly defines the accumulated usage hours for ride-on mowers. More continuous running hours mean ergonomic fatigue and mechanical friction wear on the seat accelerate exponentially.'}
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-zinc-900/80 rounded-xl border-l-4 border-unoOrange">
                <h4 className="text-white font-bold mb-2">ARIZONA</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Presenta un ciclo operativo ininterrumpido de prácticamente 12 meses al año. La dinámica de mantenimiento exige el manejo de césped de estación cálida (Bermuda) durante el verano y una resiembra obligatoria con césped de estación fría (Ryegrass) para los meses de invierno (Arizona Cooperative Extension, 2021). Las flotas comerciales operan a máxima capacidad de forma constante.'
                    : 'Presents an uninterrupted operating cycle of practically 12 months a year. Maintenance dynamics require warm-season grass (Bermuda) management during the summer and mandatory cold-season grass (Ryegrass) overseeding for the winter months (Arizona Cooperative Extension, 2021). Commercial fleets operate at constant maximum capacity.'}
                </p>
              </div>
              <div className="p-6 bg-zinc-900/80 rounded-xl border-l-4 border-blue-400">
                <h4 className="text-white font-bold mb-2">CALIFORNIA</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Muestra una estacionalidad climática mediterránea muy marcada. La actividad intensiva de corte se concentra estrictamente entre abril y octubre, registrando una desaceleración drástica o cese invernal debido al letargo en el crecimiento del césped por las bajas temperaturas (UC ANR, 2023).'
                    : 'Shows a marked Mediterranean climatic seasonality. Intensive mowing activity is strictly concentrated between April and October, recording a drastic deceleration or winter halt due to grass growth dormancy from low temperatures (UC ANR, 2023).'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-unoOrange">{language === 'es' ? 'Oportunidad Comercial y Disrupción' : 'Commercial Opportunity & Disruption'}</h3>
            <div className="space-y-6">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-unoOrange/5 rounded-full blur-2xl group-hover:bg-unoOrange/10 transition-colors" />
                <p className="text-white font-bold mb-4 text-lg">
                  {language === 'es' ? 'Mercado de Reposición Acelerada' : 'Accelerated Replacement Market'}
                </p>
                <p className="text-base text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'El uso continuo de 12 meses en Arizona somete a los asientos convencionales a un estrés por fatiga diario, convirtiendo al estado en un mercado con una demanda de sustitución altamente acelerada y constante.'
                    : 'The continuous 12-month use in Arizona subjects conventional seats to daily fatigue stress, making the state a market with highly accelerated and constant replacement demand.'}
                </p>
              </div>
              <div className="bg-unoOrange/10 p-8 rounded-3xl border border-unoOrange/20 relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-unoOrange/10 rounded-full blur-2xl" />
                <p className="text-unoOrange font-bold mb-4 text-lg">
                  {language === 'es' ? 'La Ventaja UMO' : 'The UMO Advantage'}
                </p>
                <p className="text-base text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Nuestra integración de poliuretano de alta resiliencia y malla 3D está diseñada para soportar turnos operativos prolongados sin colapsar. La tecnología UMO retiene su memoria elástica a pesar del uso ininterrumpido.'
                    : 'Our integration of high-resilience polyurethane and 3D mesh is designed to withstand prolonged operational shifts without collapsing. UMO technology retains its elastic memory despite uninterrupted use.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Degradación Térmica y UV */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-unoOrange pl-6 py-2">
          <div className="w-14 h-14 rounded-2xl bg-unoOrange/20 flex items-center justify-center text-unoOrange shadow-lg shadow-unoOrange/10">
            <Sun className="w-7 h-7" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            {language === 'es' 
              ? '3. Índice de Degradación Térmica y Exposición a Radiación UV' 
              : '3. Thermal Degradation Index & UV Radiation Exposure'}
          </h2>
        </div>

        <div className="glass-card p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-unoOrange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 relative z-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider border-b border-white/10 pb-4">
                  {language === 'es' ? 'El Desafío Geoambiental' : 'The Geoenvironmental Challenge'}
                </h3>
                <p className="text-lg text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Los polímeros, vinilos y poliuretanos utilizados en los asientos convencionales sufren fotodegradación y choque térmico. La radiación solar rompe los enlaces químicos de los revestimientos, eliminando su elasticidad y generando grietas.'
                    : 'Conventional polymers, vinyls, and polyurethanes used in seats suffer from photodegradation and thermal shock. Solar radiation breaks coating chemical bonds, eliminating elasticity and creating cracks.'}
                </p>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                  <p className="text-sm text-textSecondary italic">
                    {language === 'es'
                      ? 'Un asiento cuarteado permite la filtración de humedad hacia la espuma interna, destruyendo la ergonomía y acelerando la necesidad de cambio.'
                      : 'A cracked seat allows moisture to seep into the inner foam, destroying ergonomics and accelerating the need for replacement.'}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <span className="text-unoOrange font-black text-sm tracking-widest uppercase">ARIZONA</span>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    {language === 'es' ? 'Clima desértico extremo (+100 días > 38°C) con radiación UV severa casi todo el año (NOAA, 2025). El sol actúa como un catalizador que destruye materiales ordinarios.' : 'Extreme desert climate (+100 days > 38°C) with severe UV radiation almost year-round (NOAA, 2025). The sun acts as a catalyst that destroys ordinary materials.'}
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="text-blue-400 font-black text-sm tracking-widest uppercase">CALIFORNIA</span>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    {language === 'es' ? 'Aunque experimenta veranos secos y cálidos, los niveles anuales de insolación y exposición UV se mantienen en rangos moderados.' : 'Although it experiences dry and warm summers, annual insolation and UV exposure levels remain in moderate ranges.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8 bg-zinc-900/50 p-10 rounded-[3rem] border border-white/5 shadow-2xl relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-unoOrange rounded-2xl flex items-center justify-center text-white shadow-xl shadow-unoOrange/20">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{language === 'es' ? 'Disrupción de UMO' : 'UMO Disruption'}</h3>
                <p className="text-base text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'El clima extremo de Arizona funciona como un "destructor natural" de la competencia, generando un mercado de reposición forzada muy lucrativo.'
                    : 'Arizona\'s extreme climate functions as a "natural destroyer" of competition, generating a very lucrative forced replacement market.'}
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-unoOrange/10 p-6 rounded-2xl border border-unoOrange/20">
                  <p className="text-sm text-white leading-relaxed">
                    {language === 'es'
                      ? 'La estructura de la malla 3D permite la circulación constante de aire, evitando que el calor solar se acumule. Mientras la competencia se rigidiza y se quiebra, UMO resiste el impacto UV sin perder flexibilidad.'
                      : 'The 3D mesh structure allows constant air circulation, preventing solar heat accumulation. While the competition becomes stiff and cracks, UMO resists UV impact without losing flexibility.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
