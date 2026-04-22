import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const BMC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-8 pb-12 h-full flex flex-col">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 2' : 'Section 2'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {t('bmc', 'title')}
        </h1>
      </header>

      {/* BMC Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card flex-1 min-h-[600px] overflow-hidden flex flex-col pt-4"
      >
        <div className="px-4 pb-2 border-b border-glassBorder">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">{t('bmc', 'title')}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 h-full auto-rows-fr">
          {/* Top row */}
          <div className="col-span-1 border-b md:border-b-0 md:border-r border-glassBorder p-4 flex flex-col gap-2">
            <h3 className="text-sm font-bold text-unoOrange uppercase tracking-wider">{t('bmc', 'partners')}</h3>
            <p className="text-[11px] text-textSecondary leading-relaxed flex-1">
              {t('bmc', 'partnersDesc1')}<br/>
              {t('bmc', 'partnersDesc2')}<br/>
              {t('bmc', 'partnersDesc3')}<br/>
              {t('bmc', 'partnersDesc4')}<br/>
              <span className="text-white font-medium italic">{t('bmc', 'partnersDesc5')}</span>
            </p>
          </div>
          
          <div className="col-span-1 border-b md:border-b-0 md:border-r border-glassBorder flex flex-col">
            <div className="flex-1 p-4 border-b border-glassBorder flex flex-col gap-2">
              <h3 className="text-sm font-bold text-unoOrange uppercase tracking-wider">{t('bmc', 'activities')}</h3>
              <p className="text-[11px] text-textSecondary leading-relaxed">
                {t('bmc', 'actDesc1')}<br/>
                {t('bmc', 'actDesc2')}<br/>
                {t('bmc', 'actDesc3')}
              </p>
            </div>
            <div className="flex-1 p-4 flex flex-col gap-2">
              <h3 className="text-sm font-bold text-unoOrange uppercase tracking-wider">{t('bmc', 'resources')}</h3>
              <p className="text-[11px] text-textSecondary leading-relaxed">
                {t('bmc', 'resDesc1')}<br/>
                {t('bmc', 'resDesc2')}<br/>
                {t('bmc', 'resDesc3')}
              </p>
            </div>
          </div>
          
          <div className="col-span-1 border-b md:border-b-0 md:border-r border-glassBorder bg-surfaceHover/30 p-4 flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-unoOrange/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider relative z-10">{t('bmc', 'value')}</h3>
            <p className="text-[11px] text-textSecondary leading-relaxed flex-1 relative z-10 font-medium">
              {t('bmc', 'valDesc1')}<br/><br/>
              <span className="text-white italic">{t('bmc', 'valDesc2')}</span><br/><br/>
              {t('bmc', 'valDesc3')}
            </p>
          </div>
          
          <div className="col-span-1 border-b md:border-b-0 md:border-r border-glassBorder flex flex-col">
            <div className="flex-1 p-4 border-b border-glassBorder flex flex-col gap-2">
              <h3 className="text-sm font-bold text-unoOrange uppercase tracking-wider">{t('bmc', 'relations')}</h3>
              <p className="text-[11px] text-textSecondary leading-relaxed">
                • <span className="text-white font-medium">B2B:</span> {t('bmc', 'relDesc1')}<br/>
                • <span className="text-white font-medium">B2C:</span> {t('bmc', 'relDesc2')}
              </p>
            </div>
            <div className="flex-1 p-4 flex flex-col gap-2">
              <h3 className="text-sm font-bold text-unoOrange uppercase tracking-wider">{t('bmc', 'channels')}</h3>
              <p className="text-[11px] text-textSecondary leading-relaxed">
                {t('bmc', 'chanDesc1')}<br/>
                {t('bmc', 'chanDesc2')}<br/>
                {t('bmc', 'chanDesc3')}
              </p>
            </div>
          </div>
          
          <div className="col-span-1 p-4 flex flex-col gap-2 border-b md:border-b-0 border-glassBorder">
            <h3 className="text-sm font-bold text-unoOrange uppercase tracking-wider">{t('bmc', 'segments')}</h3>
            <p className="text-[11px] text-textSecondary leading-relaxed flex-1">
              • <span className="text-white font-medium">{t('bmc', 'b2b')}</span> {t('bmc', 'segDesc1')}<br/>
              • <span className="text-white font-medium">{t('bmc', 'b2c')}</span> {t('bmc', 'segDesc2')} <span className="italic italic">riding/zero-turn</span> {t('bmc', 'segDesc3')}
            </p>
          </div>

          {/* Bottom row */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 border-t md:border-r border-glassBorder p-4 flex flex-col gap-2">
            <h3 className="text-sm font-bold text-unoOrange uppercase tracking-wider">{t('bmc', 'costs')}</h3>
            <p className="text-[11px] text-textSecondary leading-relaxed">
              {t('bmc', 'costDesc')}
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-3 lg:col-span-2 border-t border-glassBorder p-4 flex flex-col gap-2">
            <h3 className="text-sm font-bold text-unoOrange uppercase tracking-wider">{t('bmc', 'revenue')}</h3>
            <p className="text-[11px] text-textSecondary leading-relaxed">
              {t('bmc', 'revDesc')}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
