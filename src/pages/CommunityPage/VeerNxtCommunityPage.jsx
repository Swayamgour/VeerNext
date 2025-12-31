import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaUsers,
    FaGraduationCap,
    FaBriefcase,
    FaHandshake,
    FaChalkboardTeacher,
    FaNetworkWired,
    FaAward,
    FaTimes,
    FaCheck,
    FaQuoteLeft,
    FaStar
} from 'react-icons/fa';
import styles from '../../css/veerNxtCommunity.module.css';
import AllPageHeader from '../components/AllPageHeader';

function VeerNxtCommunityPage() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceBranch: '',
        rank: '',
        interests: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleInterestToggle = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleJoinSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        setIsModalOpen(false);
        // Show success message or redirect
        navigate('/welcome');
    };

    const handleBack = () => {
        navigate(-1);
    };

    const communityFeatures = [
        {
            icon: <FaUsers />,
            title: "Brotherhood Network",
            description: "Connect with 10,000+ Agniveers & Veterans across India. Share experiences, collaborate on projects, and build lifelong connections."
        },
        {
            icon: <FaGraduationCap />,
            title: "Skill Development",
            description: "Access 200+ courses, certifications, and training programs tailored for defense personnel transitioning to civilian careers."
        },
        {
            icon: <FaBriefcase />,
            title: "Job Placement",
            description: "Get direct access to 500+ hiring partners. 85% placement rate with average salary hike of 40% post-transition."
        },
        {
            icon: <FaHandshake />,
            title: "Mentorship Program",
            description: "Get guidance from successful veterans and industry experts. One-on-one mentorship for personalized career growth."
        },
        {
            icon: <FaChalkboardTeacher />,
            title: "Workshops & Webinars",
            description: "Weekly live sessions on resume building, interview skills, entrepreneurship, and personal development."
        },
        {
            icon: <FaNetworkWired />,
            title: "Business Network",
            description: "Connect with veteran entrepreneurs, access startup resources, and explore business partnership opportunities."
        }
    ];

    const programs = [
        {
            icon: "🎖️",
            title: "Sena Saathi Program",
            subtitle: "For Active Agniveers",
            description: "Early career planning, skill mapping, and preparation for post-service opportunities while still in service.",
            features: [
                "Career Assessment Tests",
                "Skill Gap Analysis",
                "Early Job Placement",
                "Financial Planning Guide"
            ],
            badge: "Most Popular"
        },
        {
            icon: "🚀",
            title: "Veteran Launchpad",
            subtitle: "For Recently Retired",
            description: "Intensive 3-month program for immediate transition support, job placement, and career relaunch.",
            features: [
                "Resume & Interview Prep",
                "Corporate Communication",
                "Industry-Specific Training",
                "Guaranteed Placement"
            ],
            badge: "Guaranteed"
        },
        {
            icon: "💼",
            title: "Entrepreneur Battalion",
            subtitle: "For Business Aspirants",
            description: "Comprehensive entrepreneurship program with mentorship, funding access, and business setup support.",
            features: [
                "Business Plan Development",
                "Funding & Investor Connect",
                "Legal & Compliance Support",
                "Mentor Network Access"
            ],
            badge: "Premium"
        }
    ];

    const testimonials = [
        {
            text: "VEER-NXT helped me transition from Army to a corporate security role with 50% salary hike. The mentorship was invaluable!",
            name: "Major Rajesh Verma",
            role: "Now: Security Consultant at Deloitte",
            initial: "RV"
        },
        {
            text: "As an Agniveer, I was uncertain about my future. The community guided me to become a cybersecurity analyst in just 6 months.",
            name: "Vikram Singh",
            role: "Agniveer to Cybersecurity Analyst",
            initial: "VS"
        },
        {
            text: "The business network helped me start my own logistics company. Today I employ 15+ veterans! Brotherhood in action.",
            name: "Col. Sanjay Mehta",
            role: "Founder, Secure Logistics Pvt Ltd",
            initial: "SM"
        }
    ];

    return (
        <>
            <AllPageHeader props="VEER-NXT Community" />
            {/* Join Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={() => setIsModalOpen(false)}>
                            <FaTimes />
                        </button>

                        <h2 className={styles.modalTitle}>Join VEER-NXT Community</h2>

                        <form onSubmit={handleJoinSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', color: 'white', marginBottom: '8px' }}>
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '14px',
                                        borderRadius: '10px',
                                        border: '2px solid rgba(255, 255, 255, 0.2)',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        color: 'white',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', color: 'white', marginBottom: '8px' }}>
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '14px',
                                        borderRadius: '10px',
                                        border: '2px solid rgba(255, 255, 255, 0.2)',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        color: 'white',
                                        fontSize: '1rem'
                                    }}
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <label style={{ display: 'block', color: 'white', marginBottom: '15px' }}>
                                    Areas of Interest
                                </label>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {['Job Placement', 'Skill Training', 'Entrepreneurship', 'Higher Education', 'Mentorship', 'Networking'].map(interest => (
                                        <button
                                            key={interest}
                                            type="button"
                                            onClick={() => handleInterestToggle(interest)}
                                            style={{
                                                background: formData.interests.includes(interest)
                                                    ? '#ff6b35'
                                                    : 'rgba(255, 255, 255, 0.1)',
                                                color: 'white',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                                padding: '8px 16px',
                                                borderRadius: '20px',
                                                cursor: 'pointer',
                                                fontSize: '0.9rem',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {interest}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={styles.fillBtn}
                                style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}
                            >
                                Join Community Now
                            </button>
                        </form>

                        <p style={{
                            textAlign: 'center',
                            color: 'rgba(255, 255, 255, 0.7)',
                            marginTop: '20px',
                            fontSize: '0.9rem'
                        }}>
                            By joining, you agree to our Terms & Privacy Policy
                        </p>
                    </div>
                </div>
            )}

            <div className={styles.veerNxtPage}>
                {/* Hero Section */}
                <section id="hero" className={styles.heroSection}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className={styles.heroContent}>
                                    <h4 className={styles.subtitle}>The Brotherhood Never Ends. It Evolves.</h4>
                                    <h1 className={styles.title}>Join the VEER-NXT Community</h1>
                                    <p className={styles.description}>
                                        India's most trusted network for Agniveers & Veterans to learn, grow, earn, and serve with purpose.
                                    </p>



                                    <div className={styles.statsGrid}>
                                        <div className={styles.statItem}>
                                            <div className={styles.statNumber}>10,000+</div>
                                            <div className={styles.statLabel}>Members</div>
                                        </div>
                                        <div className={styles.statItem}>
                                            <div className={styles.statNumber}>500+</div>
                                            <div className={styles.statLabel}>Mentors</div>
                                        </div>
                                        <div className={styles.statItem}>
                                            <div className={styles.statNumber}>85%</div>
                                            <div className={styles.statLabel}>Placement</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className={styles.heroImage}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src="/VEER/assets/img/about/img-1.jpg"
                                            alt="VEER-NXT Community"
                                            className="img-fluid"
                                        />
                                        <div className={styles.floatingBadge}>
                                            <div className={styles.badgeIcon}>🎖️</div>
                                            <div className={styles.badgeText}>Sena Saathi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Features */}
                <section className={styles.communityFeatures}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Why Join VEER-NXT?</h2>
                        <div className={styles.featuresGrid}>
                            {communityFeatures.map((feature, index) => (
                                <div key={index} className={styles.featureCard}>
                                    <div className={styles.featureIcon}>{feature.icon}</div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section id="programs" className={styles.programsSection}>
                    <div className="container">
                        <h2 style={{ color: 'var(--primary-color)' }} className={styles.sectionTitle}>Our Community Programs</h2>
                        <div className={styles.programsGrid}>
                            {programs.map((program, index) => (
                                <div key={index} className={styles.programCard}>
                                    <div className={styles.programHeader}>
                                        <div className={styles.programBadge}>{program.badge}</div>
                                        <div className={styles.programIcon}>{program.icon}</div>
                                        <h3 className={styles.programTitle}>{program.title}</h3>
                                        <p className={styles.programSubtitle}>{program.subtitle}</p>
                                    </div>
                                    <div className={styles.programContent}>
                                        <p className={styles.programDescription}>{program.description}</p>
                                        <ul className={styles.programFeatures}>
                                            {program.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <FaCheck /> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className={styles.programCta}>
                                            <button
                                                className={styles.fillBtn}
                                                style={{ padding: '12px 30px' }}
                                                onClick={() => setIsModalOpen(true)}
                                            >
                                                Enroll Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className={styles.testimonialsSection}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Success Stories</h2>
                        <div className="row">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="col-md-4">
                                    <div className={styles.testimonialCard}>
                                        <div className={styles.testimonialText}>
                                            <FaQuoteLeft style={{
                                                marginRight: '10px',
                                                color: '#ff6b35',
                                                fontSize: '1.2rem'
                                            }} />
                                            {testimonial.text}
                                        </div>
                                        <div className={styles.testimonialAuthor}>
                                            <div className={styles.authorAvatar}>
                                                {testimonial.initial}
                                            </div>
                                            <div className={styles.authorInfo}>
                                                <h4>{testimonial.name}</h4>
                                                <p>{testimonial.role}</p>
                                                <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                                                    {[1, 2, 3, 4, 5].map(star => (
                                                        <FaStar key={star} style={{ color: '#ffcc00', fontSize: '0.9rem' }} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
               
            </div>
        </>
    );
}

export default VeerNxtCommunityPage;