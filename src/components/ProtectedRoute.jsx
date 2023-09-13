import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { session } = useAuth();
  return session ? children : <Navigate to="/" />;
}
