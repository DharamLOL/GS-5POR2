import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeellnessScore from './pages/WellnessScore/WellnessScore'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeellnessScore />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
