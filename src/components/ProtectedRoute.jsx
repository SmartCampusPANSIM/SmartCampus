import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext.jsx";

export function ProtectedRoute({ children }) {
  const { user, isAuthLoading } = useAuth();
  const location = useLocation();

  if (isAuthLoading) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        Ładowanie...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/Logowanie" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
