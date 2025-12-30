import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {

    FaArrowLeft,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaShieldAlt,
    FaGraduationCap as FaGrad,
    FaMapMarkerAlt,
    FaRocket,
    // FaTrophy
} from 'react-icons/fa';
import styles from '../../css/joinCommunity.module.css';
import AllPageHeader from '../components/AllPageHeader';
import { benefits, interestsList, stats } from '../components/data';

function JoinCommunityPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceBranch: '',
        currentRank: '',
        yearsOfService: '',
        qualification: '',
        location: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setFormSubmitted(true);

            // Auto-redirect after 3 seconds
            setTimeout(() => {
                navigate('/welcome');
            }, 3000);
        }, 2000);
    };

    const handleBack = () => {
        navigate(-1);
    };


    return (
        <>
            <AllPageHeader props="JOIN VEER-NXT COMMUNITY" />
            {loading && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.loadingSpinner}></div>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Joining VEER-NXT Community</h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Setting up your profile and access...</p>
                </div>
            )}

            <div className={styles.joinCommunityPage}>
                <div className={styles.joinCommunityContainer}>

                    {/* Page Header */}
                    <div className={styles.pageHeader}>
                        <h1>Join the VEER-NXT Community</h1>
                        <p>
                            The Brotherhood Never Ends. It Evolves. Become part of India's most trusted network
                            for Agniveers & Veterans to learn, grow, earn, and serve with purpose.
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className={styles.statsSection}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                <div className={styles.statNumber}>{stat.number}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Benefits Section */}
                    <div className={styles.benefitsSection}>
                        <h2 className='heading-line mb-5' style={{textAlign:'center' }}>
                            Why Join VEER-NXT?
                        </h2>
                        <div className={styles.benefitsGrid}>
                            {benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefitCard}>
                                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Success Message */}
                    {formSubmitted ? (
                        <div className={styles.successMessage}>
                            <div className={styles.successIcon}>🎉</div>
                            <h3>Welcome to the Brotherhood!</h3>
                            <p>
                                Your registration is complete. You now have access to the entire
                                VEER-NXT community. We're redirecting you to your dashboard...
                            </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '15px',
                                marginTop: '20px'
                            }}>
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className={styles.fillBtn}
                                    style={{ padding: '12px 30px' }}
                                >
                                    Go to Dashboard
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Registration Form */
                        <div className={styles.formSection}>
                            <h2 className='heading-line'>Become a Member</h2>

                            <form onSubmit={handleSubmit} className={styles.joinForm}>

                                {/* Personal Information */}
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>
                                            <FaUser style={{ marginRight: '8px' }} />
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>
                                            <FaEnvelope style={{ marginRight: '8px' }} />
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email address"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>
                                            <FaPhone style={{ marginRight: '8px' }} />
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>
                                            <FaMapMarkerAlt style={{ marginRight: '8px' }} />
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            placeholder="City/State"
                                        />
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className={styles.serviceDetails}>
                                    <h4 className='heading-line d-flex align-items-center'>
                                        <FaShieldAlt /> Service Information
                                    </h4>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Service Branch *</label>
                                            <select
                                                name="serviceBranch"
                                                value={formData.serviceBranch}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select Branch</option>
                                                <option value="army">Indian Army</option>
                                                <option value="navy">Indian Navy</option>
                                                <option value="airforce">Indian Air Force</option>
                                                <option value="coast-guard">Indian Coast Guard</option>
                                                <option value="paramilitary">Paramilitary Forces</option>
                                                <option value="agniveer">Agniveer</option>
                                            </select>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>Current Rank/Position</label>
                                            <input
                                                type="text"
                                                name="currentRank"
                                                value={formData.currentRank}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Major, Captain, Sergeant"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Years of Service</label>
                                            <select
                                                name="yearsOfService"
                                                value={formData.yearsOfService}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Years</option>
                                                <option value="0-5">0-5 years</option>
                                                <option value="6-10">6-10 years</option>
                                                <option value="11-15">11-15 years</option>
                                                <option value="16-20">16-20 years</option>
                                                <option value="21+">21+ years</option>
                                            </select>
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label>
                                                <FaGrad style={{ marginRight: '8px' }} />
                                                Highest Qualification
                                            </label>
                                            <select
                                                name="qualification"
                                                value={formData.qualification}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Qualification</option>
                                                <option value="10th">10th Pass</option>
                                                <option value="12th">12th Pass</option>
                                                <option value="diploma">Diploma</option>
                                                <option value="graduate">Graduate</option>
                                                <option value="postgraduate">Post Graduate</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Interests Section */}
                                <div className={styles.interestsSection}>
                                    <h4 >
                                        <FaRocket style={{ marginRight: '10px' }} />
                                        Areas of Interest (Select all that apply)
                                    </h4>
                                    <div className={styles.interestsGrid}>
                                        {interestsList.map((interest, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className={`${styles.interestTag} ${formData.interests.includes(interest) ? styles.selected : ''
                                                    }`}
                                                onClick={() => handleInterestToggle(interest)}
                                            >
                                                {interest}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Terms and Conditions */}
                                <div style={{
                                    background: '#f0f8ff',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    margin: '25px 0'
                                }}>
                                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <input
                                            type="checkbox"
                                            required
                                            style={{ marginTop: '4px' }}
                                        />
                                        <span style={{ color: '#555', fontSize: '0.95rem' }}>
                                            I agree to the Terms & Conditions and Privacy Policy. I understand that
                                            VEER-NXT is a free community for defense personnel and all services are
                                            provided at no cost.
                                        </span>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <div className={styles.submitButton}>
                                    <button type="submit" className={styles.fillBtn}>
                                        👉 Join the Community
                                    </button>
                                    <p style={{
                                        textAlign: 'center',
                                        color: '#666',
                                        marginTop: '15px',
                                        fontSize: '0.95rem'
                                    }}>
                                        Free forever • No credit card required • 100% Confidential
                                    </p>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Back Button */}
                 

                </div>
            </div>
        </>
    );
}

export default JoinCommunityPage;