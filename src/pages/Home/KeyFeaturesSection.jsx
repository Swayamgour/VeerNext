import React from 'react';



/**
 * Reusable Key Feature Card Component
 */
const FeatureCard = ({ imageSrc, title, subtitle }) => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="key-feature-card">
                <div className="key-feature-card-icon">
                    <img src={imageSrc} alt={`${title} icon`} />
                </div>
                <div>
                    <h3 className="key-feature-card-title">{title}</h3>
                    <div className="key-feature-card-subtitle">{subtitle}</div>
                </div>
            </div>
        </div>
    );
};

/**
 * Main Key Features Section Component
 */
const KeyFeaturesSection = () => {
    const featuresData = [
        {
            imageSrc: '/assets/img/icons/exam-brief.png',
            title: 'Clean Exam Briefs',
            subtitle: 'Only what matters. Nothing more.',
        },
        {
            imageSrc: '/assets/img/icons/learning.png',
            title: 'Complete Learning System',
            subtitle: 'Videos, quizzes, mock tests.',
        },
        {
            imageSrc: '/assets/img/icons/resume.png',
            title: 'CV Builder',
            subtitle: 'Convert military experience to civilian roles.',
        },
        {
            imageSrc: '/assets/img/icons/interview.png',
            title: 'Interview Simulator',
            subtitle: 'AI-powered + human mentoring.',
        },
        {
            imageSrc: '/assets/img/icons/business-plan.png',
            title: 'Financial Planner',
            subtitle: 'Secure your Sewa Nidhi.',
        },
        {
            imageSrc: '/assets/img/icons/ved.png',
            title: 'Veteran-Led, Discipline-Driven',
            subtitle: 'By veterans, for veterans.',
        },
    ];

    return (
        <section className="features-area pt-70 pb-70 p-relative bg-white z-index-2">
            <div className="container">

                <div className="bd-section-title-wrapper">
                    <div className="bd-section-subtitle">
                        Built for Soldiers. Designed for Success.
                        <i className="fas fa-star"></i> {/* Replaced flaticon-001-bullet with a star */}
                    </div>
                    <h3 className="bd-section-title mb-60 ">
                        Key Features
                    </h3>
                </div>

                <div className="features-inner p-relative">
                    <div className="row">
                        {featuresData.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                imageSrc={feature.imageSrc}
                                title={feature.title}
                                subtitle={feature.subtitle}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyFeaturesSection;