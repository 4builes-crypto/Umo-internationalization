import { motion } from 'framer-motion';
import { ShieldCheck, ShieldAlert, TrendingUp, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const DOFA = () => {
  const { language } = useLanguage();

  const data = [
    {
      title: language === 'es' ? "Fortalezas" : "Strengths",
      icon: ShieldCheck,
      color: "text-green-400",
      bgBorder: "border-green-400/20",
      bgHover: "hover:border-green-400/40",
      items: language === 'es' ? [
        "Dirección estratégica sólida: La empresa cuenta con objetivo, visión y misión claros, respaldados por investigaciones de mercado y competidores para definir estrategias correctas.",
        "Alianzas estratégicas internacionales: Experiencia previa en negociaciones y operaciones con EE.UU. y República Dominicana, facilitando futuras asociaciones en el mercado objetivo."
      ] : [
        "Solid strategic direction: The company has a clear objective, vision, and mission, backed by market and competitor research to define correct strategies.",
        "International strategic alliances: Previous experience in negotiations and operations with the US and Dominican Republic, facilitating future partnerships in the target market."
      ]
    },
    {
      title: language === 'es' ? "Oportunidades" : "Opportunities",
      icon: TrendingUp,
      color: "text-blue-400",
      bgBorder: "border-blue-400/20",
      bgHover: "hover:border-blue-400/40",
      items: language === 'es' ? [
        "Tecnología e innovación: Uso de la tecnología 'Sun-Cool' (asiento que no se calienta) como palanca competitiva para diferenciar el producto en el exterior.",
        "Ventaja competitiva en precios: Oferta de igual o mejor calidad a menos de la mitad del precio de la competencia existente en EE.UU.",
        "TLC con Estados Unidos: Beneficio del Tratado de Libre Comercio que reduce o elimina barreras arancelarias para el producto."
      ] : [
        "Technology and innovation: Use of 'Sun-Cool' technology (non-heating seat) as a competitive lever to differentiate the product abroad.",
        "Competitive price advantage: Offering equal or better quality at less than half the price of existing competition in the US.",
        "FTA with the United States: Benefit from the Free Trade Agreement that reduces or eliminates tariff barriers for the product."
      ]
    },
    {
      title: language === 'es' ? "Debilidades" : "Weaknesses",
      icon: ShieldAlert,
      color: "text-yellow-400",
      bgBorder: "border-yellow-400/20",
      bgHover: "hover:border-yellow-400/40",
      items: language === 'es' ? [
        "Brecha en talento humano internacional: Falta de personal propio en EE.UU. y dependencia de contratar comerciales nativos, lo que genera riesgos de seguimiento y control organizacional."
      ] : [
        "International human talent gap: Lack of internal personnel in the US and dependency on hiring native sales reps, creating risks in organizational monitoring and control."
      ]
    },
    {
      title: language === 'es' ? "Amenazas" : "Threats",
      icon: AlertTriangle,
      color: "text-red-400",
      bgBorder: "border-red-400/20",
      bgHover: "hover:border-red-400/40",
      items: language === 'es' ? [
        "Dependencia de un solo modo de entrada: El riesgo se concentra al ingresar con un único producto inicial, limitando las fuentes de capital.",
        "Fidelización a marcas locales: Dificultad para ganar la confianza de clientes ya leales a empresas estadounidenses frente a una marca latinoamericana.",
        "Uso de personal tercerizado: Dificultad para el crecimiento internacional sostenido debido a que el talento humano clave no es propio de la empresa."
      ] : [
        "Dependence on a single entry mode: Risk is concentrated by entering with a single initial product, limiting capital sources.",
        "Loyalty to local brands: Difficulty gaining trust from customers already loyal to US companies compared to a Latin American brand.",
        "Use of outsourced personnel: Difficulty for sustained international growth because key human talent is not internal to the company."
      ]
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 4' : 'Section 4'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Análisis DOFA' : 'SWOT Analysis'}
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {data.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card p-6 md:p-8 transition-all duration-300 ${section.bgBorder} ${section.bgHover}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-surface ${section.color} border border-glassBorder`}>
                <section.icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-wide">{section.title}</h2>
            </div>
            
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-textSecondary text-sm md:text-base leading-relaxed">
                  <span className={`mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full ${section.color.replace('text', 'bg')}`} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
