import { useLanguage } from '../contexts/LanguageContext';

export const TechEnvironmental = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 11' : 'Section 11'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {t('nav', 'tech_environmental')}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Análisis de las tendencias tecnológicas y el impacto geoambiental en la industria.'
            : 'Analysis of technological trends and geoenvironmental impact in the industry.'}
        </p>
      </header>

      <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
          <p className="text-xl font-medium text-white mb-2">Sección en Construcción</p>
          <p>La información para este apartado está actualmente en proceso.</p>
        </div>
      </div>
    </div>
  );
};
