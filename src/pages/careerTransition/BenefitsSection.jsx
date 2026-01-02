import React from 'react';
import styles from '../../css/career.module.css';
import {
    FaChartLine,
    FaBullseye,
    FaBookOpen,
    FaChartBar,
    FaGraduationCap,
    FaSyncAlt,
    FaCheckCircle,
    FaArrowRight,
    FaDownload,
    FaShieldAlt
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BenefitsSection = () => {
    const benefits = [
        {
            title: 'Personalised Career Report',
            description: 'A custom roadmap based on your qualification, service history & strengths.',
            icon: <FaChartLine />,
            color: 'gradient1'
        },
        {
            title: 'Exam Options Matched to You',
            description: 'Central, State, Police, Banking, PSU, Railways — all filtered to your eligibility.',
            icon: <FaBullseye />,
            color: 'gradient2'
        },
        {
            title: 'Syllabus + Study Plan',
            description: 'Step-by-step learning path built like your daily PT routine.',
            icon: <FaBookOpen />,
            color: 'gradient3'
        },
        {
            title: 'Strengths & Weaknesses Assessment',
            description: 'Find where you stand and where to improve.',
            icon: <FaChartBar />,
            color: 'gradient1'
        },
        {
            title: 'Training Material Ready to Use',
            description: 'Mock tests, practice questions, video lessons, and revision sheets.',
            icon: <FaGraduationCap />,
            color: 'gradient2'
        },
        {
            title: 'Automated Progress Tracking',
            description: 'Your preparation adjusts each day, based on performance.',
            icon: <FaSyncAlt />,
            color: 'gradient3'
        }
    ];

    const navigate = useNavigate()

    return (
        <section className={styles.opportunitySection}>
            <div className={styles.benefitsContainer}>

                {/* Section Header */}
                <div className={styles.benefitsHeader}>


                    <div className={styles.headerDecorator}>
                        <div className={styles.decLine}></div>
                        <span className={styles.decText}>Exclusive Features </span>
                        <div className={styles.decLine}></div>
                    </div>

                    <h2 className={styles.sectionTitle}>
                        Mission Benefits for <span className={styles.titleHighlight}>Agniveers</span>
                    </h2>

                    <p className={styles.benefitsSectionSubtitle}>
                        Comprehensive tools and resources designed specifically for your transition journey
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className={styles.benefitsSectionGrid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={`${styles.benefitsSectionCard} ${styles[benefit.color]}`}>

                            {/* Card Number */}
                            <div className={styles.benefitsCardNumber}>0{index + 1}</div>

                            {/* Icon with Background */}
                            <div className={styles.benefitsIconContainer}>
                                <div className={styles.benefitsIconBg}></div>
                                <div className={styles.benefitsIcon}>
                                    {benefit.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className={styles.benefitsCardContent}>
                                <h3 className={styles.cardTitle}>
                                    {benefit.title}
                                    <span className={styles.benefitsTitleLine}></span>
                                </h3>
                                <p className={styles.benefitsSectionCardDescription}>{benefit.description}</p>
                            </div>

                            {/* Features List */}
                            <div className={styles.benefitsFeaturesList}>
                                <div className={styles.benefitsFeature}>
                                    <FaCheckCircle className={styles.benefitsCheckIcon} />
                                    <span>Military Service Credit</span>
                                </div>
                                <div className={styles.benefitsFeature}>
                                    <FaCheckCircle className={styles.benefitsCheckIcon} />
                                    <span>Age Relaxation</span>
                                </div>
                            </div>

                            {/* Bottom Border */}
                            <div className={styles.benefitsCardBorder}></div>
                        </div>
                    ))}
                </div>



                <div className={styles.reportSecurityCta}>
                    <div className={styles.reportSecurity}>
                        <div className={styles.securityIcon}>
                            <FaShieldAlt />
                        </div>
                        <div className={styles.securityContent}>
                            <h4>100% Secure & Confidential</h4>
                            <p>Your personal information and career data are protected with military-grade encryption</p>
                        </div>
                    </div>
                    <div className={styles.reportCtaSection}>
                        <div className={styles.reportCtaContent}>
                            <h3>Want to See a Sample Report?</h3>
                            <p className="text-center">Download a sample report to understand what you'll receive</p>
                        </div>

                        <div className={styles.reportCtaButtons}>


                            <div className="mission-cta-buttons">
                                <button onClick={() => navigate('/VeerNXTReport')} style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn ">
                                    <FaDownload className={styles.ctaIcon} />
                                    <span>Download Sample Report</span>
                                    <FaArrowRight className={styles.ctaArrow} />
                                </button>
                            </div>

                            <div className="mission-cta-buttons">
                                <button onClick={() => navigate('/GenerateReportPage')} style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn ">
                                    <span>Generate My Report</span>
                                    <FaArrowRight className={styles.ctaArrow} />
                                </button>
                            </div>


                        </div>

                        <div className={styles.reportCtaNote}>
                            <FaCheckCircle className={styles.noteIcon} />
                            <span>No registration required for sample report</span>
                        </div>
                    </div>
                </div>





            </div>
        </section>
    );
};

export default BenefitsSection;