import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaChevronDown,
    FaShieldAlt,
    FaMedal,
    FaBullseye,
    FaStar,
    FaCheck,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaGraduationCap,
    FaBriefcase,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaFileAlt,
    FaChartLine,
    FaUsers,
    FaAward,
    FaDownload,
    FaArrowLeft
} from 'react-icons/fa';
import styles from '../../css/freeCareerReport.module.css';
import AllPageHeader from '../components/AllPageHeader';

const FreeCareerReportPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceBranch: '',
        currentRank: '',
        yearsOfService: '',
        qualification: '',
        location: '',
        careerGoal: '',
        immediatePlan: ''
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

        // Simulate API call and report generation
        setTimeout(() => {
            setLoading(false);
            // Navigate to report download page
            navigate('/report-download', { state: { formData } });
        }, 3000);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const benefits = [
        {
            icon: <FaChartLine />,
            title: "AI-Powered Career Mapping",
            description: "Our AI analyzes your military skills and maps them to 500+ civilian job roles with growth potential"
        },
        {
            icon: <FaFileAlt />,
            title: "Personalized Roadmap",
            description: "Step-by-step action plan with timelines, resources, and milestone tracking"
        },
        {
            icon: <FaUsers />,
            title: "Expert Mentorship Access",
            description: "Connect with successful veterans and industry experts for guidance"
        },
        {
            icon: <FaAward />,
            title: "Skill Gap Analysis",
            description: "Identify missing skills and get recommendations for training programs"
        },
        {
            icon: <FaBriefcase />,
            title: "Job Market Insights",
            description: "Current salary trends, in-demand skills, and industry growth projections"
        },
        {
            icon: <FaDownload />,
            title: "Downloadable Report",
            description: "Get a detailed PDF report with all findings and recommendations"
        }
    ];

    return (
        <>
            <AllPageHeader props="Free Career Report" />


            <div className={styles.freeCareerReportPage}>
                <div className={styles.backgroundPattern}></div>

                <div className={styles.freeCareerReportContainer}>

                    {/* Header Section */}
                    <div className={styles.reportHeader}>
                        {/* Badge */}
                        

                        {/* Main Headline */}
                        <div className={styles.headlineGroup}>
                            {/* <h1 className={styles.heroLead}>Your Free Career Report</h1> */}
                            <h2 className={styles.heroTitle}>
                                From Uniform to
                                Civilian Success
                            </h2>
                            <p className={styles.heroSubtitle}>
                                Get your personalized career pathways in government, PSU, banking, police, and corporate sectors
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
                    </div>

                    {/* Stats Sidebar */}
                    <div className={styles.statsSidebar}>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Govt Exams Access</div>
                            {/* <div className={styles.statProgress} style={{ width: '100%' }}></div> */}
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>95%</div>
                            <div className={styles.statLabel}>Success Rate</div>
                            {/* <div className={styles.statProgress} style={{ width: '95%' }}></div> */}
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>24/7</div>
                            <div className={styles.statLabel}>Expert Guidance</div>
                            {/* <div className={styles.statProgress} style={{ width: '100%' }}></div> */}
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>10K+</div>
                            <div className={styles.statLabel}>Veterans Community</div>
                            {/* <div className={styles.statProgress} style={{ width: '90%' }}></div> */}
                        </div>
                    </div>

                    {/* Report Form Section */}
                    <div className={styles.reportFormSection}>
                        <h2 className={styles.whatYouGetTitle}>
                            Get Your Free Career Report
                        </h2>

                        <form onSubmit={handleSubmit} className={styles.reportForm}>

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
                                        className={styles.formInput}
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
                                        className={styles.formInput}
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
                                        className={styles.formInput}
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
                                        className={styles.formInput}
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
                                        className={styles.formInput}
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
                                        className={styles.formInput}
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

                            {/* Qualifications */}
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaGraduationCap style={{ marginRight: '8px' }} />
                                        Highest Qualification *
                                    </label>
                                    <select
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleInputChange}
                                        className={styles.formInput}
                                        required
                                    >
                                        <option value="">Select Qualification</option>
                                        <option value="10th">10th Pass</option>
                                        <option value="12th">12th Pass</option>
                                        <option value="diploma">Diploma</option>
                                        <option value="graduate">Graduate</option>
                                        <option value="postgraduate">Post Graduate</option>
                                        <option value="professional">Professional Degree</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>
                                        <FaMapMarkerAlt style={{ marginRight: '8px' }} />
                                        Preferred Location *
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className={styles.formInput}
                                        placeholder="City/State for job search"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Career Goals */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Career Goal *</label>
                                <div className={styles.radioGroup}>
                                    <label className={styles.radioOption}>
                                        <input
                                            type="radio"
                                            name="careerGoal"
                                            value="government"
                                            checked={formData.careerGoal === 'government'}
                                            onChange={handleInputChange}
                                            className={styles.radioInput}
                                            required
                                        />
                                        <span className={styles.radioLabel}>Government Job</span>
                                    </label>
                                    <label className={styles.radioOption}>
                                        <input
                                            type="radio"
                                            name="careerGoal"
                                            value="corporate"
                                            checked={formData.careerGoal === 'corporate'}
                                            onChange={handleInputChange}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.radioLabel}>Corporate Sector</span>
                                    </label>
                                    <label className={styles.radioOption}>
                                        <input
                                            type="radio"
                                            name="careerGoal"
                                            value="entrepreneurship"
                                            checked={formData.careerGoal === 'entrepreneurship'}
                                            onChange={handleInputChange}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.radioLabel}>Entrepreneurship</span>
                                    </label>
                                    <label className={styles.radioOption}>
                                        <input
                                            type="radio"
                                            name="careerGoal"
                                            value="higher-education"
                                            checked={formData.careerGoal === 'higher-education'}
                                            onChange={handleInputChange}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.radioLabel}>Higher Education</span>
                                    </label>
                                </div>
                            </div>

                            {/* Immediate Plan */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Immediate Plan After Service *</label>
                                <div className={styles.radioGroup}>
                                    <label className={styles.radioOption}>
                                        <input
                                            type="radio"
                                            name="immediatePlan"
                                            value="job"
                                            checked={formData.immediatePlan === 'job'}
                                            onChange={handleInputChange}
                                            className={styles.radioInput}
                                            required
                                        />
                                        <span className={styles.radioLabel}>Find a Job Immediately</span>
                                    </label>
                                    <label className={styles.radioOption}>
                                        <input
                                            type="radio"
                                            name="immediatePlan"
                                            value="training"
                                            checked={formData.immediatePlan === 'training'}
                                            onChange={handleInputChange}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.radioLabel}>Take Training First</span>
                                    </label>
                                    <label className={styles.radioOption}>
                                        <input
                                            type="radio"
                                            name="immediatePlan"
                                            value="exam-prep"
                                            checked={formData.immediatePlan === 'exam-prep'}
                                            onChange={handleInputChange}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.radioLabel}>Prepare for Govt Exams</span>
                                    </label>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className={styles.ctaGroup}>
                                <button
                                    type="submit"
                                    className={`mission-btn fill-btn ${styles.missionBtn}`}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span>Generating Your Report...</span>
                                            <div className={styles.loadingSpinner} style={{
                                                width: '20px',
                                                height: '20px',
                                                borderWidth: '2px'
                                            }}></div>
                                        </>
                                    ) : (
                                        <>
                                            <span>Get Your Free Career Report</span>
                                            <FaChevronDown />
                                        </>
                                    )}
                                </button>
                            </div>

                        </form>
                    </div>

                    {/* What You Get Section */}
                    <div className={styles.whatYouGet}>
                        <h2 className={styles.whatYouGetTitle}>What's Included in Your Free Report</h2>
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
            </div>
        </>
    );
};

export default FreeCareerReportPage;