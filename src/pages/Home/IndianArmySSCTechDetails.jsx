import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    FaArrowLeft,
    FaCalendarAlt,
    FaUsers,
    FaUserGraduate,
    FaRupeeSign,
    FaClock,
    FaBook,
    FaFileAlt,
    FaCheckCircle,
    FaPaperPlane,
    FaBookmark,
    FaShareAlt,
    FaPrint,
    FaDownload,
    FaExternalLinkAlt,
    FaStar,
    FaLandmark,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaGlobe
} from 'react-icons/fa';
// import styles from './../css/examDetails.module.css';
import styles from './../../css/examDetails.module.css';
import AllPageHeader from '../components/AllPageHeader';

function IndianArmySSCTechDetails() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get exam ID from URL if needed
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(!saved);
        // Save logic here
    };

    const handleApply = () => {
        // Application logic here
        navigate('/apply-online');
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Indian Army SSC Tech 2024',
                text: 'Check out this exciting opportunity in Indian Army',
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <AllPageHeader props="Indian Army SSC Technical Entry 2026" />
            <div className={styles.examDetailsPage}>
                <div className={styles.examDetailsContainer}>

                    {/* Breadcrumb Navigation */}


                    {/* Exam Header */}
                    <div className={styles.examHeader}>
                        <div className={styles.featuredBadge}>
                            <FaStar /> Featured Opportunity
                        </div>

                        <h1 className={styles.examTitle}>Indian Army SSC Technical Entry 2024</h1>
                        <div className={styles.examOrganization}>
                            <FaLandmark /> Indian Army - Short Service Commission
                        </div>

                        {/* Quick Stats */}
                        <div className={styles.quickStats}>
                            <div className={styles.statItem}>
                                <span >
                                    <FaCalendarAlt />
                                </span>

                                <div className={styles.statValue}>15 Feb 2024</div>
                                <div className={styles.statLabel}>Last Date to Apply</div>
                            </div>
                            <div className={styles.statItem}>
                                <span>
                                    <FaUsers />
                                </span>
                                <div className={styles.statValue}>150 Vacancies</div>
                                <div className={styles.statLabel}>Total Positions</div>
                            </div>
                            <div className={styles.statItem}>
                                <span>
                                    <FaUserGraduate />
                                </span>
                                <div className={styles.statValue}>B.Tech/B.E</div>
                                <div className={styles.statLabel}>Qualification</div>
                            </div>
                            <div className={styles.statItem}>
                                <span>
                                    <FaRupeeSign />
                                </span>
                                <div className={styles.statValue}>₹0 Fee</div>
                                <div className={styles.statLabel}>No Application Fee</div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className={styles.mainContent}>

                        {/* Left Column - Main Details */}
                        <div className={styles.leftColumn}>

                            {/* About the Exam */}
                            <div className={styles.detailsSection}>
                                <h3 className={styles.sectionTitle}>
                                    <FaBook /> About the Opportunity
                                </h3>
                                <p>
                                    Indian Army invites applications from unmarried Male and Female Engineering Graduates
                                    for Short Service Commission (Technical) in the Indian Army. This is a golden opportunity
                                    for engineering graduates to serve the nation as commissioned officers.
                                </p>
                                <p>
                                    Selected candidates will undergo 49 weeks of training at Officers Training Academy (OTA),
                                    Chennai and will be commissioned as Lieutenant in the Indian Army.
                                </p>
                            </div>

                            {/* Eligibility Criteria */}


                            {/* Selection Process */}
                            <div className={styles.detailsSection}>
                                <h3 className={styles.sectionTitle}>
                                    <FaFileAlt /> Selection Process
                                </h3>
                                <div className={styles.processSteps}>
                                    <div className={styles.processStep}>
                                        <div className={styles.stepNumber}>1</div>
                                        <div className={styles.stepContent}>
                                            <h4>Online Application</h4>
                                            <p>Submit application through joinindianarmy.nic.in</p>
                                        </div>
                                    </div>
                                    <div className={styles.processStep}>
                                        <div className={styles.stepNumber}>2</div>
                                        <div className={styles.stepContent}>
                                            <h4>Shortlisting</h4>
                                            <p>Candidates shortlisted based on engineering marks</p>
                                        </div>
                                    </div>
                                    <div className={styles.processStep}>
                                        <div className={styles.stepNumber}>3</div>
                                        <div className={styles.stepContent}>
                                            <h4>SSB Interview</h4>
                                            <p>5-day SSB interview at Selection Centers</p>
                                        </div>
                                    </div>
                                    <div className={styles.processStep}>
                                        <div className={styles.stepNumber}>4</div>
                                        <div className={styles.stepContent}>
                                            <h4>Medical Examination</h4>
                                            <p>Medical tests at designated hospitals</p>
                                        </div>
                                    </div>
                                    <div className={styles.processStep}>
                                        <div className={styles.stepNumber}>5</div>
                                        <div className={styles.stepContent}>
                                            <h4>Final Merit List</h4>
                                            <p>Merit list based on SSB recommendations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Salary & Benefits */}
                            <div className={styles.detailsSection}>
                                <h3 className={styles.sectionTitle}>
                                    <FaRupeeSign /> Salary & Benefits
                                </h3>
                                <table className={styles.examPattern}>
                                    <thead>
                                        <tr>
                                            <th>Rank</th>
                                            <th>Basic Pay</th>
                                            <th>Grade Pay</th>
                                            <th>Military Service Pay</th>
                                            <th>Total (Approx)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Lieutenant</td>
                                            <td>₹56,100</td>
                                            <td>₹16,200</td>
                                            <td>₹15,500</td>
                                            <td>₹87,800</td>
                                        </tr>
                                        <tr>
                                            <td>Captain</td>
                                            <td>₹61,300</td>
                                            <td>₹17,300</td>
                                            <td>₹15,500</td>
                                            <td>₹94,100</td>
                                        </tr>
                                        <tr>
                                            <td>Major</td>
                                            <td>₹69,400</td>
                                            <td>₹18,300</td>
                                            <td>₹15,500</td>
                                            <td>₹1,03,200</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div style={{ marginTop: '20px' }}>
                                    <h4>Additional Benefits:</h4>
                                    <ul style={{ listStyle: 'none', padding: '0', margin: '15px 0' }}>
                                        <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <FaCheckCircle style={{ color: 'var(--primary-color)' }} />
                                            Free accommodation or HRA
                                        </li>
                                        <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <FaCheckCircle style={{ color: 'var(--primary-color)' }} />
                                            Transport allowance
                                        </li>
                                        <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <FaCheckCircle style={{ color: 'var(--primary-color)' }} />
                                            Medical facilities for family
                                        </li>
                                        <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <FaCheckCircle style={{ color: 'var(--primary-color)' }} />
                                            60 days annual leave
                                        </li>
                                        <li style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <FaCheckCircle style={{ color: 'var(--primary-color)' }} />
                                            Post-service benefits
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* Right Column - Sidebar */}
                        <div className={styles.sidebar}>

                            {/* Important Dates */}
                            <div className={styles.importantDates}>
                                <h3 className={styles.sectionTitle}>
                                    <FaCalendarAlt /> Important Dates
                                </h3>
                                <div className={styles.dateItem}>
                                    <span className={styles.dateLabel}>Application Start Date</span>
                                    <span className={styles.dateValue}>01 Jan 2024</span>
                                </div>
                                <div className={styles.dateItem}>
                                    <span className={styles.dateLabel}>Last Date to Apply</span>
                                    <span className={styles.dateValue} style={{ background: '#ffeaea', color: '#d32f2f' }}>
                                        15 Feb 2024
                                    </span>
                                </div>
                                <div className={styles.dateItem}>
                                    <span className={styles.dateLabel}>SSB Interview Dates</span>
                                    <span className={styles.dateValue}>Mar - Jun 2024</span>
                                </div>
                                <div className={styles.dateItem}>
                                    <span className={styles.dateLabel}>Medical Exam</span>
                                    <span className={styles.dateValue}>After SSB</span>
                                </div>
                                <div className={styles.dateItem}>
                                    <span className={styles.dateLabel}>Training Start</span>
                                    <span className={styles.dateValue}>Oct 2024</span>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className={styles.quickLinks}>
                                <h3 className={styles.sectionTitle}>
                                    <FaExternalLinkAlt /> Quick Links
                                </h3>
                                <a rel="noopener noreferrer" className={styles.linkItem}>
                                    <FaGlobe /> Official Website
                                </a>
                                <a className={styles.linkItem}>
                                    <FaDownload /> Download Notification
                                </a>
                                <a className={styles.linkItem}>
                                    <FaPaperPlane /> Apply Online
                                </a>
                                <a className={styles.linkItem}>
                                    <FaPhone /> Helpline
                                </a>
                            </div>

                            {/* Contact Information */}
                            <div className={styles.detailsSection} style={{ padding: '20px' }}>
                                <h4 >Contact Information</h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <FaMapMarkerAlt style={{ color: 'var(--primary-color)' }} />
                                    <span>Integrated Headquarters of MoD (Army), New Delhi</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <FaPhone style={{ color: 'var(--primary-color)' }} />
                                    <span>011-23015234</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <FaEnvelope style={{ color: 'var(--primary-color)' }} />
                                    <span>ssctech@joinindianarmy.nic.in</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* CTA Section */}
                    <div className={styles.ctaSection}>
                        <h3 className={styles.ctaTitle}>Ready to Serve the Nation?</h3>
                        <p>Apply now for Indian Army SSC Technical Entry 2024. Limited vacancies available.</p>

                        <div className={styles.ctaButtons}>
                            <button className={styles.applyBtn} onClick={handleApply}>
                                <FaPaperPlane /> Apply Online Now
                            </button>
                            <button className={styles.applyBtn} onClick={handleSave}>
                                <FaBookmark /> {saved ? 'Saved' : 'Save for Later'}
                            </button>
                            <button className={styles.applyBtn} onClick={handleShare}>
                                <FaShareAlt /> Share with Friends
                            </button>
                        </div>


                    </div>

                </div>
            </div>
        </>
    );
}

export default IndianArmySSCTechDetails;