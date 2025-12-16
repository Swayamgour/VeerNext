import logo from './logo.svg';
import './App.css';
// import HeaderHome from './pages/Header';

import './css/preloader.css'
import './css/bootstrap.css'
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
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './pages/components/Layout';
import CourseDetails from './pages/Couse/CourseDetails';
import Courses from './pages/Couse/Courses';
import Preloader from './pages/components/Preloader';
import { useEffect, useState } from 'react';
import SidebarMenu from './pages/components/SidebarMenu';
import UserDashboard from './pages/Profile/UserDashboard';




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
      </Routes>
    </Layout>

  );
}

export default App;
