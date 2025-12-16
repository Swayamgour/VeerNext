import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu';
import SideToggle from './components/SideToggle';


const Header = ({ toggleOffsetContent, toggleSideToggle }) => {
    const navigate = useNavigate()
    return (
        <header>
            <div id="header-sticky" className="header-main header-main2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="header-main-content-wrapper">
                                <div className="header-main-left header-main-left-header2">
                                    <div onClick={() => navigate('/')} className="header-logo header2-logo">
                                        <div className="logo-white">
                                            <img src={'/assets/img/logo/logo.png'} alt="logo-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header-main-right header-main-right-header2">
                                    <div className="main-menu main-menu2 d-none d-xl-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li onClick={() => navigate('/')}>Home</li>
                                                <li onClick={() => navigate('/Courses')}>Services</li>
                                                <li>About us</li>
                                                <li>Contact us</li>
                                                <li onClick={() => navigate('/Profile')}>Profile</li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="menu-bar">
                                        {/* Offset Button (full-page) - Desktop Only */}
                                        <button className="offset-btn d-none d-xl-inline-block" onClick={toggleOffsetContent}>
                                            <div className="dot-icon">
                                                <img src={"/assets/img/icons/side-toggle.png"} alt="img not found" />
                                                {/* <h1>hey</h1> */}

                                            </div>
                                        </button>
                                        {/* Side Toggle Button (mobile/smaller) - Mobile Only */}
                                        <button className="side-toggle d-xl-none" onClick={toggleSideToggle}>
                                            <div className="dot-icon">
                                                <img src={"/assets/img/icons/side-toggle.png"} alt="img not found" />
                                                {/* <h1>hello</h1> */}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};



const HeaderHome = () => {
    const [isOffsetOpen, setIsOffsetOpen] = useState(false);
    const [isSideOpen, setIsSideOpen] = useState(false);

    const toggleOffsetContent = () => {
        setIsOffsetOpen(!isOffsetOpen);
        // Ensure only one is open at a time
        setIsSideOpen(false);
    };

    const toggleSideToggle = () => {
        setIsSideOpen(!isSideOpen);
        // Ensure only one is open at a time
        setIsOffsetOpen(false);
    };

    // The overlay is only active if at least one panel is open
    const isOverlayActive = isOffsetOpen || isSideOpen;

    return (
        <>
            {/* Header Area */}
            <Header
                toggleOffsetContent={toggleOffsetContent}
                toggleSideToggle={toggleSideToggle}
            />

            <SidebarMenu
                isOffsetOpen={isOffsetOpen}
                toggleOffsetContent={toggleOffsetContent}
            />

            <SideToggle
                isSideOpen={isSideOpen}
                toggleSideToggle={toggleSideToggle}
            />



            {/* Overlays */}
            {isOverlayActive && (
                <>
                    {/* These overlays usually hide the main content when a menu is open */}
                    <div className={`offcanvas-overlay ${isOffsetOpen ? 'active' : ''}`} onClick={toggleOffsetContent}></div>
                    <div className={`offcanvas-overlay-white ${isSideOpen ? 'active' : ''}`} onClick={toggleSideToggle}></div>
                </>
            )}

            {/* <StartJ */}
        </>
    );
};

export default HeaderHome;