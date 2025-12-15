import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="menu-bar">
                                        {/* Offset Button (full-page) - Desktop Only */}
                                        <button className="offset-btn d-none d-xl-inline-block" onClick={toggleOffsetContent}>
                                            <div className="dot-icon">
                                                <img src={"/assets/img/icons/side-toggle.png"} alt="img not found" />
                                            </div>
                                        </button>
                                        {/* Side Toggle Button (mobile/smaller) - Mobile Only */}
                                        <button className="side-toggle d-xl-none" onClick={toggleSideToggle}>
                                            <div className="dot-icon">
                                                <img src={"/assets/img/icons/side-toggle.png"} alt="img not found" />
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

/**
 * 2. OffsetContent Component
 * The large, full-page side-out panel.
 */
const OffsetContent = ({ isOffsetOpen, toggleOffsetContent }) => {
    const wrapperClass = `offset-content-wrapper offset-content-wrapper-army p-relative ${isOffsetOpen ? 'active' : ''}`;

    return (
        <aside className={wrapperClass}>
            <button className="offset-content-close" onClick={toggleOffsetContent}>
                <i className="fal fa-times"></i>
            </button>
            <div className="offset-content offset-menu-content offset-content-army">
                <div className="offset-info">
                    <div className="offset-logo mb-25">
                        <a href="#"><img src={"/assets/img/logo/logo.png"} style={{ height: '150px', width: 'auto' }} alt="img not found" /></a>
                    </div>
                    <div className="offset-info-widget">
                        <h4 className="offset-info-heading">About Us</h4>
                        <p>VeerNXT gives you the tools to build the future you deserve. We are India’s most trusted, veteran-led transition platform — the country’s first Defence Reintegration EdTech designed exclusively for Agniveers and ex-servicemen.</p>
                        <p>Our mission is simple yet powerful: to guide every soldier toward a prosperous civilian life. Under one roof, we provide job opportunities, training programs, career guidance, and mentorship that empower you to choose your next mission — whether it’s a government job, a corporate role, or launching your own business.</p>
                        <p>With military-grade clarity, discipline, and purpose, VeerNXT ensures that those who served the nation continue to rise, achieve, and lead in their new chapter.</p>
                    </div>

                    <div className="offset-info-widget">
                        <h4 className="offset-info-heading">Emergency Contact</h4>
                        <div className="footer-widget-contact">
                            <ul>
                                <li>
                                    <div className="arm-single-contact">
                                        <div className="footer-contact-icon">
                                            {/* Note: Replaced flaticon with a common icon, adjust if needed */}
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <p>6th Floor, Cosmos Vijay, Shivaji Path, Opp Jagdish Book Depot, Navpada, Thane (West), Maharashtra - 400 601.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="arm-single-contact">
                                        <div className="footer-contact-icon">
                                            {/* Note: Replaced flaticon with a common icon, adjust if needed */}
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <p><a href="mailto:support@projectveer.org">support@projectveer.org</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="arm-single-contact">
                                        <div className="footer-contact-icon">
                                            {/* Note: Replaced flaticon with a common icon, adjust if needed */}
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <p><a href="tel:+918883336753">+91-8883336753</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="social-links offset-menu-social">
                        <ul>
                            <li><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="offset-thumb">
                    <img src={"/assets/img/about/bg-9.webp"} alt="Background image" />
                </div>
            </div>
        </aside>
    );
};

/**
 * 3. SideToggle Component
 * The mobile side-out panel with search and contact info.
 */
const SideToggle = ({ isSideOpen, toggleSideToggle }) => {
    const sideInfoClass = `side-info side-info-army ${isSideOpen ? 'active' : ''}`;

    return (
        <aside className="fix">
            <div className={sideInfoClass}>
                <div className="side-info-content">
                    <div className="offset-widget offset-header mb-20">
                        <div className="row align-items-center">
                            <div className="col-9">
                                <div className="offset-logo">
                                    <a href="#">
                                        <img src={"/assets/img/logo/logo.png"} alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-3 text-end">
                                <button className="side-info-close" onClick={toggleSideToggle}>
                                    <i className="fal fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu d-xl-none fix">
                        {/* Mobile menu content would be rendered here, typically a copy of the main nav links */}
                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>Services</li>
                                <li>About us</li>
                                <li>Contact us</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="offset-widget offset_searchbar mb-30">
                        <form onSubmit={(e) => e.preventDefault()} className="filter-search-input">
                            <input type="text" placeholder="Search keyword" />
                            <button type="submit"><i className="fal fa-search"></i></button>
                        </form>
                    </div>

                    <div className="offset-widget offset-support mb-30">
                        <div className="meta-item header-meta-item">
                            <a href="tel:+918883336753">
                                <div className="meta-item-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                            </a>
                            <div className="meta-item-content">
                                <div className="meta-title"><span>Emergency</span> Call</div>
                                <p><a href="tel:+918883336753">+91-8883336753</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="offset-widget offset-social mb-0">
                        <div className="social-links">
                            <ul>
                                <li><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};


/**
 * 4. Main App Component
 * Integrates all parts and manages overall state.
 */
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
            {/* End Header Area */}

            {/* Full-Page Offset Content */}
            <OffsetContent
                isOffsetOpen={isOffsetOpen}
                toggleOffsetContent={toggleOffsetContent}
            />
            {/* End Offset Content */}

            {/* Mobile Side Toggle Content */}
            <SideToggle
                isSideOpen={isSideOpen}
                toggleSideToggle={toggleSideToggle}
            />
            {/* End Side Toggle */}

            {/* Overlays */}
            {isOverlayActive && (
                <>
                    {/* These overlays usually hide the main content when a menu is open */}
                    <div className={`offcanvas-overlay ${isOffsetOpen ? 'active' : ''}`} onClick={toggleOffsetContent}></div>
                    <div className={`offcanvas-overlay-white ${isSideOpen ? 'active' : ''}`} onClick={toggleSideToggle}></div>
                </>
            )}
        </>
    );
};

export default HeaderHome;