import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import AdminAddPage from './pages/AdminAddEmployee';
import AdminEditPage from './pages/AdminEdit';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/admin-add" element={<AdminAddPage />} />
        <Route path='/' element={<AdminEditPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;