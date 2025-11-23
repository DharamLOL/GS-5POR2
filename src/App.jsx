
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WellnessScore from "./pages/WellnessScore/WellnessScore.jsx";
import SchedulingCenter from "./pages/SchedulingCenter/SchedulingCenter.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { BiLayout } from "react-icons/bi";
import Gamificacao from './pages/Gamificacao/Gamificacao';
import Analytics from './pages/Analytics/Analytics.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/WellnessScore" element={<WellnessScore />} />
        <Route path="/escalas" element={<SchedulingCenter />} />
        <Route path="/Gamificacao" element={<Gamificacao/>} /> 
        <Route path="/analytics" element={<Analytics />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;