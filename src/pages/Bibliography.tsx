import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Bibliography = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 8' : 'Section 8'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-unoOrange" /> {language === 'es' ? 'Bibliografías' : 'Bibliography'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Fuentes de consulta y documentos de referencia técnica utilizados para estructurar el plan de internacionalización.'
            : 'Reference sources and technical documents used to structure the internationalization plan.'}
        </p>
      </header>

      <div className="pt-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 md:p-8"
        >
          <ul className="space-y-6">
            <li className="group">
              <div className="flex gap-4">
                <span className="text-unoOrange font-bold opacity-80 group-hover:opacity-100 transition-opacity mt-1">[1]</span>
                <div>
                  <p className="text-white text-base leading-relaxed">
                    California Air Resources Board (CARB). (2022). <span className="italic text-textSecondary">Assembly Bill 1346 Summary: Small Off-Road Engines.</span> State of California.
                  </p>
                  <a href="https://ww2.arb.ca.gov/2021-assembly-bill-1346" target="_blank" className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-textSecondary hover:text-unoOrange transition-colors">
                    {language === 'es' ? 'Consultar fuente oficial' : 'View official source'} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </li>
            
            <li className="group">
              <div className="flex gap-4">
                <span className="text-unoOrange font-bold opacity-80 group-hover:opacity-100 transition-opacity mt-1">[2]</span>
                <div>
                  <p className="text-white text-base leading-relaxed">
                    Mordor Intelligence. (2026, enero). <span className="italic text-textSecondary">US Lawn Mowers Market Size & Share Outlook to 2031: Industry Analysis.</span>
                  </p>
                  <a href="https://mordorintelligence.com/industry-reports/united-states-lawn-mowers-market" target="_blank" className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-textSecondary hover:text-unoOrange transition-colors">
                    {language === 'es' ? 'Consultar reporte de mercado' : 'View market report'} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
