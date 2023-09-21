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
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthProvider } from "../context/AuthProvider";

const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
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
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      </AuthProvider>
    ),
    children: [
      {
        path: "chat/",
        element: <MessagePage />,
      },
      {
        path: "/chat/new/:userId",
        element: <MessagePage />
      },
        path: "sell/:user",
        element: <MultiStepFormPage />,
      },
    ]
  },

  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
]);

export default router;
