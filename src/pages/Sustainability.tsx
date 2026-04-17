import { motion } from 'framer-motion';
import { Leaf, DollarSign, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Sustainability = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 5' : 'Section 5'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Dimensiones De Sostenibilidad' : 'Sustainability Dimensions'}
        </h1>
        <p className="text-textSecondary max-w-2xl mt-4">
          {language === 'es'
            ? 'Relación estructural de UMO con las dimensiones fundamentales: Económica, Ambiental y Social, como eje de viabilidad a mediano y largo plazo.'
            : 'UMO\'s structural relationship with the fundamental dimensions: Economic, Environmental, and Social, as an axis of medium and long-term viability.'}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {[
          {
            icon: Leaf,
            title: language === 'es' ? "1. Sostenibilidad Ambiental" : "1. Environmental Sustainability",
            desc: language === 'es' 
              ? "UMO implementa un modelo de producción limpia basado en el uso responsable de recursos y la gestión técnica de residuos. Al priorizar la reutilización de materiales y el aprovechamiento de excedentes, la empresa reduce significativamente su huella industrial. Este enfoque se traslada al producto final: el sillín está fabricado con materiales de alta durabilidad que extienden su vida útil, lo que minimiza la generación de desechos y promueve un consumo más eficiente en el sector."
              : "UMO implements a clean production model based on the responsible use of resources and technical waste management. By prioritizing material reutilization and surplus usage, the company significantly reduces its industrial footprint. This approach transfers to the final product: the seat is made with highly durable materials that extend its lifespan, minimizing waste generation and promoting a more efficient consumption in the sector.",
            color: "text-green-500"
          },
          {
            icon: Users,
            title: language === 'es' ? "2. Dimensión Social" : "2. Social Dimension",
            desc: language === 'es'
              ? "Con una fuerza laboral superior a los 450 empleados, UMO es un pilar de estabilidad y cultura organizacional orientada al bienestar. Este compromiso se refleja directamente en la ingeniería del sillín, diseñado bajo estrictos parámetros de ergonomía para proteger la salud neuromuscular del operario. Al reducir la fatiga y absorber vibraciones críticas, el producto no solo mejora la comodidad, sino que actúa como un elemento de seguridad preventiva que dignifica el trabajo en jornadas prolongadas."
              : "With a workforce of over 450 employees, UMO is a pillar of stability and organizational culture oriented towards well-being. This commitment directly reflects in the engineering of the seat, designed under strict ergonomic parameters to protect the neuromuscular health of the operator. By reducing fatigue and absorbing critical vibrations, the product not only improves comfort but also acts as a preventive safety element that dignifies work over long shifts.",
            color: "text-unoOrange"
          },
          {
            icon: DollarSign,
            title: language === 'es' ? "3. Solidez Económica" : "3. Economic Solidity",
            desc: language === 'es'
              ? "La madurez de UMO se sustenta en más de 50 años de experiencia y una capacidad instalada que supera los 50.000 asientos mensuales. Esta escala de producción, sumada a una presencia internacional consolidada, garantiza la competitividad y estabilidad financiera de la organización. Para el cliente, el sillín representa una inversión estratégica: su durabilidad optimiza los costos operativos de mantenimiento y su capacidad de personalización genera un valor agregado que potencia la productividad en diversos mercados globales."
              : "UMO's maturity is supported by over 50 years of experience and an installed capacity exceeding 50,000 seats per month. This production scale, added to a consolidated international presence, guarantees the competitiveness and financial stability of the organization. For the client, the seat represents a strategic investment: its durability optimizes operational maintenance costs and its customization capacity generates added value that boosts productivity in various global markets.",
            color: "text-blue-400"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 md:p-8 relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${item.color.replace('text', 'bg')}/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:${item.color.replace('text', 'bg')}/10 transition-colors duration-500`} />
            
            <item.icon className={`w-8 h-8 ${item.color} mb-6`} />
            <h3 className="text-lg font-bold text-white mb-3 relative z-10">{item.title}</h3>
            <p className="text-sm text-textSecondary leading-relaxed relative z-10">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
