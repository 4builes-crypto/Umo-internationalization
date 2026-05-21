import { motion } from 'framer-motion';
import { TrendingUp, Ship, Scale, ShieldCheck } from 'lucide-react';
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
            ? 'Análisis de flujos de importación, capacidad de infraestructura de entrada y barreras regulatorias para el sillón de UMO.'
            : 'Analysis of import flows, entry infrastructure capacity, and regulatory barriers for UMO\'s seat.'}
        </p>
      </header>

      {/* Indicador 1: Concentración de Flujos y Canales de Importación Sectorial */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            {language === 'es'
              ? '1. Concentración de Flujos y Canales de Importación Sectorial'
              : '1. Sectoral Import Flow & Channel Concentration'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' ? (
                    <>
                      Registra un flujo de{' '}
                      <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">
                        48,000 millones
                      </span>{' '}
                      de dólares anuales en esta categoría, donde el{' '}
                      <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">
                        65%
                      </span>{' '}
                      de sus proveedores proviene de mercados diversificados fuera de Norteamérica (U.S. Census Bureau, 2024).
                    </>
                  ) : (
                    <>
                      Registers an annual flow of{' '}
                      <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">
                        48 billion dollars
                      </span>{' '}
                      in this category, with{' '}
                      <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">
                        65%
                      </span>{' '}
                      of its suppliers originating from diversified markets outside North America (U.S. Census Bureau, 2024).
                    </>
                  )}
                </p>
              </div>

              <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 0.6</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' ? (
                    <>
                      Alcanza un valor de{' '}
                      <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                        6,500 millones
                      </span>{' '}
                      de dólares en importaciones industriales, pero con el{' '}
                      <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                        42%
                      </span>{' '}
                      de su comercio exterior concentrado e integrado exclusivamente con México (U.S. Department of Commerce, 2024).
                    </>
                  ) : (
                    <>
                      Reaches{' '}
                      <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                        6.5 billion dollars
                      </span>{' '}
                      in industrial imports, but with{' '}
                      <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                        42%
                      </span>{' '}
                      of its foreign trade concentrated and integrated exclusively with Mexico (U.S. Department of Commerce, 2024).
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
            <TrendingUp className="absolute -right-4 -top-4 w-24 h-24 text-unoOrange/10" />
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <ShieldCheck className="text-unoOrange w-6 h-6" />
              {language === 'es' ? 'Análisis Comparativo' : 'Comparative Analysis'}
            </h3>
            <p className="text-sm text-white font-medium leading-relaxed mb-4">
              {language === 'es'
                ? 'El volumen de California demuestra una infraestructura comercial madura y canales abiertos para absorber manufactura global independiente.'
                : 'California\'s volume demonstrates a mature commercial infrastructure and open channels to absorb independent global manufacturing.'}
            </p>
            <p className="text-xs text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'Por el contrario, la fuerte inercia del comercio transfronterizo en Arizona bajo el T-MEC satura las redes logísticas locales con flujos intra-firma (Arizona Department of Transportation, 2024), lo que exigiría a UMO un mayor esfuerzo de prospección para abrir un canal de distribución desde Colombia.'
                : 'Conversely, the strong inertia of cross-border trade in Arizona under the USMCA saturates local logistics networks with intra-firm flows (Arizona Department of Transportation, 2024), requiring a greater prospecting effort from UMO to establish a distribution channel from Colombia.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Indicador 2: Infraestructura Portuaria y Puntos de Entrada Internacional */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Ship className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            {language === 'es'
              ? '2. Infraestructura Portuaria y Puntos de Entrada Internacional'
              : '2. Port Infrastructure & International Points of Entry'}
          </h2>
        </div>

        <div className="glass-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-unoOrange/5 rounded-full blur-3xl" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest border-b border-white/10 pb-3 inline-block">
                {language === 'es' ? 'Métrica y Datos Clave' : 'Key Metrics & Data'}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">CALIFORNIA</span>
                    <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 5.0</span>
                  </div>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    {language === 'es' ? (
                      <>
                        El complejo portuario de Los Ángeles y Long Beach procesa más de{' '}
                        <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">
                          19 millones
                        </span>{' '}
                        de TEUs al año, representando el{' '}
                        <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">
                          30%
                        </span>{' '}
                        de todas las importaciones marítimas de Estados Unidos (U.S. Department of Transportation, 2024).
                      </>
                    ) : (
                      <>
                        The Los Angeles and Long Beach port complex processes more than{' '}
                        <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">
                          19 million
                        </span>{' '}
                        TEUs annually, representing{' '}
                        <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">
                          30%
                        </span>{' '}
                        of all US maritime imports (U.S. Department of Transportation, 2024).
                      </>
                    )}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <span className="text-unoOrange font-bold text-xs uppercase tracking-widest">ARIZONA</span>
                    <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 3.5</span>
                  </div>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    {language === 'es' ? (
                      <>
                        Al ser un estado mediterráneo, posee una capacidad marítima de{' '}
                        <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                          0 TEUs
                        </span>
                        , obligando a un traslado terrestre de aproximadamente{' '}
                        <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                          370 millas
                        </span>{' '}
                        desde los muelles de California, lo que genera un sobrecosto logístico de entre{' '}
                        <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                          1,200 y 1,500 dólares
                        </span>{' '}
                        por contenedor (Arizona Department of Transportation, 2024).
                      </>
                    ) : (
                      <>
                        As a landlocked state, it has a maritime capacity of{' '}
                        <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                          0 TEUs
                        </span>
                        , forcing overland transport of approximately{' '}
                        <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                          370 miles
                        </span>{' '}
                        from California docks, generating a logistical overcost of between{' '}
                        <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                          1,200 and 1,500 dollars
                        </span>{' '}
                        per container (Arizona Department of Transportation, 2024).
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 relative glass-card flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <ShieldCheck className="text-unoOrange w-6 h-6" />
                {language === 'es' ? 'Análisis Comparativo' : 'Comparative Analysis'}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed mb-4">
                {language === 'es'
                  ? 'California ofrece una ventaja logística definitiva al permitir la recepción directa de los contenedores desde puertos colombianos (Cartagena o Buenaventura) con costos mínimos de internación final.'
                  : 'California offers a definitive logistical advantage by allowing direct reception of containers from Colombian ports (Cartagena or Buenaventura) with minimal final entry costs.'}
              </p>
              <p className="text-sm text-textSecondary leading-relaxed">
                {language === 'es'
                  ? 'El modelo de Arizona añade intermediación multimodal, incrementando el costo unitario del stock de repuestos y elevando el riesgo operativo en el flete terrestre interestatal.'
                  : 'Arizona\'s model adds multimodal intermediation, increasing the unit cost of replacement parts stock and raising operational risk in interstate overland freight.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indicador 3: Regulación Aduanera Local y Barreras No Arancelarias */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-l-4 border-unoOrange pl-4 py-1">
          <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            {language === 'es'
              ? '3. Regulación Aduanera Local y Barreras No Arancelarias'
              : '3. Local Customs Regulation & Non-Tariff Barriers'}
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-7 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-zinc-800 hover:border-blue-400/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-blue-400 font-bold text-xs tracking-widest uppercase">CALIFORNIA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-blue-400/40 rounded whitespace-nowrap">Score: 3.5</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' ? (
                    <>
                      Las terminales de California registran un tiempo de permanencia promedio de{' '}
                      <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">
                        4.2 días
                      </span>{' '}
                      debido a la saturación aduanera (U.S. Customs and Border Protection, 2025); a esto se suman las inspecciones obligatorias de la Junta de Recursos del Aire de California (California Air Resources Board, 2024).
                    </>
                  ) : (
                    <>
                      California terminals record an average dwell time of{' '}
                      <span className="px-1.5 py-0.5 bg-blue-400/10 border border-blue-400/20 text-blue-400 rounded font-semibold text-xs whitespace-nowrap">
                        4.2 days
                      </span>{' '}
                      due to customs saturation (U.S. Customs and Border Protection, 2025), coupled with mandatory inspections by the California Air Resources Board (2024).
                    </>
                  )}
                </p>
              </div>

              <div className="glass-card p-6 border-zinc-800 hover:border-unoOrange/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-unoOrange font-bold text-xs tracking-widest uppercase">ARIZONA</h4>
                  <span className="text-xs font-bold text-white px-2 py-0.5 bg-unoOrange/40 rounded whitespace-nowrap">Score: 4.5</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' ? (
                    <>
                      Las aduanas interiores de Arizona promedian{' '}
                      <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                        1.8 días
                      </span>{' '}
                      para la liberación de mercancías industriales y el estado no cuenta con agencias de restricción ambiental equivalentes para componentes mecánicos (U.S. Customs and Border Protection, 2025).
                    </>
                  ) : (
                    <>
                      Arizona inland customs average{' '}
                      <span className="px-1.5 py-0.5 bg-unoOrange/10 border border-unoOrange/20 text-unoOrange rounded font-semibold text-xs whitespace-nowrap">
                        1.8 days
                      </span>{' '}
                      for releasing industrial goods, and the state has no equivalent environmental restriction agencies for mechanical components (U.S. Customs and Border Protection, 2025).
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
            <Scale className="absolute -right-4 -top-4 w-24 h-24 text-unoOrange/10" />
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
              <ShieldCheck className="text-unoOrange w-6 h-6" />
              {language === 'es' ? 'Análisis Comparativo' : 'Comparative Analysis'}
            </h3>
            <p className="text-sm text-white font-medium leading-relaxed mb-4">
              {language === 'es'
                ? 'Arizona ofrece un entorno regulatorio ágil y de baja interferencia, facilitando que el producto entre en libre circulación comercial rápidamente.'
                : 'Arizona offers an agile and low-interference regulatory environment, facilitating quick commercial release of the product.'}
            </p>
            <p className="text-xs text-textSecondary leading-relaxed">
              {language === 'es'
                ? 'En contraste, los cuellos de botella operativos en los puertos de California y su estricto marco normativo local (como la junta CARB que impone restricciones técnicas estrictas a la maquinaria de paisajismo) introducen costos por demoras y trabas burocráticas que ralentizan el inicio de la operación de UMO.'
                : 'In contrast, operational bottlenecks at California ports and its strict local regulatory framework (such as CARB imposing strict technical restrictions on landscaping machinery) introduce delay costs and bureaucratic hurdles that slow down the start of UMO\'s operation.'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
