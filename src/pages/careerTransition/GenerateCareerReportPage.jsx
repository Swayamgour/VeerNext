import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaArrowRight,
    FaCheckCircle,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBriefcase,
    FaGraduationCap,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaShieldAlt,
    FaChartLine,
    FaFileAlt,
    FaArrowLeft
} from 'react-icons/fa';
import styles from '../../css/generateCareerReport.module.css';
import AllPageHeader from '../components/AllPageHeader';

const GenerateCareerReportPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceBranch: '',
        currentRank: '',
        yearsOfService: '',
        location: '',
        currentRole: '',
        careerGoals: '',
        preferredIndustries: '',
        skills: '',
        challenges: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            // Navigate to report result page
            navigate('/report-complete', { state: { formData } });
        }, 3000);
    };

    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };

    return (
        <>
            <AllPageHeader props="Generate Report " />
            <div className={styles.generateCareerReportPage}>
                <div className={styles.generateCareerReportContainer}>

                    {/* Header Section */}
                    <div className={styles.generateReportHeader}>
                        <h1 className={styles.generateReportMainTitle}>
                            Generate Your Career Transition Report
                        </h1>
                        <p className={styles.generateReportSubTitle}>
                            Get a personalized, comprehensive report that maps your military skills to civilian careers
                            and provides a clear roadmap for your successful transition
                        </p>

                        {/* Features */}
                        <div className={styles.howItWorksCtaFeatures}>
                            <div className={styles.ctaFeature}>
                                <FaCheckCircle className={styles.ctaFeatureIcon} />
                                <span >No Credit Card Required</span>
                            </div>
                            <div className={styles.ctaFeature}>
                                <FaCheckCircle className={styles.ctaFeatureIcon} />
                                <span >Free Career Assessment</span>
                            </div>
                            <div className={styles.ctaFeature}>
                                <FaCheckCircle className={styles.ctaFeatureIcon} />
                                <span >100% Confidential</span>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className={styles.timelineSection}>
                        <h2 className={styles.timelineTitle}>How It Works</h2>
                        <div className={styles.timelineSteps}>
                            <div className={styles.timelineStep}>
                                <div className={styles.stepNumber}>1</div>
                                <h3 className={styles.stepTitle}>Fill Your Details</h3>
                                <p className={styles.stepDescription}>
                                    Provide your service information and career preferences
                                </p>
                            </div>
                            <div className={styles.timelineStep}>
                                <div className={styles.stepNumber}>2</div>
                                <h3 className={styles.stepTitle}>AI Analysis</h3>
                                <p className={styles.stepDescription}>
                                    Our AI analyzes 5000+ successful transitions
                                </p>
                            </div>
                            <div className={styles.timelineStep}>
                                <div className={styles.stepNumber}>3</div>
                                <h3 className={styles.stepTitle}>Get Your Report</h3>
                                <p className={styles.stepDescription}>
                                    Receive personalized report within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Form */}
                    <div className={styles.formContainer}>
                        <h3>Ready to Start Your Journey?</h3>
                        <p style={{
                            textAlign: 'center',
                            color: '#666',
                            marginBottom: '30px',
                            fontSize: '1.1rem'
                        }}>
                            Fill in your details to generate your personalized career transition report
                        </p>

                        <form onSubmit={handleSubmit} className={styles.careerReportForm}>

                            {/* Personal Information */}
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaUser style={{ marginRight: '8px' }} />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className={styles.formControl}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaEnvelope style={{ marginRight: '8px' }} />
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={styles.formControl}
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaPhone style={{ marginRight: '8px' }} />
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={styles.formControl}
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaShieldAlt style={{ marginRight: '8px' }} />
                                        Service Branch *
                                    </label>
                                    <select
                                        name="serviceBranch"
                                        value={formData.serviceBranch}
                                        onChange={handleInputChange}
                                        className={styles.formControl}
                                        required
                                    >
                                        <option value="">Select Service Branch</option>
                                        <option value="army">Indian Army</option>
                                        <option value="navy">Indian Navy</option>
                                        <option value="airforce">Indian Air Force</option>
                                        <option value="coast-guard">Indian Coast Guard</option>
                                        <option value="paramilitary">Paramilitary Forces</option>
                                    </select>
                                </div>
                            </div>

                            {/* Service Details */}
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaGraduationCap style={{ marginRight: '8px' }} />
                                        Current Rank/Position *
                                    </label>
                                    <input
                                        type="text"
                                        name="currentRank"
                                        value={formData.currentRank}
                                        onChange={handleInputChange}
                                        className={styles.formControl}
                                        placeholder="e.g., Major, Captain, Sergeant"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaCalendarAlt style={{ marginRight: '8px' }} />
                                        Years of Service *
                                    </label>
                                    <select
                                        name="yearsOfService"
                                        value={formData.yearsOfService}
                                        onChange={handleInputChange}
                                        className={styles.formControl}
                                        required
                                    >
                                        <option value="">Select Years</option>
                                        <option value="0-5">0-5 years</option>
                                        <option value="6-10">6-10 years</option>
                                        <option value="11-15">11-15 years</option>
                                        <option value="16-20">16-20 years</option>
                                        <option value="21+">21+ years</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaMapMarkerAlt style={{ marginRight: '8px' }} />
                                        Preferred Location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className={styles.formControl}
                                        placeholder="City/State for job search"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaBriefcase style={{ marginRight: '8px' }} />
                                        Current Role/Specialization
                                    </label>
                                    <input
                                        type="text"
                                        name="currentRole"
                                        value={formData.currentRole}
                                        onChange={handleInputChange}
                                        className={styles.formControl}
                                        placeholder="e.g., Logistics, Engineering, HR"
                                    />
                                </div>
                            </div>

                            {/* Career Goals */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    <FaChartLine style={{ marginRight: '8px' }} />
                                    Career Goals & Aspirations *
                                </label>
                                <textarea
                                    name="careerGoals"
                                    value={formData.careerGoals}
                                    onChange={handleInputChange}
                                    className={styles.formControl}
                                    placeholder="Describe your career goals, industries of interest, and what you're looking for in your next role"
                                    rows="3"
                                    required
                                />
                            </div>

                            {/* Skills & Challenges */}
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaFileAlt style={{ marginRight: '8px' }} />
                                        Key Skills & Certifications
                                    </label>
                                    <textarea
                                        name="skills"
                                        value={formData.skills}
                                        onChange={handleInputChange}
                                        className={styles.formControl}
                                        placeholder="List your key skills, certifications, and achievements"
                                        rows="3"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        Challenges in Transition
                                    </label>
                                    <textarea
                                        name="challenges"
                                        value={formData.challenges}
                                        onChange={handleInputChange}
                                        className={styles.formControl}
                                        placeholder="Any specific challenges you anticipate in your transition"
                                        rows="3"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className={styles.ctaButtonsSection}>
                                <div className={styles.missionCtaButtons}>
                                    <button
                                        type="submit"
                                        className={`${styles.missionBtn} ${loading ? 'disabled' : ''}`}
                                        disabled={loading}
                                        style={{
                                            border: '1px solid var(--primary-color)',
                                            position: 'relative'
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <span>Generating Your Report...</span>
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
                                                <span>Generate My Career Transition Report</span>
                                                <FaArrowRight />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>

                    {/* Back Button */}


                </div>
            </div>
        </>
    );
};

export default GenerateCareerReportPage;