import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const referencesContent = [
  {
    author: 'California Air Resources Board (CARB)',
    year: '2022',
    title: 'Assembly Bill 1346 Summary: Small Off-Road Engines.',
    source: 'State of California',
    link: 'https://ww2.arb.ca.gov/2021-assembly-bill-1346'
  },
  {
    author: 'Mordor Intelligence',
    year: '2026, enero',
    title: 'US Lawn Mowers Market Size & Share Outlook to 2031: Industry Analysis.',
    source: '',
    link: 'https://mordorintelligence.com/industry-reports/united-states-lawn-mowers-market'
  },
  {
    author: 'Bureau of Economic Analysis',
    year: '2025',
    title: 'Gross domestic product by state, 2025.',
    source: 'U.S. Department of Commerce',
    link: 'https://www.bea.gov/data/gdp/gdp-state'
  },
  {
    author: 'USAFacts',
    year: '2026',
    title: 'What is the gross domestic product (GDP) in California?',
    source: '',
    link: 'https://usafacts.org/answers/what-is-the-gross-domestic-product-gdp/state/california/'
  },
  {
    author: 'USAFacts',
    year: '2026',
    title: 'What is the gross domestic product (GDP) in Arizona?',
    source: '',
    link: 'https://usafacts.org/answers/what-is-the-gross-domestic-product-gdp/state/arizona/'
  },
  {
    author: 'Bureau of Labor Statistics',
    year: '2026',
    title: 'Consumer Price Index — March 2026 [Comunicado de prensa].',
    source: 'U.S. Department of Labor',
    link: 'https://www.bls.gov/news.release/cpi.htm'
  },
  {
    author: 'Bureau of Labor Statistics',
    year: '2026',
    title: 'Consumer Price Index, West Region — March 2026.',
    source: '',
    link: 'https://www.bls.gov/regions/west/news-release/consumerpriceindex_west.htm'
  },
  {
    author: 'Macrotrends',
    year: '2026',
    title: 'U.S. Inflation Rate 1960–2024.',
    source: '',
    link: 'https://www.macrotrends.net/global-metrics/countries/usa/united-states/inflation-rate-cpi'
  },
  {
    author: 'Trading Economics',
    year: '2026',
    title: 'United States Inflation Rate.',
    source: '',
    link: 'https://tradingeconomics.com/united-states/inflation-cpi'
  },
  {
    author: 'U.S. Bureau of Labor Statistics',
    year: '2026',
    title: 'Unemployment Rate in California [CAUR].',
    source: 'Federal Reserve Bank of St. Louis (FRED)',
    link: 'https://fred.stlouisfed.org/series/CAUR'
  },
  {
    author: 'U.S. Bureau of Labor Statistics',
    year: '2026',
    title: 'Unemployment Rate in Arizona [AZUR].',
    source: 'Federal Reserve Bank of St. Louis (FRED)',
    link: 'https://fred.stlouisfed.org/series/AZUR'
  },
  {
    author: 'U.S. Bureau of Labor Statistics',
    year: '2026',
    title: 'Alternative measures of labor underutilization in California — 2025.',
    source: '',
    link: 'https://www.bls.gov/regions/west/news-release/laborunderutilization_california.htm'
  },
  {
    author: 'U.S. Bureau of Labor Statistics',
    year: '2026',
    title: 'Alternative measures of labor underutilization in Arizona — 2024.',
    source: '',
    link: 'https://www.bls.gov/regions/west/news-release/laborunderutilization_arizona.htm'
  },
  {
    author: 'USAFacts',
    year: '2026',
    title: 'What is the unemployment rate in California right now?',
    source: '',
    link: 'https://usafacts.org/answers/what-is-the-unemployment-rate/state/california/'
  },
  {
    author: 'USAFacts',
    year: '2026',
    title: 'What is the unemployment rate in Arizona right now?',
    source: '',
    link: 'https://usafacts.org/answers/what-is-the-unemployment-rate/state/arizona/'
  },
  {
    author: 'Federal Reserve Bank of St. Louis',
    year: '2026',
    title: 'Federal Funds Effective Rate [FEDFUNDS].',
    source: 'FRED',
    link: 'https://fred.stlouisfed.org/series/FEDFUNDS'
  },
  {
    author: 'Federal Reserve Board',
    year: '2026',
    title: 'Open Market Operations.',
    source: '',
    link: 'https://www.federalreserve.gov/monetarypolicy/openmarket.htm'
  },
  {
    author: 'Statista',
    year: '2026',
    title: 'U.S. federal funds effective rate 1954–2024.',
    source: '',
    link: 'https://www.statista.com/statistics/187616/effective-rate-of-us-federal-funds-monthly/'
  },
  {
    author: 'Trading Economics',
    year: '2026',
    title: 'United States Fed Funds Interest Rate.',
    source: '',
    link: 'https://tradingeconomics.com/united-states/interest-rate'
  },
  {
    author: 'Bureau of Economic Analysis',
    year: '2024',
    title: 'Personal consumption expenditures by state, 2023 [Comunicado de prensa].',
    source: 'U.S. Department of Commerce',
    link: 'https://www.bea.gov/news/2024/personal-consumption-expenditures-state-2023'
  },
  {
    author: 'Bureau of Economic Analysis',
    year: '2023',
    title: 'Personal consumption expenditures by state, 2022 [Comunicado de prensa].',
    source: 'U.S. Department of Commerce',
    link: 'https://www.bea.gov/news/2023/personal-consumption-expenditures-state-2022'
  },
  {
    author: 'Bureau of Economic Analysis',
    year: '2026',
    title: 'Real personal consumption expenditures by state and real personal income by state, 2024 [Comunicado de prensa].',
    source: 'U.S. Department of Commerce',
    link: 'https://www.bea.gov/news/2026/real-personal-consumption-expenditures-state-and-real-personal-income-state-2024'
  },
  {
    author: 'Bureau of Economic Analysis',
    year: '2025',
    title: 'Per Capita Personal Consumption Expenditures: Total for California [CAPCEPC].',
    source: 'Federal Reserve Bank of St. Louis (FRED)',
    link: 'https://fred.stlouisfed.org/series/CAPCEPC'
  },
  {
    author: 'Bureau of Economic Analysis',
    year: '2025',
    title: 'Per Capita Personal Consumption Expenditures: Total for Arizona [AZPCEPC].',
    source: 'Federal Reserve Bank of St. Louis (FRED)',
    link: 'https://fred.stlouisfed.org/series/AZPCEPC'
  },
  {
    author: 'Bureau of Economic Analysis',
    year: '2025',
    title: 'Per Capita Personal Consumption Expenditures: Services: Food Services and Accommodations for Arizona [AZPCEPCFDSRVACCMD].',
    source: 'Federal Reserve Bank of St. Louis (FRED)',
    link: 'https://fred.stlouisfed.org/series/AZPCEPCFDSRVACCMD'
  },
  {
    author: 'TheGlobalEconomy.com',
    year: '2026',
    title: 'USA: Household consumption, percent of GDP.',
    source: 'Basado en datos del World Bank',
    link: 'https://www.theglobaleconomy.com/USA/household_consumption/'
  },
  {
    author: 'Trading Economics',
    year: '2026',
    title: 'United States Consumer Spending.',
    source: '',
    link: 'https://tradingeconomics.com/united-states/consumer-spending'
  }
];

export const Bibliography = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-textSecondary">
          {language === 'es' ? 'Sección 8' : 'Section 8'}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white border-b border-glassBorder pb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-unoOrange" /> {language === 'es' ? 'Bibliografías' : 'Bibliography'}
        </h1>
        <p className="text-textSecondary max-w-3xl leading-relaxed mt-4">
          {language === 'es'
            ? 'Fuentes de consulta y documentos de referencia técnica utilizados para estructurar el plan de internacionalización.'
            : 'Reference sources and technical documents used to structure the internationalization plan.'}
        </p>
      </header>

      <div className="pt-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 md:p-8"
        >
          <ul className="space-y-6">
            {referencesContent.map((ref, idx) => (
              <li key={idx} className="group">
                <div className="flex gap-4">
                  <span className="text-unoOrange font-bold opacity-80 group-hover:opacity-100 transition-opacity mt-1">
                    [{idx + 1}]
                  </span>
                  <div>
                    <p className="text-white text-base leading-relaxed">
                      {ref.author}. ({ref.year}). <span className="italic text-textSecondary">{ref.title}</span> {ref.source}
                    </p>
                    <a href={ref.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-textSecondary hover:text-unoOrange transition-colors break-all">
                      {language === 'es' ? 'Consultar fuente' : 'View source'} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
