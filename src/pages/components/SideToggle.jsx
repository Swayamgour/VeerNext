import { useNavigate } from "react-router-dom";

const SideToggle = ({ isSideOpen, toggleSideToggle }) => {
    const sideInfoClass = `side-info side-info-army ${isSideOpen ? 'info-open' : ''}`;
    // <div className={`side-info side-info-army ${isSideOpen ? "info-open" : ""}`}>

    const navigate = useNavigate()


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


                    <div className=" main-menu2 main-menu  d-xl-block">
                        <nav id="mobile-menu">
                            <ul>
                                
                                <li onClick={() => navigate('/')}>Home</li>
                                <li onClick={() => navigate('/Courses')}>Services</li>
                                <li onClick={() => navigate('/About')}>About us</li>
                                <li>Contact us</li>
                                <li onClick={() => navigate('/Profile')}>Profile</li>
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
                                <p>+91-8883336753</p>
                            </div>
                        </div>
                    </div>

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
        </aside>
    );
};

export default SideToggle;