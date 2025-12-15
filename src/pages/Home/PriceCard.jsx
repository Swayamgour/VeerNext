import React from 'react';

// Flaticon replacement: Assuming flaticon-001-bullet is a decorative icon, replaced with a simple star.
// Assuming flaticon-040-right is a right arrow, replaced with fas fa-arrow-right.

/**
 * Reusable PriceCard Component
 */
const PriceCard = ({ iconClass, title, text, tagText, buttonText, buttonLink = "#" }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="price-card price-card-default">
                <div className="price-card-icon">
                    <i className={iconClass}></i>
                </div>
                <h4 className="pricing-title"> {title}</h4>
                <div className="pricing-text">
                    <p>{text}</p>
                </div>
                <div className="pricing-btn">
                    <span className="price-tag">{tagText}</span>
                    <a href={buttonLink} className="fill-btn" onClick={(e) => { e.preventDefault(); /* Custom logic here */ }}>
                        {buttonText}
                        <i className="fas fa-arrow-right"></i> {/* Replaced flaticon-040-right */}
                    </a>
                </div>
            </div>
        </div>
    );
};

/**
 * Main Offer Section Component
 */
const OfferSection = () => {
    const offerings = [
        {
            iconClass: 'fas fa-briefcase',
            title: 'Career Transition',
            text: 'Access 500+ central & state govt exams, AI-powered career mapping, VR interview prep, CV building, soft skills & English training.',
            tagText: 'Explore Exams',
            buttonText: 'Explore Exams',
            link: '#', // Replace with actual link
        },
        {
            iconClass: 'fas fa-shield-alt',
            title: 'Grow Your Sewa Nidhi',
            text: 'Smart investment guidance, insurance, loans, mutual funds, entrepreneurship support—maximize your ₹8-10 lakh package.',
            tagText: 'Plan Your Finances',
            buttonText: 'Plan Your Finances',
            link: '#', // Replace with actual link
        },
        {
            iconClass: 'fas fa-users',
            title: 'Connect & Thrive',
            text: 'Join 10,000+ veterans, access global mentors, peer support, exclusive job boards, and industry networking events.',
            tagText: 'Join Community',
            buttonText: 'Join Community',
            link: '#', // Replace with actual link
        },
    ];

    return (
        <section className="element fix pt-15 pb-25 bg-white z-index-2">
            <div className="container">
                <div className="row col-12 mx-auto">
                    <div className="col-xl-12 mb-35">
                        <div className="bd-section-title-wrapper">
                            <div className="bd-section-subtitle">
                                Empowering Your Next Mission Beyond the Uniform
                                <i className="fas fa-star"></i> {/* Replaced flaticon-001-bullet with a star */}
                            </div>
                            <h3 className="bd-section-title mb-60">
                                What we offer?
                            </h3>
                        </div>

                        {/* Pricing Cards Wrapper */}
                        <div className="row col-12 mx-auto pricing-wrapper wow fadeInUp" data-wow-delay=".3s">
                            {offerings.map((offer, index) => (
                                <PriceCard
                                    key={index}
                                    iconClass={offer.iconClass}
                                    title={offer.title}
                                    text={offer.text}
                                    tagText={offer.tagText}
                                    buttonText={offer.buttonText}
                                    buttonLink={offer.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;