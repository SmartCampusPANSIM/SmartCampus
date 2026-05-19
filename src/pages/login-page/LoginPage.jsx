import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";

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
        setError("Dostęp zabroniony. Musisz użyć konta uczelnianego (@student.pansim.edu.pl lub @pansim.edu.pl).");
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
    <div>
      <h1>Logowanie</h1>
      <p>Musisz się zalogować, aby przejść dalej.</p>
      <button onClick={handleLogin}>
        Zaloguj się przez Google
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default LoginPage;
