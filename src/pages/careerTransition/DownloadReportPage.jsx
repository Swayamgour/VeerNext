import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaDownload,
    FaArrowRight,
    FaFilePdf,
    FaChartBar,
    FaUserCheck,
    FaLightbulb
} from 'react-icons/fa';
import styles from '../../css/downloadReport.module.css';
import AllPageHeader from '../components/AllPageHeader';

const DownloadReportPage = () => {
    const navigate = useNavigate();

    const handleDownload = () => {
        // PDF download logic
        alert("Sample report download shuru ho raha hai!");
    };

    const handleGenerateReport = () => {
        navigate('/generate-report');
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <>
            <AllPageHeader props="Sample Report " />
            <div className={styles.downloadReportPage}>
                <div className={styles.downloadReportContainer}>

                    {/* Header Section */}
                    <div className={styles.downloadReportHeader}>
                        <h1 className={styles.downloadReportTitle}>
                            Sample Career Transition Report
                        </h1>
                        <p className={styles.downloadReportSubtitle}>
                            Explore a detailed sample report to understand how we help Indian Armed Forces veterans
                            transition successfully into civilian careers. Download now!
                        </p>
                    </div>

                    {/* Preview Section */}
                    <div className={styles.downloadReportPreview}>
                        <h2 className={styles.previewTitle}>
                            <FaFilePdf /> What's Included in the Report
                        </h2>

                        <div className={styles.previewContent}>
                            <div className={styles.previewCard}>
                                <h3 className={styles.previewCardTitle}>Skills Analysis</h3>
                                <p className={styles.previewCardContent}>
                                    Detailed mapping of your military skills to civilian job requirements.
                                    Identify transferable skills and competency gaps.
                                </p>
                            </div>

                            <div className={styles.previewCard}>
                                <h3 className={styles.previewCardTitle}>Industry Recommendations</h3>
                                <p className={styles.previewCardContent}>
                                    Personalized industry suggestions based on your profile, experience,
                                    and market demand in India.
                                </p>
                            </div>

                            <div className={styles.previewCard}>
                                <h3 className={styles.previewCardTitle}>Salary Projections</h3>
                                <p className={styles.previewCardContent}>
                                    Realistic salary expectations across different cities and industries
                                    in the Indian job market.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className={styles.downloadFeatures}>
                        <div className={styles.featureCard}>
                            <FaChartBar className={styles.featureIcon} />
                            <h3 className={styles.featureTitle}>Data-Driven Insights</h3>
                            <p className={styles.featureDesc}>
                                Based on analysis of 5000+ successful veteran transitions
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <FaUserCheck className={styles.featureIcon} />
                            <h3 className={styles.featureTitle}>Personalized Recommendations</h3>
                            <p className={styles.featureDesc}>
                                Tailored specifically for Indian defense personnel
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <FaLightbulb className={styles.featureIcon} />
                            <h3 className={styles.featureTitle}>Actionable Steps</h3>
                            <p className={styles.featureDesc}>
                                Clear roadmap with timelines and resources
                            </p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className={styles.reportCtaButtons}>
                        <div className={styles.missionCtaButtons}>
                            <button
                                onClick={handleDownload}
                                className={`${styles.missionBtn} ${styles.fillBtn}`}
                            >
                                <FaDownload className={styles.ctaIcon} />
                                <span>Download Sample Report (PDF)</span>
                                <FaArrowRight className={styles.ctaArrow} />
                            </button>
                        </div>

                        <div className={styles.missionCtaButtons}>
                            <button
                                onClick={handleGenerateReport}
                                className={`${styles.missionBtn}`}
                                style={{ border: '2px solid var(--primary-color)' }}
                            >
                                <span>Generate My Report</span>
                                <FaArrowRight className={styles.ctaArrow} />
                            </button>
                        </div>
                    </div>

                    {/* Back Button */}

                </div>
            </div>
        </>
    );
};

export default DownloadReportPage;