import React, { useEffect, useRef, useState } from "react";
import styles from "../../css/career.module.css";
import {
    FaBuilding,
    FaChartLine,
    FaGraduationCap,
    FaMoneyCheckAlt,
    FaArrowRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const OpportunitySection = () => {
    const benefits = [
        {
            icon: <FaBuilding />,
            title: "Stable Government Jobs",
            subtitle: "Central & State",
            description:
                "Access to 500+ secure government positions with benefits and pension",
        },
        {
            icon: <FaChartLine />,
            title: "High-Growth Careers",
            subtitle: "Private Sector",
            description:
                "Top opportunities in corporate, banking, and emerging industries",
        },
        {
            icon: <FaGraduationCap />,
            title: "Skill Development",
            subtitle: "Pathways",
            description:
                "AI-powered skill mapping and targeted training programs",
        },
        {
            icon: <FaMoneyCheckAlt />,
            title: "Financial Stability",
            subtitle: "Long-term Growth",
            description: "Maximize your package with smart financial planning",
        },
    ];

    const swiperRef = useRef();

    const handlePrevClick = () => {
        swiperRef.current.slidePrev();
    };

    const handleNextClick = () => {
        swiperRef.current.slideNext();
    };

    return (
        <section className={styles.opportunitySection}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <div className={styles.headerDecorator}>
                        <div className={styles.decLine}></div>
                        <span className={styles.decText}>Your Journey</span>
                        <div className={styles.decLine}></div>
                    </div>

                    <h2 className={styles.sectionTitle}>
                        From <span className={styles.titleHighlight}>Uniform</span> to{" "}
                        <span className={styles.titleHighlight}>Opportunity</span>
                    </h2>

                    <p className={styles.benefitsSectionSubtitle}>
                        VeerNXT provides the clarity, direction and tools you need to step confidently into civilian life.
                    </p>
                </div>

                {/* CUSTOM BUTTONS */}
                <div className="vtx-slider-nav">
                    <button className="vtx-slider-btn vtx-slider-prev" onClick={handlePrevClick}>
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <button className="vtx-slider-btn vtx-slider-next" onClick={handleNextClick}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                {/* SWIPER */}
                <div className={styles.benefitsSectionGrid_Two}>
                    <Swiper
                        modules={[Autoplay]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1024: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                            480: { slidesPerView: 1 },
                        }}
                        className={styles.benefitsSwiper}
                    >
                        {benefits.map((benefit, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.benefitCard}>
                                    <div className={styles.cardTop}>
                                        <div className={styles.benefitsIconContainer}>
                                            <div className={styles.benefitsIconBg}></div>
                                            <div className={styles.benefitsIcon}>{benefit.icon}</div>
                                        </div>

                                        <div className={styles.cardCount}>0{index + 1}</div>
                                    </div>

                                    <h4 className={styles.cardTitle}>{benefit.title}</h4>
                                    <p className={styles.cardSubtitle}>{benefit.subtitle}</p>
                                    <p className={styles.cardDescription}>{benefit.description}</p>

                                    <div className={styles.cardLine}></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* CTA */}
                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3>Ready to Explore Your Opportunities?</h3>
                        <p>Get personalized exam suggestions based on your profile</p>
                    </div>

                    <div className="mission-cta-buttons">
                        <button
                            style={{ border: "1px solid var(--primary-color)" }}
                            className="mission-btn fill-btn "
                        >
                            <span>Explore Exam Opportunities</span>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpportunitySection;
