import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./components/ProtectedRoutes/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";

// Import your components
import LandingPage from "./components/LadingPage/LandingPage";
import About from "./components/about/about";
import AdminOrUser from "./components/adminOrUser/adminOrUser";
import RegisterLogin from "./components/LoginRegister/loginRegister";
import AdminLogin from "./components/adminLogin/adminLogin";
import StudentLandingPage from "./components/studentLandingPage/studentLandingPage";
import Studentgatepass from "./components/studentLandingPage/Studentgatepass";
import StudentComplaints from "./components/studentLandingPage/StudentComplaints";
import PaymentPage from "./components/payment/PaymentForm";
import QRcode from "./components/QRCode/QRcode";
import UserMess from "./components/MessMenu/MessMenu";

import Dashboard from "./components/Dashboard/Dashboard";
import Studentdetails from "./components/Dashboard/Studentdetails";
import Gatepassdetails from "./components/Dashboard/Gatepassdetails";
import Complaintbox from "./components/Dashboard/Complaintbox";
import Account from "./components/Dashboard/Account";
import MessMenu from "./components/Dashboard/messMenu";

import MessLogin from "./components/messLogin/messLogin";
import QRScanner from "./components/QRCode/QRreader";

import GateLogin from "./components/GateSecurity/gateLogin";

import MessSign from "./components/messLogin/messSignup";
import SuperLogin from "./components/superadmin/SuperLogin";
import Wardendetails from "./components/superadmin/Dashboard/Wardendetails";
import Warden from "./components/superadmin/Dashboard/Warden";
import GateSecurity from "./components/superadmin/Dashboard/GateSecurity";
import GuardDetails from "./components/superadmin/Dashboard/GuardDetails";
import Dashboard1 from "./components/superadmin/Dashboard/Dashboard1";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/select-user" element={<AdminOrUser />} />
        <Route path="/student-signup" element={<RegisterLogin />} />
        <Route path="/warden-signup" element={<AdminLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/super-admin/login" element={<SuperLogin />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentLandingPage />} />
        <Route path="/student/my-gatepasses" element={<Studentgatepass />} />
        <Route path="/student/my-complaints" element={<StudentComplaints />} />
        <Route path="/student/booking/payment" element={<PaymentPage />} />
        <Route path="/student/QR" element={<QRcode />} />
        <Route path="/student/mess" element={<UserMess />} />

        {/* Warden Routes */}
        <Route path="/warden/dashboard" element={<Dashboard />} />
        <Route path="/warden/student-details" element={<Studentdetails />} />
        <Route path="/warden/gatepasses" element={<Gatepassdetails />} />
        <Route path="/warden/complaints" element={<Complaintbox />} />
        <Route path="/warden/my-account" element={<Account />} />
        <Route path="/warden/update/mess-menu" element={<MessMenu />} />

        {/* Mess Guard Routes */}
        <Route path="/guard/mess-login" element={<MessLogin />} />
        <Route path="/guard/scanner" element={<QRScanner />} />

        {/* Gate Security Routes */}
        <Route path="/guard/gate-login" element={<GateLogin />} />

        {/* Super Admin Routes */}
        <Route
          path="/super-admin/create/mess-security"
          element={<MessSign />}
        />
        <Route path="/super-admin/login" element={<SuperLogin />} />
        <Route
          path="/super-admin/details/wardens"
          element={<Wardendetails />}
        />
        <Route path="/super-admin/create/warden" element={<Warden />} />
        <Route
          path="/super-admin/create/gate-security"
          element={<GateSecurity />}
        />
        <Route
          path="/super-admin/details/gate-security"
          element={<GuardDetails />}
        />
        <Route path="/super-admin/dashboard" element={<Dashboard1 />} />
      </Routes>
    </Router>
  );
}

export default App;
