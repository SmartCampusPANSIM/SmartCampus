import { NavLink } from "react-router-dom";

function MobileNavBar() {
  const handleVibration = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(30); 
    }
  };

  return (
    <div className="navbar_navigationMobileBar">
      <NavLink to="/Panel" onClick={handleVibration} className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>
        <i className="fa-solid fa-table-columns"></i>
      </NavLink>
      <NavLink to="/PlanLekcji" onClick={handleVibration} className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>
        <i className="fa-solid fa-table-list"></i>
      </NavLink>
      <NavLink to="/MapaKampusu" onClick={handleVibration} className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>
        <i className="fa-solid fa-map-location-dot"></i>
      </NavLink>
      <NavLink to="/Elearning" onClick={handleVibration} className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>
        <i className="fa-solid fa-clapperboard"></i>
      </NavLink>
      <NavLink to="/Feed" onClick={handleVibration} className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>
        <i className="fa-solid fa-users-line"></i>
      </NavLink>
    </div>
  );
}

export default MobileNavBar;
