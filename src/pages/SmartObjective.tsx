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
              "El objetivo de este trabajo es diseñar, durante el desarrollo del proyecto académico, una propuesta de internacionalización para el ingreso de <strong className="text-unoOrange">UMO</strong> al mercado de Estados Unidos con <strong className="text-white">sillas para podadoras eléctricas</strong>, enfocada en <strong className="text-white">Arizona y California</strong>, a partir del análisis de la demanda, la competencia, las condiciones del sector y la viabilidad comercial, con el fin de establecer una estrategia de entrada sólida y realista para ambos estados."
            </>
          ) : (
            <>
              "The objective of this work is to design, during the development of the academic project, an internationalization proposal for the entry of <strong className="text-unoOrange">UMO</strong> into the United States market with <strong className="text-white">seats for electric lawn mowers</strong>, focused on <strong className="text-white">Arizona and California</strong>, based on the analysis of demand, competition, sector conditions, and commercial viability, in order to establish a solid and realistic entry strategy for both states."
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
              ? "Ingreso al mercado de EE.UU. con sillas para podadoras eléctricas en Arizona y California."
              : "Entry into the U.S. market with electric lawn mower seats in Arizona and California."
          },
          {
            letter: "M",
            title: "Measurable",
            desc: language === 'es'
              ? "Diseño de una propuesta basada en análisis de demanda, competencia y viabilidad."
              : "Design of a proposal based on demand, competition, and viability analysis."
          },
          {
            letter: "A",
            title: "Achievable",
            desc: language === 'es'
              ? "Desarrollado dentro del marco y recursos del proyecto académico."
              : "Developed within the framework and resources of the academic project."
          },
          {
            letter: "R",
            title: "Relevant",
            desc: language === 'es'
              ? "Establecer una estrategia de entrada sólida y realista para la expansión de UMO."
              : "Establish a solid and realistic entry strategy for UMO's expansion."
          },
          {
            letter: "T",
            title: "Time-bound",
            desc: language === 'es'
              ? "Finalización durante el desarrollo del presente proyecto académico."
              : "Completion during the development of the current academic project."
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
