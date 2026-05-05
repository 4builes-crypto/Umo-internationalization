import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const referencesBySector = [
  {
    sector: { es: 'Regulaciones y Mercado', en: 'Regulations & Market' },
    items: [
      {
        author: 'California Air Resources Board (CARB)',
        year: '2022',
        title: 'Assembly Bill 1346 Summary: Small Off-Road Engines.',
        source: 'State of California',
        link: 'https://ww2.arb.ca.gov/2021-assembly-bill-1346',
        description: {
          es: 'Información sobre la prohibición de motores de combustión interna en equipos de jardinería para 2024, clave para la ventaja competitiva de las podadoras eléctricas.',
          en: 'Information on the ban of internal combustion engines in landscaping equipment by 2024, key to the competitive advantage of electric mowers.'
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
        author: 'Bureau of Labor Statistics',
        year: '2026',
        title: 'Consumer Price Index — March 2026.',
        source: 'U.S. Department of Labor',
        link: 'https://www.bls.gov/news.release/cpi.htm',
        description: {
          es: 'Datos de inflación (IPC) para entender el incremento en el costo de vida y su impacto en el consumo de bienes no esenciales.',
          en: 'Inflation data (CPI) to understand the increase in the cost of living and its impact on the consumption of non-essential goods.'
        }
      },
      {
        author: 'Muzammil, M., Khan, A. A., y Hasan, F.',
        year: '2014',
        title: 'Vibration and noise caused by lawn maintenance machines in association with risk to health.',
        source: 'Journal of Mechanical Engineering and Sciences',
        link: 'https://doi.org/10.15282/jmes.7.2014.7.0105',
        description: {
          es: 'Estudio técnico sobre los riesgos a la salud por vibración y ruido en maquinaria de jardinería, sustentando la necesidad de asientos con amortiguación avanzada.',
          en: 'Technical study on health risks from vibration and noise in landscaping machinery, supporting the need for seats with advanced damping.'
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
      },
      {
        author: 'Arizona Cooperative Extension',
        year: '2021',
        title: 'Turfgrass maintenance guide for commercial and residential lawns.',
        source: 'University of Arizona',
        link: 'https://extension.arizona.edu/publication/turfgrass-maintenance-guide-residential-and-commercial-lawns-low-elevation-arizona',
        description: {
          es: 'Guía de mantenimiento de césped que confirma el ciclo operativo de 12 meses en Arizona, validando la alta demanda de reposición.',
          en: 'Turf maintenance guide confirming the 12-month operating cycle in Arizona, validating high replacement demand.'
        }
      },
      {
        author: 'University of California Agriculture and Natural Resources',
        year: '2023',
        title: 'Mowing and grasscycling guidelines for California landscapes.',
        source: 'UC ANR',
        link: 'https://ucanr.edu/site/landscape-lush/mowing-and-grasscycling',
        description: {
          es: 'Directrices de corte en California que muestran la estacionalidad del servicio, permitiendo contrastar el desgaste operativo con Arizona.',
          en: 'Mowing guidelines in California showing service seasonality, allowing for a contrast in operational wear with Arizona.'
        }
      }
    ]
  },
  {
    sector: { es: 'Política Monetaria', en: 'Monetary Policy' },
    items: [
      {
        author: 'Federal Reserve Bank of St. Louis',
        year: '2026',
        title: 'Federal Funds Effective Rate [FEDFUNDS].',
        source: 'FRED',
        link: 'https://fred.stlouisfed.org/series/FEDFUNDS',
        description: {
          es: 'Tasas de interés de la Reserva Federal, críticas para proyectar costos de financiamiento y comportamiento del crédito.',
          en: 'Federal Reserve interest rates, critical for projecting financing costs and credit behavior.'
        }
      }
    ]
  },
  {
    sector: { es: 'Consumo y Gastos', en: 'Consumption & Spending' },
    items: [
      {
        author: 'Bureau of Economic Analysis',
        year: '2025',
        title: 'Per Capita Personal Consumption Expenditures.',
        source: 'FRED',
        link: 'https://fred.stlouisfed.org/series/CAPCEPC',
        description: {
          es: 'Gasto per cápita detallado por estado, permitiendo identificar la disposición al gasto en servicios y bienes duraderos.',
          en: 'Detailed per capita spending by state, allowing for the identification of willingness to spend on services and durable goods.'
        }
      },
      {
        author: 'TheGlobalEconomy.com',
        year: '2026',
        title: 'USA: Household consumption, percent of GDP.',
        source: 'World Bank Data',
        link: 'https://www.theglobaleconomy.com/USA/household_consumption/',
        description: {
          es: 'Proporción del consumo de los hogares respecto al PIB nacional para contextualizar la economía basada en el consumo.',
          en: 'Household consumption as a percentage of national GDP to contextualize the consumption-based economy.'
        }
      }
    ]
  },
  {
    sector: { es: 'Fiscal y Tributario', en: 'Fiscal & Tax' },
    items: [
      {
        author: 'Tax Foundation / State Depts of Revenue',
        year: '2025',
        title: 'Sales and Use Tax Rates (CA & AZ).',
        source: '',
        link: 'https://taxfoundation.org/data/all/state/sales-tax-rates-midyear-2025/',
        description: {
          es: 'Tasas impositivas estatales y locales aplicables a la venta de podadoras, esenciales para el cálculo del precio final al consumidor.',
          en: 'State and local tax rates applicable to the sale of mowers, essential for calculating the final consumer price.'
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
            animate={{ opacity: 1, y: 0 }}
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
