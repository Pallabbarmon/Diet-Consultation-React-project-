import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Plans from "./pages/Plans.jsx";
import Meals from "./pages/Meals.jsx";
import Progress from "./pages/Progress.jsx";
import Consult from "./pages/Consult.jsx";
import Profile from "./pages/Profile.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminUsers from "./pages/admin/AdminUsers.jsx";
import AdminPlans from "./pages/admin/AdminPlans.jsx";
import AdminConsults from "./pages/admin/AdminConsults.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import Pricing from "./components/Pricing.jsx";
import Features from "./components/Features.jsx";
import Testimonials from "./components/Testimonials.jsx"

function Protected({ children, admin = false }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (!token) return <Navigate to="/login" />;
  if (admin && role !== "admin") return <Navigate to="/dashboard" />;
  return children;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 grid gap-4">
        <Routes>
          <Route path="/" element={<><Hero /><About /><Testimonials /><ContactUs /><Footer /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
          <Route path="/plans" element={<Protected><Plans /></Protected>} />
          <Route path="/meals" element={<Protected><Meals /></Protected>} />
          <Route path="/progress" element={<Protected><Progress /></Protected>} />
          <Route path="/consult" element={<Protected><Consult /></Protected>} />
          <Route path="/profile" element={<Protected><Profile /></Protected>} />

          <Route path="/admin" element={<Protected admin><AdminDashboard /></Protected>} />
          <Route path="/admin/users" element={<Protected admin><AdminUsers /></Protected>} />
          <Route path="/admin/plans" element={<Protected admin><AdminPlans /></Protected>} />
          <Route path="/admin/consults" element={<Protected admin><AdminConsults /></Protected>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}
