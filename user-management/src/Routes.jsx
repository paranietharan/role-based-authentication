import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import AdminAddPage from "./pages/AdminAddEmployee";
import AdminEditPage from "./pages/AdminEdit";
import AdminSettingsPage from "./pages/AdminSettings";
import ForgotPasswordPage from "./pages/ForgotPassword";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* admin routes */}
        <Route path="/admin-add" element={<AdminAddPage />} />
        <Route path="/admin-edit" element={<AdminEditPage />} />
        <Route path="/admin-settings" element={<AdminSettingsPage />} />

        {/* employee routes */}
        {/* 
        TODO: Add employee routes here
        add details page
        password change page
         */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
