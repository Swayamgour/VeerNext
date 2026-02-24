import React, { useState } from 'react';
import styles from '../../css/career.module.css';
import {

    FaUserPlus,

} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";

// import { BiCross } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import '../../css/aboutDialog.css'

const HomeRegFrom = ({ open, handleClose }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        studentId: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        skills: [],
        previousJob: "",
        currentStatus: ""
    });

    const skillsOptions = [
        { value: "javascript", label: "JavaScript" },
        { value: "react", label: "React" },
        { value: "node", label: "Node.js" },
        { value: "htmlcss", label: "HTML & CSS" },
        { value: "uiux", label: "UI / UX" },
        { value: "python", label: "Python" }
    ];

    const statusOptions = [
        { value: "Student", label: "Student" },
        { value: "Working Professional", label: "Working Professional" },
        { value: "Looking for Job", label: "Looking for Job" },
        { value: "Career Switch", label: "Career Switch" }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>


            <aside
                className={`offset-content-wrapper offset-content-wrapper-army ${open ? "offset-show" : ""
                    }`}
            >
                {/* Close Button */}
                <button onClick={handleClose} className="offset-content-close">
                    <RxCross2 />
                </button>

                <div className="offset-content offset-menu-content offset-content-army">


                    {/* RIGHT IMAGE */}
                    <div className="offset-thumb">
                        <img
                            src="/assets/img/about/bg-9.webp"
                            alt="about"
                        />
                    </div>


                    {/* LEFT CONTENT */}
                    <div className="offset-info">
                        <form onSubmit={handleSubmit} className={styles.registrationForm}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="John Doe"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Student ID *</label>
                                    <input
                                        type="text"
                                        name="studentId"
                                        placeholder="STU2023001"
                                        required
                                        value={formData.studentId}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="student@example.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 9876543210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Password *</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Create password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Confirm Password *</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Previous Job</label>
                                    <input
                                        type="text"
                                        name="previousJob"
                                        placeholder="e.g. Sales Executive"
                                        value={formData.previousJob}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Current Status *</label>
                                    <select
                                        name="currentStatus"
                                        value={formData.currentStatus}
                                        onChange={handleChange}
                                        required
                                        className={styles.selectInput}
                                    >
                                        <option value="">Select your status</option>
                                        {statusOptions.map((item, index) => (
                                            <option key={index} value={item.value}>{item.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div style={{ borderColor: 'var(--primary-color)' }} className={styles.formGroup}>
                                <label>Skills *</label>
                                <Select
                                    isMulti
                                    options={skillsOptions}
                                    value={formData.skills}
                                    onChange={(selected) =>
                                        setFormData({ ...formData, skills: selected })
                                    }
                                    placeholder="Select your skills"
                                    classNamePrefix="reactSelect"
                                    style={{ borderColor: 'var(--primary-color)' }}
                                />
                            </div>

                            <div className={styles.submitButtonCon}>
                                <button type="submit" className={styles.submitButton}>
                                    <FaUserPlus className={styles.userIcon} />
                                    Create Free Account
                                </button>
                            </div>

                            <div className={styles.formFooter}>
                                <p className={styles.terms}>
                                    By registering, you agree to our Terms & Conditions
                                </p>
                                <p className={styles.login}>
                                    Already have an account?{' '}
                                    <span onClick={() => navigate('/Login')} className={styles.loginLink}>
                                        Login
                                    </span>
                                </p>
                            </div>
                        </form>


                    </div>


                </div>
            </aside>
        </>
    );
};

export default HomeRegFrom;