import logo from './logo.svg';
import './App.css';
// import HeaderHome from './pages/Header';

import './css/preloader.css'
// import './css/bootstrap.css'
import './css/meanmenu.css'
import './css/animate.min.css'
import './css/swiper-bundle.css'
import './css/backToTop.css'
import './css/magnific-popup.css'
import './css/nice-select.css'
import './css/fontAwesome5Pro.css'
import './css/flaticon.css'
import './css/slick.css'
import './css/odometer.css'
import './css/default.css'
import './css/style.css'
import './css/custom.css'
import './css/how-work.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './pages/components/Layout';
import CourseDetails from './pages/Couse/CourseDetails';
import Courses from './pages/Couse/Courses';
import Preloader from './pages/components/Preloader';
import { useEffect, useState } from 'react';
import SidebarMenu from './pages/components/SidebarMenu';
import UserDashboard from './pages/Profile/UserDashboard';
import Career from './pages/careerTransition/Career';
import FinancialGuidance from './pages/FinancialGuidance/FinancialGuidance';
import CommunityPage from './pages/CommunityPage/CommunityPage';
import About from './pages/About';
import Login from './pages/Login';
import ContactUs from './pages/Contact';
import FinancialPlanningPlatform from './pages/FinancialGuidance/FinancialPlanningPlatform';
import MoneyPlanView from './pages/FinancialGuidance/MoneyPlanView';
import StartMissionPage from './pages/Home/StartMissionPage';
import FinancialCommandPage from './pages/Home/FinancialCommandPage';
import ViewExamsPage from './pages/Home/ViewExamsPage';
import CareerReport from './pages/careerTransition/CareerReport';
import DownloadReportPage from './pages/careerTransition/DownloadReportPage';
import GenerateReportPage from './pages/careerTransition/GenerateReportPage';
import GenerateCareerReportPage from './pages/careerTransition/GenerateCareerReportPage';
import GetStartedBenefitsPage from './pages/careerTransition/GetStartedBenefitsPage';
import ExamOpportunitiesPage from './pages/careerTransition/ExamOpportunitiesPage';
import FreeCareerReportPage from './pages/careerTransition/FreeCareerReportPage';
import GrowthWarriorPlanPage from './pages/FinancialGuidance/GrowthWarriorPlanPage';
import BalancedPatriotPlanPage from './pages/FinancialGuidance/BalancedPatriotPlanPage';
import VeerNxtCommunityPage from './pages/CommunityPage/VeerNxtCommunityPage';




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  // 👉 Show preloader first
  if (loading) {
    return <Preloader />;
  }

  // 👉 Show routes after 4 sec
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
        <Route path="/Profile" element={<UserDashboard />} />
        <Route path="/CareerTransition" element={<Career />} />
        <Route path="/FinancialGuidance" element={<FinancialGuidance />} />
        <Route path="/CommunityPage" element={<CommunityPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ContactUS" element={<ContactUs />} />
        <Route path="/FinancialPlanningPlatform" element={<FinancialPlanningPlatform />} />
        <Route path="/MoneyPlanView" element={<MoneyPlanView />} />


        <Route path="/StartMissionPage" element={<StartMissionPage />} />
        <Route path="/FinancialCommandPage" element={<FinancialCommandPage />} />
        <Route path="/ViewExamsPage" element={<ViewExamsPage />} />
        <Route path="/CareerReport" element={<CareerReport />} />
        <Route path="/DownloadReportPage" element={<DownloadReportPage />} />
        <Route path="/GenerateReportPage" element={<GenerateReportPage />} />
        <Route path="/GenerateCareerReportPage" element={<GenerateCareerReportPage />} />
        <Route path="/GetStartedBenefitsPage" element={<GetStartedBenefitsPage />} />
        <Route path="/ExamOpportunitiesPage" element={<ExamOpportunitiesPage />} />
        <Route path="/FreeCareerReportPage" element={<FreeCareerReportPage />} />
        <Route path="/GrowthWarriorPlanPage" element={<GrowthWarriorPlanPage />} />
        <Route path="/BalancedPatriotPlanPage" element={<BalancedPatriotPlanPage />} />
        <Route path="/VeerNxtCommunityPage" element={<VeerNxtCommunityPage />} />

      </Routes>
    </Layout>

  );
}

export default App;
