import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu';
import SideToggle from './components/SideToggle';

const Header = ({ toggleOffsetContent, toggleSideToggle, showSticky }) => {
    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = useState(null);


    return (
        <header>
            <div
                id="header-sticky"
                className={`header-main header-main2 ${showSticky ? 'sticky' : ''}`}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="header-main-content-wrapper">
                                <div className="header-main-left header-main-left-header2">
                                    <div onClick={() => navigate('/')} className="header-logo header2-logo">
                                        <div className="logo-white">
                                            <img src="/assets/img/logo/logo.png" alt="logo-img" />
                                        </div>
                                    </div>
                                </div>

                                <div className="header-main-right header-main-right-header2">
                                    <div className="main-menu main-menu2 d-none d-xl-block">
                                        <nav>
                                            <ul className='m-0'>
                                                <li onClick={() => navigate('/')}>Home</li>
                                                {/* <li onClick={() => navigate('/Courses')}>Services</li> */}

                                                {/* <li className="cs-nav-item-dropdown">
                                                    <span className="cs-nav-item-link">Services</span>

                                                    <ul className="cs-nav-submenu">
                                                        <li style={{ color: 'var(--primary-color)', fontSize: '13px' }} onClick={() => navigate('/CareerTransition')}>
                                                            <span>Career Transition</span>
                                                        </li>
                                                        <li style={{ color: 'var(--primary-color)', fontSize: '13px' }} onClick={() => navigate('/FinancialGuidance')}>
                                                            <span>Financial Guidance</span>
                                                        </li>
                                                        <li style={{ color: 'var(--primary-color)', fontSize: '13px' }} onClick={() => navigate('/CommunityPage')}>
                                                            <span>Connect And Thrive</span>
                                                        </li>
                                                    </ul>
                                                </li> */}

                                                {console.log(openDropdown)}

                                                <li
                                                    className={`cs-nav-item-dropdown ${openDropdown === 'services' ? 'open' : ''}`}
                                                    onMouseEnter={() => setOpenDropdown('services')}
                                                    onMouseLeave={() => setOpenDropdown(null)}
                                                >
                                                    <span className="cs-nav-item-link">Services</span>

                                                    <ul className="cs-nav-submenu">
                                                        <li
                                                            style={{ color: 'var(--primary-color)', fontSize: '13px' }}
                                                            onClick={() => {
                                                                navigate('/CareerTransition');
                                                                setOpenDropdown(null); // 🔥 CLOSE dropdown
                                                            }}
                                                        >
                                                            <span>Career Transition</span>
                                                        </li>

                                                        <li
                                                            style={{ color: 'var(--primary-color)', fontSize: '13px' }}
                                                            onClick={() => {
                                                                navigate('/FinancialGuidance');
                                                                setOpenDropdown(null);
                                                            }}
                                                        >
                                                            <span>Financial Guidance</span>
                                                        </li>

                                                        <li
                                                            style={{ color: 'var(--primary-color)', fontSize: '13px' }}
                                                            onClick={() => {
                                                                navigate('/CommunityPage');
                                                                setOpenDropdown(null);
                                                            }}
                                                        >
                                                            <span>Connect And Thrive</span>
                                                        </li>
                                                    </ul>
                                                </li>




                                                <li onClick={() => navigate('/About')}>About us</li>
                                                <li onClick={() => navigate('/ContactUS')}>Contact us</li>
                                                {/* <li onClick={() => navigate('/Profile')}>Login</li> */}
                                                <li
                                                    className={`cs-nav-item-dropdown ${openDropdown === 'login' ? 'open' : ''}`}
                                                    onMouseEnter={() => setOpenDropdown('login')}
                                                    onMouseLeave={() => setOpenDropdown(null)}
                                                >
                                                    <span className="cs-nav-item-link">Login</span>

                                                    <ul className="cs-nav-submenu">
                                                        <li
                                                            style={{ color: 'var(--primary-color)', fontSize: '13px' }}
                                                            onClick={() => {
                                                                navigate('/login');
                                                                setOpenDropdown(null); // 🔥 CLOSE dropdown
                                                            }}
                                                        >
                                                            <span>Student Login</span>
                                                        </li>

                                                        <li
                                                            style={{ color: 'var(--primary-color)', fontSize: '13px' }}
                                                            onClick={() => {
                                                                navigate('/Profile');
                                                                setOpenDropdown(null); // 🔥 CLOSE dropdown
                                                            }}
                                                        >
                                                            <span>Profile</span>
                                                        </li>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>

                                    <div className="menu-bar">
                                        <button className="offset-btn d-none d-xl-inline-block" onClick={toggleOffsetContent}>
                                            <img src="/assets/img/icons/side-toggle.png" alt="toggle" />
                                        </button>

                                        <button className="side-toggle d-xl-none" onClick={toggleSideToggle}>
                                            <img src="/assets/img/icons/side-toggle.png" alt="toggle" />
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

    const [showSticky, setShowSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // 🔥 SCROLL DIRECTION LOGIC
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // ❌ Top par sticky nahi
            if (currentScrollY === 0) {
                setShowSticky(false);
            }
            // 🔼 Scroll UP (but not top)
            else if (currentScrollY < lastScrollY) {
                setShowSticky(true);
            }
            // 🔽 Scroll DOWN
            else {
                setShowSticky(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    const toggleOffsetContent = () => {
        setIsOffsetOpen(!isOffsetOpen);
        setIsSideOpen(false);
    };

    const toggleSideToggle = () => {
        setIsSideOpen(!isSideOpen);
        setIsOffsetOpen(false);
    };

    const isOverlayActive = isOffsetOpen || isSideOpen;

    return (
        <>
            <Header
                toggleOffsetContent={toggleOffsetContent}
                toggleSideToggle={toggleSideToggle}
                showSticky={showSticky}
            />

            <SidebarMenu
                isOffsetOpen={isOffsetOpen}
                toggleOffsetContent={toggleOffsetContent}
            />

            <SideToggle
                isSideOpen={isSideOpen}
                toggleSideToggle={toggleSideToggle}
            />

            {isOverlayActive && (
                <>
                    <div className={`offcanvas-overlay ${isOffsetOpen ? 'active' : ''}`} onClick={toggleOffsetContent}></div>
                    <div className={`offcanvas-overlay-white ${isSideOpen ? 'active' : ''}`} onClick={toggleSideToggle}></div>
                </>
            )}
        </>
    );
};

export default HeaderHome;
