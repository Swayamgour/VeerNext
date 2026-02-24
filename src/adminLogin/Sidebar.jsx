// components/Sidebar.js
import React from 'react';
import { 
  FaTachometerAlt, 
  FaSignOutAlt
  
} from 'react-icons/fa';
// import { GrUserAdmin } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
import styles from '../css/AdminDashboard.module.css';
// import { RiAdminFill } from "react-icons/ri";

function Sidebar({ activeSection, onNavClick, collapsed }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { id: 'AddAdmin', label: 'AddAdmin', icon: <RiAdminFill /> },
    { id: 'admin', label: 'Admin', icon: <RiAdminFill /> },
   
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>CTP</span>
          {!collapsed && <span className={styles.logoText}>Career Transition</span>}
        </div>
        <div className={styles.motto}>
          {!collapsed && "From Uniform to Civilian Success"}
        </div>
      </div>
      
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {menuItems.map(item => (
            <li key={item.id}>
              <button 
                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => onNavClick(item.id)}
                title={collapsed ? item.label : ''}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                {!collapsed && <span className={styles.navLabel}>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className={styles.sidebarFooter}>
        <button className={styles.logoutBtn} title={collapsed ? "Logout" : ""}>
          <FaSignOutAlt className={styles.logoutIcon} />
          {!collapsed && <span>Logout</span>}
        </button>
        {!collapsed && (
          <div className={styles.adminInfo}>
            <div className={styles.adminAvatar}>AD</div>
            <div className={styles.adminDetails}>
              <p className={styles.adminName}>Admin User</p>
              <p className={styles.adminRole}>Super Admin</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;