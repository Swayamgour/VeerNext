import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AllPageHeader from '../components/AllPageHeader';
// import './StartMissionPage.css';

import styles from '../../css/career.module.css';

const StartMissionPage = () => {
    const [step, setStep] = useState(1);
    const [missionData, setMissionData] = useState({
        serviceBranch: '',
        rank: '',
        yearsOfService: '',
        skills: [],
        careerInterest: '',
        locationPreference: '',
        timeline: '',
    });

    const careerPaths = [
        {
            id: 1,
            title: 'Corporate Leadership',
            description: 'Transition into corporate management roles',
            icon: 'fas fa-briefcase',
            duration: '3-6 months',
            successRate: '92%',
            steps: ['Skill Assessment', 'Corporate Training', 'Interview Prep', 'Placement']
        },
        {
            id: 2,
            title: 'Government Services',
            description: 'State and Central government positions',
            icon: 'fas fa-landmark',
            duration: '6-12 months',
            successRate: '85%',
            steps: ['Exam Guidance', 'Documentation', 'Physical Training', 'Interview']
        },
        {
            id: 3,
            title: 'Entrepreneurship',
            description: 'Start your own business with veteran benefits',
            icon: 'fas fa-chart-line',
            duration: '4-8 months',
            successRate: '78%',
            steps: ['Idea Validation', 'Funding Assistance', 'Mentorship', 'Launch']
        },
        // {
        //     id: 4,
        //     title: 'Defense PSUs',
        //     description: 'Public Sector Undertakings in defense',
        //     icon: 'fas fa-shield-alt',
        //     duration: '2-4 months',
        //     successRate: '88%',
        //     steps: ['Application', 'Technical Round', 'Medical', 'Joining']
        // }
    ];

    const serviceBranches = [
        'Indian Army', 'Indian Navy', 'Indian Air Force', 'Coast Guard', 'Para Military Forces'
    ];

    const handleNextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const handlePrevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMissionData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <AllPageHeader props="Start Your Mission" />
            <div className="start-mission-page">
                {/* Hero Section */}
                <section className="mission-hero">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h1 className="hero-title">
                                    Mission <span className="highlight">Reintegration</span>
                                </h1>
                                <p className="hero-subtitle">
                                    Your transition from military to civilian life begins here.
                                    We provide personalized roadmap for your next mission.
                                </p>
                                <div className="hero-stats">
                                    <div className="stat-item">
                                        <h3>5,000+</h3>
                                        <p>Veterans Placed</p>
                                    </div>
                                    <div className="stat-item">
                                        <h3>94%</h3>
                                        <p>Success Rate</p>
                                    </div>
                                    <div className="stat-item">
                                        <h3>300+</h3>
                                        <p>Partner Companies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero-image">
                                    <img src="/assets/img/about/banner-1.webp" alt="Veteran Success" style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Planning Wizard */}

                <section className={styles.opportunitySection}>
                    <div className={styles.benefitsContainer}>

                        {/* Section Header */}
                        <div className={styles.benefitsHeader}>


                            <div className={styles.headerDecorator}>
                                <div className={styles.decLine}></div>
                                <span className={styles.decText}>Plan Your Mission </span>
                                <div className={styles.decLine}></div>
                            </div>

                            <h2 className={styles.sectionTitle}>
                                {/* Mission Benefits for <span className={styles.titleHighlight}>Agniveers</span> */}
                                Complete these 4 steps to get your personalized reintegration plan
                            </h2>

                            {/* <p className={styles.benefitsSectionSubtitle}>
                                Comprehensive tools and resources designed specifically for your transition journey
                            </p> */}
                        </div>
                        {/* <section className="mission-wizard-section">
                            <div className="container">
                                <div className="wizard-header">
                                    <h2>Plan Your Mission</h2>
                                    <p>Complete these 4 steps to get your personalized reintegration plan</p>
                                </div> */}

                        {/* Progress Steps */}
                        <div className="progress-steps">
                            {[1, 2, 3, 4].map((stepNum) => (
                                <div key={stepNum} className={`step ${stepNum === step ? 'active' : stepNum < step ? 'completed' : ''}`}>
                                    <div className="step-circle">{stepNum}</div>
                                    <div className="step-label">
                                        {stepNum === 1 && 'Service Details'}
                                        {stepNum === 2 && 'Skills & Interests'}
                                        {stepNum === 3 && 'Career Path'}
                                        {stepNum === 4 && 'Action Plan'}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Step Content */}
                        <div className="wizard-content">
                            {step === 1 && (
                                <div className="step-content">
                                    <h3  className='step-content-heading'>Your Military Service</h3>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>Service Branch</label>
                                            <select
                                                name="serviceBranch"
                                                value={missionData.serviceBranch}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            >
                                                <option value="">Select Branch</option>
                                                {serviceBranches.map(branch => (
                                                    <option key={branch} value={branch}>{branch}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Rank at Discharge</label>
                                            <input
                                                type="text"
                                                name="rank"
                                                value={missionData.rank}
                                                onChange={handleInputChange}
                                                className="form-control"
                                                placeholder="e.g., Colonel, Major, Sergeant"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Years of Service</label>
                                            <input
                                                type="number"
                                                name="yearsOfService"
                                                value={missionData.yearsOfService}
                                                onChange={handleInputChange}
                                                className="form-control"
                                                placeholder="Number of years"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="step-content">
                                    <h3>Your Skills & Career Interests</h3>
                                    <div className="skills-selection">
                                        <h4>Select Your Core Skills</h4>
                                        <div className="skills-grid">
                                            {['Leadership', 'Project Management', 'Logistics', 'Cybersecurity',
                                                'Training', 'Operations', 'Technical Maintenance', 'Strategic Planning'].map(skill => (
                                                    <label key={skill} className="skill-checkbox">
                                                        <input type="checkbox" />
                                                        <span>{skill}</span>
                                                    </label>
                                                ))}
                                        </div>
                                        <div className="form-group">
                                            <label>Career Interest Area</label>
                                            <select name="careerInterest" className="form-control">
                                                <option value="">Select Interest</option>
                                                <option value="corporate">Corporate Sector</option>
                                                <option value="government">Government Services</option>
                                                <option value="entrepreneurship">Entrepreneurship</option>
                                                <option value="defense-psu">Defense PSUs</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="step-content">
                                    <h3>Choose Your Career Path</h3>
                                    <div className="career-paths-grid">
                                        {careerPaths.map(path => (
                                            <div key={path.id} className="career-path-card">
                                                <div className="path-icon">
                                                    <i className={path.icon}></i>
                                                </div>
                                                <h4 >{path.title}</h4>
                                                <p>{path.description}</p>
                                                <div className="path-meta">
                                                    <span><i className="fas fa-clock"></i> {path.duration}</span>
                                                    <span><i className="fas fa-chart-bar"></i> {path.successRate} Success</span>
                                                </div>
                                                <div className="path-steps">
                                                    {path.steps.map((step, idx) => (
                                                        <div key={idx} className="path-step">{step}</div>
                                                    ))}
                                                </div>
                                                <button className="select-path-btn">Select This Path</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="step-content">
                                    <h3 >Your Action Plan</h3>
                                    <div className="action-plan">
                                        <div className="plan-summary">
                                            <h4>Mission Summary</h4>
                                            <div className="summary-details">
                                                <p><strong>Service:</strong> {missionData.serviceBranch}</p>
                                                <p><strong>Timeline:</strong> 6 Months</p>
                                                <p><strong>Target Positions:</strong> 15-20 LPA</p>
                                                <p><strong>Training Required:</strong> Corporate Leadership Program</p>
                                            </div>
                                        </div>

                                        <button className="launch-mission-btn">
                                            <i className="fas fa-rocket"></i> Launch Mission
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="wizard-navigation">
                            {step > 1 && (
                                <button className="btn-prev" onClick={handlePrevStep}>
                                    <i className="fas fa-arrow-left"></i> Previous
                                </button>
                            )}
                            {step < 4 && (
                                <button className="btn-next" onClick={handleNextStep}>
                                    Next <i className="fas fa-arrow-right"></i>
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="success-stories">
                    <div className="container">
                        <h3 className="section-title">Veteran Success Stories</h3>
                        <div className="stories-grid">
                            <div className="story-card">
                                <div className="story-image">
                                    <img src="/assets/img/about/banner-5.webp" alt="Col. Rajesh Kumar" />
                                </div>
                                <div className="story-content">
                                    <h4>Col. Rajesh Kumar</h4>
                                    <p className="story-role">Now: Director at Tata Motors</p>
                                    <p className="story-quote">
                                        "The mission planning helped me transition seamlessly into corporate leadership."
                                    </p>
                                    <div className="story-stats">
                                        <span>Package: ₹45 LPA</span>
                                        <span>Transition: 4 months</span>
                                    </div>
                                </div>
                            </div>
                            {/* Add more story cards */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default StartMissionPage;