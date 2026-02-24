// import logo from './logo.svg';
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



import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './pages/components/Layout';
import CourseDetails from './pages/Couse/CourseDetails';
import Courses from './pages/Couse/Courses';
import Preloader from './pages/components/Preloader';
import { useEffect, useState } from 'react';
// import SidebarMenu from './pages/components/SidebarMenu';
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
import FinancialLearningBootcampPage from './pages/FinancialGuidance/FinancialLearningBootcampPage';
import JoinCommunityPage from './pages/CommunityPage/JoinCommunityPage';
import IndianArmySSCTechDetails from './pages/Home/IndianArmySSCTechDetails';
import ComingSoonPage from './pages/ComingSoonPage';
import { Toaster } from "react-hot-toast";
import VeerNXTReport from './pages/careerTransition/VeerNXTReport';
import HomeRegFrom from './pages/components/HomeRegFrom';
import Quiz from './pages/components/Quiz';
import ScrollToTop from './pages/components/ScrollToTop';
import AdminLogin from './adminLogin/AdminLogin';
import AdminDashBoard from './adminLogin/AdminDashBoard';
// import { Quiz } from './pages/components/data';




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
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
      />

      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Layout><Home /></Layout>} />
        {/* <Route path="/VEER" element={ <Layout><Home /></Layout>} /> */}
        <Route path="/Courses" element={<Layout><Courses /></Layout>} />
        <Route path="/CourseDetails" element={<Layout><CourseDetails /></Layout>} />
        <Route path="/UserDashboard" element={<Layout><UserDashboard /></Layout>} />
        <Route path="/CareerTransition" element={<Layout><Career /></Layout>} />
        <Route path="/FinancialGuidance" element={<Layout><FinancialGuidance /></Layout>} />
        <Route path="/CommunityPage" element={<Layout><CommunityPage /></Layout>} />
        <Route path="/About" element={<Layout><About /></Layout>} />
        <Route path="/Login" element={<Layout><Login /></Layout>} />
        <Route path="/ContactUS" element={<Layout><ContactUs /></Layout>} />
        <Route path="/FinancialPlanningPlatform" element={<Layout><FinancialPlanningPlatform /></Layout>} />
        <Route path="/MoneyPlanView" element={<Layout><MoneyPlanView /></Layout>} />



        <Route path="/StartMissionPage" element={<Layout><StartMissionPage /></Layout>} />
        <Route path="/FinancialCommandPage" element={<Layout><FinancialCommandPage /></Layout>} />
        <Route path="/ViewExamsPage" element={<Layout><ViewExamsPage /></Layout>} />
        <Route path="/CareerReport" element={<Layout><CareerReport /></Layout>} />
        <Route path="/DownloadReportPage" element={<Layout><DownloadReportPage /></Layout>} />
        <Route path="/GenerateReportPage" element={<Layout><GenerateReportPage /></Layout>} />
        <Route path="/GenerateCareerReportPage" element={<Layout><GenerateCareerReportPage /></Layout>} />
        <Route path="/GetStartedBenefitsPage" element={<Layout><GetStartedBenefitsPage /></Layout>} />
        <Route path="/ExamOpportunitiesPage" element={<Layout><ExamOpportunitiesPage /></Layout>} />
        <Route path="/FreeCareerReportPage" element={<Layout><FreeCareerReportPage /></Layout>} />
        <Route path="/GrowthWarriorPlanPage" element={<Layout><GrowthWarriorPlanPage /></Layout>} />
        <Route path="/BalancedPatriotPlanPage" element={<Layout><BalancedPatriotPlanPage /></Layout>} />
        <Route path="/VeerNxtCommunityPage" element={<Layout><VeerNxtCommunityPage /></Layout>} />
        <Route path="/FinancialLearningBootcampPage" element={<Layout><FinancialLearningBootcampPage /></Layout>} />
        <Route path="/JoinCommunityPage" element={<Layout><JoinCommunityPage /></Layout>} />
        <Route path="/IndianArmySSCTechDetails" element={<Layout><IndianArmySSCTechDetails /></Layout>} />
        <Route path="/ComingSoon" element={<Layout><ComingSoonPage /></Layout>} />
        <Route path="/VeerNXTReport" element={<Layout><VeerNXTReport /></Layout>} />
        <Route path="/HomeRegFrom" element={<Layout><HomeRegFrom /></Layout>} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Admin" element={<AdminLogin />} />
        <Route path="/AdminDashBoard" element={<> <AdminDashBoard /> </>} />
      </Routes>
      {/* </Layout> */}

      {/* <Routes>
       
      </Routes> */}
    </>

  );
}

export default App;
