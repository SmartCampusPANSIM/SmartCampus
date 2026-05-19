import { useLocation } from 'react-router-dom';
import AppRoutes from '@app/routes.jsx';
import NavBar from '@components/NavBar/NavBar.jsx';
import MobileNavBar from '@components/NavBar/MobileNavBar.jsx';

function App() {
  const location = useLocation();
  const isStartPage = location.pathname === '/LandingPage' || location.pathname === '/Logowanie';

  return (
    <>
      {!isStartPage && <NavBar />}
      <AppRoutes />
      {!isStartPage && <MobileNavBar />}
    </>
  );
}

export default App;
