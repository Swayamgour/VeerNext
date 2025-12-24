import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const DashboardSlider = () => {
    const swiperRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isWOWLoaded, setIsWOWLoaded] = useState(false);

    const slidesData = [
        {
            id: 1,
            title: "Personalized Dashboard",
            description:
                ' Your customized mission control center with real-time progress tracking, personalized recommendations, and smart notifications tailored to your career goals.',
            ctaText: "Start Your Journey",
            bgClass: "slide-1-bg",
        },
        {
            id: 2,
            title: "Live Exam Calendar",
            description:
                "Track all government exam dates, application deadlines, and preparation timeline with automated reminders and smart scheduling to optimize your study plan.",
            ctaText: "See Platform Demo",
            bgClass: "slide-2-bg",
        },
        {
            id: 3,
            title: "Financial Portfolio Tracker",
            description:
                "Monitor your Sewa Nidhi investments, savings, and financial goals with expert guidance on smart allocation and long-term wealth building strategies.",
            ctaText: "See Platform Demo",
            bgClass: "slide-3-bg",
        },
        {
            id: 4,
            title: "Job Match Suggestions",
            description:
                "AI-powered job recommendations based on your profile and skills, with personalized match scores and direct application links to top employers.",
            ctaText: "See Platform Demo",
            bgClass: "slide-4-bg",
        },
    ];

    /* WOW INIT — unchanged */
    useEffect(() => {
        const initWOW = () => {
            if (typeof window.WOW === "function") {
                new window.WOW().init();
                setIsWOWLoaded(true);
            }
        };

        if (!window.WOW) {
            const script = document.createElement("script");
            script.src =
                "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js";
            script.onload = initWOW;
            document.body.appendChild(script);
        } else {
            initWOW();
        }
    }, []);

    /* 🔥 FIX #1 — activeIndex ❌ → realIndex ✅ */
    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex);
    };

    const handlePrevClick = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const handleNextClick = () => {
        swiperRef.current?.swiper.slideNext();
    };

    return (
        <section className="vtx-dashboard-section bg-vtx donation-area pt-50 pb-50 donation-style fix">
            <div className="container donation-inner p-relative">
                <div className="col-12">
                    <div className="bd-section-title-wrapper">
                        <div className="bd-section-subtitle">
                            Next-Step Control
                            <img src="/assets/img/icons/icon-2/bullet.png" alt="next-step control" />
                        </div>
                        <h3 className="bd-section-title mb-60 text-white">
                            Your Command Center for Civilian Success
                        </h3>
                    </div>
                </div>

                <div className="vtx-slider-main">
                    {/* NAV — unchanged */}
                    <div className="vtx-slider-nav">
                        <button
                            className="vtx-slider-btn vtx-slider-prev"
                            onClick={handlePrevClick}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button
                            className="vtx-slider-btn vtx-slider-next"
                            onClick={handleNextClick}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Autoplay, EffectFade]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop
                        effect="fade"
                        speed={800}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        onSlideChange={handleSlideChange}
                        className="swiper "
                    >
                        {slidesData.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className={`vtx-slide-bg ${slide.bgClass}`}></div>
                                <div className="vtx-slide-content">
                                    <div className="vtx-slide-text">
                                        <h2 className="vtx-slide-title">{slide.title}</h2>
                                        <p className="vtx-slide-desc">{slide.description}</p>

                                        <div
                                            className={`mission-cta-buttons d-inline-block ${isWOWLoaded ? "wow fadeInUp" : ""
                                                }`}
                                            data-wow-delay=".3s"
                                        >
                                            <div className="mission-cta-buttons">
                                                <button className="mission-btn fill-btn">
                                                    <span>{slide.ctaText}</span>
                                                    <i className="fas fa-play-circle btn-icon"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* 🔥 FIX #2 — custom pagination sync */}
                    <div className="vtx-slider-pagination">
                        {slidesData.map((_, index) => (
                            <div
                                key={index}
                                className={`vtx-pagination-dot ${activeSlide === index ? "active" : ""
                                    }`}
                                onClick={() =>
                                    swiperRef.current?.swiper.slideToLoop(index)
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardSlider;
