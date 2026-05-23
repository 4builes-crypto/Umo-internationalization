import { Target, TrendingUp, Anchor, Compass } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const InternationalStrategy = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 16' : 'Section 16'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4 flex items-center gap-3">
          <Target className="w-8 h-8 text-unoOrange" />
          {language === 'es' ? 'Estrategia de Internacionalización' : 'Internationalization Strategy'}
        </h1>
      </header>

      <section className="space-y-8">
        <div className="glass-card p-8 bg-surface border-glassBorder">
          <p className="text-lg text-textSecondary leading-relaxed mb-8">
            {language === 'es'
              ? 'La expansión de UMO hacia el mercado estadounidense se fundamenta en un modelo transnacional que equilibra la eficiencia en costos de producción con una rigurosa adaptación a las exigencias normativas del destino.'
              : 'The expansion of UMO into the US market is based on a transnational model that balances production cost efficiency with rigorous adaptation to destination regulatory requirements.'}
          </p>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 border-b border-glassBorder pb-2">
              <Compass className="w-6 h-6 text-unoOrange" />
              {language === 'es' ? 'Tipo de Entrada Elegido' : 'Chosen Entry Mode'}
            </h3>
            <p className="text-textSecondary text-base leading-relaxed">
              {language === 'es'
                ? 'El ingreso al mercado se ejecutará mediante una estrategia de exportación directa combinada con alianzas comerciales de distribución B2B. En una primera etapa, se descarta el establecimiento de filiales físicas o infraestructura propia en el destino, optando por un modelo de apalancamiento operativo total a través de terceros.'
                : 'Market entry will be executed through a direct export strategy combined with B2B distribution commercial alliances. In a first stage, establishing physical subsidiaries or proprietary infrastructure at the destination is ruled out, opting for a model of total operational leverage through third parties.'}
            </p>
          </div>
        </div>

        <div className="glass-card p-8 bg-surface border-glassBorder">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-glassBorder pb-2">
            <TrendingUp className="w-6 h-6 text-unoOrange" />
            {language === 'es' ? 'Razones Estratégicas' : 'Strategic Reasons'}
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Economías de escala' : 'Economies of scale'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'La centralización de la manufactura en la planta de Colombia permite aprovechar la especialización técnica en poliuretano de alta resiliencia y mallas 3D, manteniendo los costos competitivos frente a proveedores asiáticos y sustancialmente por debajo de los repuestos originales (OEM).'
                    : 'Centralizing manufacturing at the Colombia plant leverages technical specialization in high-resilience polyurethane and 3D meshes, keeping costs competitive against Asian suppliers and substantially below original equipment manufacturer (OEM) parts.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Mitigación del riesgo financiero' : 'Financial risk mitigation'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'Al no invertir en bodegas, flotas de transporte ni sucursales físicas en Estados Unidos, la empresa reduce la exposición al capital de riesgo durante la fase de introducción.'
                    : 'By not investing in warehouses, transport fleets, or physical branches in the US, the company reduces risk capital exposure during the introduction phase.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Optimización del conocimiento del mercado' : 'Market knowledge optimization'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'Ante el acceso limitado a las redes de distribución física directa en el país de destino, la comercialización y el soporte técnico se gestionarán de forma digital, capitalizando la infraestructura ya instalada de grandes aliados.'
                    : 'Given limited access to direct physical distribution networks in the target country, commercialization and technical support will be managed digitally, capitalizing on the already installed infrastructure of large allies.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 bg-surface border-glassBorder">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-glassBorder pb-2">
            <Anchor className="w-6 h-6 text-unoOrange" />
            {language === 'es' ? 'Implicaciones Operativas, Logísticas y de Costos' : 'Operational, Logistical, and Cost Implications'}
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Operación' : 'Operations'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'La gestión humana se concentrará en un servicio técnico bilingüe altamente capacitado y en herramientas asincrónicas en línea. Esto elimina la fricción de los canales telefónicos tradicionales y garantiza la precisión técnica que demandan los compradores corporativos.'
                    : 'Human management will focus on highly trained bilingual technical support and asynchronous online tools. This eliminates the friction of traditional phone channels and ensures the technical precision demanded by corporate buyers.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Logística' : 'Logistics'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'El flujo de mercancías comprenderá el despacho marítimo desde Colombia hacia los puertos de la Costa Oeste de Estados Unidos. Para la relación comercial con grandes superficies en la Fase 1, se sugiere definir los términos de negociación internacional (Incoterms) bajo la modalidad DDP (Delivered Duty Paid) o FCA (Free Carrier) en puntos de consolidación del aliado, dejando el desglose procedimental y los costes de aranceles para un anexo operativo detallado. De esta forma, el aliado asume el almacenamiento masivo y la logística de última milla.'
                    : 'The flow of goods will involve maritime shipment from Colombia to the US West Coast ports. For the commercial relationship with large retailers in Phase 1, it is suggested to define international negotiation terms (Incoterms) under DDP (Delivered Duty Paid) or FCA (Free Carrier) modalities at the ally\'s consolidation points, leaving the procedural breakdown and tariff costs for a detailed operational annex. This way, the ally assumes massive storage and last-mile logistics.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Costos' : 'Costs'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'La estructura de costos fijos en el extranjero se mantiene en cero. Los costos variables principales estarán asociados a los fletes internacionales, los aranceles de importación y el mantenimiento de la infraestructura digital (servidores y plataforma de comercio electrónico).'
                    : 'The fixed cost structure abroad remains at zero. Main variable costs will be associated with international freight, import tariffs, and the maintenance of digital infrastructure (servers and e-commerce platform).'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-unoOrange mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold mb-1">
                  {language === 'es' ? 'Posicionamiento' : 'Positioning'}
                </h4>
                <p className="text-textSecondary text-sm leading-relaxed">
                  {language === 'es'
                    ? 'La empresa se ubicará en el mercado como un proveedor de componentes alternativos de calidad premium, caracterizado por la agilidad digital y el cumplimiento normativo.'
                    : 'The company will position itself in the market as a provider of premium-quality alternative components, characterized by digital agility and regulatory compliance.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
