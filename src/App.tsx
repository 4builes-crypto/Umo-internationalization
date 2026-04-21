import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';

// Pages
import { Overview } from './pages/Overview';
import { BMC } from './pages/BMC';
import { DOFA } from './pages/DOFA';
import { Sustainability } from './pages/Sustainability';
import { Potential } from './pages/Potential';
import { Viability } from './pages/Viability';
import { SmartObjective } from './pages/SmartObjective';
import { Economics } from './pages/Economics';
import { Bibliography as BibliographyPage } from './pages/Bibliography';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* The requested routes */}
        <Route index element={<Overview />} />
        <Route path="bmc" element={<BMC />} />
        <Route path="potential" element={<Potential />} />
        <Route path="dofa" element={<DOFA />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="viability" element={<Viability />} />
        <Route path="smart-objective" element={<SmartObjective />} />
        <Route path="economics" element={<Economics />} />
        <Route path="bibliography" element={<BibliographyPage />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
