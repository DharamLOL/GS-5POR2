// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WellnessScore from "./pages/WellnessScore/WellnessScore.jsx";
import SchedulingCenter from "./pages/SchedulingCenter/SchedulingCenter.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota padrão – Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Rota Wellness Score */}
        <Route path="/WellnessScore" element={<WellnessScore />} />

        {/* Rota da nova página – Central de Escalas */}
        <Route path="/escalas" element={<SchedulingCenter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;