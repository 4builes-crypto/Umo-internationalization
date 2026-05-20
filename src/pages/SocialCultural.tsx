import { Users, Home, ShoppingBag, CheckCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export const SocialCultural = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 9' : 'Section 9'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Análisis Sociocultural' : 'Socio-Cultural Analysis'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Evaluación de perfiles demográficos, hábitos de consumo y capacidad adquisitiva que definen la viabilidad de UMO en Arizona y California.'
            : 'Evaluation of demographic profiles, consumption habits, and purchasing power defining UMO\'s viability in Arizona and California.'}
        </p>
      </header>

      {/* 1. Tamaño de la población / mercado potencial */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '1. Tamaño de la población / mercado potencial' 
              : '1. Population Size / Potential Market'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'Este indicador mide la escala del mercado. Una mayor población se traduce en más hogares, empresas de mantenimiento y usuarios potenciales de podadoras eléctricas.'
                  : 'This indicator measures the scale of the market. A larger population translates into more households, maintenance companies, and potential electric mower users.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 3.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? '7,623,818 personas (2025). Mercado más pequeño y menos saturado, ideal para una entrada enfocada y con menor presión competitiva inicial.'
                    : '7,623,818 people (2025). Smaller, less saturated market, ideal for a focused entry with lower initial competitive pressure.'}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? '39,355,309 personas (2025). Mercado masivo con la mayor cantidad de empresas de jardinería y zonas residenciales en EE.UU.'
                    : '39,355,309 people (2025). Massive market with the highest number of landscaping companies and residential areas in the US.'}
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
            <Users className="absolute -right-4 -top-4 w-24 h-24 text-unoOrange/10" />
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <CheckCircle className="text-unoOrange w-6 h-6" /> 
              {language === 'es' ? 'Análisis para UMO' : 'UMO Analysis'}
            </h3>
            <p className="text-sm text-white font-medium leading-relaxed mb-4">
              {language === 'es'
                ? 'California ofrece la mayor escala, mientras que Arizona sirve como un excelente banco de pruebas controlado.'
                : 'California offers the greatest scale, while Arizona serves as an excellent controlled testing ground.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Perfil de vivienda y espacios exteriores */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Home className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '2. Perfil de vivienda y espacios exteriores' 
              : '2. Housing Profile & Outdoor Spaces'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 glass-card border-zinc-800">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded">Score: 5.0</span>
            </div>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es'
                ? 'Tasa de vivienda propia del 67.4%. Los propietarios invierten significativamente más en mantenimiento y accesorios premium para sus equipos de jardín.'
                : 'Home ownership rate of 67.4%. Owners invest significantly more in maintenance and premium accessories for their garden equipment.'}
            </p>
          </div>

          <div className="p-6 glass-card border-zinc-800">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded">Score: 4.0</span>
            </div>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es'
                ? '14.8M de unidades de vivienda, pero con tasa de propiedad menor (55.9%). Mercado de gran volumen pero con decisiones de mantenimiento más fragmentadas.'
                : '14.8M housing units, but with a lower ownership rate (55.9%). High-volume market but with more fragmented maintenance decisions.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Capacidad de compra y consumo orientado a comodidad */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '3. Capacidad de compra y consumo orientado a comodidad' 
              : '3. Purchasing Power & Comfort-Oriented Consumption'}
          </h2>
        </div>

        <div className="glass-card p-8 border-zinc-800">
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'Este indicador mide la disposición a invertir en productos ergonómicos y de alto rendimiento que mejoran la experiencia laboral.'
                : 'This indicator measures the willingness to invest in ergonomic and high-performance products that improve the work experience.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-unoOrange font-bold text-xs uppercase tracking-widest">ARIZONA</h4>
                <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 4.0</span>
              </div>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es' 
                  ? 'Ingreso medio hogar: $79,964 y per cápita: $42,503. Arizona es atractivo si el producto se presenta como una compra práctica: un asiento que ayuda a trabajar más cómodo y soporta el calor.' 
                  : 'Median household income: $79,964 and per capita: $42,503. Arizona is attractive if the product is presented as a practical purchase: a seat that helps work more comfortably and handles heat.'}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-blue-400 font-bold text-xs uppercase tracking-widest">CALIFORNIA</h4>
                <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
              </div>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es' 
                  ? 'Ingreso medio hogar: $99,122 y per cápita: $49,513. Indica mayor capacidad de compra, lo cual favorece la venta de productos con valor agregado y especializados.' 
                  : 'Median household income: $99,122 and per capita: $49,513. Indicates higher purchasing power, favoring the sale of value-added and specialized products.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conclusion Section */}
      <section className="pt-20">
        <div className="glass-card p-10 bg-unoOrange/5 border-unoOrange/20 relative overflow-hidden">
          <ShieldCheck className="absolute -right-4 -bottom-4 w-40 h-40 text-unoOrange/5" />
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <CheckCircle className="text-unoOrange w-7 h-7" />
            {language === 'es' ? 'Conclusión Sociocultural' : 'Socio-Cultural Conclusion'}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'Desde el punto de vista sociocultural, California es el estado más atractivo para UMO por su población masiva y capacidad de compra. Esto facilita la introducción de productos ergonómicos modernos y especializados.'
                : 'From a socio-cultural perspective, California is the most attractive state for UMO due to its massive population and purchasing power. This facilitates the introduction of modern and specialized ergonomic products.'}
            </p>
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'Arizona destaca por su alta tasa de viviendas propias y espacios exteriores. La mejor estrategia es presentar el sillón como una solución de durabilidad y reducción del cansancio operativa, ideal para climas extremos.'
                : 'Arizona stands out for its high rate of home ownership and outdoor spaces. The best strategy is to present the seat as a solution for durability and reduced operational fatigue, ideal for extreme climates.'}
            </p>
          </div>
          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-sm text-white font-medium italic text-center">
              {language === 'es'
                ? '"Para UMO, la clave es posicionar el sillón no como un simple repuesto, sino como una mejora en la experiencia operativa y de confort."'
                : '"For UMO, the key is to position the seat not as a simple spare part, but as an improvement in the operational and comfort experience."'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

