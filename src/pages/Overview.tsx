import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Overview = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 1' : 'Section 1'}
        </h2>
        <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white flex items-center gap-4">
          <span className="w-16 h-16 rounded-xl bg-unoOrange flex items-center justify-center text-white text-4xl shadow-lg shadow-unoOrange/20">
            U
          </span>
          UMO
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-10 relative overflow-hidden group border-unoOrange/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-unoOrange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-unoOrange/20 transition-colors duration-500" />
          
          <h3 className="text-2xl font-bold text-white mb-6">
            {language === 'es' ? 'Identidad Corporativa' : 'Corporate Identity'}
          </h3>
          <p className="text-lg text-textSecondary leading-relaxed">
            <strong className="text-white">UMO</strong> {language === 'es' 
              ? 'es el epicentro estratégico del proyecto. El nombre refleja simplicidad, liderazgo y eficiencia.' 
              : 'is the strategic epicenter of the project. The name reflects simplicity, leadership, and efficiency.'}
            <br /><br />
            {language === 'es'
              ? 'La empresa se concibe como una entidad con enfoque técnico, encargada de la manufactura y gestión logística de bienes agroindustriales (específicamente asientos para maquinaria) destinados a ser exportados al exigente mercado de Estados Unidos.'
              : 'The company is conceived as a technical entity, in charge of manufacturing and logistics management of agro-industrial goods (specifically machinery seats) intended to be exported to the demanding US market.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
