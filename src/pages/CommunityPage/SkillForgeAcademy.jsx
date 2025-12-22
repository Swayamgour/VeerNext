import React from 'react';
// import styles from './SkillForgeAcademy.module.css';
import styles from '../../css/career.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FaUserTie, FaShieldAlt, FaLaptopCode, FaLanguage } from "react-icons/fa";

// import { FaUserTie, FaShieldAlt, FaLaptopCode, FaLanguage } from "react-icons/fa";


const SkillForgeAcademy = () => {

    const tracks = [
        {
            number: '1️⃣',
            title: 'Corporate Readiness Track',
            subtitle: 'From Uniform to Office Leadership.',
            skills: [
                'Workplace behaviour & communication',
                'Email writing',
                'Excel, MIS, CRM basics'
            ],
            icon: <FaUserTie />,
            color: 'var(--growth-color)'
        },
        {
            number: '2️⃣',
            title: 'Security & Ops Track',
            subtitle: 'Command. Control. Coordinate.',
            skills: [
                'Security officer training',
                'CCTV ops & surveillance',
                'Facility management',
                'Crisis response basics'
            ],
            icon: <FaShieldAlt />,
            color: 'var(--protection-color)'
        },
        {
            number: '3️⃣',
            title: 'Tech & Digital Track',
            subtitle: 'Future-ready digital skills.',
            skills: [
                'Basic IT & computer fundamentals',
                'Digital tools (Docs, Sheets, CRM)',
                'Intro to cybersecurity',
                'Data entry + administrative systems'
            ],
            icon: <FaLaptopCode />,
            color: 'var(--skills-color)'
        },
        {
            number: '4️⃣',
            title: 'Communication & English Mastery',
            subtitle: 'Speak with confidence.',
            skills: [
                'Spoken English',
                'Interview communication'
            ],
            icon: <FaLanguage />,
            color: 'var(--gold-color)'
        }
    ];


    return (
        <>


            <section  className={styles.benefitsSection}>
               


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