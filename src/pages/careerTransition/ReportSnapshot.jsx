import React from 'react';
import styles from '../../css/career.module.css';
import {
    FaFileAlt,
    FaChartLine,
    FaCheckCircle,
    FaBookOpen,
    FaClipboardCheck,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaArrowRight,
    FaDownload,
    FaShieldAlt
} from 'react-icons/fa';

const ReportSnapshot = () => {
    const reportFeatures = [
        {
            title: 'Top 5 exams you should target',
            icon: <FaChartLine />,
            description: 'Personalized exam recommendations based on your profile',
            category: 'Strategy'
        },
        {
            title: 'Preparation difficulty level',
            icon: <FaFileAlt />,
            description: 'Realistic assessment of preparation effort required',
            category: 'Assessment'
        },
        {
            title: 'Eligibility confirmation',
            icon: <FaCheckCircle />,
            description: 'Age, qualification, physical fitness verification',
            category: 'Validation'
        },
        {
            title: 'Exam pattern & syllabus breakdown',
            icon: <FaBookOpen />,
            description: 'Detailed analysis of exam structure and topics',
            category: 'Analysis'
        },
        {
            title: 'Strengths & weaknesses analysis',
            icon: <FaClipboardCheck />,
            description: 'Identify your competitive advantages and gaps',
            category: 'Analysis'
        },
        {
            title: 'Recommended training modules',
            icon: <FaFileAlt />,
            description: 'Custom study materials and resources',
            category: 'Resources'
        },
        {
            title: 'Daily/weekly preparation tasks',
            icon: <FaCalendarAlt />,
            description: 'Structured study plan like military training',
            category: 'Planning'
        },
        {
            title: 'Timeline to crack the exam',
            icon: <FaChartLine />,
            description: 'Realistic roadmap to achieve success',
            category: 'Planning'
        },
        {
            title: 'Career salary expectations',
            icon: <FaMoneyBillWave />,
            description: 'Potential earnings and growth opportunities',
            category: 'Career'
        }
    ];

    const categories = ['All', 'Strategy', 'Assessment', 'Validation', 'Analysis', 'Resources', 'Planning', 'Career'];

    return (
        <section className={styles.reportSnapshotSection}>
            <div className={styles.reportSnapshotContainer}>

                {/* Section Header */}
                <div className={styles.reportSnapshotHeader}>
                    <div className={styles.reportSnapshotHeaderDecorator}>
                        <div className={styles.reportSnapshotDecLine}></div>
                        <span className={styles.reportSnapshotDecText}>REPORT DETAILS</span>
                        <div className={styles.reportSnapshotDecLine}></div>
                    </div>

                    <h2 className={styles.reportSnapshotTitle}>
                        Your Personalized Career <span className={styles.reportSnapshotTitleHighlight}>Report</span>
                    </h2>

                    <p className={styles.reportSnapshotSubtitle}>
                        Comprehensive analysis and roadmap for your successful transition
                    </p>
                </div>

                {/* Report Preview */}
                <div className={styles.reportPreview}>
                    <div className={styles.reportPreviewHeader}>
                        <div className={styles.reportPreviewIcon}>
                            <FaFileAlt />
                        </div>
                        <div className={styles.reportPreviewTitle}>
                            <h3>Career Transition Analysis Report</h3>
                            <p>Generated specifically for your military background and goals</p>
                        </div>
                    </div>

                    <div className={styles.reportPreviewStats}>
                        <div className={styles.reportStat}>
                            <div className={styles.reportStatNumber}>9+</div>
                            <div className={styles.reportStatLabel}>Comprehensive Sections</div>
                        </div>
                        <div className={styles.reportStat}>
                            <div className={styles.reportStatNumber}>500+</div>
                            <div className={styles.reportStatLabel}>Data Points Analyzed</div>
                        </div>
                        <div className={styles.reportStat}>
                            <div className={styles.reportStatNumber}>24h</div>
                            <div className={styles.reportStatLabel}>Delivery Time</div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className={styles.reportFeaturesGrid}>
                    {reportFeatures.map((feature, index) => (
                        <div key={index} className={styles.reportFeatureCard}>
                            <div className={styles.reportFeatureHeader}>
                                <div className={styles.reportFeatureIcon}>
                                    {feature.icon}
                                </div>
                                <div className={styles.reportFeatureCategory}>
                                    {feature.category}
                                </div>
                            </div>

                            <h4 className={styles.reportFeatureTitle}>
                                {feature.title}
                            </h4>

                            <p className={styles.reportFeatureDescription}>
                                {feature.description}
                            </p>

                            <div className={styles.reportFeatureNumber}>
                                0{index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Security & CTA */}
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
                            <p>Download a sample report to understand what you'll receive</p>
                        </div>

                        <div className={styles.reportCtaButtons}>
                            <button className={styles.reportPrimaryCta}>
                                <FaDownload className={styles.ctaIcon} />
                                <span>Download Sample Report</span>
                                <FaArrowRight className={styles.ctaArrow} />
                            </button>

                            <button className={styles.reportSecondaryCta}>
                                <span>Generate My Report</span>
                                <FaArrowRight className={styles.ctaArrow} />
                            </button>
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

export default ReportSnapshot;