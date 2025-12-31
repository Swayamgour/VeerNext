import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/SideToggle.module.css";

const SideToggle = ({ isSideOpen, toggleSideToggle }) => {
    const navigate = useNavigate();

    // 🔽 Mobile dropdown state
    const [openMenu, setOpenMenu] = useState(null);

    const sideInfoClass = `${styles.sideInfo} ${styles.sideInfoArmy} ${isSideOpen ? styles.infoOpen : ""
        }`;

    console.log(sideInfoClass)

    // 🔥 Navigate + close sidebar
    const handleNavigate = (path) => {
        navigate(path);
        setOpenMenu(null); // close dropdown
        toggleSideToggle(); // close sidebar
    };

    // 🔥 Toggle dropdown without triggering parent navigation
    const handleDropdownToggle = (menu, e) => {
        e.stopPropagation(); // Prevent event from bubbling up to parent li
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <aside className={`${styles.fix} ${isSideOpen ? styles.infoOpen : ""}`}>
            <div className={`${styles.sideInfo} ${styles.sideInfoArmy}`}>
                <div className={styles.sideInfoContent}>


                    {/* ===== HEADER ===== */}
                    <div className={`${styles.offsetWidget} ${styles.offsetHeader} ${styles.mb20}`}>
                        <div className={styles.row}>
                            <div className={styles.col9}>
                                <div className={styles.offsetLogo}>
                                    <img src="/VEER/assets/img/logo/logo.png" alt="Logo" />
                                </div>
                            </div>
                            <div className={styles.col3}>
                                <button className={styles.sideInfoClose} onClick={toggleSideToggle}>
                                    <i className="fal fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ===== MENU ===== */}
                    <div className={`${styles.mainMenu2} ${styles.mainMenu}`}>
                        <nav>
                            <ul>
                                <li onClick={() => handleNavigate("/")} className={styles.menuItem}>
                                    Home
                                </li>

                                {/* 🔽 SERVICES DROPDOWN */}
                                <li
                                    className={`${styles.mobileDropdown} ${openMenu === "services" ? styles.open : ""
                                        }`}
                                >
                                    <div
                                        className={styles.mobileDropdownTitle}
                                        onClick={(e) => handleDropdownToggle("services", e)}
                                    >
                                        <span>Services</span>
                                        <i
                                            className={`fas fa-chevron-${openMenu === "services" ? "up" : "down"
                                                }`}
                                        ></i>
                                    </div>

                                    <ul className={styles.mobileSubmenu}>
                                        <li
                                            onClick={() => handleNavigate("/CareerTransition")}
                                            className={styles.dropdownItem}
                                        >
                                            Career Transition
                                        </li>
                                        <li
                                            onClick={() => handleNavigate("/FinancialGuidance")}
                                            className={styles.dropdownItem}
                                        >
                                            Financial Guidance
                                        </li>
                                        <li
                                            onClick={() => handleNavigate("/CommunityPage")}
                                            className={styles.dropdownItem}
                                        >
                                            Connect And Thrive
                                        </li>
                                    </ul>
                                </li>

                                <li onClick={() => handleNavigate("/About")} className={styles.menuItem}>
                                    About us
                                </li>
                                <li onClick={() => handleNavigate("/ContactUS")} className={styles.menuItem}>
                                    Contact us
                                </li>
                                <li onClick={() => handleNavigate("/Profile")} className={styles.menuItem}>
                                    Profile
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="offset-widget offset_searchbar mb-30">
                        <form action="#" className="filter-search-input">
                            <input type="text" placeholder="Search keyword" />
                            <button type="submit"><i className="fal fa-search"></i></button>
                        </form>
                    </div>
                    <div className="offset-widget offset-support mb-30">
                        <div className="meta-item header-meta-item">
                            <a href="tel:+91036259003">
                                <div className="meta-item-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                            </a>
                            <div className="meta-item-content">
                                <div className="meta-title"><span>Emargency</span> Call</div>
                                <p><span >+91 036 259 003</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="offset-widget offset-social mb-0">
                        {/* <div className="social-links"> */}
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
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideToggle;