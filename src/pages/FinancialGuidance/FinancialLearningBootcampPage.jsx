import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaArrowLeft,
    FaArrowRight,
    FaCheck,
    FaClock,
    FaTrophy,
    FaCertificate,
    FaLightbulb,
    FaQuestionCircle,
    FaExclamationTriangle,
    FaStar
} from 'react-icons/fa';
import styles from '../../css/financialBootcamp.module.css';
import AllPageHeader from '../components/AllPageHeader';
import { missions, missionContent } from '../components/data';

function FinancialLearningBootcampPage() {
    const navigate = useNavigate();
    const [currentMission, setCurrentMission] = useState(1);
    const [completedMissions, setCompletedMissions] = useState([]);
    const [quizAnswer, setQuizAnswer] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleMissionComplete = () => {
        if (!completedMissions.includes(currentMission)) {
            setCompletedMissions([...completedMissions, currentMission]);
        }

        if (currentMission < 7) {
            setLoading(true);
            setTimeout(() => {
                setCurrentMission(currentMission + 1);
                setQuizAnswer(null);
                setLoading(false);
                document.getElementById('missionContent').scrollIntoView({ behavior: 'smooth' });
            }, 800);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 800);
        }
    };

    const handlePrevMission = () => {
        if (currentMission > 1) {
            setCurrentMission(currentMission - 1);
            setQuizAnswer(null);
            document.getElementById('missionContent').scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMissionClick = (missionId) => {
        setCurrentMission(missionId);
        setQuizAnswer(null);
        document.getElementById('missionContent').scrollIntoView({ behavior: 'smooth' });
    };

    const handleBack = () => {
        navigate(-1);
    };

    const progressPercentage = (completedMissions.length / 7) * 100;

    // Get current mission data
    const currentMissionData = missions.find(m => m.id === currentMission);
    const currentContent = missionContent[currentMission];

    return (
        <>
            <AllPageHeader props="Financial Learning Bootcamp" />
            <div className={styles.financialBootcampPage}>
                <div className={styles.bootcampContainer}>

                    {/* Header Section */}
                    <div className={styles.bootcampHeader}>
                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>7 Short Missions</span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle}>
                            Financial Learning Bootcamp
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Master personal finance in 21 minutes through practical missions
                        </p>
                    </div>

                    {/* Progress Tracker */}
                    <div className={styles.progressTracker}>
                        <div className={styles.progressHeader}>
                            <div className={styles.progressTitle}>Your Progress</div>
                            <div className={styles.progressStats}>
                                {completedMissions.length}/7 Missions
                            </div>
                        </div>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                        <div className={styles.progressLabels}>
                            <span>Start</span>
                            <span>Mission 4</span>
                            <span>Finish</span>
                        </div>
                    </div>

                    {/* Mission Progress Dots */}
                    <div className={styles.missionProgress}>
                        {[1, 2, 3, 4, 5, 6, 7].map(missionId => (
                            <div
                                key={missionId}
                                className={`${styles.progressDot} ${
                                    currentMission === missionId ? styles.active : ''
                                } ${
                                    completedMissions.includes(missionId) ? styles.completed : ''
                                }`}
                                onClick={() => handleMissionClick(missionId)}
                            />
                        ))}
                    </div>

                    {/* Missions Overview Grid */}
                    <div className={styles.missionsOverview}>
                        {missions.map(mission => (
                            <div
                                key={mission.id}
                                className={`${styles.missionCard} ${
                                    completedMissions.includes(mission.id) ? styles.completed : ''
                                } ${
                                    currentMission === mission.id ? styles.current : ''
                                }`}
                                onClick={() => handleMissionClick(mission.id)}
                            >
                                <div className={styles.cardNumber}>{mission.number}</div>
                                {/* <div className={styles.cardIcon}>
                                    <i className={mission.icon}></i>
                                </div>
                                <h4 className={styles.cardTitle}>{mission.title}</h4>
                                <div className={styles.cardDuration}>
                                    <FaClock size={12} /> {mission.duration}
                                </div> */}
                            </div>
                        ))}
                    </div>

                    {/* Current Mission Content */}
                    <div id="missionContent" className={styles.missionContentArea}>
                        {loading ? (
                            <div className={styles.missionLoader}>
                                <div className={styles.loaderCircle}></div>
                                <p>Loading Mission {currentMission}...</p>
                            </div>
                        ) : (
                            <>
                                {/* Mission Header */}
                                <div className={styles.missionHeader}>
                                    <div className={styles.missionNumber}>
                                        {currentMission.toString().padStart(2, '0')}
                                    </div>
                                    <div className={styles.missionTitleGroup}>
                                        <h3>{currentMissionData?.title}</h3>
                                        <p>{currentMissionData?.desc}</p>
                                    </div>
                                    <div className={styles.missionIcon}>
                                        <i className={currentMissionData?.icon}></i>
                                    </div>
                                </div>

                                {/* Mission Content */}
                                <div className={styles.missionContent}>
                                    <div className={styles.contentSection}>
                                        <h4><FaLightbulb size={16} /> What You'll Learn</h4>
                                        <p className={styles.contentText}>
                                            {currentContent?.description || 
                                             "Learn practical strategies to manage your finances effectively with defense-specific insights."}
                                        </p>
                                    </div>

                                    <div className={styles.contentSection}>
                                        <h4><FaExclamationTriangle size={16} /> Key Points</h4>
                                        <div className={styles.keyPoints}>
                                            <h5><FaStar size={14} /> Essential Takeaways</h5>
                                            <ul>
                                                {currentContent?.keyPoints?.map((point, index) => (
                                                    <li key={index}>
                                                        <FaCheck size={12} /> {point}
                                                    </li>
                                                )) || (
                                                    <>
                                                        <li><FaCheck size={12} /> Understand core concepts</li>
                                                        <li><FaCheck size={12} /> Apply to your situation</li>
                                                        <li><FaCheck size={12} /> Take actionable steps</li>
                                                    </>
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Quiz Section */}
                                    {currentContent?.quiz && (
                                        <div className={styles.contentSection}>
                                            <h4><FaQuestionCircle size={16} /> Quick Quiz</h4>
                                            <div className={styles.interactiveQuiz}>
                                                <div className={styles.quizHeader}>
                                                    <h4>Test Your Understanding</h4>
                                                    <p>Select the correct answer</p>
                                                </div>
                                                
                                                <div className={styles.quizOptions}>
                                                    {currentContent.quiz.options.map(option => (
                                                        <div
                                                            key={option.id}
                                                            className={`${styles.quizOption} ${
                                                                quizAnswer === option.id ? styles.selected : ''
                                                            }`}
                                                            onClick={() => setQuizAnswer(option.id)}
                                                        >
                                                            <label>
                                                                <input 
                                                                    type="radio" 
                                                                    name="quiz"
                                                                    checked={quizAnswer === option.id}
                                                                    onChange={() => {}}
                                                                />
                                                                <span>{option.text}</span>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Mission Navigation */}
                                <div className={styles.missionNavigation}>
                                    <button
                                        className={`${styles.navBtn} ${styles.prev}`}
                                        onClick={handlePrevMission}
                                        disabled={currentMission === 1}
                                    >
                                        <FaArrowLeft size={14} /> Previous
                                    </button>

                                    <div className={styles.missionStatus}>
                                        <span>Mission <strong>{currentMission} of 7</strong></span>
                                    </div>

                                    <button
                                        className={`${styles.navBtn} ${styles.next}`}
                                        onClick={handleMissionComplete}
                                        disabled={currentContent?.quiz && !quizAnswer}
                                    >
                                        {currentMission === 7 ? 'Finish' : 'Next'}
                                        <FaArrowRight size={14} />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Completion Message */}
                    {completedMissions.length === 7 && (
                        <div className={styles.completionBadge}>
                            <div className={styles.badgeIcon}>
                                <FaTrophy />
                            </div>
                            <h3>Congratulations!</h3>
                            <p>
                                You've completed all 7 missions. You now have essential financial knowledge.
                            </p>
                            <button
                                className={styles.navBtn}
                                onClick={() => alert('Certificate generation coming soon!')}
                            >
                                <FaCertificate /> Get Certificate
                            </button>
                        </div>
                    )}

                    {/* Back Button */}
                    {/* <div className={styles.backButtonContainer}>
                        <button
                            onClick={handleBack}
                            className={styles.backButton}
                        >
                            <FaArrowLeft /> Back to Previous
                        </button>
                    </div> */}

                </div>
            </div>
        </>
    );
}

export default FinancialLearningBootcampPage;