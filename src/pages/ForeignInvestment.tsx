import { motion } from 'framer-motion';
import { Landmark, Zap, ShieldCheck, Info, ArrowRight, TrendingUp } from 'lucide-react';
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
                    ? 'Centro neurálgico de baterías y EVs; captó inversiones >$15,000M en nuevas plantas (ACA, 2025). Como estado fabricante, UMO neutraliza la vibración mecánica severa en motores a gasolina y disipa el calor en sistemas eléctricos.'
                    : 'Neuralgic center for batteries and EVs; captured >$15B in new plants (ACA, 2025). As a manufacturing state, UMO neutralizes severe mechanical vibration in gasoline engines and dissipates heat in electrical systems.'}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 4.5</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Líder en infraestructura de transporte limpio (CEC, 2025). Su versatilidad permite penetrar masivamente en flotas de gasolina actuales mientras se establece como estándar ergonómico para la transición eléctrica.'
                    : 'Leader in clean transport infrastructure (CEC, 2025). Its versatility allows for massive penetration in current gasoline fleets while establishing itself as the ergonomic standard for the electric transition.'}
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


    </div>
  );
};
