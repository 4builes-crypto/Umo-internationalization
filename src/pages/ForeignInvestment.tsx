import { motion } from 'framer-motion';
import { Landmark, Zap, ShieldCheck, ArrowRight, TrendingUp, Tractor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ForeignInvestment = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 13' : 'Section 13'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Inversión Extranjera' : 'Foreign Investment'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Análisis de la Inversión Extranjera Directa (IED), zonas de comercio exterior e incentivos para la integración de UMO en el ecosistema industrial estadounidense.'
            : 'Analysis of Foreign Direct Investment (FDI), foreign-trade zones, and incentives for UMO\'s integration into the US industrial ecosystem.'}
        </p>
      </header>

      {/* 1. Concentración de IED en Manufactura Avanzada */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Landmark className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '1. Concentración de IED en Manufactura Avanzada' 
              : '1. FDI Concentration in Advanced Manufacturing'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-2">
                {language === 'es' ? 'Concepto y enfoque UMO' : 'Concept & UMO Focus'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Mide la densidad del tejido industrial mecánico y logístico. Para UMO, un entorno con alta manufactura avanzada facilita el soporte técnico y el ensamblaje local al reducir la dependencia de importaciones de piezas secundarias (SelectUSA, 2024).'
                  : 'Measures the density of the mechanical and logistical industrial fabric. For UMO, an environment with high advanced manufacturing facilitates technical support and local assembly by reducing reliance on secondary parts imports (SelectUSA, 2024).'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 5.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Se consolida como el núcleo manufacturero del suroeste, garantizando infraestructura física B2B robusta gracias a la atracción de capitales para proyectos de alta tecnología (Arizona Commerce Authority, 2024).'
                    : 'Establishes itself as the manufacturing hub of the Southwest, guaranteeing robust physical B2B infrastructure by attracting capital for high-tech projects (Arizona Commerce Authority, 2024).'}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 3.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Orienta su IED principalmente al sector digital y de software, lo que reduce la disponibilidad de espacios industriales tradicionales y eleva sus costos operativos (U.S. Bureau of Economic Analysis, 2025).'
                    : 'Directs its FDI primarily to the digital and software sectors, reducing the availability of traditional industrial spaces and raising operating costs (U.S. Bureau of Economic Analysis, 2025).'}
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5 glass-card p-6 border-unoOrange/30 bg-unoOrange/5 relative overflow-hidden h-full flex flex-col justify-center"
          >
            <TrendingUp className="absolute -right-4 -top-4 w-24 h-24 text-unoOrange/10" />
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <ShieldCheck className="text-unoOrange w-6 h-6" /> 
              {language === 'es' ? 'Oportunidad Estratégica' : 'Strategic Opportunity'}
            </h3>
            <p className="text-sm text-white font-medium leading-relaxed mb-4">
              {language === 'es'
                ? 'Arizona ofrece a UMO la base operativa idónea para la distribución de los sillines y el manejo de componentes físicos a menores costos que el mercado californiano.'
                : 'Arizona offers UMO the ideal operational base for seat distribution and physical component handling at lower costs than the Californian market.'}
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">
                  {language === 'es' ? 'Clúster industrial en expansión.' : 'Expanding industrial cluster.'}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">
                  {language === 'es' ? 'Menores costos operativos B2B.' : 'Lower operational B2B costs.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Inversión en el Sector Agrícola y Paisajismo Comercial */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Tractor className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '2. Inversión en el Sector Agrícola y Paisajismo Comercial' 
              : '2. Investment in Agriculture & Commercial Landscaping'}
          </h2>
        </div>

        <div className="glass-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-unoOrange/5 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/10 pb-3 inline-block">
                {language === 'es' ? 'Concepto y enfoque UMO' : 'Concept & UMO Focus'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Evalúa el flujo de capital público y privado destinado al mantenimiento de infraestructura verde, desarrollos urbanos corporativos y mecanización del campo. Este indicador mide la actividad y dimensión del mercado final que utiliza activamente podadoras de conducción (ride-on mowers) de uso intensivo.'
                  : 'Evaluates the flow of public and private capital destined for green infrastructure maintenance, corporate urban developments, and field mechanization. This indicator measures the activity and scale of the end market that actively uses intensive-use ride-on mowers.'}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">CALIFORNIA:</span>
                    <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
                  </div>
                  <p className="text-sm text-textSecondary">
                    {language === 'es' 
                      ? 'Representa el mercado de paisajismo comercial más grande del país, impulsado por desarrollos corporativos, complejos turísticos y agricultura tecnificada de gran escala (National Association of Landscape Professionals [NALP], 2024).' 
                      : 'Represents the largest commercial landscaping market in the country, driven by corporate developments, resorts, and large-scale high-tech agriculture (National Association of Landscape Professionals [NALP], 2024).'}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <span className="text-unoOrange font-bold text-xs uppercase tracking-widest">ARIZONA:</span>
                    <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 4.0</span>
                  </div>
                  <p className="text-sm text-textSecondary">
                    {language === 'es' 
                      ? 'Experimenta un crecimiento acelerado por la expansión inmobiliaria en Phoenix, aunque su escala agrícola tradicional es menor y condicionada por la gestión hídrica (U.S. Department of Agriculture [USDA], 2025).' 
                      : 'Experiences accelerated growth due to real estate expansion in Phoenix, though its traditional agricultural scale is smaller and conditioned by water management (U.S. Department of Agriculture [USDA], 2025).'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 relative glass-card flex flex-col justify-center">
              <Landmark className="absolute top-4 right-4 text-unoOrange w-6 h-6 opacity-30" />
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <TrendingUp className="text-unoOrange w-6 h-6" />
                {language === 'es' ? 'Oportunidad en Aftermarket' : 'Aftermarket Opportunity'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed mb-6">
                {language === 'es'
                  ? 'La continua inversión en estas industrias asegura una demanda estable en el mercado de repuestos o aftermarket. El uso prolongado de la maquinaria bajo condiciones climáticas exigentes convierte al sillín de poliuretano y malla 3D de UMO en un componente crítico para mitigar la fatiga del operario y optimizar la productividad de las flotas comerciales.'
                  : 'Continuous investment in these industries ensures stable demand in the aftermarket. Prolonged machinery use under demanding climate conditions makes UMO\'s polyurethane and 3D mesh seat a critical component for mitigating operator fatigue and optimizing commercial fleet productivity.'}
              </p>
              <div className="p-4 bg-unoOrange/10 rounded-xl border-l-4 border-unoOrange">
                <p className="text-sm text-white font-medium italic">
                  {language === 'es'
                    ? 'La ergonomía mitiga el desgaste físico en operarios expuestos a jornadas intensivas de mantenimiento.'
                    : 'Ergonomics mitigates physical wear in operators exposed to intensive maintenance shifts.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IED en Electromovilidad y Tecnologías Limpias */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Zap className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '3. IED en Electromovilidad y Tecnologías Limpias' 
              : '3. FDI in Electromobility & Clean Technologies'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-2">
                {language === 'es' ? 'Concepto y enfoque UMO' : 'Concept & UMO Focus'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Evalúa la velocidad de adopción de tecnologías sostenibles. Las podadoras de conducción eléctricas siguen esta misma tendencia de descarbonización; un entorno con alta inversión en movilidad limpia valida el mercado para los componentes especializados de UMO.'
                  : 'Evaluates the adoption rate of sustainable technologies. Electric ride-on mowers follow this same decarbonization trend; an environment with high investment in clean mobility validates the market for UMO\'s specialized components.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 1.2</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Crece con fuerza mediante inversiones en plantas de baterías, expandiendo un canal de repuestos dinámico y con menor saturación competitiva (Arizona Commerce Authority, 2024).'
                    : 'Growing with strength through battery plant investments, expanding a dynamic spare parts channel with lower competitive saturation (Arizona Commerce Authority, 2024).'}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Lidera en capital para descarbonización, consolidando flotas de paisajismo comerciales y municipales que ya operan por regulación bajo esquemas cero emisiones (California Governor\'s Office of Business and Economic Development, 2025).'
                    : 'Leads in decarbonization capital, consolidating commercial and municipal landscaping fleets that already operate by regulation under zero-emission schemes (California Governor\'s Office of Business and Economic Development, 2025).'}
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5 glass-card p-6 border-unoOrange/30 bg-unoOrange/5 relative overflow-hidden h-full flex flex-col justify-center"
          >
            <Zap className="absolute -right-4 -top-4 w-24 h-24 text-unoOrange/10" />
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <ShieldCheck className="text-unoOrange w-6 h-6" /> 
              {language === 'es' ? 'Disipación Térmica' : 'Thermal Dissipation'}
            </h3>
            <p className="text-sm text-white font-medium leading-relaxed mb-4">
              {language === 'es'
                ? 'El flujo de capital asegura que la demanda de maquinaria eléctrica responda a un cambio estructural permanente. La tecnología de disipación térmica de UMO se alinea con este perfil de usuario que prioriza la innovación y el ciclo de vida extendido del producto.'
                : 'The flow of capital ensures that demand for electric machinery responds to a permanent structural shift. UMO\'s thermal dissipation technology aligns with this user profile prioritizing innovation and extended product life cycles.'}
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">
                  {language === 'es' ? 'Ideal para transición ecológica.' : 'Ideal for green transition.'}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">
                  {language === 'es' ? 'Componentes de alta durabilidad.' : 'High-durability components.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
