import { motion } from 'framer-motion';
import { Landmark, Ship, Zap, ShieldCheck, Info, ArrowRight, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ForeignInvestment = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 14' : 'Section 14'}
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
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'La inversión extranjera en manufactura crea clústeres industriales que atraen servicios logísticos especializados. Para UMO, entrar en un estado con alta IED industrial significa contar con una cadena de suministro y distribución ya establecida y eficiente.'
                  : 'Foreign investment in manufacturing creates industrial clusters that attract specialized logistics services. For UMO, entering a state with high industrial FDI means having an established and efficient supply and distribution chain.'}
              </p>
              <div className="bg-unoOrange/5 border border-unoOrange/10 p-6 rounded-xl flex gap-4 items-start mt-8 mb-8">
                <Info className="text-unoOrange shrink-0 w-5 h-5 mt-0.5" />
                <p className="text-sm text-white italic leading-relaxed">
                  {language === 'es'
                    ? 'El ecosistema de manufactura física está migrando hacia estados con menores costos regulatorios, creando oportunidades logísticas para componentes de precisión.'
                    : 'The physical manufacturing ecosystem is migrating toward states with lower regulatory costs, creating logistical opportunities for precision components.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 5.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Líder en manufactura avanzada; atrajo +$40,000M en 2025 para semiconductores y EVs (ACA, 2025). El "Silicon Desert" ofrece a UMO una red logística optimizada para el movimiento eficiente de repuestos.'
                    : 'Leader in advanced manufacturing; attracted +$40B in 2025 for semiconductors and EVs (ACA, 2025). The "Silicon Desert" offers UMO an optimized logistics network for efficient parts movement.'}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 4.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Volumen robusto ($18,000M en el último ciclo, SelectUSA, 2025), pero con crecimiento ralentizado por altos costos operativos. Prioriza la electrónica de consumo sobre maquinaria pesada de exteriores.'
                    : 'Robust volume ($18B in the last cycle, SelectUSA, 2025), but with growth slowed by high operating costs. It prioritizes consumer electronics over heavy outdoor machinery.'}
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
              {language === 'es' ? 'Sinergia Industrial' : 'Industrial Synergy'}
            </h3>
            <p className="text-sm text-white font-medium leading-relaxed mb-4">
              {language === 'es'
                ? 'La red de distribución en Arizona facilita el manejo de sillas de poliuretano sin los costos excesivos de California.'
                : 'Arizona\'s distribution network facilitates the handling of polyurethane seats without California\'s excessive costs.'}
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">{language === 'es' ? 'Infraestructura de vanguardia.' : 'Cutting-edge infrastructure.'}</p>
              </div>
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">{language === 'es' ? 'Clúster de movilidad eléctrica.' : 'Electric mobility cluster.'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Zonas de Comercio Exterior (FTZ) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Ship className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '2. Zonas de Comercio Exterior (FTZ) e Incentivos Fiscales' 
              : '2. Foreign-Trade Zones (FTZ) & Tax Incentives'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-unoOrange flex items-center gap-2">
               {language === 'es' ? 'Gestión Aduanera Eficiente' : 'Efficient Customs Management'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'Las FTZ permiten gestionar mercancías con beneficios arancelarios, postergando o reduciendo el pago de impuestos hasta que el producto se venda.'
                : 'FTZs allow managing goods with tariff benefits, deferring or reducing tax payments until the product is sold.'}
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-5 bg-zinc-900/80 rounded-xl border-l-4 border-unoOrange glass-card">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 5.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' ? 'Reducción de hasta el 75% en impuestos estatales a la propiedad personal. Entorno diseñado para minimizar costos de "aterrizaje".' : 'Reduction of up to 75% in state personal property taxes. Environment designed to minimize "landing" costs.'}
                </p>
              </div>
              <div className="p-5 bg-zinc-900/80 rounded-xl border-l-4 border-blue-400 glass-card">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 3.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' ? 'Puertos masivos pero alta carga impositiva estatal y complejidad burocrática. Costos de cumplimiento elevados (CBP, 2024).' : 'Massive ports but high state tax burden and bureaucratic complexity. High compliance costs (CBP, 2024).'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-unoOrange">{language === 'es' ? 'Oportunidad Logística' : 'Logistical Opportunity'}</h3>
            <div className="space-y-4">
              <div className="bg-unoOrange/10 p-8 rounded-2xl border border-unoOrange/20 glass-card flex flex-col justify-center h-full">
                <p className="text-sm text-white font-bold mb-3 uppercase tracking-wider">
                  {language === 'es' ? 'Ventaja en Flujo de Caja' : 'Cash Flow Advantage'}
                </p>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Utilizar una FTZ en Arizona permitiría a UMO mantener inventario cerca de las empresas de paisajismo con costo fiscal mínimo y rapidez de entrega.'
                    : 'Using an FTZ in Arizona would allow UMO to maintain inventory near landscaping companies with minimal tax cost and fast delivery.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IED en Electromovilidad */}
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

        <div className="glass-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-unoOrange/5 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/10 pb-3 inline-block">
                {language === 'es' ? 'Madurez del Mercado' : 'Market Maturity'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'La inversión en vehículos eléctricos (EV) define el perfil tecnológico del mercado. Los usuarios de podadoras eléctricas comparten este ADN innovador.'
                  : 'Investment in electric vehicles (EV) defines the technological profile of the market. Electric mower users share this innovative DNA.'}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">CALIFORNIA:</span>
                    <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
                  </div>
                  <p className="text-sm text-textSecondary">{language === 'es' ? 'Líder indiscutible en capital para sostenibilidad.' : 'Undisputed leader in sustainability capital.'}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <span className="text-unoOrange font-bold text-xs uppercase tracking-widest">ARIZONA:</span>
                    <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 4.5</span>
                  </div>
                  <p className="text-sm text-textSecondary">{language === 'es' ? 'Centro de producción masiva de baterías y EVs.' : 'Hub for mass production of batteries and EVs.'}</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 relative glass-card flex flex-col justify-center">
              <ShieldCheck className="absolute top-4 right-4 text-unoOrange w-6 h-6 opacity-30" />
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <Zap className="text-unoOrange w-6 h-6" />
                {language === 'es' ? 'Innovación UMO' : 'UMO Innovation'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed mb-6">
                {language === 'es'
                  ? 'La tecnología de UMO resuena con un cliente que valora la eficiencia y la innovación. No es una moda, sino una realidad industrial sustentada por IED masiva.'
                  : 'UMO technology resonates with a customer who values efficiency and innovation. It is not a fad, but an industrial reality supported by massive FDI.'}
              </p>
              <div className="p-4 bg-unoOrange/10 rounded-xl border-l-4 border-unoOrange">
                <p className="text-sm text-white font-medium italic">
                  {language === 'es'
                    ? '"Malla 3D disipadora de calor: perfecta para el perfil de usuario EV en estados de alta insolación."'
                    : '"3D heat-dissipating mesh: perfect for the EV user profile in high-insolation states."'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
