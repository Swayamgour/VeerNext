import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaArrowRight,
    FaRocket,
    FaUserTie,
    FaGraduationCap,
    FaBriefcase,
    FaHandshake,
    FaChartLine,
    FaMoneyBillWave,
    FaUsers,
    FaAward,
    FaShieldAlt,
    FaLightbulb,
    FaRegCheckCircle
} from 'react-icons/fa';
import styles from '../../css/getStartedBenefits.module.css';
import AllPageHeader from '../components/AllPageHeader';

const GetStartedBenefitsPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleGetStarted = () => {
        setLoading(true);

        // Simulate loading and redirect
        setTimeout(() => {
            setLoading(false);
            // Redirect to registration/signup page
            navigate('/register');
        }, 1500);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const benefits = [
        {
            icon: <FaUserTie />,
            title: "Personalized Career Roadmap",
            description: "Get a customized plan based on your skills, experience, and career aspirations"
        },
        {
            icon: <FaGraduationCap />,
            title: "Skill Development Programs",
            description: "Access to industry-relevant training and certification courses"
        },
        {
            icon: <FaBriefcase />,
            title: "Job Placement Assistance",
            description: "Direct connections with 500+ hiring partners across India"
        },
        {
            icon: <FaHandshake />,
            title: "Mentorship Network",
            description: "Guidance from successful veterans and industry experts"
        },
        {
            icon: <FaChartLine />,
            title: "Career Growth Tracking",
            description: "Monitor your progress with our advanced analytics dashboard"
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Salary Negotiation Support",
            description: "Expert advice on compensation packages and benefits"
        },
        {
            icon: <FaUsers />,
            title: "Community Support",
            description: "Join a network of 10,000+ Agniveers and veterans"
        },
        {
            icon: <FaAward />,
            title: "Certification & Recognition",
            description: "Industry-recognized certificates for your military skills"
        }
    ];

    const successStories = [
        {
            quote: "After 15 years in the Army, I was uncertain about my civilian career. This platform gave me a clear roadmap and within 3 months, I landed a project management role!",
            name: "Major Rajesh Kumar",
            role: "Now: Project Manager at Tata Group",
            initial: "RK"
        },
        {
            quote: "The skill mapping and training programs helped me transition from Navy logistics to supply chain management. The mentorship was invaluable!",
            name: "Commander Priya Sharma",
            role: "Now: Supply Chain Lead at Amazon",
            initial: "PS"
        },
        {
            quote: "As an Agniveer, I needed guidance for post-service career. The personalized plan and job connections helped me secure a cybersecurity position.",
            name: "Vikram Singh",
            role: "Now: Cybersecurity Analyst at Wipro",
            initial: "VS"
        }
    ];

    return (
        <>
            <AllPageHeader props="Get Started Benefits " />
            <div className={styles.getStartedBenefitsPage}>
                <div className={styles.getStartedContainer}>

                    {/* Header Section */}
                    <div className={styles.getStartedHeader}>
                        <h1 className={styles.getStartedTitle}>
                            Ready to Access All These Benefits?
                        </h1>
                        <p className={styles.getStartedSubtitle}>
                            Join <span className={styles.getStartedHighlight}>thousands of Agniveers</span> who have successfully transitioned
                            from military service to rewarding civilian careers
                        </p>
                    </div>

                    {/* Statistics */}
                    <div className={styles.statistics}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>10,000+</div>
                            <div className={styles.statLabel}>Agniveers Registered</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>92%</div>
                            <div className={styles.statLabel}>Successful Transitions</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Hiring Partners</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>₹8-25L</div>
                            <div className={styles.statLabel}>Average CTC Offered</div>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className={styles.benefitsGridSection}>
                        <h2 className={styles.benefitsGridTitle}>Exclusive Benefits You'll Get</h2>
                        <div className={styles.benefitsGrid}>
                            {benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefitCard}>
                                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                    <p className={styles.benefitDescription}>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Success Stories */}
                    <div className={styles.successStories}>
                        <h2 className={styles.successStoriesTitle}>Success Stories</h2>
                        <div className={styles.storiesGrid}>
                            {successStories.map((story, index) => (
                                <div key={index} className={styles.storyCard}>
                                    <p className={styles.storyContent}>"{story.quote}"</p>
                                    <div className={styles.storyAuthor}>
                                        <div className={styles.authorAvatar}>
                                            {story.initial}
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <h4>{story.name}</h4>
                                            <p>{story.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main CTA Section */}
                    <div className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <h3>Your Journey Starts Here</h3>
                            <p>
                                Get instant access to all benefits, personalized guidance, and a community
                                that understands your unique journey
                            </p>
                        </div>

                        <div className={styles.missionCtaButtons}>
                            <button
                                onClick={handleGetStarted}
                                style={{ border: '1px solid var(--primary-color)' }}
                                className={`${styles.missionBtn} ${styles.fillBtn}`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span>Creating Your Account...</span>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            border: '2px solid white',
                                            borderTop: '2px solid transparent',
                                            borderRadius: '50%',
                                            animation: 'spin 1s linear infinite'
                                        }}></div>
                                    </>
                                ) : (
                                    <>
                                        <span>Get Started Now</span>
                                        <FaArrowRight className={styles.rocketIcon} />
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Additional Features */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '40px',
                            marginTop: '40px',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaRegCheckCircle style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }} />
                                <span style={{ color: 'var(--primary-color)' }}>No Credit Card Required</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaShieldAlt style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }} />
                                <span style={{ color: 'var(--primary-color)' }}>100% Secure & Confidential</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaLightbulb style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }} />
                                <span style={{ color: 'var(--primary-color)' }}>Free Career Assessment</span>
                            </div>
                        </div>
                    </div>

                    {/* Back Button */}


                </div>
            </div>
        </>
    );
};

export default GetStartedBenefitsPage;