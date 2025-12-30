import React from 'react';
// import styles from './MissionCertify.module.css';
import styles from '../../css/variables.module.css';
import style from '../../css/career.module.css';
import {
    FaShieldAlt,
    FaLaptop,
    FaLanguage,
    FaUserTie,
    FaFirstAid,
    FaTruckLoading,
    FaArrowRight
} from "react-icons/fa";



const MissionCertify = () => {
    const certificates = [
        { icon: <FaShieldAlt />, title: 'Security & Protection Certification' },
        { icon: <FaLaptop />, title: 'Digital Literacy Badge' },
        { icon: <FaLanguage />, title: 'English Proficiency Certificate' },
        { icon: <FaUserTie />, title: 'Corporate Soft Skills Certificate' },
        { icon: <FaFirstAid />, title: 'First Aid & Emergency Response' },
        { icon: <FaTruckLoading />, title: 'Logistics & Supply Chain Basics' }
    ];


    return (
        <>

            <section className={style.benefitsSection}>



                <div className={style.benefitsContainer}>

                    {/* Section Header */}
                    <div className={style.benefitsHeader}>


                        <div className={style.headerDecorator}>
                            <div className={style.decLine}></div>
                            <span className={style.decText}>   Mission-Certify Career Advantage Certificates </span>
                            <div className={style.decLine}></div>
                        </div>

                        <h2 className={style.sectionTitle}>
                            Turn your skills into   <span className={style.titleHighlight}>Recognised Credentials.</span>
                        </h2>

                        <p className={style.benefitsSectionSubtitle}>
                            Short, govt-aligned courses that boost an Agniveer's employability across sectors.

                        </p>
                    </div>



                    <div className={styles.certifyContent}>
                        <div className={styles.certifyText}>


                            <div className={styles.certificatesGrid}>
                                {certificates.map((cert, index) => (
                                    <div key={index} className={styles.certificateCard}>
                                        <div className={styles.certIcon}>{cert.icon}</div>
                                        <h4 className={styles.certTitle }>{cert.title}</h4>
                                        <div className={styles.certLine}></div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.ctaContainer}>
                                <button className="fill-btn">
                                    Earn a Certification
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>

                        <div className={styles.certifyVisual}>
                            <div className={styles.certificateSample}>
                                <div className={styles.certHeader}>
                                    <h3>VEER-NXT</h3>
                                    <h4>CERTIFICATE OF ACHIEVEMENT</h4>
                                </div>
                                <div className={styles.certBody}>
                                    <p>This is to certify that</p>
                                    <div className={styles.certName}>AGNIVEER [NAME]</div>
                                    <p>has successfully completed the</p>
                                    <div className={styles.certCourse}>SECURITY & PROTECTION CERTIFICATION</div>
                                    <p>and is hereby recognized for demonstrated competence and skills.</p>
                                </div>
                                <div className={styles.certFooter}>
                                    <div className={styles.signature}>
                                        <div>Commandant</div>
                                        <div>VEER-NXT Academy</div>
                                    </div>
                                    <div className={styles.date}>
                                        Date: {new Date().toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MissionCertify;