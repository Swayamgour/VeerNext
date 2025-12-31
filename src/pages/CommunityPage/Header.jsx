import React, { useState } from 'react';
// import styles from './Header.module.css';
import styles from '../../css/variables.module.css';


const Header = ({ setIsModalOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Community', href: '#pillars' },
    { label: 'SkillForge', href: '#skillforge' },
    { label: 'Certifications', href: '#certify' },
    { label: 'Sewa Kendra', href: '#sewa' },
    { label: 'Jobs', href: '#jobs' },
    { label: 'Mentorship', href: '#mentorship' },
    { label: 'Rakshak Force', href: '#rakshak' },
    { label: 'VeerGear', href: '#gear' }
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.logoWhite}>
            <img src="/VEER/assets/img/logo/logo-white.png" alt="VEER-NXT" className={styles.logoImg} />
          </div>
          
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            {navItems.map((item, index) => (
              <a key={index} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <button className="fill-btn" onClick={() => setIsModalOpen(true)}>
              Join Community
            </button>
          </div>
          
          <div className={styles.trustBadgeCompact}>
            <div className={styles.badgeIconCompact}>🎖️</div>
            <div className={styles.badgeTextCompact}>Sena Saathi</div>
          </div>
          
          <button className={styles.menuToggle} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;