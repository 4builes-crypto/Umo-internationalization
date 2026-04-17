import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { motion } from 'framer-motion';
import { LanguageToggle } from './LanguageToggle';

export const Layout = () => {
  return (
    <div className="flex min-h-screen bg-background relative">
      <LanguageToggle />
      <Sidebar />
      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen overflow-hidden">
        {/* Mobile Spacer */}
        <div className="h-16 lg:hidden shrink-0" />
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto w-full h-full"
          >
            <Outlet />
          </motion.div>
        </div>
      </main>
    </div>
  );
};
