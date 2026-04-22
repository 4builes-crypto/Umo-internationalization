import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const ProductIdentity = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 1' : 'Section 1'}
        </h2>
        <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white flex items-center gap-4 border-b border-glassBorder pb-8">
          <span className="w-16 h-16 rounded-xl bg-unoOrange flex items-center justify-center text-white text-4xl shadow-lg shadow-unoOrange/20">
            U
          </span>
          UMO
          <span className="text-xl lg:text-2xl font-medium text-textSecondary ml-4 self-end mb-2">
            | {t('identity', 'title')}
          </span>
        </h1>
      </header>

      {/* Identidad Corporativa Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 md:p-10 relative overflow-hidden group border-unoOrange/20"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-unoOrange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-unoOrange/20 transition-colors duration-500" />
        
        <h3 className="text-2xl font-bold text-white mb-6">
          {language === 'es' ? 'Identidad Corporativa y Contexto de la Empresa' : 'Corporate Identity & Company Context'}
        </h3>
        <div className="text-lg text-textSecondary leading-relaxed space-y-4">
          <p>
            <strong className="text-white">UMO</strong> {language === 'es' 
              ? 'es una compañía colombiana con más de 55 años de trayectoria y liderazgo en la fabricación de sistemas de escape automotrices y partes de reposición. Con sede en su planta productiva en Antioquia, la empresa cuenta con certificaciones internacionales de altísima exigencia (IATF, SGS) y el estándar ASES, lo que la acredita como proveedor de alcance global para marcas como Renault.' 
              : 'is a Colombian company with over 55 years of experience and leadership in manufacturing automotive exhaust systems and aftermarket parts. Based in its production plant in Antioquia, the company holds highly demanding international certifications (IATF, SGS) and the ASES standard, accrediting it as a global supplier for brands like Renault.'}
          </p>
          <p>
            {language === 'es'
              ? 'Además de sus divisiones de vehículos livianos y pesados, UMO destaca por su gran capacidad de innovación e ingeniería en plásticos y textiles para el sector de motocicletas, diseñando forros de asientos con tecnología avanzada (como su línea Thermoliner, que reduce la temperatura térmica superficial).'
              : 'In addition to its light and heavy vehicle divisions, UMO stands out for its great capacity for innovation and engineering in plastics and textiles for the motorcycle sector, designing seat covers with advanced technology (such as its Thermoliner line, which reduces surface thermal temperature).'}
          </p>
          <div className="p-4 bg-unoOrange/10 border-l-2 border-unoOrange mt-6 rounded-r-xl">
            <h4 className="text-white font-bold text-lg mb-2">
              {language === 'es' ? 'El Proyecto de Internacionalización' : 'The Internationalization Project'}
            </h4>
            <p className="text-base">
              {language === 'es'
                ? 'Apoyado en su robusta experiencia técnica, capacidad de manufactura a escala e infraestructura probada, este proyecto estratégico busca diversificar el alcance comercial de UMO. El objetivo central es adaptar su tecnología de asientos y expandirse hacia el sector agroindustrial, exportando asientos premium para maquinaria de jardinería (como podadoras eléctricas de conducción "Ride-On") a Estados Unidos, focalizándose agresivamente en los estados con mayores requerimientos climáticos y residenciales: California y Arizona.'
                : 'Backed by its robust technical expertise, scaled manufacturing capacity, and proven infrastructure, this strategic project seeks to diversify UMO\'s commercial reach. The core objective is adapting its seating technology and expanding into the agro-industrial sector, exporting premium seats for landscaping machinery (such as electric ride-on mowers) to the United States, focusing aggressively on the states with the highest climatic and residential demands: California and Arizona.'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Product Description Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 md:p-10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-unoOrange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <h3 className="text-2xl font-bold text-unoOrange mb-6">{t('bmc', 'engineeringTitle')}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-4">
            <p className="text-white text-lg font-medium leading-relaxed">
              {t('bmc', 'engineeringDesc')}
            </p>
            <div className="bg-white/5 p-4 rounded-lg border-l-4 border-unoOrange">
              <h4 className="text-white font-bold mb-2">{t('bmc', 'thermal')}</h4>
              <p className="text-textSecondary text-sm">
                {t('bmc', 'thermalDesc')}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold mb-1 italic">{t('bmc', 'resistance')}</h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                {t('bmc', 'resistanceDesc')}
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1 italic">{t('bmc', 'brand')}</h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                {t('bmc', 'brandDesc')}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
