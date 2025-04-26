import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './index.css';
import './SmartCampusUI.css';
import App from './App.jsx';
import WelcomePage from './WelcomePage.jsx';
import Elearning from './Elearning.jsx';
import PlanLekcji from './PlanLekcji.jsx';
import NavBar from './NavBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/Elearning" element={<Elearning />} />
        <Route path="/PlanLekcji" element={<PlanLekcji />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);