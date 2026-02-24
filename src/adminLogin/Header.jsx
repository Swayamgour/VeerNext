// components/Header.js
import React from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import styles from '../css/AdminDashboard.module.css';

function Header({ onToggleSidebar, sidebarCollapsed }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.sidebarToggle} onClick={onToggleSidebar}>
          <FaBars />
        </button>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbItem}>Admin</span>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbActive}>Dashboard</span>
        </div>
      </div>
      
      <div className={styles.headerRight}>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search students, jobs, reports..." 
            className={styles.searchInput}
          />
        </div>
        
        <button className={styles.notificationBtn}>
          <FaBell />
          <span className={styles.notificationBadge}>3</span>
        </button>
        
        <div className={styles.userProfile}>
          <FaUserCircle className={styles.userAvatar} />
          <div className={styles.userInfo}>
            <p className={styles.userName}>Admin User</p>
            <p className={styles.userRole}>Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;