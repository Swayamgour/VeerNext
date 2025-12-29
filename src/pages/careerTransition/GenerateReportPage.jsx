import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaUser, FaEnvelope, FaPhone, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import styles from '../../css/generateReport.module.css';
import AllPageHeader from '../components/AllPageHeader';

const GenerateReportPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        rank: '',
        experience: '',
        skills: '',
        location: '',
        careerInterest: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/report-result', { state: { formData } });
        }, 2000);
    };

    const handleBack = () => {
        navigate('/download-report');
    };

    return (
        <>
            <AllPageHeader props="Generate Report " />
            <div className={styles.generateReportPage}>
                <div className={styles.generateReportContainer}>

                    {/* Header */}
                    <div className={styles.generateReportHeader}>
                        <h1 className={styles.generateReportTitle}>Generate Your Report</h1>
                        <p className={styles.generateReportSubtitle}>
                            Fill in your details to get a personalized career transition report
                        </p>
                    </div>

                    {/* Form */}
                    {loading ? (
                        <div className={styles.loadingAnimation}>
                            <div className={styles.loader}></div>
                            <p style={{ color: '#666', fontSize: '1.2rem' }}>
                                Generating your personalized report...
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.reportForm}>

                            {/* Personal Information */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    <FaUser /> Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={styles.formInput}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    <FaEnvelope /> Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={styles.formInput}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    <FaPhone /> Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={styles.formInput}
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            {/* Service Details */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    <FaBriefcase /> Service Branch
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    className={styles.formSelect}
                                    required
                                >
                                    <option value="">Select your service branch</option>
                                    <option value="army">Indian Army</option>
                                    <option value="navy">Indian Navy</option>
                                    <option value="airforce">Indian Air Force</option>
                                    <option value="paramilitary">Paramilitary Forces</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>
                                    <FaGraduationCap /> Rank/Position
                                </label>
                                <input
                                    type="text"
                                    name="rank"
                                    value={formData.rank}
                                    onChange={handleInputChange}
                                    className={styles.formInput}
                                    placeholder="Enter your last rank/position"
                                    required
                                />
                            </div>

                            {/* Experience */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Years of Service</label>
                                <div className={styles.radioGroup}>
                                    {['0-5 years', '6-10 years', '11-15 years', '16-20 years', '21+ years'].map((option) => (
                                        <label key={option} className={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="experience"
                                                value={option}
                                                checked={formData.experience === option}
                                                onChange={handleInputChange}
                                                className={styles.radioInput}
                                                required
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Career Interest */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Career Interest Area</label>
                                <div className={styles.radioGroup}>
                                    {['Corporate Security', 'Project Management', 'Logistics', 'Training & Development', 'Government Jobs', 'Entrepreneurship'].map((option) => (
                                        <label key={option} className={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="careerInterest"
                                                value={option}
                                                checked={formData.careerInterest === option}
                                                onChange={handleInputChange}
                                                className={styles.radioInput}
                                                required
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Skills */}
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Key Skills (Optional)</label>
                                <textarea
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleInputChange}
                                    className={styles.formInput}
                                    placeholder="Mention any additional skills or certifications"
                                    rows="3"
                                />
                            </div>

                            {/* CTA Button */}
                            <div className={styles.generateReportCta}>
                                <button type="submit" className={styles.generateMissionBtn}>
                                    <span>Generate My Report</span>
                                    <FaArrowRight className={styles.generateCtaArrow} />
                                </button>
                            </div>

                        </form>
                    )}

                    {/* Back Button */}


                </div>
            </div>
        </>
    );
};

export default GenerateReportPage;