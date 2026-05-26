import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const SelectedState = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 15' : 'Section 15'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4 flex items-center gap-3">
          <Star className="w-8 h-8 text-unoOrange" />
          {language === 'es' ? 'Estado Seleccionado: California' : 'Selected State: California'}
        </h1>
      </header>

      <section>
        <div className="glass-card p-8 bg-surface border-glassBorder">
          <p className="text-base text-textSecondary leading-relaxed mb-8">
            {language === 'es'
              ? 'Con base en los resultados de la matriz de selección, California se consolida como el mercado con mayor potencial para la internacionalización de UMO, superando a alternativas como Arizona debido a cuatro factores estratégicos, sin dejar de lado Arizona ya que también es un buen estado para la internacionalización:'
              : 'Based on the selection matrix results, California consolidates as the market with the greatest potential for UMO\'s internationalization, surpassing alternatives like Arizona due to four strategic factors, without disregarding Arizona as it is also a good state for internationalization:'}
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Volumen de mercado y demanda' : 'Market Volume and Demand'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es' 
                    ? 'El estado cuenta con una alta densidad demográfica, una vasta infraestructura de campos de golf y Jardines, contando con aproximadamente 52.682 empresas de paisajismo. Esta enorme base comercial garantiza un flujo constante y predecible de repuestos para el mantenimiento de flotas.'
                    : 'The state has a high population density, a vast infrastructure of golf courses and gardens, with approximately 52,682 landscaping companies. This massive commercial base guarantees a constant and predictable flow of spare parts for fleet maintenance.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Eficiencia logística' : 'Logistics Efficiency'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'Al ser un estado costero con puertos de primer nivel, permite la recepción directa de la mercancía. Esto elimina la necesidad de incurrir en fletes terrestres internos de larga distancia, un sobrecosto crítico si se considera que ingresar por Arizona implicaría un transporte terrestre adicional de unas 370 millas (600 kilómetros). Si bien los tiempos en puerto son mayores que en Arizona la relación precio/beneficio es mucho mayor tomando en cuenta que hasta arizona el precio por contenedor aumentaría de 1200 a 1500 dólares, ya que si se acompaña con una buena logística y planeación ese tiempo en puerto no representaría un mayor problema.'
                    : 'Being a coastal state with top-tier ports, it allows for direct receipt of merchandise. This eliminates the need to incur long-distance inland freight costs, a critical extra cost considering that entering through Arizona would imply an additional land transport of about 370 miles (600 kilometers). Although port times are longer than in Arizona, the price/benefit ratio is much higher considering that to Arizona the price per container would increase by 1200 to 1500 dollars, since if accompanied by good logistics and planning that port time would not represent a major problem.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Efecto de la transición tecnológica' : 'Effect of Technological Transition'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'La regulación de 2024 que restringe la fabricación de podadoras a gasolina genera un doble beneficio. Por un lado, los equipos a combustión aún operativos requerirán piezas y como las sillas de UMO, que son totalmente compatibles serán compradas como repuesto para prolongar su vida útil. Por otro lado, las podadoras eléctricas introducidas tras la norma están próximas a cumplir sus primeros ciclos de mantenimiento.'
                    : 'The 2024 regulation restricting the manufacture of gas-powered mowers generates a double benefit. On the one hand, still-operational combustion equipment will require parts and since UMO seats are fully compatible, they will be purchased as replacements to extend their useful life. On the other hand, the electric mowers introduced after the standard are nearing their first maintenance cycles.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Estrés estructural de los materiales' : 'Structural Stress of Materials'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'Aunque los índices de radiación UV y los meses de uso continuo son menores que en Arizona, la inmensa extensión territorial que cubren las empresas en California exige jornadas de trabajo severas. Este uso intensivo somete a la maquinaria a un alto estrés mecánico, acelerando el desgaste de los componentes y asegurando una demanda sostenida en el mercado de reposición.'
                    : 'Although UV radiation indexes and months of continuous use are lower than in Arizona, the immense territorial extension covered by companies in California demands severe workdays. This intensive use subjects the machinery to high mechanical stress, accelerating component wear and ensuring sustained demand in the replacement market.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Capacidad económica' : 'Economic Capacity'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'California lidera en poder adquisitivo absoluto, registrando en 2025 un PIB per cápita real de 86.100 dólares —lo que sitúa al estado en el cuarto puesto a nivel nacional— y un ingreso medio por hogar de 99.122 dólares. Esta solidez financiera se traduce en un gasto en consumo personal (PCE) per cápita de 67.565 dólares, posicionando a sus consumidores entre los que más gastan en todo el país y facilitando una mayor disposición a pagar por comodidad, ergonomía y valor agregado, lo cual beneficia directamente la adopción de los sillines premium de UMO.'
                    : 'California leads in absolute purchasing power, registering a real per capita GDP of 86,100 dollars in 2025 —ranking the state fourth nationwide— and a median household income of 99,122 dollars. This financial strength translates into personal consumption expenditures (PCE) per capita of 67,565 dollars, positioning its consumers among the highest spenders in the country and facilitating a greater willingness to pay for comfort, ergonomics, and added value, which directly benefits the adoption of premium UMO seats.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
