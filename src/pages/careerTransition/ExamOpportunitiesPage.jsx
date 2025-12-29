import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaArrowRight,
    FaGraduationCap,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaRupeeSign,
    FaBook,
    FaUsers,
    FaChartLine,
    FaShieldAlt,
    FaBriefcase,
    FaUniversity,
    FaFileAlt,
    FaRegClock,
    FaCheckCircle,
    FaFilter
} from 'react-icons/fa';
import styles from '../../css/examOpportunities.module.css';
import AllPageHeader from '../components/AllPageHeader';

const ExamOpportunitiesPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [filters, setFilters] = useState({
        serviceBranch: '',
        qualification: '',
        ageLimit: '',
        location: '',
        examType: ''
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleExploreMore = () => {
        setLoading(true);

        // Simulate loading and show personalized results
        setTimeout(() => {
            setLoading(false);
            // Navigate to detailed results or show filtered results
            document.getElementById('examsGrid').scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const examCategories = [
        { id: 'all', label: 'All Exams' },
        { id: 'government', label: 'Government Jobs' },
        { id: 'defense', label: 'Defense' },
        { id: 'psu', label: 'PSU Jobs' },
        { id: 'banking', label: 'Banking' },
        { id: 'ssc', label: 'SSC' },
        { id: 'upsc', label: 'UPSC' },
        { id: 'state-level', label: 'State Level' }
    ];

    const examsData = [
        {
            id: 1,
            title: "UPSC CDS Examination",
            category: "defense",
            description: "Combined Defense Services Examination for entry into Indian Military Academy, Officers Training Academy, Indian Naval Academy, and Air Force Academy.",
            icon: <FaShieldAlt />,
            eligibility: "Graduate (Any Discipline)",
            ageLimit: "19-24 years",
            lastDate: "15 Dec 2024",
            attempts: "Unlimited till age limit",
            notification: "UPSC",
            salary: "₹56,100 - ₹1,77,500",
            badge: "Popular"
        },
        {
            id: 2,
            title: "SSC CGL",
            category: "government",
            description: "Staff Selection Commission Combined Graduate Level examination for various government posts.",
            icon: <FaUniversity />,
            eligibility: "Graduation",
            ageLimit: "18-32 years",
            lastDate: "30 Nov 2024",
            attempts: "Varies by category",
            notification: "SSC",
            salary: "₹35,400 - ₹1,12,400",
            badge: "High Demand"
        },
        {
            id: 3,
            title: "IBPS PO",
            category: "banking",
            description: "Institute of Banking Personnel Selection Probationary Officer examination for public sector banks.",
            icon: <FaBriefcase />,
            eligibility: "Graduation (Any)",
            ageLimit: "20-30 years",
            lastDate: "25 Oct 2024",
            attempts: "6 attempts",
            notification: "IBPS",
            salary: "₹38,000 - ₹63,000",
            badge: "Banking"
        },
        {
            id: 4,
            title: "Indian Army Technical Entry",
            category: "defense",
            description: "10+2 Technical Entry Scheme for Indian Army. Direct entry as Officer after training.",
            icon: <FaShieldAlt />,
            eligibility: "10+2 with PCM",
            ageLimit: "16.5-19.5 years",
            lastDate: "Ongoing",
            attempts: "No limit",
            notification: "Indian Army",
            salary: "₹56,100 - ₹1,77,500",
            badge: "Technical"
        },
        {
            id: 5,
            title: "RRB NTPC",
            category: "psu",
            description: "Railway Recruitment Board Non-Technical Popular Categories examination for various posts in Indian Railways.",
            icon: <FaUniversity />,
            eligibility: "Graduation",
            ageLimit: "18-33 years",
            lastDate: "20 Nov 2024",
            attempts: "No limit",
            notification: "RRB",
            salary: "₹19,900 - ₹63,200",
            badge: "Railways"
        },
        {
            id: 6,
            title: "CAPF (Assistant Commandant)",
            category: "defense",
            description: "Central Armed Police Forces Examination for Assistant Commandant posts in BSF, CRPF, CISF, SSB, ITBP.",
            icon: <FaShieldAlt />,
            eligibility: "Bachelor's Degree",
            ageLimit: "20-25 years",
            lastDate: "10 Dec 2024",
            attempts: "6 attempts",
            notification: "UPSC",
            salary: "₹56,100 - ₹1,77,500",
            badge: "Paramilitary"
        },
        {
            id: 7,
            title: "SBI PO",
            category: "banking",
            description: "State Bank of India Probationary Officer examination for one of India's largest banks.",
            icon: <FaBriefcase />,
            eligibility: "Graduation",
            ageLimit: "21-30 years",
            lastDate: "15 Nov 2024",
            attempts: "No limit",
            notification: "SBI",
            salary: "₹41,960 - ₹63,840",
            badge: "Premium"
        },
        {
            id: 8,
            title: "DRDO Scientist Entry",
            category: "psu",
            description: "Defence Research and Development Organization Scientist entry for engineering graduates.",
            icon: <FaChartLine />,
            eligibility: "BE/B.Tech/M.Sc",
            ageLimit: "28 years",
            lastDate: "25 Oct 2024",
            attempts: "No limit",
            notification: "DRDO",
            salary: "₹56,100 - ₹1,77,500",
            badge: "Research"
        }
    ];

    const filteredExams = activeCategory === 'all'
        ? examsData
        : examsData.filter(exam => exam.category === activeCategory);

    const examStats = [
        { number: "50+", label: "Government Exams" },
        { number: "1L+", label: "Vacancies Annually" },
        { number: "85%", label: "Reservation for Ex-Servicemen" },
        { number: "200+", label: "PSU Opportunities" }
    ];

    return (
        <>
            <AllPageHeader props="Exam Opportunities" />
            <div className={styles.examOpportunitiesPage}>
                <div className={styles.examOpportunitiesContainer}>

                    {/* Header Section */}
                    <div className={styles.examHeader}>
                        <h1 className={styles.examMainTitle}>Explore Your Exam Opportunities</h1>
                        <p className={styles.examSubTitle}>
                            Get personalized exam suggestions based on your profile, qualifications, and service background
                        </p>
                    </div>

                    {/* Statistics */}
                    <div className={styles.examStats}>
                        {examStats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                <div className={styles.statNumber}>{stat.number}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Filter Section */}
                    <div className={styles.filterSection}>
                        <h2 className={styles.filterTitle}>
                            <FaFilter style={{ marginRight: '10px' }} />
                            Filter Exams Based on Your Profile
                        </h2>

                        <div className={styles.filterForm}>
                            <div className={styles.filterGroup}>
                                <label className={styles.filterLabel}>
                                    <FaUsers /> Service Branch
                                </label>
                                <select
                                    name="serviceBranch"
                                    value={filters.serviceBranch}
                                    onChange={handleFilterChange}
                                    className={styles.filterSelect}
                                >
                                    <option value="">All Branches</option>
                                    <option value="army">Indian Army</option>
                                    <option value="navy">Indian Navy</option>
                                    <option value="airforce">Indian Air Force</option>
                                    <option value="paramilitary">Paramilitary</option>
                                    <option value="agniveer">Agniveer</option>
                                </select>
                            </div>

                            <div className={styles.filterGroup}>
                                <label className={styles.filterLabel}>
                                    <FaGraduationCap /> Highest Qualification
                                </label>
                                <select
                                    name="qualification"
                                    value={filters.qualification}
                                    onChange={handleFilterChange}
                                    className={styles.filterSelect}
                                >
                                    <option value="">All Qualifications</option>
                                    <option value="10th">10th Pass</option>
                                    <option value="12th">12th Pass</option>
                                    <option value="diploma">Diploma</option>
                                    <option value="graduate">Graduate</option>
                                    <option value="postgraduate">Post Graduate</option>
                                </select>
                            </div>

                            <div className={styles.filterGroup}>
                                <label className={styles.filterLabel}>
                                    <FaRegClock /> Age Group
                                </label>
                                <select
                                    name="ageLimit"
                                    value={filters.ageLimit}
                                    onChange={handleFilterChange}
                                    className={styles.filterSelect}
                                >
                                    <option value="">All Age Groups</option>
                                    <option value="18-25">18-25 years</option>
                                    <option value="25-30">25-30 years</option>
                                    <option value="30-35">30-35 years</option>
                                    <option value="35-40">35-40 years</option>
                                    <option value="40+">40+ years</option>
                                </select>
                            </div>

                            <div className={styles.filterGroup}>
                                <label className={styles.filterLabel}>
                                    <FaMapMarkerAlt /> Preferred Location
                                </label>
                                <select
                                    name="location"
                                    value={filters.location}
                                    onChange={handleFilterChange}
                                    className={styles.filterSelect}
                                >
                                    <option value="">All India</option>
                                    <option value="north">North India</option>
                                    <option value="south">South India</option>
                                    <option value="east">East India</option>
                                    <option value="west">West India</option>
                                    <option value="central">Central India</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Exam Categories */}
                    <div className={styles.examCategories}>
                        {examCategories.map(category => (
                            <button
                                key={category.id}
                                className={`${styles.categoryTag} ${activeCategory === category.id ? styles.active : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Exams Grid Section */}
                    <div id="examsGrid" className={styles.examsGridSection}>
                        <h2 className={styles.sectionTitle}>Recommended Exams for You</h2>

                        {loading ? (
                            <div className={styles.loadingSpinner}></div>
                        ) : (
                            <div className={styles.examsGrid}>
                                {filteredExams.map(exam => (
                                    <div key={exam.id} className={styles.examCard}>
                                        <div className={styles.examCardHeader}>
                                            <div className={styles.examIcon}>
                                                {exam.icon}
                                            </div>
                                            <span className={styles.examBadge}>
                                                {exam.badge}
                                            </span>
                                        </div>

                                        <h3 className={styles.examTitle}>{exam.title}</h3>
                                        <p className={styles.examDescription}>{exam.description}</p>

                                        <div className={styles.examDetails}>
                                            <div className={styles.examDetail}>
                                                <FaGraduationCap className={styles.examDetailIcon} />
                                                <span>{exam.eligibility}</span>
                                            </div>
                                            <div className={styles.examDetail}>
                                                <FaRegClock className={styles.examDetailIcon} />
                                                <span>{exam.ageLimit}</span>
                                            </div>
                                            <div className={styles.examDetail}>
                                                <FaCalendarAlt className={styles.examDetailIcon} />
                                                <span>Apply by: {exam.lastDate}</span>
                                            </div>
                                            <div className={styles.examDetail}>
                                                <FaRupeeSign className={styles.examDetailIcon} />
                                                <span>Starting Salary: {exam.salary}</span>
                                            </div>
                                        </div>

                                        <div className={styles.examCardFooter}>
                                            <div className={styles.examDate}>
                                                Notification: {exam.notification}
                                            </div>
                                            <a href="#" className={styles.examLink}>
                                                View Details <FaArrowRight />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* CTA Section */}
                    <div className={styles.examCtaSection}>
                        <div className={styles.ctaContent}>
                            <h3>Ready to Explore Your Opportunities?</h3>
                            <p>Get personalized exam suggestions based on your profile</p>
                        </div>

                        <div className={styles.missionCtaButtons}>
                            <button
                                onClick={handleExploreMore}
                                style={{ border: "1px solid var(--primary-color)" }}
                                className={`${styles.missionBtn} ${styles.fillBtn}`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span>Analyzing Your Profile...</span>
                                        <div className={styles.loadingSpinner} style={{
                                            width: '20px',
                                            height: '20px',
                                            borderWidth: '2px'
                                        }}></div>
                                    </>
                                ) : (
                                    <>
                                        <span>Explore Exam Opportunities</span>
                                        <FaArrowRight />
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Additional Info */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '40px',
                            marginTop: '40px',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaCheckCircle style={{ color: 'var(--primary-color)' }} />
                                <span style={{ color: 'var(--primary-color)' }}>Personalized Recommendations</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaFileAlt style={{ color: 'var(--primary-color)' }} />
                                <span style={{ color: 'var(--primary-color)' }}>Detailed Exam Syllabus</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaBook style={{ color: 'var(--primary-color)' }} />
                                <span style={{ color: 'var(--primary-color)' }}>Preparation Resources</span>
                            </div>
                        </div>
                    </div>

                    {/* Back Button */}


                </div>
            </div>
        </>
    );
};

export default ExamOpportunitiesPage;