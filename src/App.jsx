import { BrowserRouter, Routes, Route } from "react-router-dom";
import WellnessScore from './pages/WellnessScore/WellnessScore.jsx'; 
import SchedulingCenter from './pages/SchedulingCenter/SchedulingCenter.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Padrão: Wellness Score */}
        <Route path="/" element={<WellnessScore />} />
        
        {/* Rota da Nova Página: Central de Escalas */}
        <Route path="/escalas" element={<SchedulingCenter />} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;