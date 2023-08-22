import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path:"profile/:user",
        element: <ProfilePage />
      }
    ],
  },
]);
export default router;
