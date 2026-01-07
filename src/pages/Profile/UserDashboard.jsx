



import React, { useState } from 'react';
import styles from '../../css/UserDashboard.module.css';
import styleOfHeader from '../../css/SideToggle.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdMenu, MdClose } from 'react-icons/md';

import AllPageHeader from '../components/AllPageHeader';

const UserDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const tabData = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'todays-orders', label: "Today's Orders" },
        { id: 'exams', label: 'Exams Targeting' },
        { id: 'roadmap', label: 'Syllabus Roadmap' },
        { id: 'mock-tests', label: 'Mock Tests' },
        { id: 'weak-zones', label: 'Weak Zones' },
        { id: 'skill-courses', label: 'Skill Courses' },
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setIsDrawerOpen(false); // Close drawer on mobile after selection
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <section className={styles.dashboardHeader}>
                        <h1 className={styles.headerTitle}>Master Every Exam With Military Precision</h1>
                        <p className={styles.headerSubtitle}>
                            Your personalized exam HQ: syllabus, lessons, tests, progress, and readiness in one command console.
                        </p>

                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>MISSION STATUS</div>
                                <div className={styles.statValue}>64%</div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>EXAMS PREPARING FOR</div>
                                <div className={styles.statValue}>3</div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>LESSONS COMPLETED</div>
                                <div className={styles.statValue}>32</div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>MOCK TESTS ATTEMPTED</div>
                                <div className={styles.statValue}>14</div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>ACCURACY</div>
                                <div className={styles.statValue}>68%</div>
                            </div>
                        </div>

                        <div className={styles.weakZones}>
                            <div className={styles.weakZonesTitle}>WEAK ZONES:</div>
                            <div className={styles.weakZonesList}>
                                <span className={styles.weakZoneTag}>Maths (Arithmetic)</span>
                                <span className={styles.weakZoneTag}>GK (Static)</span>
                            </div>
                        </div>

                        <div className="mission-cta-buttons mt-4">
                            <button style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn">
                                <span> Continue Today's Mission </span>
                                <FaArrowRightLong />
                            </button>
                        </div>
                    </section>
                );

            case 'todays-orders':
                return (
                    <section className={styles.todaysOrders}>
                        <h2 className={styles.headerTitle}>TODAY'S ORDERS</h2>
                        <div className={styles.ordersGrid}>
                            {[
                                { title: 'Complete Reasoning: Analogy', time: '12 min' },
                                { title: 'Take Quick Mock Test: GK', details: '20 Questions' },
                                { title: 'Watch Lesson: English Speaking', details: 'Pronunciation Basics' },
                                { title: 'Revise Formula Sheet', details: 'Percentage + Profit/Loss' }
                            ].map((order, index) => (
                                <div key={index} className={styles.orderCard}>
                                    <div className={styles.orderInfo}>
                                        <h4 className={styles.oderInfHeading}>{order.title}</h4>
                                        <p>{order.details || `${order.time}`}</p>
                                    </div>
                                    <button className={styles.orderCTA}>Start</button>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            case 'exams':
                return (
                    <section className={styles.examsSection}>
                        <h2 className={styles.headerTitle}>EXAMS YOU'RE TARGETING</h2>
                        <div className={styles.examsGrid}>
                            {[
                                {
                                    name: 'SSC GD Constable',
                                    eligibility: '10th Pass',
                                    difficulty: 'Easy–Moderate',
                                    status: '48% Prepared',
                                    buttonText: 'View Syllabus'
                                },
                                {
                                    name: 'State Police – Maharashtra & Rajasthan',
                                    eligibility: '12th Pass',
                                    difficulty: 'Moderate',
                                    status: '31% Prepared',
                                    buttonText: 'View Pattern'
                                },
                                {
                                    name: 'RRB Group D',
                                    eligibility: '10th Pass',
                                    difficulty: 'Easy',
                                    status: '60% Prepared',
                                    buttonText: 'Practice Mock'
                                }
                            ].map((exam, index) => (
                                <div key={index} className={styles.examCard}>
                                    <div>
                                        <div className={styles.examHeader}>
                                            <h4 className={styles.oderInfHeading}>{exam.name}</h4>
                                            <span className={styles.examStatus}>{exam.status}</span>
                                        </div>
                                        <div className={styles.examDetails}>
                                            <div className={styles.examDetail}>
                                                <span>Eligibility: {exam.eligibility}</span>
                                            </div>
                                            <div className={styles.examDetail}>
                                                <span>Difficulty: {exam.difficulty}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={styles.examButton}>{exam.buttonText} <FaArrowRightLong /></button>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            case 'roadmap':
                return (
                    <section className={styles.roadmapSection}>
                        <h2 className={styles.headerTitle}>YOUR SYLLABUS ROADMAP</h2>
                        <div className={styles.phaseCards}>
                            {[
                                {
                                    title: 'PHASE 1 – FOUNDATION',
                                    status: 'Completed 70%',
                                    items: ['Reasoning basics', 'Arithmetic basics', 'Simple grammar', 'Static GK']
                                },
                                {
                                    title: 'PHASE 2 – APPLICATION',
                                    status: 'Completed 40%',
                                    items: ['Mixed problem sets', 'Topic-wise mock tests', 'Speed improvement drills']
                                },
                                {
                                    title: 'PHASE 3 – MASTER',
                                    status: 'Pending',
                                    items: ['Full-length mocks', 'Exam simulation', 'Weak-zone elimination']
                                }
                            ].map((phase, index) => (
                                <div key={index} className={styles.phaseCard}>
                                    <div className={styles.phaseHeader}>
                                        <h4 className={styles.oderInfHeading}>{phase.title}</h4>
                                        <span className={styles.phaseStatus}>{phase.status}</span>
                                    </div>
                                    <ul className={styles.phaseList}>
                                        {phase.items.map((item, i) => (
                                            <li key={i} className={styles.phaseItem}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mission-cta-buttons">
                            <button style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn">
                                <span>Generate 30-Day Plan</span>
                                <FaArrowRightLong />
                            </button>
                        </div>
                    </section>
                );

            case 'mock-tests':
                return (
                    <section className={styles.mockTestSection}>
                        <h2 className={styles.headerTitle}>MOCK TEST COMMAND ROOM</h2>
                        <div className={styles.testCards}>
                            {[
                                {
                                    title: 'Full Mock Test #5',
                                    details: '100Q / 90 min',
                                    score: '62%',
                                    rank: 'Top 18%'
                                },
                                {
                                    title: 'Topic Test – Simplification',
                                    details: '20Q / 30 min',
                                    score: '75%',
                                    rank: 'Top 25%'
                                },
                                {
                                    title: 'Topic Test – Indian Constitution',
                                    details: '20Q / 30 min',
                                    score: '58%',
                                    rank: 'Top 30%'
                                }
                            ].map((test, index) => (
                                <div key={index} className={styles.testCard}>
                                    <div className={styles.testHeader}>
                                        <h4 className={styles.oderInfHeading}>{test.title}</h4>
                                        <span className={styles.testScore}>{test.score}</span>
                                    </div>
                                    <div className={styles.testDetails}>
                                        <div className={styles.testDetail}>
                                            <span>Questions</span>
                                            <span>{test.details.split(' / ')[0]}</span>
                                        </div>
                                        <div className={styles.testDetail}>
                                            <span>Last Score</span>
                                            <span>{test.score}</span>
                                        </div>
                                        <div className={styles.testDetail}>
                                            <span>Rank</span>
                                            <span>{test.rank}</span>
                                        </div>
                                    </div>
                                    <div className={styles.testButtons}>
                                        <button className={styles.examButton}>
                                            Retake <FaArrowRightLong />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.purchaseBanner}>
                            <p>UNLOCK ADVANCED MOCK TESTS & ANALYTICS</p>
                            <div className="mission-cta-buttons">
                                <button style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn">
                                    <span>Attempt New Mock Test</span>
                                    <FaArrowRightLong />
                                </button>
                            </div>
                        </div>
                    </section>
                );

            case 'weak-zones':
                return (
                    <section className={styles.weakZonesSection}>
                        <h2 className={styles.headerTitle}>YOUR WEAK ZONES (AI Highlight)</h2>
                        <div className={styles.aiInsight}>
                            <h3 className={styles.insightTitle}>AI Analysis - Priority Focus Areas</h3>
                            <div className={styles.subjectList}>
                                {[
                                    { subject: 'Maths', topics: ['Percentage', 'Ratio', 'Time & Work'] },
                                    { subject: 'GK', topics: ['Constitution Articles', 'Geography Basics'] },
                                    { subject: 'Reasoning', topics: ['Coding–Decoding'] }
                                ].map((subject, index) => (
                                    <div key={index} className={styles.subjectItem}>
                                        <div className={styles.subjectName}>
                                            <span>{subject.subject}:</span>
                                        </div>
                                        <div className={styles.topicTags}>
                                            {subject.topics.map((topic, i) => (
                                                <span key={i} className={styles.topicTag}>{topic}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mission-cta-buttons">
                            <button style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn">
                                <span>Fix Weak Zones</span>
                                <FaArrowRightLong />
                            </button>
                        </div>
                    </section>
                );

            case 'skill-courses':
                return (
                    <section className={styles.skillCoursesSection}>
                        <h2 className={styles.headerTitle}>SKILL COURSES FOR CIVILIAN SUCCESS</h2>
                        <div className={styles.courseCards}>
                            {[
                                {
                                    title: 'English Speaking',
                                    level: 'Beginner → Pro',
                                    description: 'Master communication skills for interviews and workplace'
                                },
                                {
                                    title: 'Computer Skills',
                                    level: 'MS Office + Email Writing',
                                    description: 'Essential digital skills for modern workplaces'
                                },
                                {
                                    title: 'Corporate Etiquette',
                                    level: 'Veteran Mentors',
                                    description: 'Learn workplace norms and professional behavior'
                                }
                            ].map((course, index) => (
                                <div key={index} className={styles.courseCard}>
                                    <div>
                                        <div className={styles.courseLevel}>
                                            <span className={styles.levelBadge}>{course.level}</span>
                                        </div>
                                        <h4 className={styles.oderInfHeading}>{course.title}</h4>
                                        <p className={styles.courseDescription}>{course.description}</p>
                                    </div>
                                    <button className={styles.examButton}>
                                        Start Course <FaArrowRightLong />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className={styles.purchaseBanner}>
                            <p>ENROLL IN PREMIUM SKILL DEVELOPMENT COURSES</p>
                            <div className="mission-cta-buttons">
                                <button style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn">
                                    <span>Start Soft Skills Course</span>
                                    <FaArrowRightLong />
                                </button>
                            </div>
                        </div>
                    </section>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <AllPageHeader props='profile' />

            <div className={styles.dashboardContainer}>
                {/* Mobile Drawer Toggle Button */}

                <aside className={`${styleOfHeader.fix} ${isDrawerOpen ? styleOfHeader.infoOpen : ""}`}>
                    <div className={`${styleOfHeader.sideInfo} ${styleOfHeader.sideInfoArmy}`}>
                        <div className={styleOfHeader.sideInfoContent}>


                            {/* ===== HEADER ===== */}
                            <div className={`${styleOfHeader.offsetWidget} ${styleOfHeader.offsetHeader} ${styleOfHeader.mb20}`}>
                                <div className={styleOfHeader.row}>
                                    <div className={styleOfHeader.col9}>
                                        <div className={styleOfHeader.offsetLogo}>
                                            <img src="/VEER/assets/img/logo/logo.png" alt="Logo" />
                                        </div>
                                    </div>
                                    <div className={styleOfHeader.col3}>
                                        <button onClick={() => setIsDrawerOpen(false)} className={styleOfHeader.sideInfoClose} >
                                            <i className="fal fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* ===== MENU ===== */}
                            {/* <div className={`${styleOfHeader.mainMenu2f}`}> */}
                            <nav>
                                <ul style={{padding:'0'}}>

                                    {tabData.map((tab) => (
                                        <li key={tab.id}
                                            onClick={() => handleTabClick(tab.id)}
                                            className={` ${activeTab === tab.id ? styles.activeTab : styles.inActiveTab}`}>
                                            {tab.label}
                                        </li>
                                    ))}


                                </ul>
                            </nav>
                            {/* </div> */}


                        </div>
                    </div>
                </aside>



                {/* Desktop Tabs Navigation */}
                <div className={styles.tabsContainer}>
                    <div className={styles.tabs}>
                        {tabData.map((tab) => (
                            <button
                                key={tab.id}
                                className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTabForWeb : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>


                <div className={styles.mobileDrawerBox}>

                    <h4 className={styles.oderInfHeading}> {activeTab}</h4>


                    <button
                        className={styles.mobileDrawerToggle}
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    >
                        {isDrawerOpen ? <MdClose style={{ fontSize: '25px' }} /> : <MdMenu style={{ fontSize: '25px' }} />}
                        {/* <span>Menu</span> */}
                    </button>
                </div>

                {/* Tab Content */}
                <div className={styles.tabContent}>
                    {renderTabContent()}
                </div>
            </div>
        </>
    );
};

export default UserDashboard;