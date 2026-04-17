import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const SmartObjective = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 7' : 'Section 7'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4 flex items-center gap-3">
          <Target className="w-8 h-8 text-unoOrange" /> {language === 'es' ? 'Objetivo SMART' : 'SMART Objective'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Definición del propósito estratégico de internacionalización bajo el marco específico, medible, alcanzable, relevante y temporal (SMART).'
            : 'Definition of the strategic internationalization purpose under the specific, measurable, achievable, relevant, and time-bound (SMART) framework.'}
        </p>
      </header>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-6 md:p-10 relative overflow-hidden group shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-unoOrange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-unoOrange/20 transition-colors duration-500" />
        
        <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
          {language === 'es' ? 'Enunciado de Internacionalización' : 'Internationalization Statement'}
        </h3>
        <p className="text-xl md:text-2xl text-textSecondary leading-relaxed relative z-10 font-medium font-sans">
          {language === 'es' ? (
            <>
              "Lograr la penetración comercial en el mercado de Estados Unidos vendiendo <strong className="text-unoOrange">10,000 unidades</strong> de asientos agrícolas de repuesto durante los primeros <strong className="text-white">18 meses</strong> post-lanzamiento, concretando al menos <strong className="text-white">2 alianzas B2B</strong> con distribuidores estratégicos en las regiones del Sun Belt o Midwest, para capturar tempranamente cuota del mercado secundario."
            </>
          ) : (
            <>
              "Achieve commercial penetration in the United States market by selling <strong className="text-unoOrange">10,000 units</strong> of replacement agricultural seats during the first <strong className="text-white">18 months</strong> post-launch, securing at least <strong className="text-white">2 B2B alliances</strong> with strategic distributors in the Sun Belt or Midwest regions, to capture early secondary market share."
            </>
          )}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6">
        {[
          {
            letter: "S",
            title: "Specific",
            desc: language === 'es' 
              ? "Venta de asientos agrícolas y cierre de 2 alianzas B2B."
              : "Sale of agricultural seats and closing of 2 B2B alliances."
          },
          {
            letter: "M",
            title: "Measurable",
            desc: language === 'es'
              ? "10,000 unidades exactas enviadas y vendidas en el mercado target."
              : "Exactly 10,000 units shipped and sold in the target market."
          },
          {
            letter: "A",
            title: "Achievable",
            desc: language === 'es'
              ? "Volumen alcanzable mediante 1 o 2 contratos semestrales de un mayorista."
              : "Archivable volume via 1 or 2 semi-annual contracts from a wholesaler."
          },
          {
            letter: "R",
            title: "Relevant",
            desc: language === 'es'
              ? "Crucial para lograr la sostenibilidad financiera y validar el modelo OEM."
              : "Crucial for achieving financial sustainability and validating the OEM model."
          },
          {
            letter: "T",
            title: "Time-bound",
            desc: language === 'es'
              ? "Plazo de 18 meses tras el lanzamiento oficial de operaciones exportadoras."
              : "18-month timeframe following the official launch of export operations."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
            className="bg-surface/40 border border-glassBorder rounded-xl p-5 hover:bg-surface/80 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded bg-unoOrange flex items-center justify-center text-white font-bold shrink-0">
                {item.letter}
              </span>
              <h4 className="text-white font-bold text-sm tracking-wide">{item.title}</h4>
            </div>
            <p className="text-xs text-textSecondary leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
