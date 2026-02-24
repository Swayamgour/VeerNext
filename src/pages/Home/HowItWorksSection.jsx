import React from 'react';
import { workflowSteps } from '../components/data';

// --- Placeholder Asset Import ---
// import '/assets/img/about/banner-1.webp' from '/assets/img/about/banner-1.webp'; // Replace with actual path

/**
 * Reusable TimelineStep Component
 */
const TimelineStep = ({ stepNumber, iconClass, title, description, isVictory = false }) => {
    return (
        <div className={`vtx-timeline-item ${isVictory ? 'victory-step' : ''}`}>
            <div className="vtx-timeline-marker">
                <span className="vtx-step-number">{stepNumber}</span>
            </div>
            <div className="vtx-timeline-content">
                <div className="vtx-step-icon-box">
                    <i className={`${iconClass} vtx-step-icon`}></i>
                </div>
                <div className="vtx-step-text">
                    <h4 className="vtx-step-title">{title}</h4>
                    <p className="vtx-step-desc">{description}</p>
                </div>
            </div>
        </div>
    );
};

/**
 * Main HowItWorksSection Component
 */
const HowItWorksSection = () => {


    // Note on Parallax: The background image needs to be set up either via CSS or a JavaScript library
    // that reads the data-background attribute or a style object.
    const backgroundStyle = {
        backgroundImage: `url(${'/assets/img/about/banner-1.webp'})`,
    };

    return (
        <section className="vtx-how-section donation-area pt-130 pb-130 donation-style fix">

            {/* Background Overlay Image (Parallax) */}
            <div
                className="donation-overlay-img area-absolute parallax-bg"
                // data-background={'/assets/img/about/banner-1.webp'} // Retained data attribute for external scripts
                style={backgroundStyle} // Using inline style for immediate visibility
            ></div>

            <div className="container">
                <div className="donation-inner p-relative">

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="dontaion-content-wrapper wow fadeInUp" data-wow-delay=".3s">
                                <div className="bd-section-title-wrapper">
                                    <div className="bd-section-subtitle">
                                        Mission Workflow
                                        {/* <i className="fas fa-star"></i> Replaced flaticon-001-bullet */}
                                        <img src={'/assets/img/icons/icon-2/bullet.png'} alt='/icons/icon-2' />
                                    </div>
                                    <h3 className="bd-section-title mb-40">How VeerNXT Works</h3>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Steps */}
                        <div className="col-12">
                            <div className="vtx-timeline">
                                {workflowSteps?.map((step) => (
                                    <TimelineStep
                                        key={step.stepNumber}
                                        stepNumber={step.stepNumber}
                                        title={step.title}
                                        description={step.description}
                                        iconClass={step.iconClass}
                                        isVictory={step.isVictory}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;