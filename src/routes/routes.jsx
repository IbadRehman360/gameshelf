import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AllSellerProductPage from "../pages/AllSellerProductPage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import AboutPage from "../pages/AboutPage";
import DashboardPage from "../pages/DashboardPage";
import MultiStepFormPage from "../pages/MultiStepFormPage";
import MessagePage from "../pages/MessagePage";
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
        path: "About",
        element: <AboutPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "sell",
        element: <MultiStepFormPage />,
      },
      {
        path: "dashboard/products",
        element: <AllSellerProductPage />,
      },
      {
        path: "dashboard/products/:id",
        element: <ProductPage />,
      },

      {
        path: "profile/:user",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "chat",
    element: <MessagePage />,
  },
]);
export default router;
