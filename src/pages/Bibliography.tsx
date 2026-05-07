import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const referencesBySector = [
  {
    sector: { es: 'Regulaciones y Mercado', en: 'Regulations & Market' },
    items: [
      {
        author: 'California Air Resources Board (CARB)',
        year: '2021',
        title: 'CARB approves updated regulations requiring most new small off-road engines be zero emission by 2024.',
        source: 'State of California',
        link: 'https://ww2.arb.ca.gov/news/carb-approves-updated-regulations-requiring-most-new-small-road-engines-be-zero-emission-2024',
        description: {
          es: 'Información sobre la prohibición (AB 1346) de motores de combustión interna de hasta 25 HP para 2024, clave para el mercado eléctrico en California.',
          en: 'Information on the ban (AB 1346) of internal combustion engines up to 25 HP by 2024, key to the electric market in California.'
        }
      },
      {
        author: 'Arizona Revised Statutes § 49-474.02',
        year: '2021',
        title: 'Voluntary lawn and garden equipment emissions reduction program; criteria.',
        source: 'Justia Law',
        link: 'https://law.justia.com/codes/arizona/2021/title-49/section-49-474-02/',
        description: {
          es: 'Marco legal del programa voluntario de incentivos para la reducción de emisiones en Arizona.',
          en: 'Legal framework of the voluntary emissions reduction incentive program in Arizona.'
        }
      },
      {
        author: 'LegalClarity',
        year: '2026',
        title: 'When does AB 1346 go into effect? Dates and phases.',
        source: '',
        link: 'https://legalclarity.org/when-does-ab-1346-go-into-effect/',
        description: {
          es: 'Cronología y fases de implementación de la ley AB 1346 en California.',
          en: 'Chronology and implementation phases of AB 1346 in California.'
        }
      },
      {
        author: 'U.S. Customs and Border Protection (CBP)',
        year: '2012',
        title: 'Colombia Trade Promotion Agreement (COTPA).',
        source: 'DHS',
        link: 'https://www.cbp.gov/trade/free-trade-agreements/colombia',
        description: {
          es: 'Documentación oficial sobre el Acuerdo de Promoción Comercial entre EE.UU. y Colombia y sus beneficios arancelarios.',
          en: 'Official documentation on the U.S.-Colombia Trade Promotion Agreement and its tariff benefits.'
        }
      },
      {
        author: 'Office of the United States Trade Representative (USTR)',
        year: '2012',
        title: 'Overview of the U.S.-Colombia Trade Agreement.',
        source: 'Executive Office of the President',
        link: 'https://ustr.gov/uscolombiatpa/facts',
        description: {
          es: 'Resumen ejecutivo de los compromisos y desgravaciones arancelarias bajo el TPA.',
          en: 'Executive summary of commitments and tariff reductions under the TPA.'
        }
      },
      {
        author: 'Yale Review of International Studies',
        year: '2025',
        title: 'The impact of US tariffs and deportation on Colombia.',
        source: 'Yale University',
        link: 'https://yris.yira.org/column/the-impact-of-us-tariffs-and-deportation-on-colombia/',
        description: {
          es: 'Análisis de la disputa diplomática y la amenaza de aranceles del 25% a bienes colombianos en 2025.',
          en: 'Analysis of the diplomatic dispute and the threat of 25% tariffs on Colombian goods in 2025.'
        }
      },
      {
        author: 'Mordor Intelligence',
        year: '2026',
        title: 'US Lawn Mowers Market Size & Share Outlook to 2031.',
        source: '',
        link: 'https://mordorintelligence.com/industry-reports/united-states-lawn-mowers-market',
        description: {
          es: 'Proyecciones de crecimiento del mercado de podadoras en EE.UU. y análisis de la transición hacia equipos eléctricos.',
          en: 'U.S. mower market growth projections and analysis of the transition toward electric equipment.'
        }
      }
    ]
  },
  {
    sector: { es: 'Macroeconómico y PIB', en: 'Macroeconomics & GDP' },
    items: [
      {
        author: 'Bureau of Economic Analysis',
        year: '2025',
        title: 'Gross domestic product by state, 2025.',
        source: 'U.S. Department of Commerce',
        link: 'https://www.bea.gov/data/gdp/gdp-state',
        description: {
          es: 'Datos de crecimiento del PIB en Arizona y California, utilizados para validar la robustez económica de los estados seleccionados.',
          en: 'GDP growth data for Arizona and California, used to validate the economic robustness of the selected states.'
        }
      },
      {
        author: 'Bureau of Economic Analysis',
        year: '2026',
        title: 'Real personal income by state, 2024.',
        source: 'U.S. Department of Commerce',
        link: 'https://www.bea.gov/news/2026/real-personal-consumption-expenditures-state-and-real-personal-income-state-2024',
        description: {
          es: 'Estadísticas sobre el ingreso personal real, fundamentales para determinar el poder adquisitivo de los clientes potenciales.',
          en: 'Real personal income statistics, fundamental for determining the purchasing power of potential customers.'
        }
      }
    ]
  },
  {
    sector: { es: 'Laboral y Empleo', en: 'Labor & Employment' },
    items: [
      {
        author: 'U.S. Bureau of Labor Statistics',
        year: '2026',
        title: 'Unemployment Rate in California and Arizona.',
        source: 'FRED',
        link: 'https://fred.stlouisfed.org/series/CAUR',
        description: {
          es: 'Tasas de desempleo actualizadas, usadas para analizar la estabilidad del mercado laboral regional.',
          en: 'Updated unemployment rates, used to analyze the stability of the regional labor market.'
        }
      },
      {
        author: 'California Department of Industrial Relations (DIR)',
        year: 's.f.',
        title: 'California Code of Regulations, Title 8, Section 5110 — Repetitive Motion Injuries.',
        source: 'State of California',
        link: 'https://www.dir.ca.gov/title8/5110.html',
        description: {
          es: 'Regulación ergonómica de California que obliga a implementar controles para reducir riesgos por vibración (WBV).',
          en: 'California ergonomic regulation requiring controls to reduce vibration risks (WBV).'
        }
      },
      {
        author: 'Safe At Work California',
        year: '2020',
        title: "California's Ergonomics Standard.",
        source: 'State Compensation Insurance Fund',
        link: 'https://www.safeatworkca.com/safety-articles/californias-ergonomics-standard/',
        description: {
          es: 'Análisis del estándar ergonómico de California y su diferenciación frente al marco federal.',
          en: 'Analysis of the California ergonomic standard and its differentiation from the federal framework.'
        }
      },
      {
        author: 'J.J. Keller & Associates',
        year: '2024',
        title: 'Protecting workers with an ergonomics program.',
        source: '',
        link: 'https://www.jjkellersafety.com/resources/articles/2024/protecting-workers-with-an-ergonomics-program',
        description: {
          es: 'Mejores prácticas para programas ergonómicos bajo la cláusula de deber general de OSHA federal.',
          en: 'Best practices for ergonomic programs under the federal OSHA general duty clause.'
        }
      },
      {
        author: 'Occupational Safety and Health Administration (OSHA)',
        year: 's.f.',
        title: 'OSHA Field Safety and Health Management System Manual Chapter 20: Ergonomics.',
        source: 'U.S. Department of Labor',
        link: 'https://www.osha.gov/shms/chapter-20',
        description: {
          es: 'Manual federal de OSHA sobre ergonomía y gestión de riesgos en el lugar de trabajo.',
          en: 'Federal OSHA manual on ergonomics and workplace risk management.'
        }
      },
      {
        author: 'Muzammil, M., Khan, A. A., y Hasan, F.',
        year: '2014',
        title: 'Vibration and noise caused by lawn maintenance machines in association with risk to health.',
        source: 'Journal of Mechanical Engineering and Sciences',
        link: 'https://doi.org/10.15282/jmes.7.2014.7.0105',
        description: {
          es: 'Estudio técnico sobre los riesgos a la salud por vibración y ruido en maquinaria de jardinería.',
          en: 'Technical study on health risks from vibration and noise in landscaping machinery.'
        }
      }
    ]
  },
  {
    sector: { es: 'Geoambiental y Terreno', en: 'Geoenvironmental & Terrain' },
    items: [
      {
        author: 'Natural Resources Conservation Service',
        year: '2024',
        title: 'Web soil survey: Sacramento County and Maricopa County.',
        source: 'USDA',
        link: 'https://websoilsurvey.nrcs.usda.gov/',
        description: {
          es: 'Análisis de la composición del suelo (caliche en Arizona vs aluvial en California) para determinar el estrés mecánico en la maquinaria.',
          en: 'Analysis of soil composition (caliche in Arizona vs alluvial in California) to determine mechanical stress on machinery.'
        }
      },
      {
        author: 'National Oceanic and Atmospheric Administration (NOAA)',
        year: '2025',
        title: 'Climate data online: Historical weather observations.',
        source: 'U.S. Department of Commerce',
        link: 'https://www.ncei.noaa.gov/cdo-web/',
        description: {
          es: 'Datos históricos de temperatura y radiación UV, fundamentales para sustentar la ventaja de disipación térmica de la tecnología UMO.',
          en: 'Historical temperature and UV radiation data, fundamental to support the thermal dissipation advantage of UMO technology.'
        }
      }
    ]
  },
  {
    sector: { es: 'Fiscal y Tributario', en: 'Fiscal & Tax' },
    items: [
      {
        author: 'Tax Foundation',
        year: '2026',
        title: 'Tariff Tracker: 2026 Trump Tariffs & Trade War by the Numbers.',
        source: 'Tax Foundation Research',
        link: 'https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/',
        description: {
          es: 'Seguimiento detallado de los aranceles impuestos en 2026 y la anulación judicial de los aranceles IEEPA.',
          en: 'Detailed tracking of tariffs imposed in 2026 and the judicial annulment of IEEPA tariffs.'
        }
      },
      {
        author: 'Tariffstool',
        year: '2026',
        title: 'Section 122 tariff rates — 10% global rate (2026).',
        source: '',
        link: 'https://www.tariffstool.com/guides/section-122-tariff-rates-2026',
        description: {
          es: 'Guía sobre la aplicación del arancel global del 10% bajo la Sección 122 del Trade Act de 1974.',
          en: 'Guide on the application of the 10% global tariff under Section 122 of the Trade Act of 1974.'
        }
      },
      {
        author: 'Grant Thornton',
        year: '2026',
        title: "The Trump administration's new tariff road map.",
        source: 'GT Alerts',
        link: 'https://www.grantthornton.com/insights/alerts/tax/2026/insights/the-trump-administration-new-tariff-road-map',
        description: {
          es: 'Análisis de la estrategia arancelaria y el uso de la Sección 122 como puente hacia la Sección 301.',
          en: 'Analysis of the tariff strategy and the use of Section 122 as a bridge toward Section 301.'
        }
      },
      {
        author: 'ArentFox Schiff',
        year: '2026',
        title: 'New tariffs to replace IEEPA: USTR initiates sweeping Section 301 investigations.',
        source: '',
        link: 'https://www.afslaw.com/perspectives/customs-import-compliance-blog/new-tariffs-replace-ieepa-ustr-initiates-sweeping',
        description: {
          es: 'Información sobre las investigaciones de la Sección 301 contra 60 países, incluido Colombia, por temas laborales.',
          en: 'Information on Section 301 investigations against 60 countries, including Colombia, for labor issues.'
        }
      }
    ]
  }
];

export const Bibliography = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 14' : 'Section 14'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-unoOrange" /> {language === 'es' ? 'Fuentes y Referencias por Sector' : 'Sources & References by Sector'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Guía detallada de las fuentes utilizadas, clasificadas por área temática y con un resumen del valor aportado a la investigación.'
            : 'Detailed guide of the sources used, classified by thematic area with a summary of the value provided to the research.'}
        </p>
      </header>

      <div className="space-y-8">
        {referencesBySector.map((sector, sIdx) => (
          <motion.div 
            key={sIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sIdx * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-unoOrange flex items-center gap-2">
              <span className="w-2 h-6 bg-unoOrange rounded-full inline-block"></span>
              {language === 'es' ? sector.sector.es : sector.sector.en}
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {sector.items.map((ref, idx) => (
                <div key={idx} className="glass-card p-6 group border-l-2 border-transparent hover:border-unoOrange transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div>
                        <p className="text-white text-base font-semibold leading-relaxed">
                          {ref.author}. ({ref.year}). <span className="italic text-textSecondary">{ref.title}</span>
                        </p>
                      </div>
                      
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                        <p className="text-sm text-textSecondary italic leading-relaxed">
                          <span className="text-unoOrange font-bold not-italic mr-2">
                            {language === 'es' ? 'Información clave:' : 'Key info:'}
                          </span>
                          {language === 'es' ? ref.description.es : ref.description.en}
                        </p>
                      </div>
                    </div>
                    
                    <a 
                      href={ref.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surfaceHover text-xs font-bold text-white hover:bg-unoOrange transition-all"
                    >
                      {language === 'es' ? 'VER FUENTE' : 'VIEW SOURCE'} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
