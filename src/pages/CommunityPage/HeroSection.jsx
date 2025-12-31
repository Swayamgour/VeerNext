import React from 'react';
// import styles from './HeroSection.module.css';
import styles from '../../css/variables.module.css';
import { useNavigate } from 'react-router-dom';


const HeroSection = ({ setIsModalOpen }) => {

  const navigate = useNavigate()

  return (
    <section id="hero" className={styles.heroSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className={styles.heroContent}>
              <h4 className={styles.subtitle}>The Brotherhood Never Ends. It Evolves.</h4>
              <h1 className={styles.title}>Join the VEER-NXT Community</h1>
              <p className={styles.description}>
                India's most trusted network for Agniveers & Veterans to learn, grow, earn, and serve with purpose.
              </p>

              <div className={styles.ctaButtons}>
                <button onClick={() => navigate('/JoinCommunityPage')} className="fill-btn" >
                  👉 Join the Community
                </button>
                <span className="border-btn">
                  Explore Programs →
                </span>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>10,000+</div>
                  <div className={styles.statLabel}>Members</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Mentors</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>85%</div>
                  <div className={styles.statLabel}>Placement</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className={styles.heroImage}>
              <div className={styles.imageContainer}>
                <img
                  src="/VEER/assets/img/about/img-1.jpg"
                  alt="VEER-NXT Community"
                  className="img-fluid"
                />
                <div className={styles.floatingBadge}>
                  <div className={styles.badgeIcon}>🎖️</div>
                  <div className={styles.badgeText}>Sena Saathi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;