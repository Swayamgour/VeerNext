import React from 'react';
import styles from '../../css/career.module.css';
import { FaChevronDown, FaShieldAlt, FaMedal, FaBullseye, FaStar, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

    const navigate = useNavigate()
    return (
        <section className={styles.heroSection}>
            {/* Clean Background with subtle pattern */}
            <div className={styles.backgroundPattern}></div>

            <div className={styles.container}>
                <div className={styles.heroWrapper}>

                    {/* Main Content */}
                    <div className={styles.heroMain}>

                        {/* Badge */}
                        <div className={styles.heroBadge}>
                            <FaShieldAlt className={styles.badgeIcon} />
                            <span>Trusted by 10,000+ Veterans</span>
                        </div>

                        {/* Main Headline */}
                        <div className={styles.headlineGroup}>
                            <h1 className={styles.heroLead}>Your Next Mission</h1>
                            <h2 className={styles.heroTitle}>
                                From <span className={styles.highlight}>Uniform</span> to<br />
                                <span className={styles.highlight}>Civilian Success</span>
                            </h2>
                            <p className={styles.heroSubtitle}>
                                Personalized career pathways in government, PSU, banking, police, and corporate sectors
                            </p>
                        </div>

                        {/* Features List */}
                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}>
                                <FaCheck className={styles.featureIcon} />
                                <span>AI-Powered Career Mapping</span>
                            </div>
                            <div className={styles.featureItem}>
                                <FaCheck className={styles.featureIcon} />
                                <span>500+ Govt & PSU Exams</span>
                            </div>
                            <div className={styles.featureItem}>
                                <FaCheck className={styles.featureIcon} />
                                <span>Personalized Roadmap</span>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className={styles.ctaGroup}>
                            {/* <button className={styles.primaryCTA}>
                                <span className={styles.ctaText}>Get Your Free Career Report</span>
                                <FaChevronDown className={styles.ctaArrow} />
                            </button> */}


                            <button onClick={()=>navigate('/FreeCareerReportPage')} className="mission-btn fill-btn ">
                                <span> Get Your Free Career Report </span>
                                <FaChevronDown />
                                {/* <i class="fas fa-rocket btn-icon"></i> */}
                            </button>





                            {/* <p className={styles.ctaNote}>No credit card required • 100% Confidential</p> */}
                        </div>
                    </div>

                    {/* Stats Sidebar */}
                    <div className={styles.statsSidebar}>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Govt Exams Access</div>
                            <div className={styles.statProgress}></div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>95%</div>
                            <div className={styles.statLabel}>Success Rate</div>
                            <div className={styles.statProgress} style={{ width: '95%' }}></div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>24/7</div>
                            <div className={styles.statLabel}>Expert Guidance</div>
                            <div className={styles.statProgress} style={{ width: '100%' }}></div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>10K+</div>
                            <div className={styles.statLabel}>Veterans Community</div>
                            <div className={styles.statProgress} style={{ width: '90%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className={styles.trustBadges}>
                    <div className={styles.trustBadge}>
                        <FaMedal className={styles.trustIcon} />
                        <span>Defence Ministry Approved</span>
                    </div>
                    <div className={styles.trustBadge}>
                        <FaBullseye className={styles.trustIcon} />
                        <span>Personalized Matching</span>
                    </div>
                    <div className={styles.trustBadge}>
                        <FaStar className={styles.trustIcon} />
                        <span>4.9/5 Veteran Rating</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;