import React, { useState } from 'react';
import styles from '../../css/UserDashboard.module.css';
import styleOfHeader from '../../css/SideToggle.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdMenu, MdClose } from 'react-icons/md';
import { LiaDownloadSolid } from "react-icons/lia";
import AllPageHeader from '../components/AllPageHeader';
import { tabData, Exams, roadMap, skillCourses, Courses, wishlist, Assignments, Quiz, insightData, assignmentStats, mockTest, simplifiedTabs, notesStats, notesData } from '../components/data';

import { MdModeEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

import { FaCheckCircle, FaTimesCircle, FaSyncAlt, FaCreditCard } from "react-icons/fa";

const UserDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Simplified tabs data - only the ones you requested

    const handleTabClick = (tabId) => {
        if (tabId === 'logout') {
            // Handle logout logic here
            console.log('Logging out...');
            // You can redirect to login page or clear user session
            // window.location.href = '/login';
            return;
        }
        setActiveTab(tabId);
        setIsDrawerOpen(false); // Close drawer on mobile after selection
    };

    const navigate = useNavigate()

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
                                <div className={styles.statLabel}>Enrolled Courses</div>
                                <div className={styles.statValue}>64%</div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>Active Courses</div>
                                <div className={styles.statValue}>3</div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>Complete Courses</div>
                                <div className={styles.statValue}>32</div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>MOCK TESTS ATTEMPTED</div>
                                <div className={styles.statValue}>14</div>
                            </div>


                        </div>

                        {/* <div className={styles.weakZones}>
                            <div className={styles.weakZonesTitle}>WEAK ZONES:</div>
                            <div className={styles.weakZonesList}>
                                <span className={styles.weakZoneTag}>Maths (Arithmetic)</span>
                                <span className={styles.weakZoneTag}>GK (Static)</span>
                            </div>
                        </div> */}

                        <div className="mission-cta-buttons mt-4">
                            <button style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn">
                                <span> Continue Today's Mission </span>
                                <FaArrowRightLong />
                            </button>
                        </div>
                    </section>
                );

            case 'Profile':
                return (
                    <section className={styles.dashboardHeader}>
                        <h2 className={styles.headerTitle}>MY PROFILE</h2>

                        <div className={styles.profileContainer}>
                            <div className={styles.profileHeader}>
                                <div className={styles.profileAvatar}>
                                    <img src="/VEER/assets/img/logo/6997484.png" alt="User Avatar" />
                                    <button className={styles.editAvatarBtn}><MdModeEdit /></button>
                                </div>
                                <div className={styles.profileInfo}>
                                    <h3 className={styles.oderInfHeading}>John Doe</h3>
                                    <p className={styles.profileEmail}>john.doe@example.com</p>
                                    <div className={styles.profileStats}>
                                        <span className={styles.profileStat}>Member Since: Jan 2023</span>
                                        <span className={styles.profileStat}>Rank: Top 15%</span>
                                        <span className={styles.profileStat}>Streak: 42 days</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.profileDetails}>
                                <div className={styles.detailSection}>
                                    <h4 className={styles.sectionTitle}>Personal Information</h4>
                                    <div className={styles.preferencesGrid}>
                                        <div className={styles.preferenceItem}>
                                            <span className={styles.preferenceLabel}>Full Name</span>
                                            <span className={styles.preferenceValue}>John Doe</span>
                                        </div>
                                        <div className={styles.preferenceItem}>
                                            <span className={styles.preferenceLabel}>Phone Number</span>
                                            <span className={styles.preferenceValue}>+91 9876543210</span>
                                        </div>
                                        <div className={styles.preferenceItem}>
                                            <span className={styles.preferenceLabel}>Date of Birth</span>
                                            <span className={styles.preferenceValue}>15 March 1995</span>
                                        </div>
                                        <div className={styles.preferenceItem}>
                                            <span className={styles.preferenceLabel}>Location</span>
                                            <span className={styles.preferenceValue}>New Delhi, India</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.detailSection}>
                                    <h4 className={styles.sectionTitle}>Exam Preferences</h4>
                                    <div className={styles.preferencesGrid}>
                                        <div className={styles.preferenceItem}>
                                            <span className={styles.preferenceLabel}>Primary Exam</span>
                                            <span className={styles.preferenceValue}>SSC GD Constable</span>
                                        </div>
                                        <div className={styles.preferenceItem}>
                                            <span className={styles.preferenceLabel}>Secondary Exam</span>
                                            <span className={styles.preferenceValue}>RRB Group D</span>
                                        </div>
                                        <div className={styles.preferenceItem}>
                                            <span className={styles.preferenceLabel}>Daily Study Goal</span>
                                            <span className={styles.preferenceValue}>4 hours</span>
                                        </div>
                                        <div className={styles.preferenceItem}>
                                            <span className={styles.preferenceLabel}>Preferred Time</span>
                                            <span className={styles.preferenceValue}>Morning (6AM - 10AM)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.detailSection}>
                                    <h4 className={styles.sectionTitle}>Account Settings</h4>
                                    <div className={styles.settingsList}>
                                        <div className={styles.settingItem}>
                                            <span>Email Notifications</span>
                                            <label className={styles.toggleSwitch}>
                                                <input type="checkbox" defaultChecked />
                                                <span className={styles.slider}></span>
                                            </label>
                                        </div>
                                        <div className={styles.settingItem}>
                                            <span>SMS Notifications</span>
                                            <label className={styles.toggleSwitch}>
                                                <input type="checkbox" />
                                                <span className={styles.slider}></span>
                                            </label>
                                        </div>
                                        <div className={styles.settingItem}>
                                            <span>Study Reminders</span>
                                            <label className={styles.toggleSwitch}>
                                                <input type="checkbox" defaultChecked />
                                                <span className={styles.slider}></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case 'Enrolled Courses':
                return (
                    <section className={styles.dashboardHeader}>
                        <h2 className={styles.headerTitle}>ENROLLED COURSES</h2>

                        <div className={styles.coursesFilter}>
                            <div className={styles.filterTabs}>
                                <button className={`${styles.filterTab} ${styles.activeFilterTab}`}>All Courses</button>
                                <button className={styles.filterTab}>In Progress</button>
                                <button className={styles.filterTab}>Completed</button>
                                <button className={styles.filterTab}>Upcoming</button>
                            </div>
                            <div className={styles.filterSearch}>
                                <input type="text" placeholder="Search courses..." />
                            </div>
                        </div>

                        <div className={styles.coursesGrid}>
                            {Courses?.map((course, index) => (
                                <div key={index} className={styles.courseCard}>
                                    <div className={styles.courseHeader}>
                                        <div className={styles.courseTitle}>
                                            <h4 className={styles.oderInfHeading}>{course.title}</h4>
                                            <p className={styles.courseInstructor}>By {course.instructor}</p>
                                        </div>
                                    </div>

                                    <div className={styles.courseProgress}>
                                        <div className={styles.progressInfo}>
                                            <span>Progress: {course.progress}%</span>
                                            <span>{course.lessons}</span>
                                        </div>
                                        <div className={styles.progressBar}>
                                            <div
                                                className={styles.progressFill}
                                                style={{ width: `${course.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className={styles.courseDetails}>
                                        <div className={styles.courseDetail}>
                                            <span>Duration</span>
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className={styles.courseDetail}>
                                            <span>Last Accessed</span>
                                            <span>2 days ago</span>
                                        </div>
                                    </div>

                                    <div className={styles.courseActions}>
                                        {course.status === 'Active' && (
                                            <button onClick={() => navigate('/Courses')} className={styles.examButton}>
                                                Continue Course <FaArrowRightLong />
                                            </button>
                                        )}
                                        {course.status === 'Upcoming' && (
                                            // <button className={styles.examButton} disabled>
                                            //     Starts Soon
                                            // </button>

                                            <button onClick={() => navigate('/Courses')} className={styles.examButton}>
                                                Continue Course <FaArrowRightLong />
                                            </button>
                                        )}
                                        {course.status === 'Completed' && (
                                            // <button className={styles.examButton}>
                                            //     View Certificate <FaArrowRightLong />
                                            // </button>

                                            <button onClick={() => navigate('/Courses')} className={styles.examButton}>
                                                Continue Course <FaArrowRightLong />
                                            </button>
                                        )}
                                        <button onClick={() => navigate('/CourseDetails')} className={styles.secondaryButton}>
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            case 'My Quiz Attempts':
                return (
                    <section className={styles.dashboardHeader}>
                        <h2 className={styles.headerTitle}>MY QUIZ ATTEMPTS</h2>

                        <div className={styles.quizStats}>
                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>TOTAL ATTEMPTS</div>
                                <div className={styles.statValue}>142</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>AVERAGE SCORE</div>
                                <div className={styles.statValue}>72%</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>BEST SCORE</div>
                                <div className={styles.statValue}>98%</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statLabel}>TIME SPENT</div>
                                <div className={styles.statValue}>45h 30m</div>
                            </div>
                        </div>

                        <div className={styles.quizFilter}>
                            <div className={styles.filterTabs}>
                                <button className={`${styles.filterTab} ${styles.activeFilterTab}`}>Recent Attempts</button>
                                <button className={styles.filterTab}>Top Scores</button>
                                <button className={styles.filterTab}>By Subject</button>
                                <button className={styles.filterTab}>By Difficulty</button>
                            </div>
                            <div className={styles.dateFilter}>
                                <select>
                                    <option>Last 7 days</option>
                                    <option>Last 30 days</option>
                                    <option>Last 3 months</option>
                                    <option>All time</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.quizTable}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Quiz Name</th>
                                        <th>Date</th>
                                        <th>Score</th>
                                        <th>Time Taken</th>
                                        <th>Rank</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Quiz.map((quiz, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className={styles.quizName}>
                                                    <strong>{quiz.name}</strong>
                                                    <span>{quiz.questions} questions</span>
                                                </div>
                                            </td>
                                            <td>{quiz.date}</td>
                                            <td>
                                                <div className={styles.scoreCell}>
                                                    <span className={styles.scoreValue}>{quiz.score}</span>
                                                </div>
                                            </td>
                                            <td>{quiz.time}</td>
                                            <td>
                                                <span className={styles.rankBadge}>{quiz.rank}</span>
                                            </td>
                                            <td>
                                                <div className={styles.quizActions}>
                                                    <button className={styles.actionBtn}>Review</button>
                                                    <button className={styles.actionBtn}>Retake</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className={styles.performanceInsights}>
                            <h4 className={styles.insightTitle}>Performance Insights</h4>
                            <div className={styles.insightGrid}>
                                {insightData.map((item, index) => (
                                    <div key={index} className={styles.insightCard}>
                                        <h5 className={styles.oderInfHeading}>{item.title}</h5>
                                        <p >{item.value}</p>
                                        <span>{item.extra}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'Notes':
                return (
                    <section className={styles.dashboardHeader}>
                        <div className={styles.notesHeader}>
                            <h2 className={styles.notesMainTitle}>Notes</h2>
                            <div className={styles.notesStats}>
                                {notesStats.map((stat, i) => (
                                    <div key={i} className={styles.noteStatCard}>
                                        <div className={styles.noteStatLabel}>{stat.label}</div>
                                        <div className={styles.noteStatValue}>{stat.value}</div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className={styles.notesActions}>
                            <div className={styles.searchBox}>
                                <input
                                    type="text"
                                    placeholder="Search notes..."
                                    className={styles.searchInput}
                                />
                            </div>
                            <div className={styles.notesFilter}>
                                <button className={`${styles.filterBtn} ${styles.activeFilter}`}>All</button>
                                <button className={styles.filterBtn}>Recent</button>
                                <button className={styles.filterBtn}>Starred</button>
                                <button className={`${styles.filterBtn} ${styles.newNoteBtn}`}>
                                    + New Note
                                </button>
                            </div>
                        </div>

                        <div className={styles.notesGrid}>
                            {notesData.map(note => (
                                <div key={note.id} className={styles.noteCard}>
                                    <div className={styles.noteCardHeader}>
                                        <div className={styles.noteCategory}>{note.category}</div>
                                        <button className={styles.noteMenuBtn}>⋯</button>
                                    </div>

                                    <div className={styles.noteContent}>
                                        <h3 className={styles.noteTitle}>{note.title}</h3>
                                        <p className={styles.notePreview}>{note.preview}</p>
                                    </div>

                                    <div className={styles.noteFooter}>
                                        <div className={styles.noteMeta}>
                                            <span className={styles.notePages}>{note.pages}</span>
                                            <span className={styles.noteDate}>{note.date}</span>
                                        </div>

                                        <div className={styles.noteActions}>
                                            {/* {note.actions.includes("like") && (
                                                <button className={styles.noteActionBtn}>❤️</button>
                                            )} */}
                                            {/* {note.actions.includes("edit") && ( */}
                                            <button className={styles.noteActionBtn}><LiaDownloadSolid /></button>
                                            {/* )} */}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* ADD NEW NOTE CARD */}
                            {/* <div className={`${styles.noteCard} ${styles.addNoteCard}`}>
                                <div className={styles.addNoteContent}>
                                    ➕
                                    <h3 className={styles.addNoteTitle}>Create New Note</h3>
                                    <p className={styles.addNoteSubtitle}>
                                        Start taking notes for your studies
                                    </p>
                                </div>
                            </div> */}
                        </div>

                    </section>
                );

            case 'settings':
                return (
                    <section className={styles.dashboardHeader}>
                        <h2 className={styles.headerTitle}>SETTINGS</h2>

                        <div className={styles.settingsContainer}>
                            <div className={styles.settingsCategory}>
                                <h3 className={styles.settingsCategoryTitle}>Account Settings</h3>
                                <div className={styles.settingsList}>
                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Change Password</h4>
                                            <p>Update your account password</p>
                                        </div>
                                        <button className={styles.settingsButton}>Change</button>
                                    </div>

                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Two-Factor Authentication</h4>
                                            <p>Add extra security to your account</p>
                                        </div>
                                        <label className={styles.toggleSwitch}>
                                            <input type="checkbox" />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>

                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Delete Account</h4>
                                            <p>Permanently delete your account and data</p>
                                        </div>
                                        <button className={styles.settingsButtonDelete}>Delete</button>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.settingsCategory}>
                                <h3 className={styles.settingsCategoryTitle}>Notification Preferences</h3>
                                <div className={styles.settingsList}>
                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Email Notifications</h4>
                                            <p>Receive course updates and reminders</p>
                                        </div>
                                        <label className={styles.toggleSwitch}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>

                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>SMS Notifications</h4>
                                            <p>Get important updates via SMS</p>
                                        </div>
                                        <label className={styles.toggleSwitch}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>

                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Push Notifications</h4>
                                            <p>Browser and mobile push notifications</p>
                                        </div>
                                        <label className={styles.toggleSwitch}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.settingsCategory}>
                                <h3 className={styles.settingsCategoryTitle}>Study Preferences</h3>
                                <div className={styles.settingsList}>
                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Daily Study Goal</h4>
                                            <p>Set your daily study target</p>
                                        </div>
                                        <select className={styles.settingsSelect}>
                                            <option>2 hours</option>
                                            <option>3 hours</option>
                                            <option>4 hours</option>
                                            <option>5 hours</option>
                                            <option>6 hours</option>
                                        </select>
                                    </div>

                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Preferred Study Time</h4>
                                            <p>When do you prefer to study?</p>
                                        </div>
                                        <select className={styles.settingsSelect}>
                                            <option>Morning (6AM - 10AM)</option>
                                            <option>Afternoon (12PM - 4PM)</option>
                                            <option>Evening (6PM - 10PM)</option>
                                            <option>Night (10PM - 2AM)</option>
                                        </select>
                                    </div>

                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Study Reminders</h4>
                                            <p>Get reminders for your study sessions</p>
                                        </div>
                                        <label className={styles.toggleSwitch}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.settingsCategory}>
                                <h3 className={styles.settingsCategoryTitle}>Privacy Settings</h3>
                                <div className={styles.settingsList}>
                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Profile Visibility</h4>
                                            <p>Who can see your profile?</p>
                                        </div>
                                        <select className={styles.settingsSelect}>
                                            <option>Everyone</option>
                                            <option>Only Me</option>
                                            <option>Study Buddies Only</option>
                                        </select>
                                    </div>

                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Show Activity Status</h4>
                                            <p>Show when you're online</p>
                                        </div>
                                        <label className={styles.toggleSwitch}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>

                                    <div className={styles.settingItem}>
                                        <div className={styles.settingInfo}>
                                            <h4>Data Sharing</h4>
                                            <p>Allow anonymous data for improvements</p>
                                        </div>
                                        <label className={styles.toggleSwitch}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mission-cta-buttons mt-4">
                            <button style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn">
                                <span>Save All Changes</span>
                                <FaArrowRightLong />
                            </button>
                        </div>
                    </section>
                );

            case 'subscription':
                return (
                    <section className={styles.dashboardHeader}>
                        <div className={styles.subscriptionHeader}>
                            <h2 className={styles.headerTitle}>MY SUBSCRIPTION</h2>
                            <p className={styles.headerSubtitle}>
                                Manage your subscription plan, billing details, and upgrade options.
                            </p>
                        </div>

                        {/* Current Plan Status */}
                        <div className={styles.subscriptionStatus}>
                            <div className={styles.currentPlanCard}>
                                <div className={styles.planHeader}>
                                    <div className={styles.planInfo}>
                                        <h3 className={styles.planName}>PREMIUM PLUS</h3>
                                        <span className={styles.planBadge}>Active</span>
                                    </div>
                                    <div className={styles.planPrice}>
                                        <span className={styles.price}>₹999/month</span>
                                        <span className={styles.billingCycle}>Billed monthly</span>
                                    </div>
                                </div>

                                <div className={styles.planDetails}>
                                    <div className={styles.detailRow}>
                                        <span>Plan Started</span>
                                        <span>15 Jan 2024</span>
                                    </div>
                                    <div className={styles.detailRow}>
                                        <span>Next Billing Date</span>
                                        <span>15 Feb 2024</span>
                                    </div>
                                    <div className={styles.detailRow}>
                                        <span>Auto Renewal</span>
                                        <span className={styles.statusActive}>
                                            <FaSyncAlt /> Enabled
                                        </span>
                                    </div>
                                    <div className={styles.detailRow}>
                                        <span>Payment Method</span>
                                        <span>Visa **** 4321</span>
                                    </div>
                                </div>

                                <div className={styles.planActions}>
                                    <button className={styles.primaryButton}>
                                        <FaCreditCard /> Manage Billing
                                    </button>
                                    <button className={styles.secondaryButton}>
                                        Cancel Subscription
                                    </button>
                                </div>
                            </div>

                            {/* Usage Statistics */}
                            <div className={styles.usageStats}>
                                <h4 className={styles.sectionTitle}>Usage This Month</h4>
                                <div className={styles.statsGrid}>
                                    <div className={styles.statCard}>
                                        <div className={styles.statLabel}>Mock Tests Taken</div>
                                        <div className={styles.statValue}>14/20</div>
                                        <div className={styles.statProgress}>
                                            <div className={styles.progressBar}>
                                                <div className={styles.progressFill} style={{ width: '70%' }}></div>
                                            </div>
                                            <span>70% used</span>
                                        </div>
                                    </div>

                                    <div className={styles.statCard}>
                                        <div className={styles.statLabel}>Notes Created</div>
                                        <div className={styles.statValue}>45/100</div>
                                        <div className={styles.statProgress}>
                                            <div className={styles.progressBar}>
                                                <div className={styles.progressFill} style={{ width: '45%' }}></div>
                                            </div>
                                            <span>45% used</span>
                                        </div>
                                    </div>

                                    <div className={styles.statCard}>
                                        <div className={styles.statLabel}>Storage Used</div>
                                        <div className={styles.statValue}>1.2/5 GB</div>
                                        <div className={styles.statProgress}>
                                            <div className={styles.progressBar}>
                                                <div className={styles.progressFill} style={{ width: '24%' }}></div>
                                            </div>
                                            <span>24% used</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Available Plans */}
                        <div className={styles.plansSection}>
                            <h3 className={styles.sectionTitle}>Available Plans</h3>
                            <div className={styles.plansGrid}>
                                {/* Basic Plan */}
                                <div className={`${styles.planCard} ${styles.basicPlan}`}>
                                    <div className={styles.planCardHeader}>
                                        <h4 className={styles.planCardTitle}>BASIC</h4>
                                        <div className={styles.planCardPrice}>
                                            <span className={styles.amount}>₹299</span>
                                            <span className={styles.period}>/month</span>
                                        </div>
                                        <p className={styles.planCardDesc}>For casual learners</p>
                                    </div>

                                    <div className={styles.planFeatures}>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>Access to 50+ courses</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>10 Mock tests/month</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>Basic analytics</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaTimesCircle className={styles.featureIconDisabled} />
                                            <span className={styles.featureDisabled}>Advanced notes</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaTimesCircle className={styles.featureIconDisabled} />
                                            <span className={styles.featureDisabled}>Priority support</span>
                                        </div>
                                    </div>

                                    <button className={styles.planButton}>
                                        Choose Basic
                                    </button>
                                </div>

                                {/* Premium Plan (Current) */}
                                <div className={`${styles.planCard} ${styles.premiumPlan} ${styles.activePlan}`}>
                                    <div className={styles.planBadge}>CURRENT PLAN</div>
                                    <div className={styles.planCardHeader}>
                                        <h4 className={styles.planCardTitle}>PREMIUM PLUS</h4>
                                        <div className={styles.planCardPrice}>
                                            <span className={styles.amount}>₹999</span>
                                            <span className={styles.period}>/month</span>
                                        </div>
                                        <p className={styles.planCardDesc}>Best for serious aspirants</p>
                                    </div>

                                    <div className={styles.planFeatures}>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>Unlimited courses access</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>Unlimited mock tests</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>Advanced analytics</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>Unlimited notes</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>Priority 24/7 support</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>5GB cloud storage</span>
                                        </div>
                                    </div>

                                    <button className={styles.planButtonActive}>
                                        Current Plan
                                    </button>
                                </div>

                                {/* Annual Plan */}
                                <div className={`${styles.planCard} ${styles.annualPlan}`}>
                                    <div className={styles.planCardHeader}>
                                        <h4 className={styles.planCardTitle}>ANNUAL PRO</h4>
                                        <div className={styles.planCardPrice}>
                                            <span className={styles.amount}>₹9,999</span>
                                            <span className={styles.period}>/year</span>
                                        </div>
                                        <p className={styles.planCardDesc}>Save 16% with annual billing</p>
                                    </div>

                                    <div className={styles.planFeatures}>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>All Premium Plus features</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>Personal mentor access</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>Custom study plans</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>10GB cloud storage</span>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <FaCheckCircle className={styles.featureIcon} />
                                            <span>Certificate of completion</span>
                                        </div>
                                    </div>

                                    <button className={styles.planButton}>
                                        Choose Annual
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Billing History */}
                        <div className={styles.billingSection}>
                            <div className={styles.sectionHeader}>
                                <h3 className={styles.sectionTitle}>Billing History</h3>
                                <button className={styles.downloadButton}>
                                    <LiaDownloadSolid /> Download All Invoices
                                </button>
                            </div>

                            <div className={styles.billingTable}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15 Jan 2024</td>
                                            <td>Premium Plus Monthly Subscription</td>
                                            <td>₹999</td>
                                            <td>
                                                <span className={styles.statusPaid}>Paid</span>
                                            </td>
                                            <td>
                                                <button className={styles.invoiceButton}>
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>15 Dec 2023</td>
                                            <td>Premium Plus Monthly Subscription</td>
                                            <td>₹999</td>
                                            <td>
                                                <span className={styles.statusPaid}>Paid</span>
                                            </td>
                                            <td>
                                                <button className={styles.invoiceButton}>
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>15 Nov 2023</td>
                                            <td>Premium Plus Monthly Subscription</td>
                                            <td>₹999</td>
                                            <td>
                                                <span className={styles.statusPaid}>Paid</span>
                                            </td>
                                            <td>
                                                <button className={styles.invoiceButton}>
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>15 Oct 2023</td>
                                            <td>Upgrade to Premium Plus</td>
                                            <td>₹999</td>
                                            <td>
                                                <span className={styles.statusPaid}>Paid</span>
                                            </td>
                                            <td>
                                                <button className={styles.invoiceButton}>
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Subscription FAQs */}
                        <div className={styles.faqSection}>
                            <h3 className={styles.sectionTitle}>Frequently Asked Questions</h3>
                            <div className={styles.faqList}>
                                <div className={styles.faqItem}>
                                    <h4 className={styles.faqQuestion}>Can I cancel my subscription anytime?</h4>
                                    <p className={styles.faqAnswer}>
                                        Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.
                                    </p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h4 className={styles.faqQuestion}>What happens when I downgrade my plan?</h4>
                                    <p className={styles.faqAnswer}>
                                        When you downgrade, you'll lose access to premium features immediately. The new plan will take effect from your next billing cycle.
                                    </p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h4 className={styles.faqQuestion}>How do I update my payment method?</h4>
                                    <p className={styles.faqAnswer}>
                                        Go to "Manage Billing" in your current plan section to update your payment method. You can add multiple payment methods.
                                    </p>
                                </div>
                                <div className={styles.faqItem}>
                                    <h4 className={styles.faqQuestion}>Is there a free trial available?</h4>
                                    <p className={styles.faqAnswer}>
                                        We offer a 7-day free trial for new users on the Premium Plus plan. No credit card required for the trial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            default:
                return (
                    <section className={styles.dashboardHeader}>
                        <h1 className={styles.headerTitle}>Welcome to Your Dashboard</h1>
                        <p className={styles.headerSubtitle}>
                            Select a tab from the menu to get started.
                        </p>
                    </section>
                );
        }
    };

    return (
        <>
            <AllPageHeader props='profile' />

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
                        <nav>
                            <ul style={{ padding: '0' }}>
                                {simplifiedTabs.map((tab) => (
                                    <li key={tab.id}
                                        onClick={() => handleTabClick(tab.id)}
                                        className={` ${activeTab === tab.id ? styles.activeTab : styles.inActiveTab}`}>
                                        {tab.label}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>

            <div className={styles.dashboardContainer}>
                {/* Mobile Drawer Toggle Button */}



                {/* Desktop Tabs Navigation */}
                <div className={styles.MainConOfTab}>
                    <div className={styles.tabsContainer}>
                        <div className={styles.tabs}>
                            {simplifiedTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTabForWeb : ''} ${tab.id === 'logout' ? styles.logoutTab : ''}`}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    <span className="tabIcon">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.mobileDrawerCon}>
                        <div className={styles.mobileDrawerBox}>
                            <h4 className={styles.oderInfHeading}> {activeTab === 'dashboard' ? 'Dashboard' :
                                activeTab === 'Profile' ? 'My Profile' :
                                    activeTab === 'Enrolled Courses' ? 'Courses' :
                                        activeTab === 'My Quiz Attempts' ? 'My Quiz Attempts' :
                                            activeTab === 'Assignments' ? 'Assignments' :
                                                activeTab === 'settings' ? 'Settings' : 'Dashboard'}</h4>
                            <button
                                className={styles.mobileDrawerToggle}
                                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                            >
                                {isDrawerOpen ? <MdClose style={{ fontSize: '25px' }} /> : <MdMenu style={{ fontSize: '25px' }} />}
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className={styles.tabContent}>
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;