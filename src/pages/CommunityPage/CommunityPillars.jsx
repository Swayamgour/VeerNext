import React from 'react';
// import styles from './CommunityPillars.module.css';
import styles from '../../css/career.module.css';
import style from '../../css/variables.module.css';
import { FaUserShield, FaCertificate, FaHandsHelping, FaShoppingBag, FaUsers, FaBriefcase } from "react-icons/fa";


const CommunityPillars = () => {
    const pillars = [
        { icon: <FaUserShield />, title: "Skill Development & Upskilling" },

        { icon: <FaCertificate />, title: "Certifications" },

        { icon: <FaHandsHelping />, title: "Veteran Sewa Kendra" },

        { icon: <FaBriefcase />, title: "Corporate Hiring & Job Connects" },

        { icon: <FaShoppingBag />, title: "Merchandise" },

        { icon: <FaUsers />, title: "Mentorship & Volunteering Network" }
    ];


    return (
        <>

            <section style={{ marginTop: '80px' }} className={styles.benefitsSection}>



                <div className={styles.benefitsContainer}>

                    {/* Section Header */}
                    <div className={styles.benefitsHeader}>


                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>    More Than a Platform. A Family. A Lifelong Mission. </span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle} style={{letterSpacing:'2px'}}>
                            Community Pillars
                        </h2>


                    </div>



                    {/* <h3 style={{ marginBottom: '40px' }} className={styles.section_title}>Community Pillars</h3> */}

                    <div className={style.pillarsGrid}>
                        {pillars.map((pillar, index) => (
                            <div key={index} className={style.pillarCard}>
                                <div className={style.pillarIcon}>{pillar.icon}</div>
                                <h4 className={style.pillarTitle}>{pillar.title}</h4>
                                <div className={style.pillarLine}></div>
                            </div>
                        ))}
                    </div>

                    <div className={style.missionQuote}>
                        {/* <div className={style.quoteIcon}>❝</div> */}
                        <p className={style.quoteText}>
                            From training grounds to civilian life — your brothers stand with you.
                        </p>
                        <div className={style.quoteAuthor}>- VEER-NXT Brotherhood</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommunityPillars;