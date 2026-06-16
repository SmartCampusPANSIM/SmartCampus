import { Routes, Route, Navigate } from 'react-router-dom';
import Panel from '@pages/panel/Panel.jsx';
import LandingPage from '@pages/landing-page/LandingPage.jsx';
import LoginPage from '@pages/login-page/LoginPage.jsx';
import Elearning from '@pages/elearning/Elearning.jsx';
import PlanLekcji from '@pages/plan-lekcji/PlanLekcji.jsx';
import MapaKampusu from '@pages/mapa-kampusu/MapaKampusu.jsx';
import Feed from '@pages/feed/Feed.jsx';
import Ustawienia from '@pages/ustawienia/Ustawienia.jsx';
import OProjekcie from '@pages/o-projekcie/OProjekcie.jsx';
import ListaZmian from '@pages/lista-zmian/ListaZmian.jsx';
import NaszZespol from '@pages/nasz-zespol/NaszZespol.jsx';
import ProtectedRoute from '@components/ProtectedRoute.jsx';
import { useAuth } from '@/context/AuthContext.jsx';

const RootRedirect = () => {
  const { user, isAuthLoading } = useAuth();
  if (isAuthLoading) return null;
  return user ? <Navigate to="/Panel" replace /> : <Navigate to="/LandingPage" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/Logowanie" element={<LoginPage />} />
      <Route path="/OProjekcie" element={<OProjekcie />} />
      <Route path="/ListaZmian" element={<ListaZmian />} />
      <Route path="/NaszZespol" element={<NaszZespol />} />
      <Route path="/Panel" element={<ProtectedRoute><Panel /></ProtectedRoute>} />
      <Route path="/MapaKampusu" element={<ProtectedRoute><MapaKampusu /></ProtectedRoute>} />
      <Route path="/Elearning" element={<ProtectedRoute><Elearning /></ProtectedRoute>} />
      <Route path="/Feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
      <Route path="/PlanLekcji" element={<ProtectedRoute><PlanLekcji /></ProtectedRoute>} />
      <Route path="/Ustawienia" element={<ProtectedRoute><Ustawienia /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
