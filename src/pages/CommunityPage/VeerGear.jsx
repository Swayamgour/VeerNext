import React from 'react';
// import styles from './VeerGear.module.css';
import styles from '../../css/variables.module.css';


const VeerGear = ({ setIsModalOpen }) => {
  const products = [
    { icon: '👕', name: '"Agniveer Alumni" T-Shirts' },
    { icon: '🧥', name: 'Battalion-inspired hoodies' },
    { icon: '🎒', name: 'Military-grade duffle bags' },
    { icon: '🧢', name: 'Caps, wristbands, badges' },
    { icon: '🚩', name: 'Desk flags & posters' },
    { icon: '📓', name: 'Tactical notebooks & pens' }
  ];

  return (
    <section id="gear" className={styles.gearSection}>
      <div className="container">
        <div className={styles.gearHeader}>
          <div className={styles.gearTitle}>
            <div className="section-subtitle">
              VeerGear Official Store
              <img src="/assets/img/icons/icon-2/bullet.png" alt="bullet" />
            </div>
            <h2 className="section-title">Wear Your Pride. Live Your Identity.</h2>
            <p className={styles.partnership}>In partnership with <strong>Olive Planet</strong></p>
          </div>
          <button className="fill-btn">
            🛍️ Shop VeerGear →
          </button>
        </div>
        
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.productIcon}>{product.icon}</div>
              <h4 className={styles.productName}>{product.name}</h4>
              <button className={styles.viewBtn}>View Details</button>
            </div>
          ))}
        </div>
        
        <div className={styles.finalCta}>
          <h3 className={styles.ctaTitle}>Your Brotherhood Awaits</h3>
          <p className={styles.ctaSubtitle}>
            Join India's most trusted network for Agniveers & Veterans today.
          </p>
          <button className={styles.joinBtn} onClick={() => setIsModalOpen(true)}>
            👉 Join VEER-NXT Community Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default VeerGear;