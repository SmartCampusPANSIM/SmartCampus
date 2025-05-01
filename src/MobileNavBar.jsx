import { Link, NavLink } from "react-router-dom";


function MobileNavBar() {
  return (
    <div className="navbar_navigationMobileBar">
      <NavLink to="/Panel" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}><i class="fa-solid fa-table-columns"></i></NavLink>
      <NavLink to="/PlanLekcji" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}><i class="fa-solid fa-table-list"></i></NavLink>
      <NavLink to="/MapaKampusu" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}><i class="fa-solid fa-map-location-dot"></i></NavLink>
      <NavLink to="/Elearning" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}><i class="fa-solid fa-clapperboard"></i></NavLink>
      <NavLink to="/Feed" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}><i class="fa-solid fa-users-line"></i></NavLink>
    </div>
  );
}

export default MobileNavBar;
