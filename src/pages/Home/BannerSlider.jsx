import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaMedal } from "react-icons/fa";


const slidesData = [
    {
        id: 1,
        bgImage: "/VEER/assets/img/about/Tr5c5nS6.jpg",
        title: {
            part1: "Your Second",
            marked: "Mission",
            part2: "Begins Here.",
        },
        subText:
            "Empowering Agniveers with career pathways, financial freedom, and lifelong growth.",
        shapes: [
            { className: "arm-shape-a-1", src: "/VEER/assets/img/shape/shape-1.png" },
            { className: "arm-shape-a-2", src: "/VEER/assets/img/shape/shape-2.png" },
            { className: "arm-shape-a-4", src: "/VEER/assets/img/shape/shape-4.png" },
        ],
    },
    {
        id: 2,
        bgImage: "/VEER/assets/img/about/bg-3.webp",
        title: {
            part1: "Your Second",
            marked: "Mission",
            part2: "Begins Here.",
        },
        subText:
            "Veteran-led platform guiding Agniveers towards meaningful careers.",
        shapes: [{ className: "arm-shape-a-1", src: "/VEER/assets/img/shape/shape-1.png" }],
    },
];



const BannerSlider = () => {

    const navigate = useNavigate()

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

        // <div class="banner-area banner-area1 pos-rel z-index-2">

        <section className="banner-area banner-area1 pos-rel z-index-2">
            {/* banner-area banner-area1 pos-rel z-index-2 */}

            <div className="line_wrap banner-line">
                <div className="line_item"></div>
            </div>


            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                slidesPerView={1}
                loop={true}
                effect="fade"
                // speed={1000}
                // autoplay={{
                //     delay: 6000,
                //     disableOnInteraction: false,
                // }}
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


                                <h1 className="banner-title">
                                    <span className="title-anim-part-1">
                                        <span> {slide.title.part1}{" "} </span>
                                    </span>
                                    <span className="title-anim-part-2">
                                        <span><span className="marked-text">{slide.title.marked} </span> {slide.title.part2}</span>
                                    </span>
                                </h1>

                                <p className="text-white mt-3">{slide.subText}</p>

                                <div class="armado-shape">
                                    <span class="stroke-text">VeerNXT</span>
                                </div>



                               
                                <div className="trust-badge-compact mx-auto">
                                    <FaShieldAlt className="badge-icon-compact" />
                                    <div>
                                        <div className="badge-text-compact text-white">
                                            Government of India Approved
                                        </div>
                                    </div>
                                </div>

                                <div className="trust-badge-compact mx-auto">
                                    <FaMedal className="badge-icon-compact" />
                                    <div>
                                        <div className="badge-text-compact text-white">
                                            Veteran Led, Veteran Driven
                                        </div>
                                    </div>
                                </div>

                                 <div style={{marginTop:'40px'}}  className="mission-cta-buttons">
                                    <button onClick={() => navigate('/Courses')} className="mission-btn fill-btn">
                                        <span>Start Your Journey</span>
                                        <i class="fas fa-rocket btn-icon"></i>
                                    </button>
                                </div>


                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination */}
            <div className="slider-pagination text-center mt-4"></div>
        </section>
        // </div>
    );
};

export default BannerSlider;
