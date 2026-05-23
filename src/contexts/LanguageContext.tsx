import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (category: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (category: string, key: string) => {
    try {
      // @ts-ignore
      return translations[category][key][language] || key;
    } catch {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Simplified translation dictionary for now
export const translations: any = {
  menu: {
    'Hub Estratégico': { es: 'Hub Estratégico', en: 'Strategic Hub' },
    'Próximamente': { es: 'Próximamente', en: 'Coming Soon' }
  },
  nav: {
    fase1: { es: 'Mapeo Inicial De La Empresa', en: 'Initial Company Mapping' },
    overview: { es: 'Resumen Ejecutivo', en: 'Executive Summary' },
    identity: { es: 'Identidad Corporativa y Descripción del Producto', en: 'Corporate Identity & Product Description' },
    bmc: { es: 'Business Model Canvas', en: 'Business Model Canvas' },
    target: { es: 'Mercado Objetivo', en: 'Target Market' },
    dofa: { es: 'Análisis Interno (DOFA)', en: 'Internal Analysis (SWOT)' },
    sostenibilidad: { es: 'Sostenibilidad', en: 'Sustainability' },
    potencial: { es: 'Diagnóstico De Potencialidades', en: 'Potential Diagnostic' },
    viabilidad: { es: 'Viabilidad De Internacionalización', en: 'Internationalization Viability' },
    smart: { es: 'Objetivo SMART', en: 'SMART Objective' },
    panorama: { es: 'Panorama Económico', en: 'Economic Outlook' },
    economics: { es: 'Análisis Macroeconómico', en: 'Macroeconomic Analysis' },
    social_cultural: { es: 'Social - Cultural', en: 'Social - Cultural' },
    social_cultural_sub: { es: 'Análisis Social y Cultural', en: 'Social & Cultural Analysis' },
    political_legal: { es: 'Político - Legal', en: 'Political - Legal' },
    political_legal_sub: { es: 'Análisis Político y Legal', en: 'Political & Legal Analysis' },
    tech_environmental: { es: 'Tecnológico - Ambiental', en: 'Technological - Ambiental' },
    tech_environmental_sub: { es: 'Análisis Tecnológico y Ambiental', en: 'Technological & Ambiental Analysis' },
    international_trade: { es: 'Comercio Internacional', en: 'International Trade' },
    international_trade_sub: { es: 'Acuerdos y Comercio', en: 'Agreements & Trade' },
    foreign_investment: { es: 'Inversión Extranjera', en: 'Foreign Investment' },
    foreign_investment_sub: { es: 'Análisis de Inversión', en: 'Investment Analysis' },
    score_analysis: { es: 'Análisis de Resultados', en: 'Score Analysis' },
    score_analysis_sub: { es: 'Resumen de Puntajes', en: 'Score Summary' },
    selected_state_sub: { es: 'Estado Seleccionado', en: 'Selected State' },
    estrategia: { es: 'Estrategia dentro del estado', en: 'In-State Strategy' },
    estrategia_internacionalizacion: { es: 'Estrategia de Internacionalización', en: 'Internationalization Strategy' },
    marketing_plan: { es: 'Plan de Marketing', en: 'Marketing Plan' },
    fase2: { es: 'Selección De Mercado', en: 'Market Selection' },
    market: { es: 'Preselección', en: 'Pre-selection' },
    fase3: { es: 'Modo De Entrada', en: 'Entry Mode' },
    entry: { es: 'Estrategia', en: 'Strategy' },
    referencias: { es: 'Referencias Y Fuentes', en: 'References & Sources' },
    bibliography: { es: 'Bibliografías', en: 'Bibliography' }
  },
  common: {
    'Sección 2': { es: 'Sección 2', en: 'Section 2' }
  },
  identity: {
    title: { es: 'Identidad Corporativa y Descripción del Producto', en: 'Corporate Identity & Product Description' },
  },
  bmc: {
    title: { es: 'Business Model Canvas', en: 'Business Model Canvas' },
    engineeringTitle: { es: 'Ingeniería de Confort UMO', en: 'UMO Comfort Engineering' },
    engineeringDesc: { es: 'Nuestros asientos industriales optimizan la productividad eliminando la fatiga mediante ergonomía avanzada y ciencia de materiales.', en: 'Our industrial seats optimize productivity by eliminating fatigue through advanced ergonomics and material science.' },
    thermal: { es: 'Rendimiento Térmico y Mecánico', en: 'Thermal & Mechanical Performance' },
    thermalDesc: { es: 'El uso de poliuretano de alta resiliencia y mallas 3D neutraliza las vibraciones y disipa el calor solar, protegiendo la salud del operario en jornadas intensas.', en: 'The use of high-resilience polyurethane and 3D mesh neutralizes vibrations and dissipates solar heat, protecting operator health during intense shifts.' },
    resistance: { es: 'Resistencia y Estabilidad', en: 'Resistance & Stability' },
    resistanceDesc: { es: 'Fabricados con materiales técnicos resistentes a la intemperie y superficies antideslizantes para garantizar seguridad en cualquier terreno.', en: 'Manufactured with weather-resistant technical materials and anti-slip surfaces to ensure safety on any terrain.' },
    brand: { es: 'Identidad de Marca', en: 'Brand Identity' },
    brandDesc: { es: 'Personalización total de diseño, materiales y branding para una integración perfecta con la propuesta estética de cada fabricante.', en: 'Complete customization of design, materials, and branding for seamless integration with each manufacturer\'s aesthetic proposal.' },
    partners: { es: 'Socios Clave', en: 'Key Partners' },
    partnersDesc1: { es: '• Proveedores de materiales y aliados logísticos.', en: '• Material suppliers & logistics partners.' },
    partnersDesc2: { es: '• Distribuidores e importadores en EE.UU.', en: '• Distributors & importers in USA.' },
    partnersDesc3: { es: '• Asesores legales y plataformas e-commerce.', en: '• Legal advisors & e-commerce platforms.' },
    partnersDesc4: { es: '• Talleres de instalaciones locales.', en: '• Local installation workshops.' },
    partnersDesc5: { es: '• Acuerdo Colombia-EE.UU. (Arancel 0%).', en: '• US-Colombia Agreement (0% Tariff).' },
    activities: { es: 'Actividades Clave', en: 'Key Activities' },
    actDesc1: { es: '• Diseño, fabricación y pruebas ergonómicas.', en: '• Design, manufacturing & ergonomic testing.' },
    actDesc2: { es: '• Logística internacional y cumplimiento de normas.', en: '• International logistics & compliance.' },
    actDesc3: { es: '• Gestión comercial en mercado americano.', en: '• Commercial management in US market.' },
    resources: { es: 'Recursos Clave', en: 'Key Resources' },
    resDesc1: { es: '• Experiencia industrial (+360 empleados).', en: '• Industrial experience (+360 employees).' },
    resDesc2: { es: '• Know-how desde 1968 en autopartes.', en: '• Auto parts know-how since 1968.' },
    resDesc3: { es: '• Certificaciones de calidad internacional.', en: '• International quality certifications.' },
    value: { es: 'Propuesta de Valor', en: 'Value Proposition' },
    valDesc1: { es: 'Sillas para podadoras eléctricas que se destacan por su comodidad, resistencia y durabilidad.', en: 'Electric mower seats that stand out for comfort, resistance, and durability.' },
    valDesc2: { es: 'Ergonomía adaptable a diferentes equipos del mercado americano.', en: 'Ergonomics adaptable to different American market equipment.' },
    valDesc3: { es: 'Calidad industrial certificada para el mercado más exigente.', en: 'Certified industrial quality for the most demanding market.' },
    relations: { es: 'Relaciones', en: 'Customer Relationships' },
    relDesc1: { es: 'Técnica y cercana (cumplimiento).', en: 'Technical and close (compliance).' },
    relDesc2: { es: 'Garantías y atención premium.', en: 'Warranties and premium support.' },
    channels: { es: 'Canales', en: 'Channels' },
    chanDesc1: { es: '• Distribuidores/Importadores USA.', en: '• USA Distributors/Importers.' },
    chanDesc2: { es: '• Marketplaces y Feria sectoriales.', en: '• Marketplaces and Trade Shows.' },
    chanDesc3: { es: '• Sitio web y redes sociales (foco USA).', en: '• Website & Social Media (USA focus).' },
    segments: { es: 'Segmentos de Cliente', en: 'Customer Segments' },
    segDesc1: { es: 'Talleres, tiendas de jardinería y servicios logísticos.', en: 'Workshops, garden stores, and logistic services.' },
    segDesc2: { es: 'Dueños de podadoras', en: 'Mower owners' },
    segDesc3: { es: 'buscando confort.', en: 'seeking comfort.' },
    costs: { es: 'Estructura de Costos', en: 'Cost Structure' },
    costDesc: { es: 'Materiales y producción · Mano de obra · Adaptación mercado americano · Logística y distribución · Marketing y Postventa · Costos de posicionamiento regional.', en: 'Materials & production · Labor · American market adaptation · Logistics & distribution · Marketing & After-sales · Regional positioning costs.' },
    revenue: { es: 'Fuentes de Ingresos', en: 'Revenue Streams' },
    revDesc: { es: 'Venta de sillas para podadoras (Líneas Económica y Premium) · Contratos con distribuidores · Ventas por volumen a empresas de paisajismo · Servicios de personalización.', en: 'Mower seat sales (Economy and Premium lines) · Distributor contracts · Volume sales to landscaping companies · Customization services.' },
    b2b: { es: 'Empresas (B2B):', en: 'Business (B2B):' },
    b2c: { es: 'Individuales (B2C):', en: 'Individual (B2C):' },
  }
};
