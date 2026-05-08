import { Settings, Box, HandCoins } from 'lucide-react';
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
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-zinc-700 rounded whitespace-nowrap">Score: 3.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
