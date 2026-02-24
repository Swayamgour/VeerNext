// components/DashboardContent.js
import React from 'react';
import DashboardHome from './DashboardHome';
// import UsersManagement from './UsersManagement';
// import StudentsManagement from './StudentsManagement';
// import CareerServices from './CareerServices';
// import Messages from './Messages';
// import Reports from './Reports';
// import Transitions from './Transitions';
// import Admins from './Admins';
// import Settings from './Settings';
import styles from '../css/AdminDashboard.module.css';
import RegisterForm from './RegisterForm';
import AllAdmin from './AllAdmin';
// import RegisterPage from './RegisterPage';

function DashboardContent({ activeSection }) {
    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard': return <DashboardHome />;
            case 'AddAdmin': return <RegisterForm />;
            case 'admin': return <AllAdmin />;
            //   case 'users': return <UsersManagement />;
            //   case 'students': return <StudentsManagement />;
            //   case 'careers': return <CareerServices />;
            //   case 'messages': return <Messages />;
            //   case 'reports': return <Reports />;
            //   case 'transitions': return <Transitions />;
            //   case 'admins': return <Admins />;
            //   case 'settings': return <Settings />;
            default: return <DashboardHome />;
        }
    };

    return (
        <main className={styles.dashboardContent}>
            {renderContent()}
        </main>
    );
}

export default DashboardContent;