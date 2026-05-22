import { Users, Home, CheckCircle, ShieldCheck } from 'lucide-react';
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
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 0.93</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? <>
                        <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">7,623,818 personas</span> (2025) (U.S. Census Bureau, 2025). Mercado más pequeño y menos saturado, ideal para una entrada enfocada y con menor presión competitiva inicial.
                      </>
                    : <>
                        <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">7,623,818 people</span> (2025) (U.S. Census Bureau, 2025). Smaller, less saturated market, ideal for a focused entry with lower initial competitive pressure.
                      </>}
                </p>
              </div>
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es'
                    ? <>
                        <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">39,355,309 personas</span> (2025) (U.S. Census Bureau, 2025). Mercado masivo con la mayor cantidad de empresas de jardinería y zonas residenciales en EE.UU.
                      </>
                    : <>
                        <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">39,355,309 people</span> (2025) (U.S. Census Bureau, 2025). Massive market with the highest number of landscaping companies and residential areas in the US.
                      </>}
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

      {/* 2. Cultura del Paisajismo y Estilo de Vida en el Sun Belt */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Home className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '2. Cultura del Paisajismo y Estilo de Vida en el Sun Belt' 
              : '2. Landscaping Culture & Sun Belt Lifestyle'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 glass-card border-zinc-800">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded">Score: 1.0</span>
            </div>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es'
                ? (
                  <>
                    El diseño urbano y las condiciones climáticas de Arizona consolidan un estilo de vida enfocado en el cuidado intensivo de exteriores. El estado registra un total aproximado de <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">14,230 empresas</span> de paisajismo activas (LawnStarter, 2025; IMARC Group, 2024). Aunque este volumen bruto es menor en comparación con California, Arizona destaca por tener una de las <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs">concentraciones de mantenimiento por habitante más elevadas</span> de todo el corredor del Sun Belt. El paisajismo opera de manera ininterrumpida durante los doce meses del año debido a la sobre-siembra de invierno y la gestión de jardines xerófilos (Arizona Landscape Contractors Association [ALCA], 2024). Los operarios de podadoras pasan jornadas extensas expuestos a un calor desértico severo, lo que convierte la ergonomía y el confort térmico del asiento en un factor crítico de operación. Adicionalmente, su alta densidad de campos de golf exige un mantenimiento diario bajo estándares estéticos muy estrictos (National Golf Foundation, 2024), acelerando el desgaste de la maquinaria y validando la necesidad de componentes de alta resiliencia.
                  </>
                )
                : (
                  <>
                    Urban design and climatic conditions in Arizona consolidate a lifestyle focused on intensive outdoor care. The state records an approximate total of <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">14,230 active landscaping companies</span> (LawnStarter, 2025; IMARC Group, 2024). Although this gross volume is lower compared to California, Arizona stands out for having one of the <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs">highest concentrations of outdoor maintenance services</span> across the entire Sun Belt corridor. Landscaping operates uninterrupted during all twelve months of the year due to winter overseeding and xeriscaping management (Arizona Landscape Contractors Association [ALCA], 2024). Mower operators spend long shifts exposed to severe desert heat, making seat ergonomics and thermal comfort a critical operational factor. Additionally, its high golf course density requires daily maintenance under very strict aesthetic standards (National Golf Foundation, 2024), accelerating machinery wear and validating the need for high-resilience components.
                  </>
                )}
            </p>
          </div>

          <div className="p-6 glass-card border-zinc-800">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
              <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded">Score: 5.0</span>
            </div>
            <p className="text-sm text-textSecondary leading-relaxed mb-4">
              {language === 'es'
                ? (
                  <>
                    California posee una sólida cultura de áreas verdes residenciales e industriales, reflejada en su volumen nominal como el mercado más grande de la nación con un total aproximado de <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">52,682 empresas</span> de paisajismo registrada a lo largo de su territorio (This Old House, 2024; LawnStarter, 2025). Sin embargo, a pesar de la magnitud de este mercado bruto, la <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs">dispersión geográfica y restricciones gubernamentales de agua</span>, como la ley AB 1572, junto con las sequías recurrentes, han transformado el estilo de vida suburbano. Esto ha generado una <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs">transición hacia jardines de bajo consumo hídrico</span>, reduciendo notablemente la necesidad de un mantenimiento constante durante los meses más secos. A diferencia del ciclo de uso continuo de Arizona, la menor concentración de servicios por habitante y las pausas estacionales disminuyen la tasa de rotación y desgaste de los equipos de corte en el territorio californiano.
                  </>
                )
                : (
                  <>
                    California possesses a solid culture of residential and industrial green areas, reflected in its nominal volume as the largest market in the nation with an approximate total of <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">52,682 registered landscaping companies</span> throughout its territory (This Old House, 2024; LawnStarter, 2025). However, despite the magnitude of this gross market, <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs">geographic dispersion and government water restrictions</span>, such as the AB 1572 law, along with recurring droughts, have transformed the suburban lifestyle. This has generated a <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs">transition toward low-water-use landscaping</span>, notably reducing the need for intensive maintenance during the driest months. Unlike Arizona's continuous-use cycle, the lower concentration of services per inhabitant and seasonal pauses decrease the rotation and wear rate of cutting equipment in California.
                  </>
                )}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Cultura de Conformidad Estética y Presión Social Comunitaria (HOAs) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            {language === 'es' 
              ? '3. Cultura de Conformidad Estética y Presión Social Comunitaria (HOAs)' 
              : '3. Culture of Aesthetic Compliance & Community Social Pressure (HOAs)'}
          </h2>
        </div>

        <div className="glass-card p-8 border-zinc-800">
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'Este indicador analiza la influencia de las Asociaciones de Propietarios (Homeowners Associations o HOAs) y la cultura de la perfección estética residencial en la sociedad estadounidense, lo que impulsa el mantenimiento constante y el uso de equipos.'
                : 'This indicator analyzes the influence of Homeowners Associations (HOAs) and the culture of residential aesthetic perfection in US society, driving constant maintenance and equipment usage.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-unoOrange font-bold text-xs uppercase tracking-widest">ARIZONA</h4>
                <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 5.0</span>
              </div>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es' 
                  ? 'La gran mayoría de los desarrollos suburbanos están regulados por HOAs, las cuales imponen normativas estrictas sobre la altura, el color y el estado general del césped y los jardines frontales (Community Associations Institute, 2023). El incumplimiento no solo acarrea penalizaciones formales, sino también un fuerte estigma social dentro de la comunidad. Esta presión sociocultural obliga a los residentes y a las empresas contratadas a mantener un uso intensivo y constante de tractores podadores, impulsando la adopción de fundas de alta resiliencia UMO para cumplir con la uniformidad exigida.' 
                  : 'The vast majority of suburban developments are regulated by HOAs, which impose strict guidelines on lawn height, color, and maintenance (Community Associations Institute, 2023). Non-compliance leads to penalties and social stigma. This pressure forces residents and contractors into intensive and constant use of tractor mowers, driving the adoption of high-resilience UMO covers to meet the required aesthetic uniformity.'}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-blue-400 font-bold text-xs uppercase tracking-widest">CALIFORNIA</h4>
                <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 4.0</span>
              </div>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es' 
                  ? 'California cuenta con la segunda mayor cantidad de HOAs en EE.UU., ejerciendo una gran presión estética. No obstante, las leyes estatales (como la ley AB 2104) limitan la capacidad de las HOAs de sancionar a propietarios que reemplacen el césped con plantas resistentes a la sequía para ahorrar agua. Esto modera ligeramente la presión del mantenimiento intensivo de césped tradicional, aunque la exigencia de prolijidad sigue siendo alta.' 
                  : 'California has the second-highest number of HOAs in the US, exerting high aesthetic pressure. However, state laws (such as AB 2104) limit HOAs\' capacity to penalize homeowners replacing turf with drought-tolerant landscaping to save water. This slightly moderates traditional intensive mowing, though neatness and visual standards remain highly demanded.'}
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
                ? 'Desde el punto de vista sociocultural, California representa un mercado masivo pero sujeto a presiones de sostenibilidad. La clave para UMO es la compatibilidad universal que ayuda a los contratistas a cumplir de manera eficiente con las demandas estéticas bajo un contexto de transición a paisajismo de bajo consumo de agua.'
                : 'From a socio-cultural perspective, California represents a massive market but subject to sustainability pressures. The key for UMO is its universal compatibility that helps contractors efficiently meet aesthetic demands in a context of transition to low-water landscaping.'}
            </p>
            <p className="text-sm text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'Arizona destaca por su cultura de paisajismo constante todo el año y la gran presión regulatoria de las HOAs. Esto exige que la maquinaria mantenga un estado estético y operativo impecable, haciendo de las fundas protectoras UMO un componente esencial para resistir el desgaste del sol y cumplir con las normas comunitarias.'
                : 'Arizona stands out for its year-round landscaping culture and high regulatory pressure from HOAs. This requires machinery to maintain an impeccable aesthetic and operational status, making UMO protective covers an essential component to resist sun wear and comply with community rules.'}
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

