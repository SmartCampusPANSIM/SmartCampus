import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";
import './LoginPage.css';
import LogoFull from "../../components/Logo/LogoFull";
import GoogleButton from '@components/Buttons/GoogleButton/GoogleButton';

export function LoginPage() {
  const { login, user } = useAuth();
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/Panel";

  const handleLogin = async () => {
    setError("");
    try {
      await login();
      navigate(from, { replace: true });
    } catch (err) {
      if (err.message === "restricted-domain") {
        setError("Odrzucono logowanie z powodu próby zalogowania się z innego adresu niż adres uczelniany PANSIM! Zaloguj się uczelnianym adresem email!");
      } else {
        setError("Wystąpił błąd logowania. Spróbuj ponownie.");
      }
      console.error("Błąd podczas logowania:", err);
    }
  };

  React.useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <div className="LoginPage">
      <div className="LoginPage_leftSection">
        <LogoFull/>
        <div className="LoginPage_leftSection-wrapper">
          <div className="LoginPage_leftSection-wrapperContent">
            <div className="LoginPage_leftSection-titleText">Logowanie</div>
            <div className="LoginPage_leftSection-descriptionText">Zaloguj się za pomocą <br /> uczelnianego konta google</div>
            {error && <div className="LoginPage_loginError">{error}</div>}
            <GoogleButton onClick={handleLogin} />
          </div>
        </div>
      </div>
      <div className="LoginPage_rightSection">
        <div className="LoginPage_rightSection-img"></div>
      </div>
    </div>
  );
}

export default LoginPage;
