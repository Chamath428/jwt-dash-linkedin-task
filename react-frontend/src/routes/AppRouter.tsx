import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing/landing-page";
import RegisterPage from "../pages/register/register-page";
import Login from "../pages/login/login-page";
import ProtectedRoute from "./ProtectedRouter";
import DashboardPage from "../pages/dashboard/dashboard-page";
import PublicRoute from "./PublicRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
