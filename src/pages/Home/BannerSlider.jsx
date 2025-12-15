import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slidesData = [
    {
        id: 1,
        bgImage: "/assets/img/about/army-to-co.webp",
        title: {
            part1: "Your Second",
            marked: "Mission",
            part2: "Begins Here.",
        },
        subText:
            "Empowering Agniveers with career pathways, financial freedom, and lifelong growth.",
        shapes: [
            { className: "arm-shape-a-1", src: "/assets/img/shape/shape-1.png" },
            { className: "arm-shape-a-2", src: "/assets/img/shape/shape-2.png" },
            { className: "arm-shape-a-4", src: "/assets/img/shape/shape-4.png" },
        ],
    },
    {
        id: 2,
        bgImage: "/assets/img/about/bg-3.webp",
        title: {
            part1: "Your Second",
            marked: "Mission",
            part2: "Begins Here.",
        },
        subText:
            "Veteran-led platform guiding Agniveers towards meaningful careers.",
        shapes: [{ className: "arm-shape-a-1", src: "/assets/img/shape/shape-1.png" }],
    },
];

const BannerSlider = () => {

    useEffect(() => {
        const badges = document.querySelectorAll(".trust-badge-compact");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        badges.forEach(badge => observer.observe(badge));
    }, []);


    return (
        <section className="banner-area banner-area1 position-relative">

            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                slidesPerView={1}
                loop={true}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: ".slider-pagination",
                }}
                className="slider__active"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="single-banner banner-1080 d-flex align-items-center">

                            {/* Background */}
                            <div
                                className="banner-bg"
                                style={{ backgroundImage: `url(${slide.bgImage})` }}
                            ></div>

                            {/* Shapes */}
                            <div className="arm-hero-shape-wrapper">
                                {slide.shapes.map((shape, index) => (
                                    <div
                                        key={index}
                                        className={`arm-hero-shape ${shape.className}`}
                                    >
                                        <img src={shape.src} alt="shape" />
                                    </div>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="container">
                                <h1 className="banner-title text-white">
                                    {slide.title.part1}{" "}
                                    <span className="marked-text">{slide.title.marked}</span>{" "}
                                    {slide.title.part2}
                                </h1>

                                <p className="text-white mt-3">{slide.subText}</p>

                                <div class="mission-cta-buttons wow fadeInUp mt-40" data-wow-delay=".3s">
                                    <a href="#" data-bs-target="#startJourney" data-bs-toggle="modal" class="mission-btn fill-btn">
                                        <span>Start Your Journey</span>
                                        <i class="fas fa-rocket btn-icon"></i>
                                    </a>
                                </div>
                                <div class="trust-badge-compact mx-auto">
                                    <i class="fas fa-award badge-icon-compact"></i>
                                    <div>
                                        <div class="badge-text-compact text-white">Government of India Approved </div>
                                    </div>
                                </div>
                                <div class="trust-badge-compact mx-auto">
                                    <i class="fas fa-award badge-icon-compact"></i>
                                    <div>
                                        <div class="badge-text-compact text-white">Veteran Led, Veteran Driven</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination */}
            <div className="slider-pagination text-center mt-4"></div>
        </section>
    );
};

export default BannerSlider;
