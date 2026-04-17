import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center bg-black/40 backdrop-blur-md rounded-lg p-1 border border-white/10 shadow-xl">
      <button
        onClick={() => setLanguage('es')}
        className={`px-4 py-1.5 text-xs font-bold tracking-widest rounded-md transition-all duration-300 ${
          language === 'es'
            ? 'bg-unoOrange text-black shadow-lg'
            : 'text-textSecondary hover:text-white'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-1.5 text-xs font-bold tracking-widest rounded-md transition-all duration-300 ${
          language === 'en'
            ? 'bg-unoOrange text-black shadow-lg'
            : 'text-textSecondary hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};
