import { AuthProvider } from "../context/AuthProvider";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function AppLayout() {
  return (
    <AuthProvider>
      <Header />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
}
