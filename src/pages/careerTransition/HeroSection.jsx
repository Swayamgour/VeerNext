import React, { useState } from 'react';
import styles from '../../css/career.module.css';
import {
    FaChevronDown,
    FaShieldAlt,
    FaMedal,
    FaBullseye,
    FaStar,
    FaCheck,
    FaUserTie,
    FaGraduationCap,
    FaIdBadge,
    FaLock,
    FaEnvelope,
    FaPhone,
    FaUserPlus,
    FaRocket,
    FaMapMarkerAlt,
    FaBriefcase,
    FaChartLine
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";


const HeroSection = () => {
    const navigate = useNavigate();
    // const [formData, setFormData] = useState({
    //     fullName: '',
    //     studentId: '',
    //     email: '',
    //     phone: '',
    //     password: '',
    //     confirmPassword: ''
    // });

    const [formData, setFormData] = useState({
        fullName: "",
        studentId: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        skills: [],          // 👈 multi select
        previousJob: "",
        currentStatus: []  // 👈 dropdown
    });

    // const skillsOptions = [
    //     "JavaScript",
    //     "React",
    //     "Node.js",
    //     "HTML & CSS",
    //     "UI/UX",
    //     "Python",
    //     "Data Analysis"
    // ];

    const skillsOptions = [
        { value: " ", label: "Select skills " },
        { value: "javascript", label: "JavaScript" },
        { value: "react", label: "React" },
        { value: "node", label: "Node.js" },
        { value: "htmlcss", label: "HTML & CSS" },
        { value: "uiux", label: "UI / UX" },
        { value: "python", label: "Python" }
    ];



    const handleMultiSelect = (e) => {
        const values = Array.from(e.target.selectedOptions, option => option.value);
        setFormData({ ...formData, skills: values });
    };



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.heroWrapper}>
                    {/* Left Content */}
                    <div className={styles.leftContent}>
                        {/* Top Badge */}
                        <div className={styles.topBadge}>
                            <FaShieldAlt className={styles.badgeIcon} />
                            <span>Trusted Career Platform for Veterans</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className={styles.mainHeading}>
                            Your Next Mission:
                            <span className={styles.primaryText}> From Uniform </span>
                            to
                            <span className={styles.successText}> Civilian Success</span>
                        </h1>

                        {/* Subtitle */}
                        <p className={styles.subtitle}>
                            Get personalized career pathways in government, PSU, banking, police,
                            and corporate sectors with AI-powered guidance.
                        </p>

                        {/* Features */}
                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <FaCheck className={styles.featureCheck} />
                                <span>AI-Powered Career Mapping</span>
                            </div>
                            <div className={styles.feature}>
                                <FaCheck className={styles.featureCheck} />
                                <span>500+ Govt & PSU Exams</span>
                            </div>
                            <div className={styles.feature}>
                                <FaCheck className={styles.featureCheck} />
                                <span>Personalized Roadmap</span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>10,000+</div>
                                <div className={styles.statLabel}>Veterans Helped</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>500+</div>
                                <div className={styles.statLabel}>Career Paths</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>4.9</div>
                                <div className={styles.statLabel}>Rating</div>
                            </div>
                        </div>


                        <div className={styles.trustIndicators}>
                            <div className={styles.trustItem}>
                                <FaMedal className={styles.trustIcon} />
                                <span>Defence Ministry Approved</span>
                            </div>
                            <div className={styles.trustItem}>
                                <FaBullseye className={styles.trustIcon} />
                                <span>Personalized Matching</span>
                            </div>
                            <div className={styles.trustItem}>
                                <FaStar className={styles.trustIcon} />
                                <span>4.9/5 Veteran Rating</span>
                            </div>
                        </div>

                        {/* CTA Button */}

                    </div>

                    {/* Right Form */}
                    <div>

                        <div className={styles.rightForm}>
                            <div className={styles.formCard}>

                                <form onSubmit={handleSubmit} className={styles.registrationForm}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Full Name *</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                placeholder="John Doe"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Student ID *</label>
                                            <input
                                                type="text"
                                                name="studentId"
                                                placeholder="STU2023001"
                                                required
                                                value={formData.studentId}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="student@example.com"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="+91 9876543210"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Password *</label>
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Create password"
                                                required
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Confirm Password *</label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm password"
                                                required
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>










                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Previous Job</label>
                                            <input
                                                type="text"
                                                name="previousJob"
                                                placeholder="e.g. Sales Executive"
                                                value={formData.previousJob}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>Current Status *</label>
                                            <select

                                                name="currentStatus"
                                                value={formData.currentStatus}
                                                onChange={handleChange}
                                                required
                                                className={styles.selectInput}
                                            >
                                                <option value="">Select your status</option>
                                                <option value="Student">Student</option>
                                                <option value="Working Professional">Working Professional</option>
                                                <option value="Looking for Job">Looking for Job</option>
                                                <option value="Career Switch">Career Switch</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>

                                        <div className={styles.formGroup}>
                                            <label>Current Status *</label>
                                            <select

                                                name="currentStatus"
                                                value={formData.currentStatus}
                                                onChange={handleChange}
                                                required
                                                className={styles.selectInput}
                                            >
                                                {/* <option value="">Select your status</option>
                                            <option value="Student">Student</option>
                                            <option value="Working Professional">Working Professional</option>
                                            <option value="Looking for Job">Looking for Job</option>
                                            <option value="Career Switch">Career Switch</option> */}

                                                {skillsOptions?.map((item, index) => (
                                                    <option key={index} value={item.value}>{item.label}</option>
                                                ))}
                                            </select>
                                        </div>


                                    </div>





                                    <div className={styles.submitButtonCon}>
                                        <button type="submit" className={styles.submitButton}>
                                            <FaUserPlus className={styles.userIcon} />
                                            Create Free Account
                                        </button>

                                    </div>
                                    <div className={styles.formFooter}>

                                        <p className={styles.login}>
                                            Already have an account?
                                            <span onClick={() => navigate('/Login')} style={{ color: 'var(--primary-color)' }}>
                                                Login
                                            </span>
                                        </p>
                                    </div>
                                </form>

                                {/* Trust Indicators */}



                            </div>

                        </div>
                        <div className={styles.getStartBtn}>

                            <button
                                onClick={() => navigate('/FreeCareerReportPage')}
                                className={styles.ctaButton}
                            >
                                <FaRocket className={styles.rocketIcon} />
                                Get Your Free Career Report
                                <FaChevronDown className={styles.arrowIcon} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Features */}

            </div>
        </section>
    );
};

export default HeroSection;