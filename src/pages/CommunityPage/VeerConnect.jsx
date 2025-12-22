import React from 'react';
// import styles from './VeerConnect.module.css';
import styles from '../../css/variables.module.css';
import style from '../../css/career.module.css';
import { FaArrowRight } from 'react-icons/fa';


const VeerConnect = () => {
    const features = [
        'Curated job listings (Security, Ops, Logistics, Aviation)',
        'Veteran-friendly employer directory',
        'Resume rewriting (military → corporate language)',
        'Interview readiness support',
        'Hiring drives & job fairs'
    ];

    return (
        <>

            <section className={style.benefitsSection}>
                <div className={style.benefitsContainer}>

                    {/* Section Header */}
                    <div className={style.benefitsHeader}>


                        <div className={style.headerDecorator}>
                            <div className={style.decLine}></div>
                            <span className={style.decText}>  VeerConnect Corporate Alliance </span>
                            <div className={style.decLine}></div>
                        </div>

                        <h2 className={style.sectionTitle}>
                            {/* Mission Benefits for <span className={style.titleHighlight}>Agniveers</span> */}
                            Where Discipline Meets Opportunity.
                        </h2>

                        <p className={style.benefitsSectionSubtitle}>
                            {/* Comprehensive tools and resources designed specifically for your transition journey */}
                            A matchmaking bridge between veteran talent and corporate employers.
                        </p>
                    </div>



                    <div className={styles.veerContent}>


                        <div className={styles.featuresGrid}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.featureCard}>
                                    <div className={styles.featureNumber}>{index + 1}</div>
                                    <div className={styles.featureContent}>
                                        <h4 className={styles.featureTitle}>{feature}</h4>
                                        <div className={styles.featureLine}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.partnerPromise}>
                            <div className={styles.promiseCard}>
                                <h3>Partner Promise:</h3>
                                <p className={styles.promiseQuote}>"Hire a Soldier. Gain a Leader."</p>
                            </div>
                        </div>

                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>300 +</div>
                                <div className={styles.statLabel}>Partner Companies</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>5000 +</div>
                                <div className={styles.statLabel}>Jobs Posted</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>85 %</div>
                                <div className={styles.statLabel}>Placement Rate</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>24 h</div>
                                <div className={styles.statLabel}>Avg Response Time</div>
                            </div>
                        </div>

                        <div className={styles.ctaContainer}>
                            <button className="fill-btn">
                                Explore Jobs <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VeerConnect;