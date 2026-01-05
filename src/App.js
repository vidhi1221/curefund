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
import PatientReviews from './Pages/Reviews/patientReview';
import Campaigns from './Pages/Campaigns';
import AddGuardian from './Pages/Guardians/addGuardians';
import MyDonations from './Pages/Campaigns/myDonation';
import GuardiansOf from './Pages/Guardians/guardianOf';
import CreateCampaign from './Pages/Campaigns/createCampaigns';
import DoctorReviews from './Pages/Reviews/doctorReview';
import CampaignReviews from './Pages/Reviews/campaignsReview';
import ReviewHistory from './Pages/Reviews/reviewHistory';


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
          <Route path="/home/guardians/add" element={<AddGuardian />} />
          <Route path="/home/campaigns/myDonation" element={<MyDonations />} />
          <Route path="/home/patient/reviews" element={<PatientReviews />} />
          <Route path="/home/patient/guardiansof" element={<GuardiansOf />} />
          <Route path="/home/doctor/createCampaigns" element={<CreateCampaign />} />
          <Route path="/home/auditor/reviews" element={<DoctorReviews />} />
          <Route path="/home/auditor/campaignReviews" element={<CampaignReviews />} />
          <Route path="/home/auditor/reviewHistory" element={<ReviewHistory />} />
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
