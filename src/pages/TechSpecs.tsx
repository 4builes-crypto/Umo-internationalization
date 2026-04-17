import { motion } from 'framer-motion';
import { Droplets, Wind, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const TechSpecs = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
          {language === 'es' ? 'Especificaciones Técnicas' : 'Technical Specifications'}
        </h1>
        <p className="text-textSecondary max-w-2xl">
          {language === 'es'
            ? 'Ficha general del asiento UMO Serie Agrícola, diseñado de acuerdo con los estándares y exigencias de durabilidad para tractores y podadoras en los Estados Unidos.'
            : 'General sheet for the UMO Agricultural Series seat, designed according to durability standards and requirements for tractors and mowers in the US.'}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-6 md:p-8 space-y-6"
        >
          <h2 className="text-xl font-bold text-white border-b border-glassBorder pb-4">
            {language === 'es' ? 'Dimensiones y Peso' : 'Dimensions and Weight'}
          </h2>
          <div className="space-y-4">
            {[
              { label: language === 'es' ? "Ancho Total" : "Total Width", value: "480 mm (18.9 in)" },
              { label: language === 'es' ? "Profundidad" : "Depth", value: "520 mm (20.5 in)" },
              { label: language === 'es' ? "Altura del Respaldo" : "Backrest Height", value: "350 mm (13.8 in)" },
              { label: language === 'es' ? "Peso Neto" : "Net Weight", value: "5.2 Kg (11.4 lbs)" },
              { label: language === 'es' ? "Patrón de Montaje" : "Mounting Pattern", value: language === 'es' ? "Universal - Ajustable M8" : "Universal - Adjustable M8" }
            ].map((prop, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-textSecondary font-medium">{prop.label}</span>
                <span className="text-white bg-surface py-1 px-3 rounded-md border border-glassBorder">{prop.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-6 md:p-8 space-y-6"
        >
           <h2 className="text-xl font-bold text-white border-b border-glassBorder pb-4">
             {language === 'es' ? 'Materiales' : 'Materials'}
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-surface/50 p-4 rounded-xl border border-glassBorder">
               <Shield className="w-6 h-6 text-unoOrange mb-2" />
               <h3 className="text-white font-semibold text-sm mb-1">
                 {language === 'es' ? 'Estructura Base' : 'Base Structure'}
               </h3>
               <p className="text-xs text-textSecondary">
                 {language === 'es' 
                   ? 'Acero al carbono troquelado con recubrimiento de pintura anticorrosiva KTL.' 
                   : 'Stamped carbon steel with KTL anti-corrosive paint coating.'}
               </p>
             </div>
             <div className="bg-surface/50 p-4 rounded-xl border border-glassBorder">
               <Wind className="w-6 h-6 text-unoOrange mb-2" />
               <h3 className="text-white font-semibold text-sm mb-1">
                 {language === 'es' ? 'Acolchado' : 'Padding'}
               </h3>
               <p className="text-xs text-textSecondary">
                 {language === 'es' 
                   ? 'Poliuretano inyectado de alta densidad (60 kg/m³), sin deformación a largo plazo.' 
                   : 'High-density injected polyurethane (60 kg/m³), with no long-term deformation.'}
               </p>
             </div>
             <div className="bg-surface/50 p-4 rounded-xl border border-glassBorder sm:col-span-2">
               <Droplets className="w-6 h-6 text-unoOrange mb-2" />
               <h3 className="text-white font-semibold text-sm mb-1">
                 {language === 'es' ? 'Cubierta Exterior' : 'Outer Cover'}
               </h3>
               <p className="text-xs text-textSecondary">
                 {language === 'es' 
                   ? 'Vinilo industrial Heavy-Duty (PVC sin ftalatos). Resistente al agua, rayos UV (hasta 1000h) y abrasión. Costuras termoselladas para impermeabilidad 100%.' 
                   : 'Heavy-Duty industrial vinyl (phthalate-free PVC). Water, UV (up to 1000h) and abrasion resistant. Heat-sealed seams for 100% waterproofing.'}
               </p>
             </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
};
