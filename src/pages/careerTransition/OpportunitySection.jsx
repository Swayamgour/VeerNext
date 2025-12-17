import React from 'react';
import styles from '../../css/career.module.css';
import { FaBuilding, FaChartLine, FaGraduationCap, FaMoneyCheckAlt, FaArrowRight } from 'react-icons/fa';

const OpportunitySection = () => {
    const benefits = [
        {
            icon: <FaBuilding />,
            title: "Stable Government Jobs",
            subtitle: "Central & State",
            description: "Access to 500+ secure government positions with benefits and pension"
        },
        {
            icon: <FaChartLine />,
            title: "High-Growth Careers",
            subtitle: "Private Sector",
            description: "Top opportunities in corporate, banking, and emerging industries"
        },
        {
            icon: <FaGraduationCap />,
            title: "Skill Development",
            subtitle: "Pathways",
            description: "AI-powered skill mapping and targeted training programs"
        },
        {
            icon: <FaMoneyCheckAlt />,
            title: "Financial Stability",
            subtitle: "Long-term Growth",
            description: "Maximize your package with smart financial planning"
        }
    ];

    return (
        <section className={styles.opportunitySection}>
            <div className={styles.container}>

                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <div className={styles.headerDecorator}>
                        <div className={styles.decLine}></div>
                        <span className={styles.decText}>Your Journey</span>
                        <div className={styles.decLine}></div>
                    </div>

                    <h2 className={styles.sectionTitle}>
                        From <span className={styles.titleHighlight}>Uniform</span> to <span className={styles.titleHighlight}>Opportunity</span>
                    </h2>
                    <p className={styles.benefitsSectionSubtitle}>
                        {/* Comprehensive tools and resources designed specifically for your transition journey */}
                        VeerNXT provides the clarity, direction and tools you need to step confidently into civilian life.

                    </p>

                    {/* <p className={styles.sectionSubtitle}>
                        VeerNXT provides the clarity, direction and tools you need to step confidently into civilian life.
                    </p> */}
                </div>

                {/* Main Content */}
                <div className={styles.contentWrapper}>

                    {/* Mission Statement */}
                    {/* <div className={styles.missionBox}>
                        <div className={styles.missionContent}>
                            <h3>After four years of service, you deserve a future with:</h3>
                            <p>Comprehensive support for your transition to civilian success</p>
                        </div>
                    </div> */}

                    {/* Benefits Grid */}
                    <div className={styles.benefitsSectionGrid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.cardTop}>
                                    {/* <div className={styles.benefitsIcon}>
                                        {benefit.icon}
                                    </div> */}

                                    <div style={{ margin: '0' }} className={styles.benefitsIconContainer}>
                                        <div className={styles.benefitsIconBg}></div>
                                        <div className={styles.benefitsIcon}>
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    <div className={styles.cardCount}>0{index + 1}</div>
                                </div>

                                <h4 style={{ textAlign: 'start' }} className={styles.cardTitle}>{benefit.title}</h4>
                                <p className={styles.cardSubtitle}>{benefit.subtitle}</p>
                                <p className={styles.cardDescription}>{benefit.description}</p>

                                <div className={styles.cardLine}></div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h3>Ready to Explore Your Opportunities?</h3>
                            <p>Get personalized exam suggestions based on your profile</p>
                        </div>
                        {/* <button className={styles.primaryCTA}>
                            <span>Explore Exam Opportunities</span>
                            <FaArrowRight className={styles.ctaArrow} />
                        </button> */}

                        <div className="mission-cta-buttons">
                            <button style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn ">
                                <span>  Explore Exam Opportunities </span>
                                <FaArrowRight />
                                {/* <i class="fas fa-rocket btn-icon"></i> */}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OpportunitySection;