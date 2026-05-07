import { Truck, Settings, Box } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const InternationalTrade = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 12' : 'Section 12'}
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

      {/* 3. Crecimiento y Conectividad USMCA */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Truck className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            {language === 'es' ? '3. Crecimiento y Conectividad USMCA' : '3. Growth & USMCA Connectivity'}
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
                ? 'Integración productiva directa con México bajo el T-MEC. Cadenas logísticas terrestres de bajo costo y alta velocidad operativa.' 
                : 'Direct productive integration with Mexico under USMCA. Low-cost and high-speed terrestrial logistical chains.'}
            </p>
          </div>

          <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 4.0</span>
            </div>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'Economía de gran escala con alta rotación pero mayor presión competitiva de socios transpacíficos y regionales.' 
                : 'Large-scale economy with high rotation but greater competitive pressure from transpacific and regional partners.'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
