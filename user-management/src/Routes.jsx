import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import AdminAddPage from "./pages/AdminAddEmployee";
import AdminEditPage from "./pages/AdminEdit";
import AdminSettingsPage from "./pages/AdminSettings";
import ForgotPasswordPage from "./pages/ForgotPassword";
import UserDetailsAdd from "./pages/UserDetailsAdd";
import UserDetailsEdit from "./pages/UserDetailsEdit";
import UserSettings from "./pages/UserSettings";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Login and Forgot password routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* admin routes */}
        <Route path="/admin-add" element={<AdminAddPage />} />
        <Route path="/admin-edit" element={<AdminEditPage />} />
        <Route path="/admin-settings" element={<AdminSettingsPage />} />

        {/* employee routes */}
        <Route path="/user-add" element={<UserDetailsAdd />} />
        <Route path="/user-edit" element={<UserDetailsEdit />} />
        <Route path="/user-settings" element={<UserSettings />} />

        {/*
        * Plan the created user roles
            * ADMIN, USER_UNVERIFIED, USER_VERIFIED */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
