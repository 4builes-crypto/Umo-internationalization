import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NAVIGATION_DATA } from '../config/navigation';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../contexts/LanguageContext';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'fase1': true,
    'referencias': true
  });
  
  const { t } = useLanguage();

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const closeSidebar = () => setIsOpen(false);

  const navContent = (
    <div className="h-full flex flex-col pt-6 pb-20 overflow-y-auto">
      <div className="px-6 mb-10">
        <h1 className="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
          <span className="w-8 h-8 rounded bg-unoOrange flex items-center justify-center text-white text-lg font-black shrink-0">
            U
          </span>
          UMO<span className="text-unoOrange">.</span>
        </h1>
        <p className="text-xs text-textSecondary mt-2 uppercase tracking-widest font-semibold">
          {t('menu', 'Hub Estratégico')}
        </p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {NAVIGATION_DATA.map((category) => (
          <div key={category.id} className="mb-2">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-textSecondary hover:text-white hover:bg-surfaceHover transition-colors"
            >
              <div className="flex items-center gap-3">
                <category.icon className={clsx("w-5 h-5", expandedCategories[category.id] ? "text-unoOrange" : "text-textSecondary")} />
                {t('nav', category.id)}
              </div>
              <ChevronDown 
                className={clsx(
                  "w-4 h-4 transition-transform duration-300", 
                  expandedCategories[category.id] && "rotate-180"
                )} 
              />
            </button>
            
            <AnimatePresence initial={false}>
              {expandedCategories[category.id] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-11 pr-2 py-1 space-y-1">
                    {category.subcategories.map((sub) => {
                      if (sub.isDraft) {
                        return (
                          <div 
                            key={sub.id} 
                            className="flex items-center justify-between px-3 py-2 text-xs font-medium text-textSecondary/50 bg-transparent rounded-lg cursor-not-allowed border border-transparent"
                          >
                            <span>{t('nav', sub.id)}</span>
                            <span className="text-[9px] uppercase tracking-wider bg-surfaceHover px-1.5 py-0.5 rounded text-textSecondary/70">
                              {t('menu', 'Próximamente')}
                            </span>
                          </div>
                        );
                      }

                      return (
                        <NavLink
                          key={sub.id}
                          to={sub.path}
                          onClick={closeSidebar}
                          className={({ isActive }) => twMerge(
                            "block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 border",
                            isActive 
                              ? "bg-unoOrange/10 border-unoOrange/30 text-unoOrange" 
                              : "text-textSecondary border-transparent hover:text-white hover:bg-surface hover:border-glassBorder"
                          )}
                        >
                          {t('nav', sub.id)}
                        </NavLink>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-glassBorder z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 font-bold text-white">
          <span className="w-6 h-6 rounded bg-unoOrange flex items-center justify-center text-white text-xs font-black">U</span>
          UMO
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-textSecondary hover:text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Core */}
      <aside className={clsx(
        "fixed top-0 left-0 bottom-0 w-72 bg-background border-r border-glassBorder z-50 transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {navContent}
      </aside>
    </>
  );
};
