import { Navigate } from "react-router-dom";
import { useAuth } from "@components/Auth/AuthProvider/AuthProvider.jsx";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
