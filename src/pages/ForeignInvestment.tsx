import { motion } from 'framer-motion';
import { Landmark, Zap, ShieldCheck, Info, ArrowRight, TrendingUp, Tractor } from 'lucide-react';
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
                    ? 'Líder en manufactura avanzada; atrajo +$40,000M en 2025 para semiconductores y EVs (ACA). El "Silicon Desert" ofrece a UMO una red logística optimizada para el movimiento eficiente de repuestos.'
                    : 'Leader in advanced manufacturing; attracted +$40B in 2025 for semiconductors and EVs (ACA). The "Silicon Desert" offers UMO an optimized logistics network for efficient parts movement.'}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 4.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Volumen robusto ($18,000M en el último ciclo, SelectUSA), pero con crecimiento ralentizado por altos costos operativos. Prioriza la electrónica de consumo sobre maquinaria pesada de exteriores.'
                    : 'Robust volume ($18B in the last cycle, SelectUSA), but with growth slowed by high operating costs. It prioritizes consumer electronics over heavy outdoor machinery.'}
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

      {/* 2. IED en Ecosistemas de Movilidad y Versatilidad de Mercado */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Zap className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '2. IED en Ecosistemas de Movilidad y Versatilidad de Mercado' 
              : '2. FDI in Mobility Ecosystems & Market Versatility'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Este indicador evalúa el flujo de capital hacia la fabricación de componentes de energía y propulsión. La relevancia para UMO radica en que estos ecosistemas validan su tecnología de vanguardia, mientras que la compatibilidad universal de sus sillas le permite capturar tanto el mercado emergente de podadoras eléctricas como el consolidado mercado de combustión interna.'
                  : 'This indicator evaluates the flow of capital toward the manufacturing of energy and propulsion components. The relevance for UMO lies in how these ecosystems validate its cutting-edge technology, while the universal compatibility of its seats allows it to capture both the emerging electric mower market and the consolidated internal combustion market.'}
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
                    ? 'Centro neurálgico de baterías y EVs; captó inversiones >$15,000M en nuevas plantas (ACA). Como estado fabricante, UMO neutraliza la vibración mecánica severa en motores a gasolina y disipa el calor en sistemas eléctricos.'
                    : 'Neuralgic center for batteries and EVs; captured >$15B in new plants (ACA). As a manufacturing state, UMO neutralizes severe mechanical vibration in gasoline engines and dissipates heat in electrical systems.'}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 4.5</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Líder en infraestructura de transporte limpio (CEC). Su versatilidad permite penetrar masivamente en flotas de gasolina actuales mientras se establece como estándar ergonómico para la transición eléctrica.'
                    : 'Leader in clean transport infrastructure (CEC). Its versatility allows for massive penetration in current gasoline fleets while establishing itself as the ergonomic standard for the electric transition.'}
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
              {language === 'es' ? 'Validación Tecnológica' : 'Technological Validation'}
            </h3>
            <p className="text-sm text-white font-medium leading-relaxed mb-4">
              {language === 'es'
                ? 'La inversión masiva en movilidad eléctrica valida la malla 3D de UMO como un componente de alta tecnología.'
                : 'Massive investment in electric mobility validates UMO\'s 3D mesh as a high-tech component.'}
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">{language === 'es' ? 'Compatibilidad universal.' : 'Universal compatibility.'}</p>
              </div>
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">{language === 'es' ? 'Estándar para la transición.' : 'Standard for the transition.'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* 3. Inversión en el Sector Agrícola y Paisajismo Comercial */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Tractor className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '3. Inversión en el Sector Agrícola y Paisajismo Comercial' 
              : '3. Investment in Agriculture & Commercial Landscaping'}
          </h2>
        </div>

        <div className="glass-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-unoOrange/5 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/10 pb-3 inline-block">
                {language === 'es' ? 'Fuerza del Mercado' : 'Market Strength'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Este factor mide el capital inyectado en industrias que dependen del uso intensivo de maquinaria de corte. Flotas más grandes implican una demanda superior de repuestos de alta calidad.'
                  : 'This factor measures capital injected into industries depending on intensive use of cutting machinery. Larger fleets imply higher demand for high-quality spare parts.'}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">CALIFORNIA:</span>
                    <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
                  </div>
                  <p className="text-sm text-textSecondary">
                    {language === 'es' 
                      ? 'Potencia agrícola ($5,000M en 2025, USDA). Mercado masivo para compatibilidad universal.' 
                      : 'Agricultural powerhouse ($5B in 2025, USDA). Massive market for universal compatibility.'}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <span className="text-unoOrange font-bold text-xs uppercase tracking-widest">ARIZONA:</span>
                    <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 4.0</span>
                  </div>
                  <p className="text-sm text-textSecondary">
                    {language === 'es' 
                      ? 'Inversión de $1,200M (USDA). Intensidad operativa que obliga a rotación de repuestos premium.' 
                      : '$1.2B investment (USDA). Operational intensity forcing premium spare rotation.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 relative glass-card flex flex-col justify-center">
              <Landmark className="absolute top-4 right-4 text-unoOrange w-6 h-6 opacity-30" />
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <TrendingUp className="text-unoOrange w-6 h-6" />
                {language === 'es' ? 'Potencial de Reemplazo' : 'Replacement Potential'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed mb-6">
                {language === 'es'
                  ? 'La inversión agrícola asegura que California sea el mercado de reemplazo más grande, mientras que en Arizona la exigencia del clima acelera el ciclo de vida del producto.'
                  : 'Agricultural investment ensures California is the largest replacement market, while in Arizona, climate demands accelerate the product life cycle.'}
              </p>
              <div className="p-4 bg-unoOrange/10 rounded-xl border-l-4 border-unoOrange">
                <p className="text-sm text-white font-medium italic">
                  {language === 'es'
                    ? 'La compatibilidad universal de UMO permite servir a miles de tractores de diversas marcas y motores.'
                    : 'UMO\'s universal compatibility allows serving thousands of tractors from various brands and engines.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
