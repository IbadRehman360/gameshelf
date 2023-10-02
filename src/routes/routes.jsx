import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppLayout from "../layouts/AppLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import AboutPage from "../pages/AboutPage";
import DashboardPage from "../pages/DashboardPage";
import MultiStepFormPage from "../pages/MultiStepFormPage";
import MessagePage from "../pages/MessagePage";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthProvider } from "../context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GameCategoryProductPage from "../pages/GameCategoryProductPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />;
        <AuthProvider>
          <AppLayout />
        </AuthProvider>
      </QueryClientProvider>
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
        path: "dashboard/:game",
        element: <GameCategoryProductPage />,
      },
      {
        path: "dashboard/:game/:id",
        element: <ProductPage />,
      },
      {
        path: "profile/:user",
        element: <ProfilePage />,
      },
      {
        path: "sell/:user",
        element: <MultiStepFormPage />,
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
        element: <MessagePage />,
      },
    ],
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
