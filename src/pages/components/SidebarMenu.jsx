// import "";
import react from "react";
import '../../css/aboutDialog.css'
import { BiCross } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";


const AboutDialog = ({ isOffsetOpen, toggleOffsetContent }) => {
    // console.log(isOffsetOpen)
    return (
        <aside
            className={`offset-content-wrapper offset-content-wrapper-army ${isOffsetOpen ? "offset-show" : ""
                }`}
        >
            {/* Close Button */}
            <button className="offset-content-close" onClick={toggleOffsetContent}>
                <RxCross2 />
            </button>

            <div className="offset-content offset-menu-content offset-content-army">
                {/* LEFT CONTENT */}
                <div className="offset-info">
                    <div className="offset-logo mb-25">
                        <img
                            src="/assets/img/logo/logo.png"
                            alt="logo"
                            style={{ height: "150px", width: "auto" }}
                        />
                    </div>

                    <div className="offset-info-widget">
                        <h4 className="offset-info-heading">About Us</h4>

                        <p>
                            VeerNXT gives you the tools to build the future you deserve. We are
                            India’s most trusted, veteran-led transition platform — the
                            country’s first Defence Reintegration EdTech designed exclusively
                            for Agniveers and ex-servicemen.
                        </p>

                        <p>
                            Our mission is simple yet powerful: to guide every soldier toward a
                            prosperous civilian life. Under one roof, we provide job
                            opportunities, training programs, career guidance, and mentorship.
                        </p>

                        <p>
                            With military-grade clarity, discipline, and purpose, VeerNXT
                            ensures that those who served the nation continue to rise.
                        </p>
                    </div>

                    <hr />

                    <div className="offset-info-widget">
                        <h4 className="offset-info-heading">Emergency Contact</h4>

                        <div className="contact-list">
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>
                                    6th Floor, Cosmos Vijay, Thane (W), Maharashtra – 400601
                                </span>
                            </div>

                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <a className="contact-email" href="mailto:support@projectveer.org">
                                    support@projectveer.org
                                </a>
                            </div>

                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <a href="tel:+918883336753">
                                    +91-8883336753
                                </a>
                            </div>
                        </div>

                    </div>
                    <hr />

                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <FaYoutube />
                        </a>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="offset-thumb">
                    <img
                        src="/assets/img/about/bg-9.webp"
                        alt="about"
                    />
                </div>
            </div>
        </aside>
    );
};

export default AboutDialog;
