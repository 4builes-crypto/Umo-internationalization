import { motion } from 'framer-motion';
import { Map, BarChart, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const TargetMarket = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
          {language === 'es' ? 'Mercado Objetivo: USA' : 'Target Market: USA'}
        </h1>
        <p className="text-textSecondary max-w-2xl">
          {language === 'es' 
            ? 'Análisis del mercado de reemplazo y OEM para asientos de podadoras en los Estados Unidos.'
            : 'Analysis of the OEM and replacement market for mower seats in the United States.'}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 glass-card p-6 md:p-8 space-y-6"
        >
          <div className="flex items-center justify-between border-b border-glassBorder pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-unoOrange" /> 
              {language === 'es' ? 'Regiones Estratégicas' : 'Strategic Regions'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-3">
               <h3 className="text-unoOrange font-bold text-sm tracking-widest uppercase">
                 {language === 'es' ? 'Midwest (Cinturón Agrícola)' : 'Midwest (Agricultural Belt)'}
               </h3>
               <p className="text-sm text-textSecondary leading-relaxed">
                 {language === 'es' 
                   ? 'Estados como Iowa, Illinois y Nebraska son prioritarios por su inmensa actividad agroindustrial. Fuerte demanda OEM y de reemplazo para tractores y podadoras comerciales de grandes extensiones.'
                   : 'States like Iowa, Illinois, and Nebraska are a priority due to their immense agro-industrial activity. Strong OEM and replacement demand for tractors and large-scale commercial mowers.'}
               </p>
             </div>
             <div className="space-y-3">
               <h3 className="text-unoOrange font-bold text-sm tracking-widest uppercase">
                 {language === 'es' ? 'Sun Belt (Cinturón Sur)' : 'Sun Belt'}
               </h3>
               <p className="text-sm text-textSecondary leading-relaxed">
                 {language === 'es'
                   ? 'Florida, Texas y California con un clima que permite la jardinería extensiva todo el año. Alta rotación de asientos por desgaste de UV y humedad.'
                   : 'Florida, Texas, and California with a climate that allows extensive gardening year-round. High seat turnover due to UV and moisture wear.'}
               </p>
             </div>
          </div>
          
          <div className="bg-surfaceHover/30 p-4 rounded-xl border border-glassBorder flex items-start gap-4">
            <Users className="w-8 h-8 text-blue-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                {language === 'es' ? 'El Usuario Final' : 'The End User'}
              </h4>
              <p className="text-xs text-textSecondary">
                {language === 'es'
                  ? 'Contratistas y operadores de landscaping que pasan de 6 a 10 horas diarias en podadoras "Zero-Turn". Priorizan la reducción del impacto lumbar y la disipación del calor.'
                  : 'Landscaping contractors and operators spending 6 to 10 hours daily on "Zero-Turn" mowers. They prioritize lower back impact reduction and heat dissipation.'}
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 md:p-8 space-y-6"
        >
          <h2 className="text-xl font-bold text-white border-b border-glassBorder pb-4 flex items-center gap-2">
             <BarChart className="w-5 h-5 text-unoOrange" /> 
             {language === 'es' ? 'Volumen' : 'Volume'}
          </h2>
          <div className="space-y-6">
            <div>
               <div className="flex justify-between items-end mb-2">
                 <span className="text-sm text-textSecondary">
                   {language === 'es' ? 'Mercado Global (Ag Equip)' : 'Global Market (Ag Equip)'}
                 </span>
                 <span className="text-lg font-bold text-white">$150B+</span>
               </div>
               <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                 <div className="w-full h-full bg-unoOrange/20" />
               </div>
            </div>
            <div>
               <div className="flex justify-between items-end mb-2">
                 <span className="text-sm text-textSecondary">
                   {language === 'es' ? 'Segmento USA' : 'USA Segment'}
                 </span>
                 <span className="text-lg font-bold text-white">40%</span>
               </div>
               <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                 <div className="w-[40%] h-full bg-unoOrange/50" />
               </div>
            </div>
            <div>
               <div className="flex justify-between items-end mb-2">
                 <span className="text-sm text-textSecondary">
                   {language === 'es' ? 'Partes y Repuestos (TAM)' : 'Parts & Replacement (TAM)'}
                 </span>
                 <span className="text-lg font-bold text-white">$12B</span>
               </div>
               <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                 <div className="w-[15%] h-full bg-unoOrange shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
               </div>
            </div>
            <p className="text-xs text-textSecondary/70 italic mt-4">
              {language === 'es'
                ? '*Estimaciones de la industria para el año fiscal 2025. El segmento de reemplazo tiene márgenes superiores al 35%.'
                : '*Industry estimates for fiscal year 2025. The replacement segment has margins exceeding 35%.'}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
