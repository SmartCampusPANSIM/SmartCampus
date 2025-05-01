import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "./firebase";

import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

function NavBar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Błąd logowania:", error);
    }
    setIsMenuOpen(false); 
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Błąd wylogowania:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <section className="navbar_section">
      <Link to="/" className="navbar_logo">
        <div className="navbar_logo_icon" />
        <div className="navbar_logo_wrapper">
          <div className="navbar_logo_wrapper_topText">Smart</div>
          <div className="navbar_logo_wrapper_bottomText">Campus</div>
        </div>
      </Link>

      <nav className="navbar_navigationBar" >
        <NavLink to="/Panel" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>Panel</NavLink>
        <NavLink to="/PlanLekcji" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>Plan lekcji</NavLink>
        <NavLink to="/MapaKampusu" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>Mapa kampusu</NavLink>
        <NavLink to="/Elearning" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>E-learning</NavLink>
        <NavLink to="/Feed" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>Feed</NavLink>
      </nav>
      
      {!user ? (
        <button className="defaultButton" onClick={handleLogin}>Zaloguj</button>
      ) : (
        <div ref={menuRef} style={{ position: 'relative' }}>
          <div
            className={`navbar_userBar ${isMenuOpen ? "navbar_userBar--onFocus" : ""}`}
            onClick={toggleMenu}
          >
            <div className="navbar_userBar_wrapper">
              <div className="navbar_userBar_name">{user.displayName}</div>
              <div className="navbar_userBar_mail">{user.email}</div>
            </div>
            <div
              className="navbar_userBar_profilePicture"
              style={{ backgroundImage: `url('${user.photoURL}')` }}
            />
          </div>

          {isMenuOpen && (
            <div className="navbar_userMenu">
              <button className="navbar_userMenu_button" onClick={handleLogout}>Wyloguj</button>
              <button className="navbar_userMenu_button">Ustawienia</button>
            </div>
          )}
        </div>
      )}
      
    </section>
  );
}

export default NavBar;
