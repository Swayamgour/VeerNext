import React from 'react';
// import styles from './OfficersCompass.module.css';
import styles from '../../css/variables.module.css';
import style from '../../css/career.module.css';
import { FaArrowRight } from 'react-icons/fa';


const OfficersCompass = () => {
    const mentors = [
        { type: 'Retired Officers', color: 'var(--primary-color)' },
        { type: 'Senior NCOs', color: 'var(--secondary-color)' },
        { type: 'Corporate Leaders', color: 'var(--growth-color)' },
        { type: 'Veteran Entrepreneurs', color: 'var(--gold-color)' }
    ];

    const mentorshipAreas = [
        'Career mapping',
        'Exam selection',
        'Civilian behaviour & mindset',
        'Psychological resilience',
        'Corporate transition',
        'Life planning'
    ];

    return (
        <>
            <section className={style.benefitsSection}>
                <div className={style.benefitsContainer}>

                    {/* Section Header */}
                    <div className={style.benefitsHeader}>


                        <div className={style.headerDecorator}>
                            <div className={style.decLine}></div>
                            <span className={style.decText}>  Officer's Compass Mentorship Network </span>
                            <div className={style.decLine}></div>
                        </div>

                        <h2 className={style.sectionTitle}>
                            {/* Mission Benefits for <span className={styles.titleHighlight}>Agniveers</span> */}
                            Guidance From Those Who've Walked the Path Before You.
                        </h2>

                        {/* <p className={styles.benefitsSectionSubtitle}>
                            Comprehensive tools and resources designed specifically for your transition journey
                        </p> */}
                    </div>



                    <div className={styles.compassContent}>
                        <div className={styles.mentorsSection}>
                            <h4 className={styles.sectionSubtitle}>One-on-one and group mentorship from:</h4>
                            <div className={styles.mentorsGrid}>
                                {mentors.map((mentor, index) => (
                                    <div key={index} className={styles.mentorCard} style={{ borderLeftColor: mentor.color }}>
                                        <div className={styles.mentorIcon}>
                                            <i className="fas fa-user-tie"></i>
                                        </div>
                                        <h4 className={styles.mentorType}>{mentor.type}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.areasSection}>
                            <h4 className={styles.sectionSubtitle}>Mentorship Covers:</h4>
                            <div className={styles.areasGrid}>
                                {mentorshipAreas.map((area, index) => (
                                    <div key={index} className={styles.areaCard}>
                                        <div className={styles.areaNumber}>{index + 1}</div>
                                        <div className={styles.areaContent}>
                                            <h5 className={styles.areaTitle}>{area}</h5>
                                            <div className={styles.areaLine}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.ctaContainer}>
                                <button className="fill-btn">
                                    Book a Mentor Session <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OfficersCompass;