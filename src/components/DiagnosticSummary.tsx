import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Zap, 
  Leaf, 
  Globe, 
  Box, 
  Truck, 
  Handshake, 
  DollarSign, 
  FileText, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface DiagnosticRowProps {
  label: string;
  icon: any;
  obtained: string;
  max: string;
  isHeader?: boolean;
  isNested?: boolean;
  isSubNested?: boolean;
  colorClass?: string;
}

const DiagnosticRow = ({ 
  label, 
  icon: Icon, 
  obtained, 
  max, 
  isHeader, 
  isNested, 
  isSubNested,
  colorClass = "text-textSecondary" 
}: DiagnosticRowProps) => {
  return (
    <div className={`flex items-center justify-between py-3 px-4 border-b border-glassBorder hover:bg-white/[0.02] transition-colors ${isHeader ? 'bg-surface/50 font-bold' : ''}`}>
      <div className={`flex items-center gap-3 ${isNested ? 'pl-8' : isSubNested ? 'pl-14' : ''}`}>
        {isSubNested && <ArrowRight className="w-3 h-3 text-glassBorder" />}
        <Icon className={`w-4 h-4 ${colorClass}`} />
        <span className={`text-sm ${isHeader ? 'text-white' : 'text-textSecondary'}`}>{label}</span>
      </div>
      <div className="flex gap-8 text-sm">
        <span className={`w-16 text-right font-mono ${isHeader ? 'text-unoOrange' : 'text-white'}`}>{obtained}</span>
        <span className="w-16 text-right font-mono text-textSecondary opacity-50">{max}</span>
      </div>
    </div>
  );
};

export const DiagnosticSummary = () => {
  const { language } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card overflow-hidden shadow-2xl border-unoOrange/10"
    >
      <div className="bg-unoOrange/10 p-4 border-b border-unoOrange/20 flex justify-between items-center">
        <h3 className="text-white font-bold uppercase tracking-widest text-xs">
          {language === 'es' ? 'Dimensiones' : 'Dimensions'}
        </h3>
        <div className="flex gap-8">
          <span className="text-unoOrange font-bold uppercase tracking-widest text-[10px]">
            {language === 'es' ? 'Puntaje Obtenido' : 'Obtained Score'}
          </span>
          <span className="text-textSecondary font-bold uppercase tracking-widest text-[10px]">
            {language === 'es' ? 'Puntaje Máximo' : 'Max Score'}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <DiagnosticRow label={language === 'es' ? "Talento Humano" : "Human Talent"} icon={Users} obtained="0.01%" max="12.50%" colorClass="text-orange-400" />
        <DiagnosticRow label={language === 'es' ? "Alineación Estratégica" : "Strategic Alignment"} icon={Target} obtained="7.50%" max="7.50%" colorClass="text-yellow-500" />
        <DiagnosticRow label={language === 'es' ? "Tecnología e Innovación" : "Technology and Innovation"} icon={Zap} obtained="3.75%" max="15.00%" colorClass="text-blue-400" />
        <DiagnosticRow label={language === 'es' ? "Sostenibilidad" : "Sustainability"} icon={Leaf} obtained="6.19%" max="15.00%" colorClass="text-green-500" />
        
        <DiagnosticRow 
          label={language === 'es' ? "Potencial de Internacionalización" : "Potential of Internationalization"} 
          icon={Globe} 
          obtained="21.95%" 
          max="50.00%" 
          isHeader 
          colorClass="text-unoOrange" 
        />
        
        <div className="bg-white/[0.01]">
          <DiagnosticRow label={language === 'es' ? "Modos de Entrada" : "Modes of Entry"} icon={ArrowRight} obtained="9.77%" max="30.00%" isNested colorClass="text-unoOrange/50" />
          <DiagnosticRow label={language === 'es' ? "Exportación e Importación (Bienes)" : "Exportation and Importation (Goods)"} icon={Truck} obtained="5.60%" max="8.00%" isSubNested />
          <DiagnosticRow label={language === 'es' ? "Exportación (Servicios)" : "Exportation (Services)"} icon={Handshake} obtained="0.17%" max="4.00%" isSubNested />
          <DiagnosticRow label={language === 'es' ? "Inversión Extranjera Directa" : "Foreign Direct Investment"} icon={DollarSign} obtained="1.00%" max="8.00%" isSubNested />
          <DiagnosticRow label={language === 'es' ? "Licencias y Franquicias" : "Licenses and Franchises"} icon={FileText} obtained="0.00%" max="7.00%" isSubNested />
          <DiagnosticRow label={language === 'es' ? "Alianzas Estratégicas" : "Strategic Alliances"} icon={Users} obtained="3.00%" max="3.00%" isSubNested />
        </div>

        <DiagnosticRow label={language === 'es' ? "Producto/Servicio" : "Product/Service"} icon={Box} obtained="12.19%" max="20.00%" colorClass="text-purple-400" />
        
        <div className="p-6 bg-unoOrange/5 flex justify-between items-center border-t border-unoOrange/20">
          <h4 className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter">
            {language === 'es' ? 'Puntaje total del diagnóstico' : 'Total Diagnostic Score'}
          </h4>
          <div className="flex flex-col items-end">
            <span className="text-3xl font-black text-unoOrange">39.40%</span>
            <span className="text-[10px] text-textSecondary uppercase">
              {language === 'es' ? 'de 100.00%' : 'of 100.00%'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
