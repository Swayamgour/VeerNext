import React from 'react';
import styles from '../../css/career.module.css';
import {
    FaClipboardList,
    FaRobot,
    FaFileAlt,
    FaGraduationCap,
    FaTrophy,
    FaArrowRight,
    FaCheckCircle,
    FaUserShield
} from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'Fill a short form',
            description: 'Tell us your qualification, goals, location & preferences.',
            icon: <FaClipboardList />,
            color: 'step1',
            time: '2 Minutes',
            features: ['Personal Details', 'Service History', 'Career Goals']
        },
        {
            number: '2',
            title: 'AI Career Scan',
            description: 'Our system analyses your strengths, interests & service background.',
            icon: <FaRobot />,
            color: 'step2',
            time: 'Instant Analysis',
            features: ['Skills Assessment', 'Interest Mapping', 'Military Credit']
        },
        {
            number: '3',
            title: 'Receive Your Personalised Report',
            description: 'Exam suggestions + skill gaps + preparation timeline.',
            icon: <FaFileAlt />,
            color: 'step3',
            time: '24 Hours',
            features: ['Exam Recommendations', 'Skill Gap Analysis', 'Timeline Planning']
        },
        {
            number: '4',
            title: 'Begin Structured Training',
            description: 'Access mock tests, lessons, revision drills, and daily tasks.',
            icon: <FaGraduationCap />,
            color: 'step4',
            time: 'Daily Progress',
            features: ['Mock Tests', 'Study Material', 'Daily Tasks']
        },
        {
            number: '5',
            title: 'Achieve Civilian Victory',
            description: 'Secure a government or private sector job with confidence.',
            icon: <FaTrophy />,
            color: 'step5',
            time: 'Career Success',
            features: ['Job Placement', 'Interview Prep', 'Career Support']
        }
    ];

    return (
        <section className={styles.howItWorksSection}>
            <div className={styles.howItWorksContainer}>

                {/* Section Header */}
                <div className={styles.howItWorksHeader}>
                    <div className={styles.howItWorksHeaderDecorator}>
                        <div className={styles.howItWorksDecLine}></div>
                        <span className={styles.howItWorksDecText}>THE PROCESS</span>
                        <div className={styles.howItWorksDecLine}></div>
                    </div>

                    <h2 className={styles.sectionTitle}>
                        How It <span className={styles.titleHighlight}>Works</span>
                    </h2>

                    <p className={styles.howItWorksSubtitle}>
                        Simple. Fast. Personalised. Built for Soldiers by Soldiers.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className={styles.timelineContainer}>
                    <div className={styles.timelineLine}></div>

                    <div className={styles.howItWorksSteps}>
                        {steps.map((step, index) => (
                            <div key={index} className={`${styles.howItWorksStepCard} ${styles[step.color]}`}>

                                {/* Step Header */}
                                <div className={styles.stepHeader}>
                                    <div className={styles.stepNumberContainer}>
                                        <div className={styles.stepNumber}>
                                            {step.number}
                                        </div>
                                        <div className={styles.stepIcon}>
                                            {step.icon}
                                        </div>
                                    </div>

                                    <div className={styles.stepTime}>
                                        <span>{step.time}</span>
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className={styles.stepContent}>
                                    <h3 className={styles.cardTitle}>
                                        {step.title}
                                    </h3>
                                    <p className={styles.howItWorksStepDescription}>
                                        {step.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className={styles.stepFeatures}>
                                    {step.features.map((feature, idx) => (
                                        <div key={idx} className={styles.stepFeature}>
                                            <FaCheckCircle className={styles.stepFeatureIcon} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Connection Arrow */}
                                {index < steps.length - 1 && (
                                    <div className={styles.stepConnector}>
                                        <FaArrowRight className={styles.connectorArrow} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Banner */}
                <div className={styles.howItWorksTrustBanner}>
                    <div className={styles.trustBannerIcon}>
                        <FaUserShield />
                    </div>
                    <div className={styles.trustBannerContent}>
                        <h4>100% Confidential & Secure</h4>
                        <p>Your personal information and career data are protected with military-grade encryption</p>
                    </div>
                </div>

               


                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3>Ready to Start Your Journey?</h3>
                        <p>Get your personalized career transition report in just 24 hours</p>
                    </div>


                    <div className="mission-cta-buttons">
                        <button style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn ">
                            <span>Generate My Career Transition Report</span>
                            <FaArrowRight />
                        </button>
                    </div>

                    <div className={styles.howItWorksCtaFeatures}>
                        <div className={styles.ctaFeature}>
                            <FaCheckCircle className={styles.ctaFeatureIcon} />
                            <span className='text-white'>No Credit Card Required</span>
                        </div>
                        <div className={styles.ctaFeature}>
                            <FaCheckCircle className={styles.ctaFeatureIcon} />
                            <span className='text-white' >Free Career Assessment</span>
                        </div>
                        <div className={styles.ctaFeature}>
                            <FaCheckCircle className={styles.ctaFeatureIcon} />
                            <span className='text-white' >100% Confidential</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;