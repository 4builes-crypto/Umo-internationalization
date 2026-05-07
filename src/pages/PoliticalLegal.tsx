import { motion } from 'framer-motion';
import { Scale, HandCoins, ShieldCheck, Zap, Info, ArrowRight, Gavel, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const PoliticalLegal = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 10' : 'Section 10'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Análisis Político y Legal' : 'Political & Legal Analysis'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Evaluación de las regulaciones ambientales, acuerdos comerciales y normativas de seguridad laboral que rigen la entrada de UMO al mercado estadounidense.'
            : 'Evaluation of environmental regulations, trade agreements, and occupational safety regulations governing UMO\'s entry into the US market.'}
        </p>
      </header>

      {/* 1. Regulación de Emisiones */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '1. Regulación de emisiones y prohibición de motores de combustión' 
              : '1. Emission Regulations & Combustion Engine Ban'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Para UMO, el mercado de podadoras eléctricas en California crece por mandato legal. La ley AB 1346 ordena a CARB prohibir la venta de nuevos motores de combustión de hasta 25 HP (podadoras, sopladores, etc.) desde el año modelo 2024. En 2025, la EPA confirmó la autorización de California para aplicar estas restricciones bajo la excepción del Clean Air Act.'
                  : 'For UMO, the electric mower market in California is growing by legal mandate. AB 1346 orders CARB to ban the sale of new combustion engines up to 25 HP (mowers, blowers, etc.) starting with the 2024 model year. In 2025, the EPA confirmed California\'s authorization to enforce these restrictions under the Clean Air Act exception.'}
              </p>
              <div className="bg-unoOrange/5 border border-unoOrange/10 p-6 rounded-xl flex gap-4 items-start mt-8 mb-8">
                <Info className="text-unoOrange shrink-0 w-5 h-5 mt-0.5" />
                <p className="text-sm text-white italic leading-relaxed">
                  {language === 'es'
                    ? 'Aunque se permite el uso de equipos antiguos, cada temporada las flotas comerciales reemplazan más equipo, impulsando el mercado aftermarket donde UMO es protagonista.'
                    : 'While use of old equipment is allowed, commercial fleets replace more equipment each season, driving the aftermarket where UMO is a key player.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-colors">
                <h4 className="text-unoOrange font-bold mb-3 tracking-widest uppercase text-xs">CALIFORNIA</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Prohibición total de venta de nuevos motores SORE (Small Off-Road Engines) desde 2024. La electrificación es una apuesta obvia impulsada por el estado.'
                    : 'Total ban on sales of new SORE (Small Off-Road Engines) since 2024. Electrification is an obvious state-driven bet.'}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded">Score: 5</span>
                </div>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <h4 className="text-blue-400 font-bold mb-3 tracking-widest uppercase text-xs">ARIZONA</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Regulación voluntaria con vouchers de incentivo ($200 para empresas, $100 para residentes). Crecimiento más gradual pero con menos competencia en aftermarket eléctrico.'
                    : 'Voluntary regulation with incentive vouchers ($200 for companies, $100 for residents). More gradual growth but with less competition in the electric aftermarket.'}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded">Score: 2</span>
                </div>
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
              {language === 'es' ? 'Oportunidad UMO' : 'UMO Opportunity'}
            </h3>
            <p className="text-sm text-white font-medium leading-relaxed mb-4">
              {language === 'es'
                ? 'El sillín de UMO se posiciona como el complemento ideal para la nueva flota eléctrica obligatoria en California.'
                : 'The UMO seat positions itself as the ideal complement for the new mandatory electric fleet in California.'}
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">{language === 'es' ? 'Mercado cautivo por mandato legal.' : 'Captive market by legal mandate.'}</p>
              </div>
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">{language === 'es' ? 'Menos competencia en el nicho eléctrico.' : 'Less competition in the electric niche.'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Acuerdo de Libre Comercio y Aranceles */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <HandCoins className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '2. Acuerdo de Libre Comercio y Entorno Arancelario Actual' 
              : '2. Free Trade Agreement & Current Tariff Environment'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-unoOrange flex items-center gap-2">
               {language === 'es' ? 'Ventaja Estructural (TPA)' : 'Structural Advantage (TPA)'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'El TPA entre Colombia y EE.UU. (vigente desde 2012) eliminó aranceles para más del 80% de productos industriales. Si el sillín cumple reglas de origen, entra con arancel cero. Sin embargo, el entorno cambió en 2025-2026.'
                : 'The TPA between Colombia and the US (in effect since 2012) eliminated tariffs for over 80% of industrial products. If the seat meets origin rules, it enters with zero tariff. However, the environment changed in 2025-2026.'}
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-5 bg-zinc-900/80 rounded-xl border-l-4 border-unoOrange glass-card">
                <h4 className="text-unoOrange font-bold text-xs mb-2 tracking-widest uppercase">Escenario 2026</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Desde el 24 de febrero de 2026 rige un arancel global del 10% (Sección 122). Las preferencias del TPA NO eximen de este pago actualmente.' 
                    : 'Since February 24, 2026, a 10% global tariff (Section 122) has been in effect. TPA preferences DO NOT currently exempt from this payment.'}
                </p>
              </div>
              <div className="p-5 bg-zinc-900/80 rounded-xl border-l-4 border-red-400 glass-card">
                <h4 className="text-red-400 font-bold text-xs mb-2 tracking-widest uppercase">Riesgo Futuro: Sección 301</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Investigaciones en curso contra 60 países (incluido Colombia) podrían elevar los aranceles sin límite de tasa ni plazo. Es el riesgo político más crítico.' 
                    : 'Ongoing investigations against 60 countries (including Colombia) could raise tariffs without rate or term limits. It is the most critical political risk.'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-unoOrange">{language === 'es' ? 'Implicación para UMO' : 'Implication for UMO'}</h3>
            <div className="space-y-4">
              <div className="bg-unoOrange/10 p-8 rounded-2xl border border-unoOrange/20 glass-card flex flex-col justify-center h-full">
                <p className="text-sm text-white font-bold mb-3 uppercase tracking-wider">
                  {language === 'es' ? 'Gestión de Costos' : 'Cost Management'}
                </p>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'A mayo de 2026, el sillín paga un 10% de arancel. UMO debe monitorear el vencimiento de la Sección 122 (julio 2026) y la posible activación de la Sección 301, que afectaría directamente la competitividad en precio.'
                    : 'As of May 2026, the seat pays a 10% tariff. UMO must monitor the expiration of Section 122 (July 2026) and the potential activation of Section 301, which would directly affect price competitiveness.'}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-zinc-700 rounded">Puntuación: 3.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Regulación Ergonómica */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Gavel className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '3. Regulación ergonómica y seguridad laboral' 
              : '3. Ergonomic Regulation & Occupational Safety'}
          </h2>
        </div>

        <div className="glass-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-unoOrange/5 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/10 pb-3 inline-block">
                {language === 'es' ? 'El Estándar de California' : 'The California Standard'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'La Sección 5110 del Título 8 obliga a los empleadores a prevenir lesiones por movimiento repetitivo. Esto incluye controles de ingeniería para reducir la vibración de cuerpo completo (WBV). A diferencia del nivel federal, California exige proactividad.'
                  : 'Title 8 Section 5110 requires employers to prevent repetitive motion injuries. This includes engineering controls to reduce whole-body vibration (WBV). Unlike the federal level, California requires proactivity.'}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-unoOrange font-bold text-xs uppercase tracking-widest mb-1 block">CALIFORNIA:</span>
                  <p className="text-sm text-textSecondary">{language === 'es' ? 'Obligatorio (Sección 5110). Argumento de CUMPLIMIENTO.' : 'Mandatory (Section 5110). COMPLIANCE argument.'}</p>
                  <span className="inline-block mt-2 text-[10px] font-bold bg-unoOrange/20 px-2 py-0.5 rounded">Score: 5</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1 block">ARIZONA:</span>
                  <p className="text-sm text-textSecondary">{language === 'es' ? 'Estándar federal general. Argumento de PRODUCTIVIDAD.' : 'General federal standard. PRODUCTIVITY argument.'}</p>
                  <span className="inline-block mt-2 text-[10px] font-bold bg-blue-400/20 px-2 py-0.5 rounded">Score: 2</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 relative glass-card flex flex-col justify-center">
              <AlertTriangle className="absolute top-4 right-4 text-unoOrange w-6 h-6 opacity-30" />
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="text-unoOrange w-6 h-6" />
                {language === 'es' ? 'Factor Diferenciador' : 'Differentiating Factor'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed mb-6">
                {language === 'es'
                  ? 'Para UMO, la regulación de California transforma el sillín de un accesorio de confort en un elemento de CUMPLIMIENTO LEGAL. Es un control de ingeniería bajo la ley para reducir WBV.'
                  : 'For UMO, California regulation transforms the seat from a comfort accessory into a LEGAL COMPLIANCE element. It is an engineering control under the law to reduce WBV.'}
              </p>
              <div className="p-4 bg-unoOrange/10 rounded-xl border-l-4 border-unoOrange">
                <p className="text-sm text-white font-medium italic">
                  {language === 'es'
                    ? '"Las empresas grandes en Arizona tienden a estandarizar según California por efecto de arrastre."'
                    : '"Large companies in Arizona tend to standardize based on California due to the drag effect."'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
