import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';

// Pages
import { ProductIdentity } from './pages/ProductIdentity';
import { BMC } from './pages/BMC';
import { DOFA } from './pages/DOFA';
import { Sustainability } from './pages/Sustainability';
import { Potential } from './pages/Potential';
import { Viability } from './pages/Viability';
import { SmartObjective } from './pages/SmartObjective';
import { Economics } from './pages/Economics';
import { Bibliography as BibliographyPage } from './pages/Bibliography';
import { SocialCultural } from './pages/SocialCultural';
import { PoliticalLegal } from './pages/PoliticalLegal';
import { TechEnvironmental } from './pages/TechEnvironmental';
import { InternationalTrade } from './pages/InternationalTrade';
import { ForeignInvestment } from './pages/ForeignInvestment';
import { ScoreAnalysis } from './pages/ScoreAnalysis';

function App() {
  // Vite HMR trigger
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* The requested routes */}
        <Route index element={<ProductIdentity />} />
        <Route path="bmc" element={<BMC />} />
        <Route path="potential" element={<Potential />} />
        <Route path="dofa" element={<DOFA />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="viability" element={<Viability />} />
        <Route path="smart-objective" element={<SmartObjective />} />
        <Route path="economics" element={<Economics />} />
        <Route path="social-cultural" element={<SocialCultural />} />
        <Route path="political-legal" element={<PoliticalLegal />} />
        <Route path="tech-environmental" element={<TechEnvironmental />} />
        <Route path="international-trade" element={<InternationalTrade />} />
        <Route path="foreign-investment" element={<ForeignInvestment />} />
        <Route path="score-analysis" element={<ScoreAnalysis />} />
        <Route path="bibliography" element={<BibliographyPage />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
