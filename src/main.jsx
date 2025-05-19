import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './SmartCampusUI.css';
import App from './App.jsx';
import WelcomePage from './WelcomePage.jsx';
import Elearning from './Elearning.jsx';
import Zasoby from './Zasoby.jsx';
import NavBar from './NavBar.jsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/App" element={<App />} />
          <Route path="/Elearning" element={<Elearning />} />
          <Route path="/Zasoby" element={<Zasoby />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error('Brak elementu o id="root" w index.html');
}