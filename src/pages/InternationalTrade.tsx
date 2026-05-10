import { Settings, Box, HandCoins, Sprout, Ship, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const InternationalTrade = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 13' : 'Section 13'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Comercio Internacional' : 'International Trade'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Análisis de los flujos comerciales, integración regional y competitividad logística en Arizona y California.'
            : 'Analysis of trade flows, regional integration, and logistical competitiveness in Arizona and California.'}
        </p>
      </header>

      {/* 1. Volumen y Especialización en Maquinaria */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Settings className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            {language === 'es' ? '1. Volumen y Especialización en Maquinaria' : '1. Volume & Machinery Specialization'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 4.0</span>
            </div>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'Flujo constante de importaciones vinculado a mantenimiento urbano y landscaping. El incremento del parque de maquinaria genera una demanda sostenida de repuestos ergonómicos.' 
                : 'Constant import flow linked to urban maintenance and landscaping. The increase in machinery park generates sustained demand for ergonomic spares.'}
            </p>
          </div>

          <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
            </div>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'Uno de los mayores volúmenes de importación industrial en EE.UU. a través de los puertos de LA y Long Beach. La reposición es una operación permanente.' 
                : 'One of the highest industrial import volumes in the US through LA and Long Beach ports. Replacement is a permanent operation.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Facilitación Aduanera y FTZ */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Box className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            {language === 'es' ? '2. Facilitación Aduanera y Zonas FTZ' : '2. Customs Facilitation & FTZ'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 5.0</span>
            </div>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'Ofrece uno de los programas de FTZ más agresivos, permitiendo reducción de impuestos y procesos simplificados para el exportador extranjero.' 
                : 'Offers one of the most aggressive FTZ programs, allowing tax reductions and simplified processes for foreign exporters.'}
            </p>
          </div>

          <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 3.0</span>
            </div>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'Puertos masivos pero complejidad burocrática y alta carga impositiva estatal neutralizan parte de los incentivos federales.' 
                : 'Massive ports but bureaucratic complexity and high state tax burden neutralize part of the federal incentives.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Acuerdo de Libre Comercio y Entorno Arancelario Actual */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <HandCoins className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            {language === 'es' 
              ? '3. Acuerdo de Libre Comercio y Entorno Arancelario Actual' 
              : '3. Free Trade Agreement & Current Tariff Environment'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-unoOrange flex items-center gap-2">
               {language === 'es' ? 'Ventaja Estructural (TPA)' : 'Structural Advantage (TPA)'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'El TPA entre Colombia y EE.UU. eliminó aranceles para productos industriales. Si el sillín cumple reglas de origen, entra con arancel cero (excepto bajo Sección 122).'
                : 'The TPA between Colombia and the US eliminated tariffs for industrial products. If the seat meets origin rules, it enters with zero tariff (except under Section 122).'}
            </p>
            <div className="p-5 bg-zinc-900/80 rounded-xl border-l-4 border-unoOrange glass-card">
              <h4 className="text-unoOrange font-bold text-xs mb-2 tracking-widest uppercase">Escenario 2026</h4>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es' 
                  ? 'Desde febrero de 2026 rige un arancel global del 10% (Sección 122). UMO debe monitorear su evolución.' 
                  : 'Since February 2026, a 10% global tariff (Section 122) has been in effect. UMO must monitor its evolution.'}
              </p>
            </div>
          </div>

          <div className="bg-unoOrange/10 p-8 rounded-2xl border border-unoOrange/20 glass-card flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">
              {language === 'es' ? 'Implicación Estratégica' : 'Strategic Implication'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es'
                ? 'La competitividad en precio depende directamente de la gestión de estos aranceles y la validación de origen bajo el TPA.'
                : 'Price competitiveness depends directly on managing these tariffs and validating origin under the TPA.'}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 3.5</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Crecimiento de la Industria de Landscaping y Equipos Outdoor Power */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Sprout className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            {language === 'es' ? '4. Crecimiento de Landscaping y Equipos Outdoor' : '4. Landscaping Industry & Outdoor Equipment Growth'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8 space-y-6">
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'Este indicador mide la expansión de servicios de mantenimiento de áreas verdes y maquinaria exterior, lo cual impulsa la demanda de repuestos (aftermarket) como los sillines de UMO.'
                : 'This indicator measures the expansion of landscaping services and outdoor machinery, driving demand for aftermarket parts like UMO seats.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-zinc-800">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded">Score: 5.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Industria valorada en USD 3.5 mil millones (2025) con más de 10,000 establecimientos. El crecimiento urbano acelerado y climas extremos aumentan el desgaste y la necesidad de reposición.'
                    : 'Industry valued at USD 3.5 billion (2025) with over 10,000 establishments. Rapid urban growth and extreme climates increase wear and tear and replacement needs.'}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded">Score: 5.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? 'Mercado masivo de maquinaria lawn & garden con demanda sostenida de componentes aftermarket. La actividad de mantenimiento industrial es de las más altas de la nación.'
                    : 'Massive lawn & garden equipment market with sustained demand for aftermarket components. Industrial maintenance activity is among the highest in the nation.'}
                </p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-4 glass-card p-6 border-unoOrange/20 bg-unoOrange/5 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Info className="text-unoOrange w-5 h-5" />
              {language === 'es' ? 'Impacto UMO' : 'UMO Impact'}
            </h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'Norteamérica domina el 40% del mercado global de repuestos. El aumento del parque de maquinaria en estos estados garantiza un flujo constante de clientes para sillines de reposición.'
                : 'North America dominates 40% of the global aftermarket. The increase in machinery in these states guarantees a constant flow of customers for replacement seats.'}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Tiempo de Exportación y Eficiencia Logística Desde Colombia */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Ship className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            {language === 'es' ? '5. Tiempo de Exportación y Eficiencia Logística' : '5. Export Lead Time & Logistics Efficiency'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 border-zinc-800">
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA (Acceso Directo)</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Puertos estratégicos (LA, Long Beach) permiten ingreso marítimo directo desde Colombia. Tiempos de tránsito: 18-25 días.'
                  : 'Strategic ports (LA, Long Beach) allow direct maritime entry from Colombia. Transit times: 18-25 days.'}
              </p>
              <div className="p-4 bg-blue-400/5 rounded-xl border border-blue-400/20">
                <p className="text-xs text-blue-300 font-medium">
                  {language === 'es' ? 'Menor complejidad y costos de distribución inicial.' : 'Lower complexity and initial distribution costs.'}
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 border-zinc-800">
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA (Distribución Terrestre)</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 3.0</span>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Dependencia de puertos en CA y transporte terrestre adicional hacia Phoenix/Tucson. Tiempos de tránsito: 22-35 días.'
                  : 'Dependence on CA ports and additional land transport to Phoenix/Tucson. Transit times: 22-35 days.'}
              </p>
              <div className="p-4 bg-unoOrange/5 rounded-xl border border-unoOrange/20">
                <p className="text-xs text-unoOrange font-medium">
                  {language === 'es' ? 'Mayor dependencia de operadores internos de carga.' : 'Higher dependence on internal freight operators.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

