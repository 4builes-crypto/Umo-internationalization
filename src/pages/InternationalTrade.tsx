import { Globe, Truck, Settings, TrendingUp, Anchor, AlertTriangle, ShieldCheck, Box } from 'lucide-react';
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

      {/* Arizona Analysis */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Globe className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">Arizona</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-all group">
            <Truck className="w-8 h-8 text-unoOrange mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-white font-bold mb-3">
              {language === 'es' ? '1. Relación T-MEC y Presión Competitiva' : '1. USMCA Relation & Competitive Pressure'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'Alta dependencia de México. La proximidad fronteriza permite abastecimiento inmediato y bajos costos logísticos regionales.' 
                : 'High dependency on Mexico. Border proximity allows immediate supply and low regional logistical costs.'}
            </p>
            <div className="p-3 bg-unoOrange/5 rounded-lg border border-unoOrange/10">
              <p className="text-xs text-white italic">
                {language === 'es' ? 'Oportunidad: Diferenciación técnica por encima del precio.' : 'Opportunity: Technical differentiation over price.'}
              </p>
            </div>
          </div>

          <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-all group">
            <Settings className="w-8 h-8 text-unoOrange mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-white font-bold mb-3">
              {language === 'es' ? '2. Importación de Maquinaria y Aftermarket' : '2. Machinery Imports & Aftermarket'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'Crecimiento del parque industrial impulsa la demanda de repuestos ergonómicos debido al desgaste acelerado por el clima.' 
                : 'Industrial park growth drives demand for ergonomic spares due to climate-accelerated wear.'}
            </p>
            <div className="p-3 bg-unoOrange/5 rounded-lg border border-unoOrange/10">
              <p className="text-xs text-white italic">
                {language === 'es' ? 'Oportunidad: Segmento de reposición menos saturado.' : 'Opportunity: Less saturated replacement segment.'}
              </p>
            </div>
          </div>

          <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-all group">
            <TrendingUp className="w-8 h-8 text-unoOrange mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-white font-bold mb-3">
              {language === 'es' ? '3. Expansión de Landscaping Urbano' : '3. Urban Landscaping Expansion'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'El auge comercial e inmobiliario incrementa el uso de equipos, transformando el desgaste ambiental en oportunidad.' 
                : 'Commercial and real estate boom increases equipment use, transforming environmental wear into opportunity.'}
            </p>
            <div className="p-3 bg-unoOrange/5 rounded-lg border border-unoOrange/10">
              <p className="text-xs text-white italic">
                {language === 'es' ? 'Oportunidad: Resistencia térmica como factor clave.' : 'Opportunity: Thermal resistance as a key factor.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* California Analysis */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-blue-400 pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-blue-400/20 flex items-center justify-center text-blue-400">
            <Anchor className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">California</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-all group">
            <Box className="w-8 h-8 text-blue-400 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-white font-bold mb-3">
              {language === 'es' ? '1. Volumen de Importaciones' : '1. Import Volume'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'Nodo estratégico transpacífico con alta rotación de maquinaria. La reposición es una operación permanente.' 
                : 'Strategic transpacific hub with high machinery rotation. Replacement is a permanent operation.'}
            </p>
            <div className="p-3 bg-blue-400/5 rounded-lg border border-blue-400/10">
              <p className="text-xs text-white italic">
                {language === 'es' ? 'Oportunidad: Mercado de gran escala y rotación constante.' : 'Opportunity: Large-scale market and constant rotation.'}
              </p>
            </div>
          </div>

          <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-all group">
            <AlertTriangle className="w-8 h-8 text-blue-400 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-white font-bold mb-3">
              {language === 'es' ? '2. Dependencia de Proveedores Externos' : '2. External Provider Dependency'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'Balanza comercial deficitaria facilita la entrada de actores internacionales especializados en nichos técnicos.' 
                : 'Deficit trade balance facilitates entry of international players specialized in technical niches.'}
            </p>
            <div className="p-3 bg-blue-400/5 rounded-lg border border-blue-400/10">
              <p className="text-xs text-white italic">
                {language === 'es' ? 'Oportunidad: Cultura empresarial adaptada al suministro global.' : 'Opportunity: Business culture adapted to global supply.'}
              </p>
            </div>
          </div>

          <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-all group">
            <Globe className="w-8 h-8 text-blue-400 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-white font-bold mb-3">
              {language === 'es' ? '3. Presión Competitiva Internacional' : '3. International Competitive Pressure'}
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es' 
                ? 'Competencia directa con México, China y Vietnam. Obliga a diferenciarse mediante calidad y desempeño prolongado.' 
                : 'Direct competition with Mexico, China, and Vietnam. Forces differentiation through quality and prolonged performance.'}
            </p>
            <div className="p-3 bg-blue-400/5 rounded-lg border border-blue-400/10">
              <p className="text-xs text-white italic">
                {language === 'es' ? 'Oportunidad: Calidad ergonómica como ventaja sostenible.' : 'Opportunity: Ergonomic quality as a sustainable advantage.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Summary */}
      <section className="pt-10">
        <div className="glass-card p-8 bg-gradient-to-br from-unoOrange/10 to-blue-400/5 border-unoOrange/20 relative overflow-hidden">
          <ShieldCheck className="absolute -right-4 -bottom-4 w-32 h-32 text-unoOrange/5" />
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <ShieldCheck className="text-unoOrange w-6 h-6" />
            {language === 'es' ? 'Propuesta de Valor UMO' : 'UMO Value Proposition'}
          </h3>
          <p className="text-sm text-textSecondary leading-relaxed max-w-4xl">
            {language === 'es'
              ? 'En mercados saturados por proveedores globales y regionales, UMO debe transformar el desgaste ambiental y la intensidad operativa en su mayor activo. La especialización en sillines diseñados para condiciones extremas y confort prolongado permite superar la competencia por precio masivo, ofreciendo una solución técnica de alto valor dentro del mercado aftermarket de repuestos industriales.'
              : 'In markets saturated by global and regional providers, UMO must transform environmental wear and operational intensity into its greatest asset. Specialization in seats designed for extreme conditions and prolonged comfort allows for overcoming mass price competition, offering a high-value technical solution within the industrial spares aftermarket.'}
          </p>
        </div>
      </section>
    </div>
  );
};
