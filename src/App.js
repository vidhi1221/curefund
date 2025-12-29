import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Login from './Pages/Login';
import Footer from './components/Footer';
import Register from './Pages/Register';
import PasswordRecovery from './Pages/PasswordRecovery';
import Home from './Pages/Home';
import { useLocation } from "react-router-dom";
import ProtectedRoute from './components/Protected';
import Documents from './Pages/Documents';
import Dashboard from './Pages/Dashboard';
import Guardians from './Pages/Guardians';
import Patients from  './Pages/Patients';
import Reviews from './Pages/Reviews';
import Campaigns from './Pages/Campaigns';



function AppLayout() {
  const location = useLocation();

  // hide header & footer ONLY on /home
  const hideLayout = location.pathname.startsWith("/home");

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passwordRecovery" element={<PasswordRecovery />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="documents" element={<Documents />} />
          <Route path="guardians" element={<Guardians />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="patients" element={<Patients />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
export default App;
