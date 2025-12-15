import React, { useEffect, useRef } from 'react';

// --- Placeholder Asset Imports ---
// import '/assets/img/shape/x-frame.png' from '/assets/img/shape/x-frame.png';
// import '/assets/img/about/abt2.webp' from '/assets/img/about/abt2.webp';
// import '/assets/img/shape/round-1.png' from '/assets/img/shape/round-1.png';

/**
 * AboutArea Component
 * Renders the "Why VeerNXT?" section with image and statistics.
 */
const AboutArea = ({ veteransHelped, successfulTransitions }) => {
    // Note: The 'odometer' effect requires external JS (Odometer.js) initialized in useEffect.
    // For now, we display the numbers directly.

    // Example useEffect setup (if using Odometer.js or WOW.js):
    /*
    const odometersRef = useRef([]);

    useEffect(() => {
        // Initialization logic for Odometer.js (example pseudocode)
        // odometersRef.current.forEach(el => {
        //     const od = new Odometer({ el, value: 0 });
        //     od.update(el.getAttribute('data-count'));
        // });
        
        // Initialization logic for WOW.js (example pseudocode)
        // if (typeof window !== 'undefined' && window.WOW) {
        //     new window.WOW().init();
        // }
    }, []);
    */

    const stats = [
        {
            count: veteransHelped,
            label: 'Veterans Helped',
            iconClass: 'fas fa-users', // Replaced flaticon-032-riot-police
        },
        {
            count: successfulTransitions,
            label: 'Successful Transitions',
            iconClass: 'fas fa-check-circle', // Replaced flaticon-027-check
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
                                                        <i className={stat.iconClass}></i>
                                                    </div>
                                                    <div className="about-info-text">
                                                        <span>
                                                            {/* The number is displayed directly, awaiting external Odometer script */}
                                                            <span
                                                                className="odometer"
                                                                data-count={stat.count}
                                                            >
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
/*
const MyPage = () => (
    <AboutArea 
        veteransHelped={1250} 
        successfulTransitions={350} 
    />
);
*/

export default AboutArea;