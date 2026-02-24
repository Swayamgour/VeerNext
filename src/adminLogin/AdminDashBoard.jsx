// components/AdminDashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardContent from './DashboardContent';
// import styles from './AdminDashboard.module.css';
import styles from '../css/AdminDashboard.module.css';


function AdminDashboard() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeSection, setActiveSection] = useState('dashboard');

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className={`${styles.adminDashboard} ${sidebarCollapsed ? styles.sidebarCollapsed : ''}`}>
            <Sidebar
                activeSection={activeSection}
                onNavClick={handleNavClick}
                collapsed={sidebarCollapsed}
            />

            <div className={styles.mainContent}>
                <Header
                    onToggleSidebar={toggleSidebar}
                    sidebarCollapsed={sidebarCollapsed}
                />
                <DashboardContent activeSection={activeSection} />
            </div>
        </div>
    );
}

export default AdminDashboard;