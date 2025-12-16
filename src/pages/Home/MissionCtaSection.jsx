import React from 'react';

/**
 * MissionCtaSection Component
 * Renders the final call-to-action block.
 */
const MissionCtaSection = ({ onStartMissionClick, onViewExamsClick, onFinancialCommandClick }) => {
    // Define the button data for easy mapping and clean rendering
    const ctaButtons = [
        {
            text: 'Start My Mission',
            className: 'fill-btn',
            icon: 'fas fa-rocket',
            link: '#start-mission', // Replace with actual URL
            onClick: onStartMissionClick,
        },
        {
            text: 'View Exams',
            className: 'border-btn',
            icon: 'fas fa-search',
            link: '#view-exams', // Replace with actual URL
            onClick: onViewExamsClick,
        },
        {
            text: 'Financial Command',
            className: 'border-btn',
            icon: 'fas fa-chart-line',
            link: '#financial-command', // Replace with actual URL
            onClick: onFinancialCommandClick,
        },
    ];

    return (
        <section className="mission-cta-section mb-85">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="mission-content">

                            <h1 className="mission-headline wow fadeInUp" data-wow-delay=".3s">
                                You protected the nation. <br />
                                <span className="highlight">Now we protect your future.</span>
                            </h1>

                            <p className="mission-subtitle wow fadeInUp text-center">
                                Join India's Most Trusted Veteran-Led Reintegration Platform.
                            </p>

                            <div className="mission-cta-buttons wow fadeInUp" data-wow-delay=".3s">
                                {ctaButtons.map((button, index) => (


                                    <div className="mission-cta-buttons">
                                        <button onClick={(e) => {
                                            if (button.onClick) {
                                                e.preventDefault();
                                                button.onClick(e);
                                            }
                                        }} className={`mission-btn ${button.className}`}>
                                            <span>{button.text}</span>
                                            <i className={`${button.icon} btn-icon`}></i>
                                        </button>
                                    </div>


                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionCtaSection;