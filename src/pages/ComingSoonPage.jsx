import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaRocket,
    FaArrowLeft,
    FaCheckCircle,
    FaLinkedin,
    FaTwitter,
    FaBell,
    FaUsers,
    FaChartLine,
    FaLightbulb
} from 'react-icons/fa';
import styles from '../css/comingSoon.module.css';
import AllPageHeader from './components/AllPageHeader';

function ComingSoonPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 6,
        hours: 12,
        minutes: 30,
        seconds: 15
    });

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const newTime = { ...prev };

                if (newTime.seconds > 0) {
                    newTime.seconds--;
                } else {
                    newTime.seconds = 59;
                    if (newTime.minutes > 0) {
                        newTime.minutes--;
                    } else {
                        newTime.minutes = 59;
                        if (newTime.hours > 0) {
                            newTime.hours--;
                        } else {
                            newTime.hours = 23;
                            if (newTime.days > 0) {
                                newTime.days--;
                            }
                        }
                    }
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubscribed(true);
            setEmail('');

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubscribed(false);
            }, 5000);
        }, 1500);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const features = [
        {
            icon: <FaRocket />,
            title: "AI Career Matching",
            description: "Smart algorithms match your skills with perfect opportunities"
        },
        {
            icon: <FaUsers />,
            title: "Veteran Network",
            description: "Connect with defense personnel across India"
        },
        {
            icon: <FaChartLine />,
            title: "Job Tracking",
            description: "Track applications and get real-time updates"
        },
        {
            icon: <FaLightbulb />,
            title: "Learning Paths",
            description: "Personalized courses based on career goals"
        }
    ];

    return (
        <>
            <AllPageHeader props='Coming Soon' />
            <div className={styles.comingSoonPage}>

                {/* Subtle Floating Elements */}
                <div className={styles.floatingElement}>●</div>
                <div className={styles.floatingElement}>■</div>
                <div className={styles.floatingElement}>▲</div>
                <div className={styles.floatingElement}>◆</div>

                <div className={styles.comingSoonContainer}>

                    {/* Brand/Logo */}
                    <div className={styles.brandLogo}>
                        {/* <h1>VEER-NXT</h1> */}
                        {/* <p>Transforming Defense Careers</p> */}
                    </div>

                    {/* Main Heading */}
                    <div className={styles.mainHeading}>
                        <h2>Coming Soon</h2>
                        <p>
                            We're building a powerful platform to help Agniveers & Veterans
                            transition smoothly into their next career phase.
                        </p>
                    </div>

                    {/* Countdown Timer */}
                    <div className={styles.countdownTimer}>
                        <div className={styles.countdownTitle}>Launching In</div>
                        <div className={styles.timerDisplay}>
                            <div className={styles.timeUnit}>
                                <div className={styles.timeValue}>
                                    {timeLeft.days.toString().padStart(2, '0')}
                                </div>
                                <div className={styles.timeLabel}>Days</div>
                            </div>
                            <div className={styles.timeUnit}>
                                <div className={styles.timeValue}>
                                    {timeLeft.hours.toString().padStart(2, '0')}
                                </div>
                                <div className={styles.timeLabel}>Hours</div>
                            </div>
                            <div className={styles.timeUnit}>
                                <div className={styles.timeValue}>
                                    {timeLeft.minutes.toString().padStart(2, '0')}
                                </div>
                                <div className={styles.timeLabel}>Minutes</div>
                            </div>
                            <div className={styles.timeUnit}>
                                <div className={styles.timeValue}>
                                    {timeLeft.seconds.toString().padStart(2, '0')}
                                </div>
                                <div className={styles.timeLabel}>Seconds</div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className={styles.launchProgress}>
                        <div className={styles.progressBar}>
                            <div className={styles.progressFill}></div>
                        </div>
                        <div className={styles.progressText}>
                            <span>Development in Progress</span>
                            <span>75% Complete</span>
                        </div>
                    </div>

                    {/* Features Preview */}
                    <div className={styles.featureList}>
                        <h3>Key Features</h3>
                        <div className={styles.featuresGrid}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.featureItem}>
                                    <div className={styles.featureIcon}>{feature.icon}</div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                   
                  

                   
                </div>
            </div>
        </>
    );
}

export default ComingSoonPage;