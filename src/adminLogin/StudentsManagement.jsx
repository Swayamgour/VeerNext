// components/StudentsManagement.js
import React from 'react';
import styles from '../css/AdminDashboard.module.css';

function StudentsManagement() {
  const students = [
    { id: 'STU2023001', name: 'John Doe', email: 'student@example.com', phone: '+919876543210', status: 'Active', joinDate: '2023-01-15' },
    { id: 'STU2023002', name: 'Jane Smith', email: 'jane@example.com', phone: '+919876543211', status: 'Active', joinDate: '2023-01-20' },
    { id: 'STU2023003', name: 'Robert Johnson', email: 'robert@example.com', phone: '+919876543212', status: 'Pending', joinDate: '2023-02-05' },
    { id: 'STU2023004', name: 'Sarah Williams', email: 'sarah@example.com', phone: '+919876543213', status: 'Active', joinDate: '2023-02-10' },
    { id: 'STU2023005', name: 'Michael Brown', email: 'michael@example.com', phone: '+919876543214', status: 'Completed', joinDate: '2023-02-12' },
    { id: 'STU2023006', name: 'Emily Davis', email: 'emily@example.com', phone: '+919876543215', status: 'Active', joinDate: '2023-02-15' },
    { id: 'STU2023007', name: 'David Wilson', email: 'david@example.com', phone: '+919876543216', status: 'Pending', joinDate: '2023-02-18' },
    { id: 'STU2023008', name: 'Lisa Anderson', email: 'lisa@example.com', phone: '+919876543217', status: 'Active', joinDate: '2023-02-20' },
  ];

  return (
    <div className={styles.studentsManagement}>
      <div className={styles.pageHeader}>
        <h1>Students Management</h1>
        <p>Manage and track all student information and progress</p>
      </div>
      
      <div className={styles.pageActions}>
        <div className={styles.searchFilter}>
          <input type="text" placeholder="Search students by name, ID, or email" className={styles.searchInput} />
          <select className={styles.filterSelect}>
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button className={styles.primaryButton}>Add New Student</button>
        </div>
      </div>
      
      <div className={styles.studentsTableContainer}>
        <table className={styles.studentsTable}>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.joinDate}</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles[student.status.toLowerCase()]}`}>
                    {student.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.viewButton}>View</button>
                    <button className={styles.editButton}>Edit</button>
                    <button className={styles.deleteButton}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className={styles.pagination}>
        <button className={styles.paginationButton}>Previous</button>
        <span className={styles.pageNumber}>Page 1 of 3</span>
        <button className={styles.paginationButton}>Next</button>
      </div>
    </div>
  );
}

export default StudentsManagement;