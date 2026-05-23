import { Megaphone, Map, CheckCircle2, DollarSign, Target, LayoutTemplate } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const MarketingPlan = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 17' : 'Section 17'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4 flex items-center gap-3">
          <Megaphone className="w-8 h-8 text-unoOrange" />
          {language === 'es' ? 'Plan de Marketing' : 'Marketing Plan'}
        </h1>
      </header>

      <section className="space-y-8">
        <div className="glass-card p-8 bg-surface border-glassBorder">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-glassBorder pb-2">
            <Map className="w-6 h-6 text-unoOrange" />
            {language === 'es' ? 'Estrategia de Entrada al Mercado' : 'Market Entry Strategy'}
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold mb-2">
                {language === 'es' ? 'Alternativas de Entrada: Modificación' : 'Entry Alternatives: Modification'}
              </h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                {language === 'es'
                  ? 'La empresa adoptará una estrategia de Modificación del Producto. Aunque el núcleo técnico y material de los asientos (poliuretano y malla 3D) permanece estandarizado para optimizar las economías de escala, la interfaz mecánica se adaptará por completo para cumplir con las regulaciones de la California Air Resources Board (CARB) para motores de combustión pequeños.'
                  : 'The company will adopt a Product Modification strategy. Although the technical and material core of the seats (polyurethane and 3D mesh) remains standardized to optimize economies of scale, the mechanical interface will be fully adapted to comply with the California Air Resources Board (CARB) regulations for small combustion engines.'}
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">
                {language === 'es' ? 'Elementos Flexibles' : 'Flexible Elements'}
              </h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                {language === 'es'
                  ? 'El diseño incorporará sistemas de anclaje universales y flexibles. Esta característica asegura la compatibilidad dual del producto, permitiendo tanto la revitalización de la maquinaria a gasolina vigente como la adaptación inmediata a las nuevas flotas eléctricas exigidas por la estricta normativa del estado de California.'
                  : 'The design will incorporate universal and flexible anchoring systems. This feature ensures the dual compatibility of the product, allowing both the revitalization of current gasoline machinery and the immediate adaptation to new electric fleets required by the strict regulations of the state of California.'}
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">
                {language === 'es' ? 'Justificación' : 'Justification'}
              </h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                {language === 'es'
                  ? 'La elección de modificar la interfaz del producto responde a barreras legales y ambientales críticas en la región objetivo. Introducir el producto sin modificaciones limitaría el acceso al mercado de flotas nuevas y sostenibles, mientras que desarrollar un producto completamente nuevo elevaría los costos de desarrollo de manera innecesaria. La modificación equilibra la eficiencia en la producción con la relevancia comercial local.'
                  : 'The choice to modify the product interface responds to critical legal and environmental barriers in the target region. Introducing the product without modifications would limit access to the market for new and sustainable fleets, while developing a completely new product would unnecessarily raise development costs. Modification balances production efficiency with local commercial relevance.'}
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 bg-surface border-glassBorder">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-glassBorder pb-2">
            <LayoutTemplate className="w-6 h-6 text-unoOrange" />
            {language === 'es' ? 'Comercialización Digital del Producto' : 'Digital Product Commercialization'}
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold mb-2">
                {language === 'es' ? 'Métodos de Comercialización Digital' : 'Digital Commercialization Methods'}
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Publicidad Digital y Social Selling: ' : 'Digital Advertising & Social Selling: '}</strong>
                    {language === 'es'
                      ? 'Concentración de la inversión en campañas hiper-segmentadas a través de Meta Ads (Instagram y Facebook). Se utilizará Facebook Marketplace como herramienta de venta social para conectar de forma directa con ingenieros de mantenimiento, mecánicos y compradores mayoristas pertenecientes a las cadenas de distribución asociadas.'
                      : 'Concentration of investment in hyper-segmented campaigns through Meta Ads (Instagram and Facebook). Facebook Marketplace will be used as a social selling tool to connect directly with maintenance engineers, mechanics, and wholesale buyers belonging to partner distribution chains.'}
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'SEO y SEM Industrial: ' : 'Industrial SEO & SEM: '}</strong>
                    {language === 'es'
                      ? 'Implementación de estrategias de posicionamiento orgánico y de pago mediante palabras clave transaccionales de alta intención B2B, tales como "commercial mower replacement seats California" o "aftermarket lawnmower components B2B". El propósito es capturar de forma inmediata la demanda de urgencia cuando una flota reporta una avería.'
                      : 'Implementation of organic and paid positioning strategies through high B2B intent transactional keywords, such as "commercial mower replacement seats California" or "aftermarket lawnmower components B2B". The purpose is to immediately capture urgency demand when a fleet reports a breakdown.'}
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Email Marketing Automatizado: ' : 'Automated Email Marketing: '}</strong>
                    {language === 'es'
                      ? 'Despliegue de secuencias de correos electrónicos dirigidas a bases de datos cualificadas de gerentes de flotas. Se distribuirán catálogos interactivos, alertas de mantenimiento preventivo y ofertas escalonadas con incentivos y descuentos por volumen de compra.'
                      : 'Deployment of email sequences directed to qualified databases of fleet managers. Interactive catalogs, preventive maintenance alerts, and tiered offers with incentives and discounts for volume purchases will be distributed.'}
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">
                {language === 'es' ? 'Posicionamiento Online' : 'Online Positioning'}
              </h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                {language === 'es'
                  ? 'En el entorno digital, UMO se proyectará como una marca especialista, ágil y de alta confiabilidad técnica. La identidad visual y la comunicación en los canales digitales enfatizarán la durabilidad del producto frente al estrés estructural y el soporte operativo sin fricciones, alejándose de la imagen de un distribuidor generalista y pesado.'
                  : 'In the digital environment, UMO will be projected as a specialist, agile, and highly technically reliable brand. Visual identity and communication on digital channels will emphasize product durability against structural stress and frictionless operational support, moving away from the image of a generalist and heavy distributor.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8 bg-surface border-glassBorder">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-glassBorder pb-2">
              <Target className="w-6 h-6 text-unoOrange" />
              {language === 'es' ? 'Segmentación del Mercado' : 'Market Segmentation'}
            </h3>
            <div className="space-y-4">
              <h4 className="text-white font-bold">
                {language === 'es' ? 'Público Objetivo' : 'Target Audience'}
              </h4>
              <p className="text-textSecondary text-sm leading-relaxed mb-4">
                {language === 'es'
                  ? 'El mercado objetivo comprende a las más de 52,000 empresas de paisajismo comercial e industrial establecidas en el estado de California. Se priorizarán geográficamente aquellas zonas con una alta densidad de campos de golf y complejos corporativos. Los hábitos de consumo en línea de este segmento exigen soluciones de autoservicio eficientes, acceso a inventarios en tiempo real y transacciones corporativas fluidas y seguras.'
                  : 'The target market comprises over 52,000 commercial and industrial landscaping companies established in the state of California. Geographically, areas with a high density of golf courses and corporate complexes will be prioritized. The online consumption habits of this segment demand efficient self-service solutions, real-time inventory access, and seamless corporate transactions.'}
              </p>
              <h4 className="text-white font-bold">
                {language === 'es' ? 'Buyer Persona: El Gerente de Flota Enfocado en Eficiencia' : 'Buyer Persona: Efficiency-Focused Fleet Manager'}
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-unoOrange shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Perfil: ' : 'Profile: '}</strong>
                    {language === 'es' ? 'Tomador de decisiones logísticas y operativas en empresas de mantenimiento de áreas verdes.' : 'Logistics and operational decision maker in green area maintenance companies.'}
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-unoOrange shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Motivaciones: ' : 'Motivations: '}</strong>
                    {language === 'es' ? 'Minimizar el tiempo de inactividad de la maquinaria para evitar pérdidas financieras en los contratos de servicio.' : 'Minimize machinery downtime to avoid financial losses in service contracts.'}
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-unoOrange shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Comportamiento Digital: ' : 'Digital Behavior: '}</strong>
                    {language === 'es' ? 'Evalúa minuciosamente las especificaciones técnicas en plataformas web, exige garantías digitales de compatibilidad y prefiere procesos de compra automatizados. Prioriza la certidumbre en el suministro del repuesto sobre el ahorro mínimo en el precio unitario.' : 'Minutely evaluates technical specifications on web platforms, demands digital compatibility guarantees, and prefers automated purchasing processes. Prioritizes certainty in spare parts supply over minimal savings in unit price.'}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 bg-surface border-glassBorder">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-glassBorder pb-2">
              <CheckCircle2 className="w-6 h-6 text-unoOrange" />
              {language === 'es' ? 'Características del Producto' : 'Product Features'}
            </h3>
            <div className="space-y-4">
              <h4 className="text-white font-bold">
                {language === 'es' ? 'Descripción Detallada' : 'Detailed Description'}
              </h4>
              <p className="text-textSecondary text-sm leading-relaxed mb-4">
                {language === 'es'
                  ? 'Asientos ergonómicos de alta gama diseñados para maquinaria de paisajismo pesado. Están fabricados con poliuretano de alta resiliencia y mallas con tecnología 3D, combinaciones materiales que soportan el uso intensivo durante extensas jornadas de trabajo. Su propuesta de valor central radica en su diseño de compatibilidad dual, apto para actualizar equipos de combustión interna tradicionales y flotas eléctricas de última generación.'
                  : 'High-end ergonomic seats designed for heavy landscaping machinery. They are manufactured with high-resilience polyurethane and 3D technology meshes, material combinations that withstand intensive use during extensive workdays. Its central value proposition lies in its dual compatibility design, suitable for updating traditional internal combustion equipment and latest-generation electric fleets.'}
              </p>
              <h4 className="text-white font-bold">
                {language === 'es' ? 'Beneficios Digitales' : 'Digital Benefits'}
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Verificador Predictivo de Compatibilidad: ' : 'Predictive Compatibility Verifier: '}</strong>
                    {language === 'es' ? 'Herramienta en línea que permite al usuario ingresar el modelo exacto de su podadora para confirmar la adaptación mecánica antes de la compra, reduciendo el índice de devoluciones.' : 'Online tool that allows the user to enter the exact model of their mower to confirm mechanical adaptation before purchase, reducing the return rate.'}
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Historial de Cuenta y Reordenamiento Automático: ' : 'Account History and Automatic Reordering: '}</strong>
                    {language === 'es' ? 'Interfaz que facilita la compra recurrente de repuestos con un solo clic, agilizando el abastecimiento de los talleres de mantenimiento.' : 'Interface that facilitates the recurring purchase of spare parts with a single click, speeding up the supply of maintenance workshops.'}
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Portal de Soporte Asincrónico: ' : 'Asynchronous Support Portal: '}</strong>
                    {language === 'es' ? 'Sistema de asistencia técnica digital que resuelve consultas operativas complejas con rapidez, evitando las esperas asociadas a las líneas telefónicas tradicionales.' : 'Digital technical assistance system that resolves complex operational queries quickly, avoiding waits associated with traditional phone lines.'}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 bg-surface border-glassBorder">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-glassBorder pb-2">
            <DollarSign className="w-6 h-6 text-unoOrange" />
            {language === 'es' ? 'Canales, Precios y Competencia' : 'Channels, Pricing & Competition'}
          </h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                {language === 'es' ? 'Canales de Distribución Digital' : 'Digital Distribution Channels'}
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'E-commerce: ' : 'E-commerce: '}</strong>
                    {language === 'es' ? 'La distribución digital se estructurará en dos etapas metodológicas: Fase 1 (Penetración) con inserción en catálogos de grandes superficies (The Home Depot, Ace Hardware, Walmart) y distribuidores especializados. Fase 2 (Escalabilidad) migrando compras recurrentes a la plataforma B2B propia de UMO.' : 'Digital distribution will be structured in two methodological stages: Phase 1 (Penetration) with insertion in large retail catalogs (The Home Depot, Ace Hardware, Walmart) and specialized distributors. Phase 2 (Scalability) migrating recurring purchases to UMO\'s own B2B platform.'}
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Redes Sociales: ' : 'Social Media: '}</strong>
                    {language === 'es' ? 'Uso estratégico de Instagram y Facebook como plataformas de prospección y direccionamiento de tráfico calificado hacia los puntos de venta digitales y portales de los distribuidores autorizados.' : 'Strategic use of Instagram and Facebook as prospecting platforms and routing qualified traffic to digital sales points and authorized distributor portals.'}
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                {language === 'es' ? 'Estrategia de Precios' : 'Pricing Strategy'}
              </h4>
              <p className="text-textSecondary text-sm leading-relaxed mb-4">
                {language === 'es'
                  ? 'La fijación de precios se estructura a partir de los costos de manufactura eficiente en la planta de Colombia, los costos logísticos de transporte marítimo hacia la Costa Oeste y los gastos operativos fijos de la plataforma de comercio electrónico B2B. El análisis se complementa con la alta percepción de valor que genera el cumplimiento de las normativas de la CARB y la disminución de tiempos muertos.'
                  : 'Pricing is structured from efficient manufacturing costs at the Colombia plant, maritime transport logistics costs to the West Coast, and fixed operating expenses of the B2B e-commerce platform. The analysis is complemented by the high value perception generated by CARB regulatory compliance and reduced downtime.'}
              </p>
              <p className="text-textSecondary text-sm leading-relaxed">
                <strong className="text-white">{language === 'es' ? 'Penetración Moderada Basada en el Valor: ' : 'Value-Based Moderate Penetration: '}</strong>
                {language === 'es'
                  ? 'Se aplicará una estrategia de precios basados en el valor (Value-Based Pricing). El precio final al comprador corporativo se situará estratégicamente por debajo de los repuestos originales (OEM) para incentivar el cambio, pero por encima de las opciones genéricas asiáticas.'
                  : 'A Value-Based Pricing strategy will be applied. The final price to the corporate buyer will strategically sit below original equipment manufacturers (OEM) to incentivize brand switching, but above generic Asian options.'}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                {language === 'es' ? 'Análisis de Clientes y Competencia' : 'Customer & Competition Analysis'}
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Clientes Potenciales: ' : 'Potential Customers: '}</strong>
                    {language === 'es' ? 'Empresas de mantenimiento de áreas verdes y contratistas industriales en California cuyos hábitos de compra digital están guiados por la urgencia operativa.' : 'Green area maintenance companies and industrial contractors in California whose digital purchasing habits are guided by operational urgency.'}
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Competencia Digital (OEM): ' : 'Digital Competition (OEM): '}</strong>
                    {language === 'es' ? 'Posicionamiento sólido pero ecosistemas cerrados, con procesos de compra rígidos y precios elevados.' : 'Solid positioning but closed ecosystems, with rigid purchasing processes and high prices.'}
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
                  <p className="text-textSecondary text-sm leading-relaxed">
                    <strong className="text-white">{language === 'es' ? 'Ventajas Competitivas: ' : 'Competitive Advantages: '}</strong>
                    {language === 'es' ? 'Innovación Digital (verificador de compatibilidad), Interacción en Línea (soporte asincrónico rápido), y Relaciones (posicionamiento inmediato en inventarios de expertos).' : 'Digital Innovation (compatibility verifier), Online Interaction (fast asynchronous support), and Relationships (immediate positioning in expert inventories).'}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
