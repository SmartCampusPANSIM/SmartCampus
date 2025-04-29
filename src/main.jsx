import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './index.css';
import './smartCampusUI.css';
import App from './Panel.jsx';
import WelcomePage from './welcomePage.jsx';
import Elearning from './Elearning.jsx';
import PlanLekcji from './PlanLekcji.jsx';
import Panel from './Panel.jsx';
import NavBar from './NavBar.jsx';
import MobileNavBar from './MobileNavBar.jsx';
import MapaKampusu from './MapaKampusu.jsx';
import Feed from './Feed.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Panel" element={<Panel />} />
        <Route path="/MapaKampusu" element={<MapaKampusu />} />
        <Route path="/Elearning" element={<Elearning />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/PlanLekcji" element={<PlanLekcji />} />
      </Routes>
      <MobileNavBar />
    </BrowserRouter>
  </StrictMode>
);