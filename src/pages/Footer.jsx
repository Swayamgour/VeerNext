import React, { useEffect, useState } from 'react';

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Preloader from './components/Preloader';
import { useNavigate } from 'react-router-dom';


const Footer = () => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const handleNavigate = () => {

    }

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrollPercent = (scrollTop / docHeight) * 100;
            setProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const circumference = 2 * Math.PI * 49;
    const dashOffset = circumference - (progress / 100) * circumference;

    // useEffect(() => {
    //     // PHP jQuery wale 4 sec ka replacement
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 4000);

    //     return () => clearTimeout(timer);
    // }, []);



    return (
        <>

            {/* {!loading ? <Preloader /> : */}
            <footer
                className="footer1-bg footer-sticky"
                style={{
                    backgroundImage: "url('/VEER/assets/img/about/foot-bg.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                }}
            >
                <div className="footer1-overlay"></div>

                <section className="footer-area footer-area1 footer-area1-bg pt-65 pb-25">
                    <div className="container">
                        <div className="row">
                            {/* Logo and Description Column */}
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                                    <div className="footer-logo footer1-logo">
                                        <a href="/">
                                            <img src="/VEER/assets/img/logo/logo.png" alt="VeerNXT Logo" />
                                        </a>
                                    </div>
                                    <p className="mb-25">
                                        A trusted veteran-led platform guiding Agniveers and ex-servicemen toward
                                        meaningful careers, new skills, and a future they truly deserve.
                                    </p>
                                    <div className="footer-widget-social">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                                    <div className="footer-widget-title">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <div className="footer-links">
                                        <ul className="p-0">
                                            <li className='cursor' onClick={() => handleNavigate("/")}>Home</li>
                                            <li className='cursor' onClick={() => handleNavigate("/services")}>Service</li>
                                            <li className='cursor' onClick={() => handleNavigate("/About")}>About Us</li>
                                            <li className='cursor' onClick={() => handleNavigate("/ContactUS")}>Contacts Us</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget3 mb-40">
                                    <div className="footer-widget-title">
                                        <h4>Veteran Seva Kendra</h4>
                                    </div>
                                    <div className="footer-links">
                                        <ul className="p-0">
                                            <li onClick={() => handleNavigate("/echs")}>ECHS Application</li>
                                            <li onClick={() => handleNavigate("/resume-service")}>Resume Service</li>
                                            <li onClick={() => handleNavigate("/important-contacts")}>
                                                Important Contacts
                                            </li>
                                            <li onClick={() => handleNavigate("/community-safety")}>
                                                Community Safety
                                            </li>
                                            <li onClick={() => handleNavigate("/welfare-schemes")}>
                                                Welfare Schemes
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Address Column */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="amr-footer-widget footer2-widget-2 mb-40">
                                    <div className="footer-widget-title">
                                        <h3>Our Address</h3>
                                    </div>

                                    <div className="footer-widget-contact">
                                        <ul className="p-0">

                                            {/* Address */}
                                            <li>
                                                <div className="arm-single-contact d-flex align-items-start gap-3">
                                                    <div className="footer-contact-icon">
                                                        <FaMapMarkerAlt size={18} />
                                                    </div>
                                                    <p>
                                                        6th Floor, Cosmos Vijay, Shivaji Path, Opp Jagdish Book Depot,
                                                        Navpada, Thane (West), Maharashtra - 400 601.
                                                    </p>
                                                </div>
                                            </li>

                                            {/* Email */}
                                            <li
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    (window.location.href = "mailto:support@projectveer.org")
                                                }
                                            >
                                                <div className="arm-single-contact d-flex align-items-center gap-3">
                                                    <div className="footer-contact-icon">
                                                        <FaEnvelope size={18} />
                                                    </div>
                                                    <p>support@projectveer.org</p>
                                                </div>
                                            </li>

                                            {/* Phone */}
                                            <li
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    (window.location.href = "tel:+918883336753")
                                                }
                                            >
                                                <div className="arm-single-contact d-flex align-items-center gap-3">
                                                    <div className="footer-contact-icon">
                                                        <FaPhoneAlt size={18} />
                                                    </div>
                                                    <p>+91-8883336753</p>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Copyright Section */}
                <div className="copyright-area copyright-1-area">
                    <div className="container">
                        <div className="copyright-1-inner">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="copyright-text copyright-1-text text-center">
                                        Copyright &copy; {new Date().getFullYear()} by{' '}
                                        <span className="fw-semibold">VeerNXT</span>. All rights reserved.
                                        Design And Developed By{' '}
                                        <span
                                            className="fw-semibold"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => window.open("https://riveyrainfotech.com", "_blank")}
                                        >
                                            Riveyra Infotech Pvt Ltd.
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


            {/* } */}
            {/* <Preloader /> */}

        </>
    );
};

export default Footer;