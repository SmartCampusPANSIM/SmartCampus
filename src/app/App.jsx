import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.jsx';
import AppRoutes from '@app/routes.jsx';
import NavBar from '@components/NavBar/NavBar.jsx';
import MobileNavBar from '@components/NavBar/MobileNavBar.jsx';

function App() {
  const { user, isAuthLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  const publicPaths = ['/landingpage', '/logowanie', '/oprojekcie', '/listazmian', '/naszzespol'];
  const isStartPage = publicPaths.includes(location.pathname.toLowerCase());

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (isAuthLoading) return;

    // Jeśli user się wyloguje i nie jest na publicznej stronie, przejdź do Landing Page
    const currentPath = location.pathname.toLowerCase();
    const isPublicPage = publicPaths.includes(currentPath);

    if (user === null && !isPublicPage) {
      navigate('/LandingPage', { replace: true });
    }
  }, [user, isAuthLoading, location.pathname, navigate]);

  return (
    <>
      {user && !isStartPage && <NavBar />}
      <AppRoutes />
      {user && !isStartPage && <MobileNavBar />}
    </>
  );
}

export default App;
