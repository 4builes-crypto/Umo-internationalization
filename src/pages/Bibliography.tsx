import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const referencesBySector = [
  {
    sector: { es: 'Regulaciones y Mercado', en: 'Regulations & Market' },
    items: [
      {
        author: 'Arizona Commerce Authority',
        year: '2026',
        title: '2025 International Trade: Year in Review and USMCA Impact.',
        source: 'ACA News',
        link: 'https://www.azcommerce.com/news-events/news/2026/2/2025-international-trade/',
        description: {
          es: 'Análisis del impacto del T-MEC y el flujo comercial internacional de Arizona en 2025.',
          en: 'Analysis of the USMCA impact and Arizona\'s international trade flow in 2025.'
        }
      },
      {
        author: 'California Chamber of Commerce (CalChamber)',
        year: '2026',
        title: 'California remains top exporting state: 2025 Trade Statistics.',
        source: 'Advocacy CalChamber',
        link: 'https://advocacy.calchamber.com/2026/03/03/california-remains-top-exporting-state/',
        description: {
          es: 'Estadísticas de exportación e importación de California, confirmando su liderazgo comercial transpacífico.',
          en: 'California export and import statistics, confirming its transpacific trade leadership.'
        }
      },
      {
        author: 'Observatory of Economic Complexity (OEC)',
        year: '2026',
        title: 'Arizona and California: Subnational Economic Profiles.',
        source: 'OEC World',
        link: 'https://oec.world/en/profile/subnational_usa/california',
        description: {
          es: 'Perfiles económicos detallados que muestran el origen de las importaciones y la complejidad de los productos intercambiados.',
          en: 'Detailed economic profiles showing the origin of imports and the complexity of traded products.'
        }
      },
      {
        author: 'Beacon Economics',
        year: '2026',
        title: 'California Trade Report: Analysis of Port Activity and Global Supply Chains.',
        source: 'Beacon Econ Publications',
        link: 'https://beaconecon.com/publications/ca-trade-report/',
        description: {
          es: 'Análisis de la actividad portuaria en Los Ángeles y Long Beach y su impacto en el abastecimiento industrial.',
          en: 'Analysis of port activity in Los Angeles and Long Beach and its impact on industrial supply.'
        }
      },
      {
        author: 'California Legislative Information',
        year: '2023',
        title: 'AB-1572 Potable water: nonfunctional turf.',
        source: 'California State Assembly',
        link: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB1572',
        description: {
          es: 'Regulación que limita el uso de agua potable para riego de césped no funcional.',
          en: 'Regulation limiting the use of potable water for non-functional turf irrigation.'
        }
      },
      {
        author: 'U.S. Census Bureau',
        year: '2025',
        title: 'QuickFacts: Arizona and California State Profiles.',
        source: 'U.S. Department of Commerce',
        link: 'https://www.census.gov/quickfacts/fact/table/AZ,CA/PST045224',
        description: {
          es: 'Datos demográficos actualizados sobre población, multiculturalidad, tasas de vivienda propia e ingresos por hogar.',
          en: 'Updated demographic data on population, multiculturalism, home ownership rates, and household income.'
        }
      },
      {
        author: 'U.S. Customs and Border Protection (CBP)',
        year: '2024',
        title: 'About Foreign-Trade Zones: Benefits and Regulations.',
        source: 'DHS',
        link: 'https://www.cbp.gov/border-management/ports-entry/foreign-trade-zones/about',
        description: {
          es: 'Guía oficial sobre los beneficios de las FTZ.',
          en: 'Official guide on FTZ benefits.'
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
        author: 'Community Associations Institute (CAI)',
        year: '2023',
        title: 'National and State Statistical Profile of Association-Governed Communities.',
        source: 'CAI Data Hub',
        link: 'https://www.caionline.org/AboutCommunityAssociations/Pages/StatisticalProfile.aspx',
        description: {
          es: 'Estadísticas sobre la alta regulación y prevalencia de las HOAs en los desarrollos suburbanos de EE.UU.',
          en: 'Statistics on the high regulation and prevalence of HOAs in US suburban developments.'
        }
      }
    ]
  },
  {
    sector: { es: 'Macroeconómico y PIB', en: 'Macroeconomics & GDP' },
    items: [
      {
        author: 'Office of the Arizona Governor',
        year: '2026',
        title: 'Economic benefits of international trade and USMCA integration in Arizona.',
        source: 'AZ Governor News',
        link: 'https://azgovernor.gov/office-arizona-governor/news/2026/01/governor-katie-hobbs-releases-study-touting-economic-benefits',
        description: {
          es: 'Estudio oficial sobre los beneficios económicos de la integración con México y el T-MEC para el estado de Arizona.',
          en: 'Official study on the economic benefits of integration with Mexico and USMCA for the state of Arizona.'
        }
      },
      {
        author: 'U.S. Bureau of Economic Analysis (BEA)',
        year: '2025',
        title: 'New Foreign Direct Investment in the United States by State.',
        source: 'U.S. Department of Commerce',
        link: 'https://www.bea.gov/data/intl-trade-investment/direct-investment-retail',
        description: {
          es: 'Estadísticas detalladas sobre la nueva inversión extranjera por estado.',
          en: 'Detailed statistics on new foreign investment by state.'
        }
      },
      {
        author: 'Bureau of Economic Analysis',
        year: '2025',
        title: 'Gross domestic product by state, 2025.',
        source: 'U.S. Department of Commerce',
        link: 'https://www.bea.gov/data/gdp/gdp-state',
        description: {
          es: 'Datos de crecimiento del PIB en Arizona y California.',
          en: 'GDP growth data for Arizona and California.'
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
          es: 'Tasas de desempleo actualizadas.',
          en: 'Updated unemployment rates.'
        }
      },
      {
        author: 'California Department of Industrial Relations (DIR)',
        year: 's.f.',
        title: 'California Code of Regulations, Title 8, Section 5110 — Repetitive Motion Injuries.',
        source: 'State of California',
        link: 'https://www.dir.ca.gov/title8/5110.html',
        description: {
          es: 'Regulación ergonómica de California sobre riesgos por vibración (WBV).',
          en: 'California ergonomic regulation on vibration risks (WBV).'
        }
      }
    ]
  },
  {
    sector: { es: 'Geoambiental y Terreno', en: 'Geoenvironmental & Terrain' },
    items: [
      {
        author: 'Arizona Department of Water Resources',
        year: 's.f.',
        title: 'Landscaping: Water conservation and drought-resistant plants.',
        source: 'State of Arizona',
        link: 'https://www.azwater.gov/conservation/landscaping',
        description: {
          es: 'Guía de paisajismo en Arizona que promueve plantas resistentes a la sequía.',
          en: 'Arizona landscaping guide promoting drought-resistant plants.'
        }
      },
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
        author: 'University of California Agriculture and Natural Resources (UC ANR)',
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
    sector: { es: 'Fiscal y Tributario', en: 'Fiscal & Tax' },
    items: [
      {
        author: 'Tax Foundation',
        year: '2026',
        title: 'Tariff Tracker: 2026 Trump Tariffs & Trade War by the Numbers.',
        source: 'Tax Foundation Research',
        link: 'https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/',
        description: {
          es: 'Seguimiento detallado de los aranceles impuestos en 2026.',
          en: 'Detailed tracking of tariffs imposed in 2026.'
        }
      },
      {
        author: 'AZ Bound',
        year: '2026',
        title: 'The California to Arizona tax swap: Is it still a “slam dunk” in 2026?',
        source: 'AZ Bound Publications',
        link: 'https://azbound.com/california-arizona-tax-comparison/',
        description: {
          es: 'Comparativa detallada de la carga impositiva estatal y local entre California y Arizona.',
          en: 'Detailed comparison of state and local tax burden between California and Arizona.'
        }
      },
      {
        author: 'California Department of Tax and Fee Administration (CDTFA)',
        year: 's.f.',
        title: 'Guía de impuestos para industria agropecuaria: Exenciones agrícolas.',
        source: 'State of California',
        link: 'https://cdtfa.ca.gov/industry/agriculture-spanish/farming-exemptions.htm',
        description: {
          es: 'Guía sobre exenciones parciales de impuestos para maquinaria y equipo agrícola en California.',
          en: 'Guide on partial tax exemptions for agricultural machinery and equipment in California.'
        }
      },
      {
        author: 'Redw',
        year: '2025',
        title: 'Arizona TPT ruling expands tax benefits for agricultural equipment.',
        source: 'Redw Insights',
        link: 'https://www.redw.com/arizona-tpt-ruling-expands-tax-benefits-agricultural-equipment/',
        description: {
          es: 'Análisis de la resolución que expande los beneficios fiscales (TPT) para maquinaria agrícola en Arizona.',
          en: 'Analysis of the ruling expanding tax benefits (TPT) for agricultural machinery in Arizona.'
        }
      }
    ]
  },
  {
    sector: { es: 'Inversión y Desarrollo Industrial', en: 'Investment & Industrial Development' },
    items: [
      {
        author: 'Arizona Commerce Authority',
        year: '2025',
        title: 'Manufacturing and Electric Vehicle Ecosystem Investment Report.',
        source: 'ACA',
        link: 'https://www.azcommerce.com/industries/manufacturing/',
        description: {
          es: 'Reporte sobre la inversión masiva en semiconductores y el ecosistema de vehículos eléctricos en Arizona.',
          en: 'Report on massive investment in semiconductors and the electric vehicle ecosystem in Arizona.'
        }
      },
      {
        author: 'California Energy Commission',
        year: '2025',
        title: 'Investment in Zero-Emission Vehicle Infrastructure and Manufacturing.',
        source: 'CEC',
        link: 'https://www.energy.ca.gov/programs-and-topics/programs/clean-transportation-program',
        description: {
          es: 'Planes de inversión para la infraestructura de transporte limpio y manufactura sostenible en California.',
          en: 'Investment plans for clean transportation infrastructure and sustainable manufacturing in California.'
        }
      },
      {
        author: 'SelectUSA',
        year: '2025',
        title: 'Foreign Direct Investment: California and Arizona State Profiles.',
        source: 'U.S. Department of Commerce',
        link: 'https://www.trade.gov/selectusa-invest-state-profiles',
        description: {
          es: 'Perfiles estatales de IED que detallan el flujo de capital extranjero hacia manufactura y tecnología.',
          en: 'FDI state profiles detailing the flow of foreign capital toward manufacturing and technology.'
        }
      },
      {
        author: 'U.S. Department of Agriculture (USDA)',
        year: '2025',
        title: 'Agricultural Productivity and Sector Investment by State.',
        source: 'USDA Economic Research Service',
        link: 'https://www.ers.usda.gov/data-products/agricultural-productivity-in-the-u-s/',
        description: {
          es: 'Datos sobre productividad agrícola e inversión en maquinaria y agrotecnología.',
          en: 'Data on agricultural productivity and investment in machinery and agrotechnology.'
        }
      }
    ]
  },
  {
    sector: { es: 'Industria de Landscaping y Aftermarket', en: 'Landscaping & Aftermarket Industry' },
    items: [
      {
        author: 'IBISWorld',
        year: '2025',
        title: 'Landscaping Services in Arizona.',
        source: 'IBISWorld Industry Report',
        link: 'https://www.ibisworld.com/united-states/industry/arizona/landscaping-services/17278/',
        description: {
          es: 'Reporte sobre el valor y crecimiento de la industria de landscaping en Arizona.',
          en: 'Report on the value and growth of the landscaping industry in Arizona.'
        }
      },
      {
        author: 'IBISWorld',
        year: '2025',
        title: 'Machinery Maintenance & Heavy Equipment Repair Services in California.',
        source: 'IBISWorld Industry Report',
        link: 'https://www.ibisworld.com/united-states/industry/california/machinery-maintenance-heavy-equipment-repair-services/14970/',
        description: {
          es: 'Análisis de los servicios de mantenimiento de maquinaria en California.',
          en: 'Analysis of machinery maintenance services in California.'
        }
      },
      {
        author: 'IBISWorld',
        year: '2025',
        title: 'Farm, Lawn & Garden Equipment Wholesaling in California.',
        source: 'IBISWorld Industry Report',
        link: 'https://www.ibisworld.com/united-states/industry/california/farm-lawn-garden-equipment-wholesaling/14710/',
        description: {
          es: 'Distribución mayorista de equipos de jardín y agrícolas en California.',
          en: 'Wholesale distribution of garden and agricultural equipment in California.'
        }
      },
      {
        author: 'DataHorizzon Research',
        year: '2025',
        title: 'Lawn and Garden Equipment Aftermarket Parts Market Report.',
        source: 'Market Research',
        link: 'https://datahorizzonresearch.com/lawn-and-garden-equipment-aftermarket-parts-market-54217',
        description: {
          es: 'Estudio de mercado global sobre repuestos aftermarket para equipos de jardín.',
          en: 'Global market study on aftermarket parts for garden equipment.'
        }
      },
      {
        author: 'Cognitive Market Research',
        year: '2026',
        title: 'Lawn and Garden Equipment Aftermarket Parts Market Analysis.',
        source: 'Market Analysis',
        link: 'https://www.cognitivemarketresearch.com/lawn-and-garden-equipment-aftermarket-parts-market-report',
        description: {
          es: 'Análisis detallado de la demanda de componentes de reposición en el mercado norteamericano.',
          en: 'Detailed analysis of replacement component demand in the North American market.'
        }
      },
      {
        author: 'Arizona Landscape Contractors Association (ALCA)',
        year: '2024',
        title: 'Arizona Sustainable Landscaping Guidelines & Winter Overseeding Management.',
        source: 'ALCA Resources',
        link: 'https://www.azlca.com/resources',
        description: {
          es: 'Guía de paisajismo sostenible en Arizona que describe el ciclo continuo de mantenimiento y la siembra de invierno.',
          en: 'Sustainable landscaping guide in Arizona describing the continuous maintenance cycle and winter overseeding.'
        }
      },
      {
        author: 'National Golf Foundation (NGF)',
        year: '2024',
        title: 'Golf Course Density and Maintenance Facilities in the US Sun Belt.',
        source: 'NGF Publications',
        link: 'https://www.ngf.org/golf-industry-research/',
        description: {
          es: 'Informe sobre la concentración de campos de golf en el Sun Belt y la frecuencia de mantenimiento requerida.',
          en: 'Report on golf course density in the Sun Belt and the required maintenance frequency.'
        }
      }
    ]
  },
  {
    sector: { es: 'Logística y Tiempo de Exportación', en: 'Logistics & Export Lead Time' },
    items: [
      {
        author: 'Freightos',
        year: '2025',
        title: 'International Freight Shipping Transit Time Calculator.',
        source: 'Freightos Marketplace',
        link: 'https://www.freightos.com/freight-resources/transit-time-calculator/',
        description: {
          es: 'Herramienta de cálculo de tiempos de tránsito para carga internacional.',
          en: 'Transit time calculation tool for international freight.'
        }
      },
      {
        author: 'Maersk',
        year: '2025',
        title: 'Transit Time and Shipping Routes Latin America to United States.',
        source: 'Maersk Logistics',
        link: 'https://www.maersk.com/',
        description: {
          es: 'Rutas marítimas y tiempos estimados desde Latinoamérica hacia EE.UU.',
          en: 'Maritime routes and estimated times from Latin America to the US.'
        }
      },
      {
        author: 'Port of Los Angeles / Long Beach',
        year: '2025',
        title: 'Port Statistics and Cargo Operations.',
        source: 'Port Authorities',
        link: 'https://www.portoflosangeles.org/business/statistics',
        description: {
          es: 'Estadísticas de carga e infraestructura portuaria en California.',
          en: 'Cargo statistics and port infrastructure in California.'
        }
      },
      {
        author: 'International Trade Administration',
        year: '2025',
        title: 'U.S. Transportation and Logistics Industry Overview.',
        source: 'U.S. Department of Commerce',
        link: 'https://www.trade.gov/transportation-and-logistics-industry',
        description: {
          es: 'Visión general de la industria logística y de transporte en los Estados Unidos.',
          en: 'Overview of the transportation and logistics industry in the United States.'
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
          {language === 'es' ? 'Sección 15' : 'Section 15'}
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
