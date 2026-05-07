import { Users, Home, Sun, Sprout, Leaf, CheckCircle, AlertCircle, ShieldCheck, Info, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const SocialCultural = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 12' : 'Section 12'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4">
          {language === 'es' ? 'Análisis Sociocultural' : 'Socio-Cultural Analysis'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Evaluación de los perfiles demográficos, hábitos de consumo y tendencias de sostenibilidad que definen la aceptación de UMO en Arizona y California.'
            : 'Evaluation of demographic profiles, consumption habits, and sustainability trends that define UMO\'s acceptance in Arizona and California.'}
        </p>
      </header>

      {/* Arizona Analysis */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-l-4 border-unoOrange pl-4 py-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-unoOrange/20 flex items-center justify-center text-unoOrange">
              <Sun className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Arizona</h2>
          </div>
          <span className="text-xs font-bold text-white px-3 py-1 bg-unoOrange/40 rounded-full whitespace-nowrap">Score: 4.0</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ventajas */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> {language === 'es' ? 'Ventajas Socioculturales' : 'Socio-Cultural Advantages'}
            </h3>
            <div className="space-y-4">
              <div className="glass-card p-5 border-zinc-800">
                <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                  <Home className="w-4 h-4 text-unoOrange" />
                  <span className="text-sm">{language === 'es' ? 'Propiedad de Vivienda' : 'Home Ownership'}</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Inversión constante en mantenimiento de jardines y equipos por parte de dueños de casa.' 
                    : 'Constant investment in yard maintenance and equipment by homeowners.'}
                </p>
              </div>
              <div className="glass-card p-5 border-zinc-800">
                <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                  <Sprout className="w-4 h-4 text-unoOrange" />
                  <span className="text-sm">{language === 'es' ? 'Cultura de Exteriores' : 'Outdoor Culture'}</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Fuerte interés en mantener zonas abiertas y patios, a pesar del clima seco.' 
                    : 'Strong interest in maintaining open areas and patios, despite the dry climate.'}
                </p>
              </div>
              <div className="glass-card p-5 border-zinc-800">
                <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                  <Users className="w-4 h-4 text-unoOrange" />
                  <span className="text-sm">{language === 'es' ? 'Población Hispana (32.1%)' : 'Hispanic Population (32.1%)'}</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Conexión cultural con marca colombiana a través de comunicación bilingüe y mensajes cercanos.' 
                    : 'Cultural connection with Colombian brands through bilingual communication and close messaging.'}
                </p>
              </div>
            </div>
          </div>

          {/* Riesgos */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-red-400 uppercase tracking-widest flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> {language === 'es' ? 'Riesgos Socioculturales' : 'Socio-Cultural Risks'}
            </h3>
            <div className="space-y-4">
              <div className="glass-card p-5 border-zinc-800">
                <h4 className="text-white text-sm font-semibold mb-2">{language === 'es' ? 'Reducción de Césped' : 'Turf Reduction'}</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Promoción de jardines xerófilos para ahorrar agua puede limitar la frecuencia de uso de podadoras.' 
                    : 'Promotion of xeriscaping to save water may limit the frequency of mower use.'}
                </p>
              </div>
              <div className="glass-card p-5 border-zinc-800">
                <h4 className="text-white text-sm font-semibold mb-2">{language === 'es' ? 'Exigencia Térmica' : 'Thermal Requirements'}</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'El consumidor prioriza la utilidad real y resistencia al calor sobre la estética.' 
                    : 'Consumers prioritize real utility and heat resistance over aesthetics.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* California Analysis */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-l-4 border-blue-400 pl-4 py-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-400/20 flex items-center justify-center text-blue-400">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">California</h2>
          </div>
          <span className="text-xs font-bold text-white px-3 py-1 bg-blue-400/40 rounded-full whitespace-nowrap">Score: 5.0</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ventajas */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-green-400 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> {language === 'es' ? 'Ventajas Socioculturales' : 'Socio-Cultural Advantages'}
            </h3>
            <div className="space-y-4">
              <div className="glass-card p-5 border-zinc-800">
                <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{language === 'es' ? 'Multiculturalidad (40.8% Hispana)' : 'Multiculturalism (40.8% Hispanic)'}</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Alta apertura a marcas extranjeras; 44.4% habla un idioma diferente al inglés en casa.' 
                    : 'High openness to foreign brands; 44.4% speak a language other than English at home.'}
                </p>
              </div>
              <div className="glass-card p-5 border-zinc-800">
                <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{language === 'es' ? 'Adopción de Innovación' : 'Innovation Adoption'}</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Mercado que valora productos nuevos, ergonómicos y sostenibles.' 
                    : 'Market that values new, ergonomic, and sustainable products.'}
                </p>
              </div>
              <div className="glass-card p-5 border-zinc-800">
                <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                  <Leaf className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{language === 'es' ? 'Foco en Sostenibilidad' : 'Sustainability Focus'}</span>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Alineación total con la transición hacia equipos eléctricos y de bajo impacto ambiental.' 
                    : 'Total alignment with the transition toward electric and low-impact equipment.'}
                </p>
              </div>
            </div>
          </div>

          {/* Riesgos */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-red-400 uppercase tracking-widest flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> {language === 'es' ? 'Riesgos Socioculturales' : 'Socio-Cultural Risks'}
            </h3>
            <div className="space-y-4">
              <div className="glass-card p-5 border-zinc-800">
                <h4 className="text-white text-sm font-semibold mb-2">{language === 'es' ? 'Consumidor Exigente' : 'Demanding Consumer'}</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Requiere validación clara de ergonomía, calidad y beneficios premium para diferenciarse.' 
                    : 'Requires clear validation of ergonomics, quality, and premium benefits to differentiate.'}
                </p>
              </div>
              <div className="glass-card p-5 border-zinc-800">
                <h4 className="text-white text-sm font-semibold mb-2">{language === 'es' ? 'Transición de Paisajismo' : 'Landscaping Transition'}</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {language === 'es' 
                    ? 'Regulaciones sobre riego de césped no funcional impulsan un cambio hacia jardines más sostenibles.' 
                    : 'Regulations on non-functional turf irrigation drive a shift toward more sustainable gardens.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="pt-10">
        <div className="glass-card p-8 bg-unoOrange/5 border-unoOrange/20 relative overflow-hidden">
          <Info className="absolute -right-4 -bottom-4 w-32 h-32 text-unoOrange/5" />
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <ShieldCheck className="text-unoOrange w-6 h-6" />
            {language === 'es' ? 'Conclusión Estratégica' : 'Strategic Conclusion'}
          </h3>
          <p className="text-sm text-textSecondary leading-relaxed max-w-4xl">
            {language === 'es'
              ? 'California lidera en puntaje por su cultura de innovación y diversidad, alineada con la sostenibilidad de UMO. Arizona destaca en resistencia y utilidad funcional. En ambos estados, la clave es posicionar el sillín como una mejora en la experiencia operativa y no solo un accesorio estético.'
              : 'California leads in score due to its culture of innovation and diversity, aligned with UMO\'s sustainability. Arizona stands out in resistance and functional utility. In both states, the key is to position the seat as an operational experience improvement and not just an aesthetic accessory.'}
          </p>
        </div>
      </section>
    </div>
  );
};
