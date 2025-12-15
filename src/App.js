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




function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />

      </Routes>
    </Layout>
    // <Preloader />
  );
}

export default App;
