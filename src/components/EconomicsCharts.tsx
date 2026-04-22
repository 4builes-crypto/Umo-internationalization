import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const salarioData = [
  { year: '2021', california: 34.5, arizona: 27.5 },
  { year: '2022', california: 36.6, arizona: 29.0 },
  { year: '2023', california: 38.4, arizona: 30.5 },
  { year: '2024', california: 40.2, arizona: 32.5 },
  { year: '2025', california: 41.98, arizona: 34.85 },
  { year: '2026', arizona: 35.32 }
];

const desempleoData = [
  { year: '2021', california: 7.3, arizona: 5.5 },
  { year: '2022', california: 4.2, arizona: 3.5 },
  { year: '2023', california: 4.8, arizona: 3.6 },
  { year: '2024', california: 5.3, arizona: 3.6 },
  { year: '2025', california: 5.4, arizona: 4.3 }
];

const interesData = [
  { year: '2021', tasa: 0.08 },
  { year: '2022', tasa: 4.33 },
  { year: '2023', tasa: 5.33 },
  { year: '2024', tasa: 4.33 },
  { year: '2025', tasa: 4.33 },
  { year: '2026', tasa: 3.63 }
];

const pibData = [
  { year: '2021', california: 80800, arizona: 53737 },
  { year: '2022', california: 81200, arizona: 54778 },
  { year: '2023', california: 83000, arizona: 55747 },
  { year: '2024', california: 84000, arizona: 59100 },
  { year: '2025', california: 86100, arizona: 59800 }
];

const inflacionData = [
  { year: '2021', us: 4.7, west: 5.0 },
  { year: '2022', us: 8.0, west: 8.2 },
  { year: '2023', us: 4.12, west: 4.3 },
  { year: '2024', us: 2.95, west: 3.0 },
  { year: '2025', us: 2.7, west: 2.7 }
];

const ChartContainer = ({ title, children, analysisPlaceholder, tableContent }: any) => {
  const { language } = useLanguage();
  return (
    <div className="glass-card p-6 md:p-8 space-y-6">
      <h3 className="text-xl font-bold text-white text-center">{title}</h3>
      <div className="h-[400px] w-full">
        {children}
      </div>
      <div className="pt-6 border-t border-glassBorder space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-unoOrange mb-2">
            {language === 'es' ? 'Análisis Preliminar' : 'Preliminary Analysis'}
          </h4>
          <p className="text-sm text-textSecondary bg-surface/30 p-4 rounded-lg italic">
            {analysisPlaceholder}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-unoOrange mb-2">
            {language === 'es' ? 'Datos' : 'Data'}
          </h4>
          <div className="overflow-x-auto">
            {tableContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export const EconomicsCharts = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Chart 1: Salario */}
      <ChartContainer 
        title={language === 'es' ? 'Salario Promedio por Hora (USD)' : 'Average Hourly Wage (USD)'}
        analysisPlaceholder={language === 'es' ? '[Espacio para tu análisis del salario aquí...]' : '[Space for your wage analysis here...]'}
        tableContent={
          <table className="w-full text-sm text-left text-textSecondary">
            <thead className="bg-surface/50 text-white">
              <tr>
                <th className="px-4 py-2">{language === 'es' ? 'Año' : 'Year'}</th>
                <th className="px-4 py-2">California</th>
                <th className="px-4 py-2">Arizona</th>
              </tr>
            </thead>
            <tbody>
              {salarioData.map(row => (
                <tr key={row.year} className="border-b border-glassBorder">
                  <td className="px-4 py-2">{row.year}</td>
                  <td className="px-4 py-2">${row.california ? row.california.toFixed(2) : '-'}</td>
                  <td className="px-4 py-2">${row.arizona.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salarioData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="year" stroke="#ffffff80" />
            <YAxis stroke="#ffffff80" domain={['auto', 'auto']} tickFormatter={(value) => `$${value}`} />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#ffffff20' }} />
            <Legend />
            <Line type="monotone" dataKey="california" name="California" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="california" position="top" fill="#ffffff" fontSize={11} formatter={(v: any) => `$${v}`} />
            </Line>
            <Line type="monotone" dataKey="arizona" name="Arizona" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="arizona" position="bottom" fill="#ffffff" fontSize={11} formatter={(v: any) => `$${v}`} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Chart 2: Tasa de Desempleo */}
      <ChartContainer 
        title={language === 'es' ? 'Tasa de Desempleo (%)' : 'Unemployment Rate (%)'}
        analysisPlaceholder={language === 'es' ? '[Espacio para tu análisis del desempleo aquí...]' : '[Space for your unemployment analysis here...]'}
        tableContent={
          <table className="w-full text-sm text-left text-textSecondary">
            <thead className="bg-surface/50 text-white">
              <tr>
                <th className="px-4 py-2">{language === 'es' ? 'Año' : 'Year'}</th>
                <th className="px-4 py-2">California</th>
                <th className="px-4 py-2">Arizona</th>
              </tr>
            </thead>
            <tbody>
              {desempleoData.map(row => (
                <tr key={row.year} className="border-b border-glassBorder">
                  <td className="px-4 py-2">{row.year}</td>
                  <td className="px-4 py-2">{row.california}%</td>
                  <td className="px-4 py-2">{row.arizona}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={desempleoData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="year" stroke="#ffffff80" />
            <YAxis stroke="#ffffff80" domain={[3, 8]} tickFormatter={(value) => `${value}%`} />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#ffffff20' }} />
            <Legend />
            <Line type="monotone" dataKey="california" name="California" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }}>
               <LabelList dataKey="california" position="top" fill="#ffffff" fontSize={11} formatter={(v: any) => `${v}%`} />
            </Line>
            <Line type="monotone" dataKey="arizona" name="Arizona" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="arizona" position="bottom" fill="#ffffff" fontSize={11} formatter={(v: any) => `${v}%`} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Chart 3: Tasas de interés */}
      <ChartContainer 
        title={language === 'es' ? 'Tasas de Interés (%)' : 'Interest Rates (%)'}
        analysisPlaceholder={language === 'es' ? '[Espacio para tu análisis de las tasas de interés aquí...]' : '[Space for your interest rates analysis here...]'}
        tableContent={
          <table className="w-full text-sm text-left text-textSecondary">
            <thead className="bg-surface/50 text-white">
              <tr>
                <th className="px-4 py-2">{language === 'es' ? 'Año' : 'Year'}</th>
                <th className="px-4 py-2">{language === 'es' ? 'Tasa' : 'Rate'}</th>
              </tr>
            </thead>
            <tbody>
              {interesData.map(row => (
                <tr key={row.year} className="border-b border-glassBorder">
                  <td className="px-4 py-2">{row.year}</td>
                  <td className="px-4 py-2">{row.tasa}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={interesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="year" stroke="#ffffff80" />
            <YAxis stroke="#ffffff80" domain={[0, 6]} tickFormatter={(value) => `${value}%`} />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#ffffff20' }} />
            <Legend />
            <Line type="monotone" dataKey="tasa" name={language === 'es' ? "Tasa de Interés" : "Interest Rate"}  stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="tasa" position="top" fill="#ffffff" fontSize={11} formatter={(v: any) => `${v}%`} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Chart 4: PIB */}
      <ChartContainer 
        title={language === 'es' ? 'Gráfico Comparativo del PIB Real per Cápita: California vs. Arizona' : 'Comparative Graph of Real GDP per Capita: California vs. Arizona'}
        analysisPlaceholder={language === 'es' ? '[Espacio para tu análisis del PIB per cápita aquí...]' : '[Space for your GDP per capita analysis here...]'}
        tableContent={
          <table className="w-full text-sm text-left text-textSecondary">
            <thead className="bg-surface/50 text-white">
              <tr>
                <th className="px-4 py-2">{language === 'es' ? 'Año' : 'Year'}</th>
                <th className="px-4 py-2">California</th>
                <th className="px-4 py-2">Arizona</th>
              </tr>
            </thead>
            <tbody>
              {pibData.map(row => (
                <tr key={row.year} className="border-b border-glassBorder">
                  <td className="px-4 py-2">{row.year}</td>
                  <td className="px-4 py-2">${row.california.toLocaleString()}</td>
                  <td className="px-4 py-2">${row.arizona.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={pibData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="year" stroke="#ffffff80" />
            <YAxis stroke="#ffffff80" domain={['auto', 'auto']} tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`} />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#ffffff20' }} formatter={(value: any) => `$${value.toLocaleString()}`} />
            <Legend />
            <Line type="monotone" dataKey="california" name="California" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="california" position="top" fill="#ffffff" fontSize={11} formatter={(v: any) => `$${v.toLocaleString()}`} />
            </Line>
            <Line type="monotone" dataKey="arizona" name="Arizona" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="arizona" position="bottom" fill="#ffffff" fontSize={11} formatter={(v: any) => `$${v.toLocaleString()}`} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Chart 5: Inflación */}
      <ChartContainer 
        title={language === 'es' ? 'Gráfico Comparativo de Tasas de Inflación Anual: Estados Unidos vs. Región Oeste' : 'Comparative Graph of Annual Inflation Rates: United States vs. West Region'}
        analysisPlaceholder={language === 'es' ? '[Espacio para tu análisis de la inflación aquí...]' : '[Space for your inflation analysis here...]'}
        tableContent={
          <table className="w-full text-sm text-left text-textSecondary">
            <thead className="bg-surface/50 text-white">
              <tr>
                <th className="px-4 py-2">{language === 'es' ? 'Año' : 'Year'}</th>
                <th className="px-4 py-2">{language === 'es' ? 'Estados Unidos (IPC Anual)' : 'United States (Annual CPI)'}</th>
                <th className="px-4 py-2">{language === 'es' ? 'Región Oeste (BLS)' : 'West Region (BLS)'}</th>
              </tr>
            </thead>
            <tbody>
              {inflacionData.map(row => (
                <tr key={row.year} className="border-b border-glassBorder">
                  <td className="px-4 py-2">{row.year}</td>
                  <td className="px-4 py-2">{row.us.toFixed(2)}%</td>
                  <td className="px-4 py-2">{row.west.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={inflacionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="year" stroke="#ffffff80" />
            <YAxis stroke="#ffffff80" domain={[0, 10]} tickFormatter={(value) => `${value}%`} />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#ffffff20' }} />
            <Legend />
            <Line type="monotone" dataKey="us" name={language === 'es' ? "Estados Unidos (IPC Anual)" : "United States (Annual CPI)"} stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="us" position="bottom" fill="#ffffff" fontSize={11} formatter={(v: any) => `${v.toFixed(2)}%`} />
            </Line>
            <Line type="monotone" dataKey="west" name={language === 'es' ? "Región Oeste (BLS)" : "West Region (BLS)"} stroke="#f97316" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="west" position="top" fill="#ffffff" fontSize={11} formatter={(v: any) => `${v.toFixed(2)}%`} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

    </div>
  );
};
