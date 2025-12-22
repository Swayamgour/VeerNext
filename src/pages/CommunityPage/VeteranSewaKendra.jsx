import React from 'react';
// import styles from './VeteranSewaKendra.module.css';
import styles from '../../css/variables.module.css';
import style from '../../css/career.module.css';
import {
    FaMedal,
    FaBalanceScale,
    FaLifeRing,
    FaCheckCircle,
    FaArrowRight
} from "react-icons/fa";



const VeteranSewaKendra = () => {
    const modules = [
        {
            number: '1️⃣',
            title: 'Welfare & Scheme Navigator',
            description: 'Find all benefits you deserve:',
            icon: <FaMedal />,
            items: [
                'ECHS',
                'CSD',
                'Pension + disability + dependents',
                'State welfare schemes',
                'Ex-Servicemen quota assistance'
            ]
        },

        {
            number: '2️⃣',
            title: 'Documentation & Legal Desk',
            description: 'Legal/consumer rights help:',
            icon: <FaBalanceScale />,
            items: [
                'Service records correction',
                'Pension/claim documentation',
                'Family support guidance'
            ]
        },

        {
            number: '3️⃣',
            title: 'Outreach Wing',
            description: 'Distressed veteran support:',
            icon: <FaLifeRing />,
            items: [
                'Lost-contact tracing',
                'Coordination with Zila Sainik Boards'
            ]
        }
    ];


    return (
        <>

            <section className={style.benefitsSection}>

                <div className={style.benefitsContainer}>

                    {/* Section Header */}
                    <div className={style.benefitsHeader}>
                        <div className={style.headerDecorator}>
                            <div className={style.decLine}></div>
                            <span className={style.decText}>   Veteran Sewa Kendra: Sena Saathi Support Hub </span>
                            <div className={style.decLine}></div>
                        </div>

                        <h2 className={style.sectionTitle}>
                            {/* Shape Your Second Career with  <span className={styles.titleHighlight}>Military Precision.</span> */}
                            For Every Soldier Who Served. For Every Need Beyond Service.
                        </h2>

                    </div>



                    {/* <div className={styles.modulesGrid}>
                        {modules.map((module, index) => (
                            <div key={index} className={styles.moduleCard}>
                                <div className={styles.moduleNumber}>{module.icon}</div>
                                <h3 className={styles.moduleTitle}>{module.title}</h3>
                                <p className={styles.moduleDescription}>{module.description}</p>
                                <ul className={styles.moduleList}>
                                    {module.items.map((item, idx) => (
                                        <li key={idx} className={styles.moduleItem}>
                                            <i className="fas fa-check"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div> */}


                    <div className={style.benefitsSectionGrid}>
                        {modules?.map((benefit, index) => (
                            <div key={index} className={`${style.benefitsSectionCard} ${style[benefit.color]}`}>

                                {/* Card Number */}
                                <div className={style.benefitsCardNumber}>0{index + 1}</div>

                                {/* Icon with Background */}
                                <div className={style.benefitsIconContainer}>
                                    <div className={style.benefitsIconBg}></div>
                                    <div className={style.benefitsIcon}>
                                        {benefit.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={style.benefitsCardContent}>
                                    <h3 className={style.cardTitle}>
                                        {benefit.title}
                                        <span className={style.benefitsTitleLine}></span>
                                    </h3>
                                    <p className={style.benefitsSectionCardDescription}>{benefit.description}</p>
                                </div>

                                {/* Features List */}
                                <div className={style.benefitsFeaturesList}>
                                    {benefit.items.map((item, idx) => (
                                        <div key={idx} className={style.benefitsFeature}>
                                            <FaCheckCircle className={style.benefitsCheckIcon} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Border */}
                                <div className={style.benefitsCardBorder}></div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.ctaContainer}>
                        <button className="fill-btn">
                            Visit Sena Saathi Hub  <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VeteranSewaKendra;