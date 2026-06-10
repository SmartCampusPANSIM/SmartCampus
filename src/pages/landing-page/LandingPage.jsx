import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";
import GoogleButton from '@components/Buttons/GoogleButton/GoogleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@icons/icons'

const LandingPage = () => {
  const { user, isAuthLoading } = useAuth();
  const navigate = useNavigate();

  if (isAuthLoading) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div>
      <h1>SmartCampus</h1>
      
      {!user ? (
        <div>
          <p>Zaloguj się lub zarejestruj, aby korzystać z aplikacji:</p>
          <GoogleButton onClick={() => navigate("/Logowanie")}>
          </GoogleButton>
        </div>
      ) : (
        <div>
          <p>Jesteś zalogowany jako: {user.displayName || user.email}</p>
          <div>
            <img 
              src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || '')}&background=183447&color=fff`} 
              alt="Avatar" 
              width="50" 
              height="50" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || '')}&background=183447&color=fff`;
              }}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </div>
          <br />
          <button onClick={() => navigate("/Panel")}>Kontynuuj</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;