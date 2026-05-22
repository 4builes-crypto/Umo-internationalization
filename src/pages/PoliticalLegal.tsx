import { motion } from 'framer-motion';
import { Scale, ShieldCheck, Info, ArrowRight, Gavel, AlertTriangle, Tractor } from 'lucide-react';
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

      {/* 1. Impuestos Estatales Generales */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '1. Impuestos Estatales Generales' 
              : '1. General State Taxes'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Este factor evalúa la carga tributaria sobre las ventas finales. Un impuesto menor reduce el costo de adquisición para el usuario final, aumentando el poder adquisitivo y el incentivo para invertir en repuestos de alta calidad.'
                  : 'This factor evaluates the tax burden on final sales. A lower tax reduces the acquisition cost for the end user, increasing purchasing power and the incentive to invest in high-quality spare parts.'}
              </p>
              <div className="bg-unoOrange/5 border border-unoOrange/10 p-6 rounded-xl flex gap-4 items-start mt-8 mb-8">
                <Info className="text-unoOrange shrink-0 w-5 h-5 mt-0.5" />
                <p className="text-sm text-white italic leading-relaxed">
                  {language === 'es'
                    ? 'Tasas más bajas en Arizona permiten que los agricultores y empresas de paisajismo retengan más capital, facilitando la demanda de repuestos premium.'
                    : 'Lower rates in Arizona allow farmers and landscaping companies to retain more capital, facilitating demand for premium spare parts.'}
                </p>
              </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 5.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' ? (
                    <>
                      Tasa estatal de <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">5.6%</span> (promedio combinado <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">8.52%</span>). Menor impacto en el precio final, favoreciendo el consumo y la competitividad de UMO (Arizona Department of Revenue [ADOR], 2026).
                    </>
                  ) : (
                    <>
                      State rate of <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">5.6%</span> (combined average <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">8.52%</span>). Lower impact on final price, favoring consumption and UMO's competitiveness (Arizona Department of Revenue [ADOR], 2026).
                    </>
                  )}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 4.16</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' ? (
                    <>
                      Tasa estatal base de <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">7.25%</span>, hasta <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">10.25%</span> en áreas urbanas. El alto costo fiscal eleva los precios finales y reduce el ahorro de las empresas (California Department of Tax and Fee Administration [CDTFA], 2026).
                    </>
                  ) : (
                    <>
                      Base state rate of <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">7.25%</span>, up to <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">10.25%</span> in urban areas. High fiscal cost raises final prices and reduces business savings (California Department of Tax and Fee Administration [CDTFA], 2026).
                    </>
                  )}
                </p>
              </div>
            </div>   </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5 glass-card p-6 border-unoOrange/30 bg-unoOrange/5 relative overflow-hidden h-full flex flex-col justify-center"
          >
            <ShieldCheck className="absolute -right-4 -top-4 w-24 h-24 text-unoOrange/10" />
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <Scale className="text-unoOrange w-6 h-6" /> 
              {language === 'es' ? 'Ventaja de Costo' : 'Cost Advantage'}
            </h3>
            <p className="text-sm text-white font-medium leading-relaxed mb-4">
              {language === 'es'
                ? 'Un precio final más económico en Arizona debido a los impuestos estimula la demanda y facilita la penetración de mercado.'
                : 'A more affordable final price in Arizona due to taxes stimulates demand and facilitates market penetration.'}
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">{language === 'es' ? 'Mayor poder adquisitivo local.' : 'Higher local purchasing power.'}</p>
              </div>
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">{language === 'es' ? 'Precios finales más competitivos.' : 'More competitive final prices.'}</p>
              </div>
            </div>
          </motion.div>
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
              ? '2. Regulación ergonómica y seguridad laboral' 
              : '2. Ergonomic Regulation & Occupational Safety'}
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
                  ? 'La Sección 5110 del Título 8 obliga a los empleadores a prevenir lesiones por movimiento repetitivo, exigiendo controles de ingeniería para reducir la vibración de cuerpo completo (California Department of Industrial Relations [DIR], s.f.). A diferencia del nivel federal, California exige proactividad.'
                  : 'Title 8 Section 5110 requires employers to prevent repetitive motion injuries, mandating engineering controls to reduce whole-body vibration (California Department of Industrial Relations [DIR], n.d.). Unlike the federal level, California requires proactivity.'}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1 block">CALIFORNIA:</span>
                  <p className="text-sm text-textSecondary">{language === 'es' ? 'Obligatorio (Sección 5110) (DIR, s.f.). Argumento de CUMPLIMIENTO.' : 'Mandatory (Section 5110) (DIR, n.d.). COMPLIANCE argument.'}</p>
                  <span className="inline-block mt-2 text-xs font-bold bg-blue-400/20 text-blue-400 px-2 py-0.5 rounded whitespace-nowrap border border-blue-400/20">Score: 5.0</span>
                </div>
                <div>
                  <span className="text-unoOrange font-bold text-xs uppercase tracking-widest mb-1 block">ARIZONA:</span>
                  <p className="text-sm text-textSecondary">{language === 'es' ? 'Estándar federal general (OSHA, 2026). Argumento de PRODUCTIVIDAD.' : 'General federal standard (OSHA, 2026). PRODUCTIVITY argument.'}</p>
                  <span className="inline-block mt-2 text-xs font-bold bg-unoOrange/20 text-unoOrange px-2 py-0.5 rounded whitespace-nowrap border border-unoOrange/20">Score: 2.0</span>
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
      {/* 3. Beneficios para Maquinaria Agrícola */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Tractor className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '3. Beneficios e incentivos para maquinaria agrícola' 
              : '3. Benefits & Incentives for Agricultural Machinery'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Este factor analiza las exenciones fiscales específicas para el sector agropecuario. Estos incentivos reducen significativamente el costo operativo para los compradores de maquinaria y repuestos, facilitando la inversión en equipo premium.'
                  : 'This factor analyzes specific tax exemptions for the agricultural sector. These incentives significantly reduce operating costs for machinery and spare parts buyers, facilitating investment in premium equipment.'}
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
                    ? 'Deducción total del Transaction Privilege Tax (TPT) para maquinaria nueva/usada y equipo off-road (Redw, 2025). Mayor flujo de caja para el sector agrícola.'
                    : 'Total Transaction Privilege Tax (TPT) deduction for new/used machinery and off-road equipment (Redw, 2025). Higher cash flow for the agricultural sector.'}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 3.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? (
                      <>
                        Exención parcial del <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">5%</span> estatal en maquinaria y partes de repuesto calificadas (CDTFA, s.f.). Beneficio parcial que ayuda pero no iguala la exención total de AZ.
                      </>
                    ) : (
                      <>
                        Partial <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">5%</span> state exemption on qualified machinery and spare parts (CDTFA, n.d.). Partial benefit that helps but doesn't match AZ's total exemption.
                      </>
                    )}
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
            <Gavel className="absolute -right-4 -top-4 w-24 h-24 text-unoOrange/10" />
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <ShieldCheck className="text-unoOrange w-6 h-6" /> 
              {language === 'es' ? 'Incentivo Sectorial' : 'Sectoral Incentive'}
            </h3>
            <p className="text-sm text-white font-medium leading-relaxed mb-4">
              {language === 'es'
                ? 'La exención total en Arizona potencia directamente el poder adquisitivo del público objetivo de UMO.'
                : 'The total exemption in Arizona directly boosts the purchasing power of UMO\'s target audience.'}
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">{language === 'es' ? 'Fomento a la reinversión.' : 'Incentive for reinvestment.'}</p>
              </div>
              <div className="flex gap-3 items-center">
                <ArrowRight className="text-unoOrange shrink-0 w-4 h-4" />
                <p className="text-sm text-textSecondary">{language === 'es' ? 'Menor barrera de costo.' : 'Lower cost barrier.'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
