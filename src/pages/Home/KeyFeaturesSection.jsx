import React from 'react';
import { featuresData } from '../components/data';



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
  


    return (
        <section className="features-area pt-70 pb-70 p-relative bg-white z-index-2">
            <div className="container">

                <div className="bd-section-title-wrapper">
                    <div className="bd-section-subtitle">
                        Built for Soldiers. Designed for Success.
                        {/* <i className="fas fa-star"></i> Replaced flaticon-001-bullet with a star */}
                           <img src={'/VEER/assets/img/icons/icon-2/bullet.png'} />
                    </div>
                    <h3 className="bd-section-title mb-60 ">
                        Key Features
                    </h3>
                </div>

                <div className="features-inner p-relative">
                    <div className="row">
                        {featuresData?.map((feature, index) => (
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