import React from 'react';
// import styles from './SkillForgeAcademy.module.css';
import styles from '../../css/career.module.css';

import { tracks } from '../components/data';
import { FaCheckCircle } from 'react-icons/fa';

// import { FaUserTie, FaShieldAlt, FaLaptopCode, FaLanguage } from "react-icons/fa";


const SkillForgeAcademy = () => {




    return (
        <>


            <section className={styles.benefitsSection}>



                <div className={styles.benefitsContainer}>

                    {/* Section Header */}
                    <div className={styles.benefitsHeader}>


                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>  VeerNXT SkillForge Academy </span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle}>
                            Shape Your Second Career with  <span className={styles.titleHighlight}>Military Precision.</span>
                        </h2>

                        <p className={styles.benefitsSectionSubtitle}>
                            Practical, fast-paced skills and micro-credentials designed for Agniveers transitioning into high-demand careers.

                        </p>
                    </div>





                    <div className={styles.benefitsSectionGrid}>
                        {tracks?.map((benefit, index) => (
                            <div key={index} className={`${styles.benefitsSectionCard} ${styles[benefit.color]}`}>

                                {/* Card Number */}
                                <div className={styles.benefitsCardNumber}>0{index + 1}</div>

                                {/* Icon with Background */}
                                <div className={styles.benefitsIconContainer}>
                                    <div className={styles.benefitsIconBg}></div>
                                    <div className={styles.benefitsIcon}>
                                        {benefit.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={styles.benefitsCardContent}>
                                    <h3 className={styles.cardTitle}>
                                        {benefit.title}
                                        <span className={styles.benefitsTitleLine}></span>
                                    </h3>
                                    <p className={styles.benefitsSectionCardDescription}>{benefit.subtitle}</p>
                                </div>

                                {/* Features List */}
                                <div className={styles.benefitsFeaturesList}>
                                    {benefit.skills.map((skill, idx) => (
                                        <div key={idx} className={styles.benefitsFeature}>
                                            <FaCheckCircle className={styles.benefitsCheckIcon} />
                                            <span>{skill}</span>
                                        </div>
                                    ))}


                                </div>


                                <div className={styles.benefitsCardBorder}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SkillForgeAcademy;