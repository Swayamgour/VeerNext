import React from 'react';
import styles from '../../css/careerCta.module.css';
import { FaCheck, FaDownload, FaChartLine, FaUserTie, FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AllPageHeader from '../components/AllPageHeader';

const CareerReport = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Pichle page par wapas jaye
    };

    const handleDownload = () => {
        // PDF download ka logic yaha aayega
        alert("Report download shuru ho raha hai!");
    };

    return (
        <>
            <AllPageHeader props="CAREER TRANSITION " />
            <div className={styles.careerReportPage}>
                <div className={styles.reportContainer}>

                    <div className={styles.reportHeader}>
                        <h1 className={styles.reportTitle}>Your Personal Career Transition Report</h1>
                        <p className={styles.reportSubtitle}>
                            Generated specifically for Indian Armed Forces veterans | Date: {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <div className={styles.reportContent}>

                        <div className={styles.reportCard}>
                            <FaChartLine className={styles.cardIcon} size={40} color="var( --primary-color)" />
                            <h3 className={styles.cardTitle}>Skills Assessment</h3>
                            <div className={styles.cardContent}>
                                <ul className={styles.reportList}>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Leadership: 95% Match
                                    </li>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Crisis Management: 92% Match
                                    </li>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Strategic Planning: 88% Match
                                    </li>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Team Management: 96% Match
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.reportCard}>
                            <FaUserTie className={styles.cardIcon} size={40} color="var( --primary-color)" />
                            <h3 className={styles.cardTitle}>Recommended Industries</h3>
                            <div className={styles.cardContent}>
                                <ul className={styles.reportList}>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Corporate Security Management
                                    </li>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Logistics & Supply Chain
                                    </li>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Project Management
                                    </li>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Government Defense Sector
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.reportCard}>
                            <FaGraduationCap className={styles.cardIcon} size={40} color="var( --primary-color)" />
                            <h3 className={styles.cardTitle}>Training Requirements</h3>
                            <div className={styles.cardContent}>
                                <ul className={styles.reportList}>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> PMP Certification (3 months)
                                    </li>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Corporate Communication Course
                                    </li>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Industry-specific Training
                                    </li>
                                    <li className={styles.reportListItem}>
                                        <FaCheck className={styles.listIcon} /> Digital Literacy Program
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <button className={styles.downloadBtn} onClick={handleDownload}>
                            <FaDownload style={{ marginRight: '10px' }} />
                            Download Full Report (PDF)
                        </button>

                        <button
                            onClick={handleGoBack}
                            style={{
                                background: 'transparent',
                                color: '#666',
                                border: '1px solid #ddd',
                                padding: '10px 25px',
                                // borderRadius: '25px',
                                marginTop: '20px',
                                cursor: 'pointer'
                            }}
                        >
                            ← Back to Home
                        </button>
                    </div>

                </div>
            </div>
        </>

    );
};

export default CareerReport;