import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards, EffectCoverflow } from 'swiper/modules';
import styles from '../../css/career.module.css';
import {
    FaClipboardList,
    FaRobot,
    FaFileAlt,
    FaGraduationCap,
    FaTrophy,
    FaArrowRight,
    FaCheckCircle,
    FaUserShield,
    FaPlay,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isWOWLoaded, setIsWOWLoaded] = useState(false);

    const navigate = useNavigate()

    const steps = [
        {
            number: '1',
            title: 'Fill a short form',
            description: 'Tell us your qualification, goals, location & preferences.',
            icon: <FaClipboardList />,
            color: 'step1',
            time: '2 Minutes',
            features: ['Personal Details', 'Service History', 'Career Goals'],
            image: '/VEER/assets/img/how-it-works/form-fill.jpg',
            imageAlt: 'Soldier filling form',
            videoDemo: '#',
            stats: '98% Completion Rate',

        },
        {
            number: '2',
            title: 'AI Career Scan',
            description: 'Our system analyses your strengths, interests & service background.',
            icon: <FaRobot />,
            color: 'step2',
            time: 'Instant Analysis',
            features: ['Skills Assessment', 'Interest Mapping', 'Military Credit'],
            image: '/VEER/assets/img/how-it-works/ai-scan.jpg',
            imageAlt: 'AI Analysis Dashboard',
            videoDemo: '#',
            stats: '500+ Data Points Analyzed',
        },
        {
            number: '3',
            title: 'Receive Your Personalised Report',
            description: 'Exam suggestions + skill gaps + preparation timeline.',
            icon: <FaFileAlt />,
            color: 'step3',
            time: '24 Hours',
            features: ['Exam Recommendations', 'Skill Gap Analysis', 'Timeline Planning'],
            image: '/VEER/assets/img/how-it-works/report.jpg',
            imageAlt: 'Personalized Report',
            videoDemo: '#',
            stats: '15+ Career Paths Suggested',
        },
        {
            number: '4',
            title: 'Begin Structured Training',
            description: 'Access mock tests, lessons, revision drills, and daily tasks.',
            icon: <FaGraduationCap />,
            color: 'step4',
            time: 'Daily Progress',
            features: ['Mock Tests', 'Study Material', 'Daily Tasks'],
            image: '/VEER/assets/img/how-it-works/training.jpg',
            imageAlt: 'Structured Training',
            videoDemo: '#',
            stats: '1000+ Practice Questions',
        },
        {
            number: '5',
            title: 'Achieve Civilian Victory',
            description: 'Secure a government or private sector job with confidence.',
            icon: <FaTrophy />,
            color: 'step5',
            time: 'Career Success',
            features: ['Job Placement', 'Interview Prep', 'Career Support'],
            image: '/VEER/assets/img/how-it-works/success.jpg',
            imageAlt: 'Career Success Celebration',
            videoDemo: '#',
            stats: '85% Success Rate',
        }
    ];

    // Sample images array if you don't have actual images
    const sampleImages = [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w-800&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ];

    useEffect(() => {
        const initWOW = () => {
            if (typeof window.WOW === "function") {
                new window.WOW().init();
                setIsWOWLoaded(true);
            }
        };

        if (!window.WOW) {
            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js";
            script.onload = initWOW;
            document.body.appendChild(script);
        } else {
            initWOW();
        }
    }, []);





    return (
        <section className={styles.opportunitySection}>
            <div className={styles.howItWorksContainer}>

                {/* Section Header */}
                <div className={styles.howItWorksHeader}>


                    <div className={styles.headerDecorator}>
                        <div className={styles.decLine}></div>
                        <span className={styles.decText}>The Process </span>
                        <div className={styles.decLine}></div>
                    </div>

                    <h2 className={styles.sectionTitle}>
                        How It <span className={styles.titleHighlight}>Works</span>
                    </h2>

                    <p className={styles.howItWorksSubtitle}>
                        Simple. Fast. Personalised. Built for Soldiers by Soldiers.
                    </p>
                </div>


                <div className={styles.interactiveSteps}>
                    <div className={styles.stepImageGallery}>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            effect="fade"
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.realIndex);
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className={styles.gallerySwiper}
                        >

                            {steps.map((step, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className={styles.gallerySlide}
                                        style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' || sampleImages[index]})` }}
                                    >
                                        <div className={styles.galleryOverlay}>
                                            <div className={styles.galleryContent}>
                                                <div className={styles.galleryStepBadge}>
                                                    Step {step.number}
                                                </div>
                                                <h3>{step.title}</h3>
                                                <p>{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className={styles.stepSelector}>
                        {steps.map((step, index) => (
                            <button
                                key={index}
                                className={`${styles.stepSelectorBtn} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => {
                                    setActiveIndex(index);
                                    // swiperRef.current?.swiper.slideTo(index);

                                    swiperRef.current.slideToLoop(index);

                                }}
                            >


                                <div className={`${styles.selectorIcon} ${activeIndex === index ? styles.active : ''}`}  >
                                    {step.icon}
                                </div>
                                <div className={`${styles.selectorText} ${activeIndex === index ? styles.active : ''}`} >
                                    <h5>{step.title}</h5>
                                    <p>{step.time}</p>
                                </div>
                            </button>
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

                {/* CTA Section */}
                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3>Ready to Start Your Journey?</h3>
                        <p>Get your personalized career transition report in just 24 hours</p>
                    </div>

                    <div className="mission-cta-buttons">
                        <button onClick={() => navigate('/GenerateCareerReportPage')} style={{ border: '1px solid var(--primary-color)' }} className="mission-btn fill-btn">
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
                            <span className='text-white'>Free Career Assessment</span>
                        </div>
                        <div className={styles.ctaFeature}>
                            <FaCheckCircle className={styles.ctaFeatureIcon} />
                            <span className='text-white'>100% Confidential</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Inline CSS for Swiper Components */}
            <style jsx>{`
                .howItWorksSection {
                    position: relative;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    overflow: hidden;
                }
                
                .howItWorksSection::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 10% 20%, rgba(30, 58, 138, 0.15) 0%, transparent 40%),
                        radial-gradient(circle at 90% 80%, rgba(219, 39, 119, 0.15) 0%, transparent 40%);
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;