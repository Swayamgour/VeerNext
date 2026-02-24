// components/DashboardHome.js
import React from 'react';
import { 
  FaUsers, 
  FaUserGraduate, 
  FaBriefcase, 
  FaChartLine,
  FaRegCalendarCheck,
  FaFileAlt,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';
import styles from '../css/AdminDashboard.module.css';

function DashboardHome() {
  const stats = [
    { 
      title: 'Total Users', 
      value: '1,254', 
      change: '+12%', 
      icon: <FaUsers />, 
      color: '#2a5298',
      trend: 'up'
    },
    { 
      title: 'Active Students', 
      value: '842', 
      change: '+8%', 
      icon: <FaUserGraduate />, 
      color: '#ff6b35',
      trend: 'up'
    },
    { 
      title: 'Job Placements', 
      value: '316', 
      change: '+15%', 
      icon: <FaBriefcase />, 
      color: '#4CAF50',
      trend: 'up'
    },
    { 
      title: 'Completion Rate', 
      value: '78%', 
      change: '-3%', 
      icon: <FaChartLine />, 
      color: '#9C27B0',
      trend: 'down'
    },
  ];

  const recentStudents = [
    { id: 'STU2023001', name: 'John Doe', email: 'student@example.com', phone: '+919876543210', status: 'Active' },
    { id: 'STU2023002', name: 'Jane Smith', email: 'jane@example.com', phone: '+919876543211', status: 'Active' },
    { id: 'STU2023003', name: 'Robert Johnson', email: 'robert@example.com', phone: '+919876543212', status: 'Pending' },
    { id: 'STU2023004', name: 'Sarah Williams', email: 'sarah@example.com', phone: '+919876543213', status: 'Active' },
    { id: 'STU2023005', name: 'Michael Brown', email: 'michael@example.com', phone: '+919876543214', status: 'Completed' },
  ];

  const recentActivities = [
    { time: '10 min ago', activity: 'John Doe updated his profile', user: 'STU2023001' },
    { time: '25 min ago', activity: 'New career transition application submitted', user: 'STU2023003' },
    { time: '1 hour ago', activity: 'Jane Smith completed career assessment', user: 'STU2023002' },
    { time: '2 hours ago', activity: 'System backup completed', user: 'System' },
    { time: '5 hours ago', activity: 'New job posting added: Software Engineer', user: 'Admin' },
  ];

  return (
    <div className={styles.dashboardHome}>
      <div className={styles.dashboardHeader}>
        <h1>Admin Dashboard</h1>
        <p className={styles.subtitle}>Welcome back! Here's what's happening with your platform today.</p>
      </div>
      
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIcon} style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className={styles.statChange} style={{ color: stat.trend === 'up' ? '#4CAF50' : '#F44336' }}>
                {stat.trend === 'up' ? <FaArrowUp /> : <FaArrowDown />}
                {stat.change}
              </div>
            </div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statTitle}>{stat.title}</div>
          </div>
        ))}
      </div>
      
      <div className={styles.contentGrid}>
        <div className={styles.contentCard}>
          <div className={styles.cardHeader}>
            <h3>Recent Students</h3>
            <button className={styles.viewAllBtn}>View All</button>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map(student => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${styles[student.status.toLowerCase()]}`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className={styles.contentCard}>
          <div className={styles.cardHeader}>
            <h3>Recent Activities</h3>
            <button className={styles.viewAllBtn}>View All</button>
          </div>
          <div className={styles.activitiesList}>
            {recentActivities.map((activity, index) => (
              <div key={index} className={styles.activityItem}>
                <div className={styles.activityIcon}>
                  <FaFileAlt />
                </div>
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>{activity.activity}</p>
                  <div className={styles.activityMeta}>
                    <span className={styles.activityUser}>{activity.user}</span>
                    <span className={styles.activityTime}>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.quickStats}>
            <div className={styles.quickStat}>
              <div className={styles.quickStatIcon}>
                <FaRegCalendarCheck />
              </div>
              <div className={styles.quickStatContent}>
                <p className={styles.quickStatValue}>42</p>
                <p className={styles.quickStatLabel}>Pending Approvals</p>
              </div>
            </div>
            <div className={styles.quickStat}>
              <div className={styles.quickStatIcon}>
                <FaUserGraduate />
              </div>
              <div className={styles.quickStatContent}>
                <p className={styles.quickStatValue}>128</p>
                <p className={styles.quickStatLabel}>New This Month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.missionStatement}>
        <div className={styles.missionContent}>
          <h2>YOUR NEXT MISSION: FROM UNIFORM TO CIVILIAN SUCCESS</h2>
          <p>Helping veterans transition to meaningful civilian careers with dedicated support, resources, and job placement services.</p>
        </div>
        <div className={styles.missionImage}>
          <div className={styles.imagePlaceholder}></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;