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

const consumoData = [
  { year: '2021', california: 55098, arizona: 46223 },
  { year: '2022', california: 60525, arizona: 50665 }, 
  { year: '2023', california: 64368, arizona: 53451 },
  { year: '2024', california: 67565, arizona: 56211 },
];

const desempleoData = [
  { year: '2021', california: 7.3, arizona: 5.5 },
  { year: '2022', california: 4.2, arizona: 3.5 },
  { year: '2023', california: 4.8, arizona: 3.6 },
  { year: '2024', california: 5.3, arizona: 3.6 },
  { year: '2025', california: 5.4, arizona: 4.3 }
];

const impuestosData = [
  { year: '2021', california: 7.25, arizona: 5.6 },
  { year: '2022', california: 7.25, arizona: 5.6 },
  { year: '2023', california: 7.25, arizona: 5.6 },
  { year: '2024', california: 7.25, arizona: 5.6 },
  { year: '2025', california: 7.25, arizona: 5.6 }
];

const pibData = [
  { year: '2021', california: 80800, arizona: 53737 },
  { year: '2022', california: 81200, arizona: 54778 },
  { year: '2023', california: 83000, arizona: 55747 },
  { year: '2024', california: 84000, arizona: 59100 },
  { year: '2025', california: 86100, arizona: 59800 }
];

const inflacionData = [
  { year: '2021', phoenix: 9.7, sacramento: 7.1 },
  { year: '2022', phoenix: 9.5, sacramento: 6.2 },
  { year: '2023', phoenix: 2.7, sacramento: 3.6 },
  { year: '2024', phoenix: 1.6, sacramento: 2.5 },
  { year: '2025', phoenix: 1.7, sacramento: 2.55 }
];

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  analysisPlaceholder: string;
  tableContent: React.ReactNode;
}

const ChartContainer = ({ title, children, analysisPlaceholder, tableContent }: ChartContainerProps) => {
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
      {/* Chart 1: Consumo de los hogares */}
      <ChartContainer 
        title={language === 'es' ? 'Consumo de los hogares como porcentaje del PIB (PCE per cápita)' : 'Household consumption as percent of GDP (PCE per capita)'}
        analysisPlaceholder={language === 'es' ? 'Estados Unidos destina casi el 68% de su PIB al consumo de los hogares, superando el promedio mundial de 66.87% (World Bank, 2024). Esto confirma que es una economía donde la gente gasta activamente, no solo acumula ingresos. California, con un PCE per cápita de $67,565, posiciona a sus consumidores entre los que más gastan en todo el país, lo que favorece la compra de accesorios premium como el sillín (BEA/FRED, 2025). Arizona, aunque con menor gasto absoluto ($56,211 per cápita), creció 21.6% acumulado entre 2021 y 2024 y su PCE total subió 7.2% en 2023, superando el promedio nacional de 6.4% (BEA, 2024). A pesar de que no se cuentan con datos del 2025-2026 debido a que no ha salido el informe, con los datos recolectados se puede inferir que el PCE va a seguir su tendencia al alza como lo ha venido haciendo en años anteriores. Para UMO, California es un mercado de alto ticket donde el consumidor ya gasta mucho, y Arizona es un mercado en aceleración donde el consumo crece más rápido que el promedio nacional. Ambos validan la viabilidad de entrada.' : 'The United States dedicates nearly 68% of its GDP to household consumption, surpassing the global average of 66.87% (World Bank, 2024). This confirms an economy where people actively spend rather than just accumulate income. California, with a per capita PCE of $67,565, places its consumers among the highest spenders nationwide, favoring the purchase of premium accessories like seats (BEA/FRED, 2025). Arizona, while having a lower absolute spend ($56,211 per capita), saw cumulative growth of 21.6% between 2021 and 2024; its total PCE rose 7.2% in 2023, beating the national average of 6.4% (BEA, 2024). Although 2025-2026 data is not yet available, collected trends suggest PCE will continue its upward trajectory. For UMO, California represents a high-ticket market with established high spending, while Arizona is an accelerating market growing faster than the national average. Both validate entry viability.'}
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
              {consumoData.filter(r => r.california).map(row => (
                <tr key={row.year} className="border-b border-glassBorder">
                  <td className="px-4 py-2">{row.year}</td>
                  <td className="px-4 py-2">${row.california ? row.california.toLocaleString() : '-'}</td>
                  <td className="px-4 py-2">${row.arizona ? row.arizona.toLocaleString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={consumoData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="year" stroke="#ffffff80" />
            <YAxis stroke="#ffffff80" domain={['auto', 'auto']} tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`} />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#ffffff20' }} formatter={(value: any) => `$${value.toLocaleString()}`} />
            <Legend />
            <Line type="monotone" dataKey="california" name="California" connectNulls stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="california" position="top" fill="#ffffff" fontSize={11} formatter={(v: any) => `$${(v/1000).toFixed(1)}k`} />
            </Line>
            <Line type="monotone" dataKey="arizona" name="Arizona" connectNulls stroke="#f97316" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="arizona" position="bottom" fill="#ffffff" fontSize={11} formatter={(v: any) => `$${(v/1000).toFixed(1)}k`} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Chart 2: Tasa de Desempleo */}
      <ChartContainer 
        title={language === 'es' ? 'Tasa de Desempleo (%)' : 'Unemployment Rate (%)'}
        analysisPlaceholder={language === 'es' ? 'Este dato demuestra la cantidad de personas que están desempleadas buscando trabajo, por lo tanto si este índice se mantiene en bajos porcentajes esto significa que hay un mercado laboral activo, lo que se traduce en más personas y empresas que tienen el poder adquisitivo para cubrir con la demanda del producto, y hablando específicamente de los estados, ambos muestran un panorama adecuado con respecto al indicador, Arizona permite evidenciar que se cuenta con un mayor dinamismo en el mercado y con más personas empleadas en comparación con California, pero a pesar de esto California solo se pone 1 o 2 puntos por encima de Arizona y cuenta con una población mucho más grande con más de 18 millones de empleados no agrícolas y salarios significativamente más elevados según (BLS, 2026).' : 'This data demonstrates the amount of unemployed individuals seeking work; therefore, if this index remains at low percentages, it signifies an active labor market, translating into more individuals and businesses with the purchasing power to meet product demand. Specifically for our target states, both show an adequate landscape: Arizona demonstrates greater market dynamism and higher employment rates compared to California; however, California is only 1 or 2 points behind Arizona and boasts a significantly larger population with over 18 million non-farm employees and much higher wages (BLS, 2026).'}
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

      {/* Chart 3: Impuestos */}
      <ChartContainer 
        title={language === 'es' ? 'Tasas de Impuestos sobre las Ventas (Sales Tax %)' : 'Sales Tax Rates (%)'}
        analysisPlaceholder={language === 'es' ? 'Estos datos nos reflejan una robustez económica en Arizona y California. Esta estabilidad fiscal, poco común en otros mercados, ofrece un panorama de seguridad para el proyecto, ya que permite proyectar márgenes de utilidad y precios de venta finales sin el riesgo de variaciones imprevistas. Al mantenerse estáticos los impuestos, la economía estatal proyecta una solidez que genera confianza tanto en el exportador como en el consumidor final. Para la exportación de sillas para podadoras, este escenario es ideal. La combinación de impuestos fijos y una inflación controlada asegura que el ingreso de las personas no se vea afectado.' : 'These data reflect economic robustness in Arizona and California. This fiscal stability, uncommon in other markets, offers a secure outlook for the project, allowing for the projection of profit margins and final sales prices without the risk of unforeseen variations. By remaining static, state taxes project a solidity that generates confidence for both the exporter and the final consumer. For the export of mower seats, this scenario is ideal. The combination of fixed taxes and controlled inflation ensures that peoples income is not affected.'}
        tableContent={
          <table className="w-full text-sm text-left text-textSecondary">
            <thead className="bg-surface/50 text-white">
              <tr>
                <th className="px-4 py-2">{language === 'es' ? 'Año' : 'Year'}</th>
                <th className="px-4 py-2">Arizona (%)</th>
                <th className="px-4 py-2">California (%)</th>
              </tr>
            </thead>
            <tbody>
              {impuestosData.map(row => (
                <tr key={row.year} className="border-b border-glassBorder">
                  <td className="px-4 py-2">{row.year}</td>
                  <td className="px-4 py-2">{row.arizona}%</td>
                  <td className="px-4 py-2">{row.california}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={impuestosData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="year" stroke="#ffffff80" />
            <YAxis stroke="#ffffff80" domain={[0, 10]} tickFormatter={(value) => `${value}%`} />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#ffffff20' }} />
            <Legend />
            <Line type="monotone" dataKey="arizona" name="Arizona"  stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="arizona" position="top" fill="#ffffff" fontSize={11} formatter={(v: any) => `${v}%`} />
            </Line>
            <Line type="monotone" dataKey="california" name="California"  stroke="#f97316" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="california" position="top" fill="#ffffff" fontSize={11} formatter={(v: any) => `${v}%`} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Chart 4: PIB */}
      <ChartContainer 
        title={language === 'es' ? 'PIB per capita' : 'Real GDP per Capita'}
        analysisPlaceholder={language === 'es' ? 'Este indicador macroeconómico permite confirmar si la población de los estados objetivos cuentan con la capacidad económica para soportar la demanda del producto, y encontramos que si es así gracias a varios datos, En 2025, el PIB per cápita real de California alcanzó los $86,100 dólares, representando un crecimiento del 2.5% respecto a 2024 y poniendo al estado como 4 puesto a nivel nacional según (USAFacts, 2026). Por otro lado, Arizona registró un PIB per cápita de $59,800 en 2025, un incremento del 1.1% respecto al año anterior, ubicándose en la posición 33 entre los 50 estados (USAFacts, 2026). A pesar de que Arizona no está al mismo nivel que California, es importante destacar que Arizona pasó de $53,737 en 2021 a $59,800 en 2025, lo que representa un crecimiento acumulado cercano al 11.3% en cuatro años según (BEA, 2025). California, aunque parte de una base más alta, también mostró crecimiento sostenido, pasando de $80,800 a $86,100 en el mismo período (BEA, 2025). Con estos datos confirmamos que el promedio de dinero que gana el estadounidense en ambos estados le permite cubrir la demanda del producto de UMO.' : 'This macroeconomic indicator confirms whether the population of the target states has the economic capacity to support product demand, which we find to be true based on several data points. In 2025, California\'s real GDP per capita reached $86,100, representing a 2.5% growth compared to 2024 and placing the state 4th nationally according to USAFacts (2026). Conversely, Arizona recorded a GDP per capita of $59,800 in 2025, a 1.1% increase from the previous year, ranking 33rd among the 50 states (USAFacts, 2026). Although Arizona is not at California\'s level, it grew from $53,737 in 2021 to $59,800 in 2025, marking an 11.3% cumulative growth over four years (BEA, 2025). California, while starting from a higher base, also showed sustained growth from $80,800 to $86,100 in the same period (BEA, 2025). These figures confirm that average earnings in both states are sufficient to cover the demand for UMO\'s product.'}
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
        title={language === 'es' ? 'Tasa de Inflación en Ciudades Capitales: Phoenix vs. Sacramento' : 'Inflation Rate in Capital Cities: Phoenix vs. Sacramento'}
        analysisPlaceholder={language === 'es' ? 'La elección de Phoenix y Sacramento como puntos estratégicos responde a su relevancia como capitales y núcleos económicos de Arizona y California. La tendencia de desinflación observada en estas ciudades refleja una estabilización que favorece directamente la exportación de las sillas para podadoras ride-on. Al moderarse el crecimiento de los precios, aumenta el ingreso disponible de los consumidores, permitiendo que propietarios y empresas de mantenimiento cuenten con mayor liquidez. Este excedente financiero facilita que los usuarios finales inviertan en mantener sus equipos en estado óptimo, adquiriendo todas sus partes y accesorios' : 'The choice of Phoenix and Sacramento as strategic points responds to their relevance as capitals and economic hubs of Arizona and California. The disinflation trend observed in these cities reflects a stabilization that directly favors the export of ride-on mower seats. As price growth moderates, consumer disposable income increases, allowing owners and maintenance companies to have greater liquidity. This financial surplus facilitates end users investing in maintaining their equipment in optimal condition, acquiring all its parts and accessories.'}
        tableContent={
          <table className="w-full text-sm text-left text-textSecondary">
            <thead className="bg-surface/50 text-white">
              <tr>
                <th className="px-4 py-2">{language === 'es' ? 'Año' : 'Year'}</th>
                <th className="px-4 py-2">Phoenix, AZ (%)</th>
                <th className="px-4 py-2">Sacramento, CA (%)</th>
              </tr>
            </thead>
            <tbody>
              {inflacionData.map(row => (
                <tr key={row.year} className="border-b border-glassBorder">
                  <td className="px-4 py-2">{row.year}</td>
                  <td className="px-4 py-2">{row.phoenix.toFixed(2)}%</td>
                  <td className="px-4 py-2">{row.sacramento.toFixed(2)}%</td>
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
            <Line type="monotone" dataKey="phoenix" name="Phoenix, AZ" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="phoenix" position="top" fill="#ffffff" fontSize={11} formatter={(v: any) => `${v.toFixed(1)}%`} />
            </Line>
            <Line type="monotone" dataKey="sacramento" name="Sacramento, CA" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }}>
              <LabelList dataKey="sacramento" position="top" fill="#ffffff" fontSize={11} formatter={(v: any) => `${v.toFixed(1)}%`} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

    </div>
  );
};
