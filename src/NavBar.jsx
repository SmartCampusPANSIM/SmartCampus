import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Elearning from './Elearning.jsx';
import PlanLekcji from './Zasoby.jsx';


function NavBar() {
  return (
<section className="navbar_section">
  <div>
    LOGO
  </div>
  <nav>
    <NavLink  to="/App" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>Panel</NavLink>
    <NavLink  to="/Zasoby" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>Zasoby</NavLink>
    {/* <Link to="/" className="button">Mapa kampusu</Link> */}
    <NavLink  to="/Elearning" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>E-learning</NavLink>
    {/* <Link to="/" className="button">Oś czasu</Link> */}
  </nav>
  <div>Ikonka i mail</div>
</section>
  );
}

export default NavBar;
