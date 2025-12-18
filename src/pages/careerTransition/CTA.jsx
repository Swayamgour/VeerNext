import React from 'react';
// import styles from './CTA.module.css';
import styles from '../../css/career.module.css';
import { FaArrowRight } from 'react-icons/fa';


const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.ctaTitle}>
          You Protected India. Now We Help You Build Your Future.
        </h2>

        <button className={styles.mainCTA}>
          Start My Career Transition Report
          <FaArrowRight style={{marginLeft:'15px'}} />
        </button>
      </div>
    </section>
  );
};

export default CTA;