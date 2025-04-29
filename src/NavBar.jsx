import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { auth } from "./firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";


function NavBar() {
  const [user, setUser] = useState(null);


  // Funkcja do logowania użytkownika
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Zalogowano:", result.user);
    } catch (error) {
      console.error("Błąd logowania:", error);
    }
  };
  
  // Funkcja do wylogowania użytkownika
  const handleLogout = async () => {
  try {
    await signOut(auth); // Funkcja wylogowująca
    console.log("Wylogowano");
  } catch (error) {
    console.error("Błąd wylogowania:", error);
  }
};

  // Śledzenie stanu użytkownika
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="navbar_section">
      <Link to="/" className="navbar_logo">
        <div className="navbar_logo_icon"></div>
        <div className="navbar_logo_wrapper">
          <div className="navbar_logo_wrapper_topText">Smart</div>
          <div className="navbar_logo_wrapper_bottomText">Campus</div>
        </div>
      </Link>
      <nav>
        <NavLink to="/Panel" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>Panel</NavLink>
        <NavLink to="/PlanLekcji" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>Plan lekcji</NavLink>
        <NavLink to="/MapaKampusu" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>Mapa kampusu</NavLink>
        <NavLink to="/Elearning" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>E-learning</NavLink>
        <NavLink to="/Feed" className={({ isActive }) => isActive ? "navbar_button--active" : "navbar_button"}>Feed</NavLink>
      </nav>
      <div>
        {user ? (
          <div>
            <span>Witaj, {user.displayName}</span>
            <span>Witaj, {user.email}</span>
            <img src={user.photoURL} alt="User profile" style={{ width: 30, height: 30, borderRadius: '50%' }} />
            <button onClick={handleLogout}>Wyloguj</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Zaloguj</button>
        )}
      </div>
    </section>
  );
}

export default NavBar;
