import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  deleteUser
} from "firebase/auth";
import { auth } from "@services/firebase.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user?.email || "";
      const allowedDomains = ["student.pansim.edu.pl", "pansim.edu.pl"];
      const allowedEmails = ["ezor230@gmail.com", "smartcampuspansim@gmail.com"];
      const isAllowed =
        allowedDomains.some(domain => email.endsWith("@" + domain)) ||
        allowedEmails.includes(email);

      if (!isAllowed) {
        await deleteUser(result.user);
        throw new Error("restricted-domain");
      }
    } catch (error) {
      console.error("Błąd logowania:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Błąd wylogowania:", error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const email = currentUser.email || "";
        const allowedDomains = ["student.pansim.edu.pl", "pansim.edu.pl"];
        const allowedEmails = ["ezor230@gmail.com", "smartcampuspansim@gmail.com"];
        const isAllowed =
          allowedDomains.some(domain => email.endsWith("@" + domain)) ||
          allowedEmails.includes(email);

        if (!isAllowed) {
          signOut(auth);
          setUser(null);
          setIsAuthLoading(false);
          return;
        }
      }
      setUser(currentUser);
      setIsAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth musi być używane wewnątrz AuthProvider");
  }
  return context;
}
