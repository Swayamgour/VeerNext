import React, { useEffect, useRef } from 'react';
import useCountUp from '../components/useCountUp';
// import RiotPoliceIcon from "../../img/";



const AboutArea = () => {


    const stats = [
        {
            count: '1250 ',
            label: 'Veterans Helped',
            iconClass: '/assets/img/icons/riot-police.png',
        },
        {
            count: '350 ',
            label: 'Successful Transitions',
            iconClass: '/assets/img/icons/check.png',
        },
    ];



    return (
        <section className="about-area pt-60 pb-30 p-relative bg-white z-index-2 fix">

            {/* Line Animation - Start */}
            <div className="deco_wrap">
                <div className="line_wrap body-line">
                    <div className="line_item"></div>
                </div>
            </div>
            {/* Line Animation - End */}

            <div className="container">
                <div className="about-inner p-relative">

                    {/* Decorative Shape */}
                    <div className="about-area-shape">
                        <img className="about-shape-1" src={'/assets/img/shape/x-frame.png'} alt="X-Frame shape" />
                    </div>

                    <div className="row align-items-center">

                        {/* Left Column: Image Area */}
                        <div className="col-xl-6">
                            <div className="about-thumb-1-area mx-auto">
                                <div className="about-thumb-1-wrapper mb-45 p-relative z-index-1">
                                    <div
                                        className="about-thumb about-thumb-1 p-relative wow fadeInLeft"
                                        data-wow-delay=".3s"
                                    >
                                        <img src={'/assets/img/about/abt2.webp'} alt="About VeerNXT" />
                                        <div className="panel wow"></div>
                                    </div>
                                    <div className="facility-shape-wrapper">
                                        <img className="about-shape shape-1" src={'/assets/img/shape/round-1.png'} alt="Round shape" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Content Area */}
                        <div className="col-xl-6">
                            <div className="about-content-wrapper mb-65 wow fadeInRight" data-wow-delay=".3s">
                                <div className="bd-section-title-wrapper">
                                    <h3 className="bd-section-title mb-40">
                                        Why VeerNXT?
                                    </h3>
                                </div>

                                <div className="about-content">
                                    <p>
                                        Four years of service make you disciplined, brave, and responsible. VeerNXT gives you the tools to build the future you deserve.
                                    </p>
                                    <p className="fw-bold">
                                        India's most trusted, veteran-led transition platform - the country's first Defence Reintegration EdTech for Agniveers and ex-servicemen - offering jobs, training, career guidance, and mentorship under one roof.
                                    </p>
                                    <p>
                                        Whether you aim for a government job, a corporate career, or your own business, we guide you with military-grade clarity and purpose.
                                    </p>
                                </div>

                                {/* Stat Box */}
                                <div className="border-box">
                                    <div className="row">
                                        {stats.map((stat, index) => (

                                            <div className="col-xl-6 col-md-6" key={index}>
                                                <div className="about-info">
                                                    <div className="about-info-icon">

                                                        <img src={stat.iconClass} />
                                                    </div>
                                                    <div className="about-info-text ">
                                                        <span className="odometer" >
                                                            {/* The number is displayed directly, awaiting external Odometer script */}
                                                            <span
                                                                className="odometer"
                                                                data-count={stat.count}
                                                            >
                                                                {/* {useCountUp(stat.count, 1500)} */}
                                                                {stat.count}
                                                            </span>
                                                            +
                                                        </span>
                                                        <p>{stat.label}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* End Stat Box */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Example Usage of the component:

// const MyPage = () => (
//     <AboutArea
//         veteransHelped={1250}
//         successfulTransitions={350}
//     />
// );


export default AboutArea;