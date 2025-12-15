import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const [activeLecture, setActiveLecture] = useState(0);
    const [lectures, setLectures] = useState([
        {
            id: 1,
            number: '1',
            title: 'Introduction to Corporate Security',
            type: 'video',
            duration: '45 min',
            status: 'Completed',
            description: 'Learn the fundamentals of corporate security management and its importance in modern business environments.'
        },
        {
            id: 2,
            number: '2',
            title: 'Risk Assessment Framework',
            type: 'video',
            duration: '60 min',
            status: 'Completed',
            description: 'Understand how to identify, analyze, and evaluate security risks using structured frameworks.'
        },
        {
            id: 3,
            number: '3',
            title: 'Security Operations Planning',
            type: 'video',
            duration: '55 min',
            status: 'In Progress',
            description: 'Learn how to plan and execute security operations in corporate environments using military-grade strategies adapted for civilian use.'
        },
        {
            id: 4,
            number: '4',
            title: 'Crisis Management Protocols',
            type: 'pdf',
            duration: '30 min',
            status: 'Not Started',
            description: 'Study crisis management protocols and emergency response procedures for corporate settings.'
        },
        {
            id: 5,
            number: '5',
            title: 'Physical Security Systems',
            type: 'video',
            duration: '70 min',
            status: 'Not Started',
            description: 'Explore various physical security systems and technologies used in corporate security.'
        }
    ]);

    const [resources, setResources] = useState([
        {
            id: 1,
            icon: 'fas fa-file-pdf',
            title: 'Security Management Handbook',
            type: 'PDF',
            size: '4.2 MB',
            downloadUrl: '#'
        },
        {
            id: 2,
            icon: 'fas fa-file-pdf',
            title: 'Risk Assessment Templates',
            type: 'PDF',
            size: '2.8 MB',
            downloadUrl: '#'
        },
        {
            id: 3,
            icon: 'fas fa-file-excel',
            title: 'Security Audit Checklist',
            type: 'Excel',
            size: '1.5 MB',
            downloadUrl: '#'
        },
        {
            id: 4,
            icon: 'fas fa-file-word',
            title: 'Report Writing Guidelines',
            type: 'Word',
            size: '3.1 MB',
            downloadUrl: '#'
        },
        {
            id: 5,
            icon: 'fas fa-video',
            title: 'Case Study Videos',
            type: 'Videos',
            size: '120 min',
            downloadUrl: '#'
        }
    ]);

    const [assignments, setAssignments] = useState([
        {
            id: 1,
            title: 'Security Risk Assessment Report',
            deadline: 'Dec 25, 2024',
            description: 'Submit a comprehensive risk assessment report for a hypothetical corporate office.',
            status: 'pending'
        }
    ]);

    const handleLectureClick = (index) => {
        setActiveLecture(index);
    };

    const handleDownload = (resource) => {
        alert(`Downloading: ${resource.title}`);
        // In real implementation, you would trigger actual download
        // window.location.href = resource.downloadUrl;
    };

    const handlePlayVideo = () => {
        alert('Video playback would start here');
        // In real implementation, you would play the video
    };

    const handleSubmitAssignment = () => {
        alert('Assignment submission dialog would open here');
        // In real implementation, open file upload dialog
    };

    return (
        <>
            {/* Page Title Area */}
            <section
                className="page-title-area"
                style={{
                    backgroundImage: "url('/assets/img/bg/page-title-bg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    padding: '100px 0'
                }}
            >
                <div className="page-title-shape">
                    <img className="shape-cube" src="/assets/img/shape/cube-shape.png" alt="cube shape" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-title-wrapper">
                                <h1 className="page-title mb-10">Course Details</h1>
                            </div>
                            <div className="breadcrumb-menu">
                                <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                    <ul className="trail-items">
                                        <li className="trail-item trail-begin">
                                            <Link to="/">
                                                <span>home</span>
                                            </Link>
                                        </li>
                                        <li className="trail-item trail-end">
                                            <span>Course Details</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Content Section */}
            <section className="course-content-section">
                <div className="course-header">
                    <h1 className="course-title">Corporate Security Management</h1>
                    <p className="course-instructor">Instructor: Col. Rajesh Kumar (Retd.)</p>
                    <div className="course-progress">
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '65%' }}></div>
                        </div>
                        <div className="progress-text">65% Complete • 8 of 12 lectures completed</div>
                    </div>
                </div>

                <div className="content-container">
                    {/* Left Column: Lectures & Video */}
                    <div>
                        <div className="lectures-section">
                            <h2 className="section-title">Course Lectures</h2>

                            <ul className="lecture-list">
                                {lectures.map((lecture, index) => (
                                    <li
                                        key={lecture.id}
                                        className={`lecture-item ${index === activeLecture ? 'active' : ''}`}
                                        onClick={() => handleLectureClick(index)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="lecture-number">{lecture.number}</div>
                                        <div className="lecture-content">
                                            <h3 className="lecture-title">{lecture.title}</h3>
                                            <div className="lecture-meta">
                                                <span className="lecture-type">
                                                    <i className={`fas ${lecture.type === 'video' ? 'fa-video' : 'fa-file-pdf'}`}></i>
                                                    {lecture.type === 'video' ? 'Video' : 'PDF Reading'} • {lecture.duration}
                                                </span>
                                                <span>{lecture.status}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Video Player */}
                        <div className="video-section">
                            <div className="video-placeholder" onClick={handlePlayVideo} style={{ cursor: 'pointer' }}>
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div style={{ padding: '20px', background: 'white' }}>
                                <h3 style={{ color: 'var(--text-dark)', marginBottom: '10px', letterSpacing: '1px' }}>
                                    {lectures[activeLecture].title}
                                </h3>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                                    {lectures[activeLecture].description}
                                </p>
                            </div>
                        </div>

                        {/* Assignments */}
                        <div className="assignments-section">
                            <h2 className="section-title">Assignments</h2>

                            {assignments.map(assignment => (
                                <div key={assignment.id} className="assignment-item">
                                    <h3 className="assignment-title">{assignment.title}</h3>
                                    <div className="assignment-deadline">
                                        <i className="far fa-clock"></i> Due: {assignment.deadline}
                                    </div>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '15px' }}>
                                        {assignment.description}
                                    </p>
                                    <button className="submit-btn" onClick={handleSubmitAssignment}>
                                        <i className="fas fa-upload"></i> Submit Assignment
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Resources */}
                    <div className="resources-sidebar">
                        <h2 className="section-title">Course Resources</h2>

                        {resources.map(resource => (
                            <div key={resource.id} className="resource-item">
                                <div className="resource-icon">
                                    <i className={resource.icon}></i>
                                </div>
                                <div className="resource-info">
                                    <h4 className="resource-title">{resource.title}</h4>
                                    <p className="resource-size">{resource.type} • {resource.size}</p>
                                </div>
                                <button
                                    className="dwn-btn"
                                    onClick={() => handleDownload(resource)}
                                >
                                    <i className="fas fa-download"></i>
                                </button>
                            </div>
                        ))}

                        {/* Additional Info */}
                        <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(86, 107, 47, 0.05)', borderRadius: '8px' }}>
                            <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1rem', letterSpacing: '1px' }}>
                                <i className="fas fa-info-circle"></i> Course Information
                            </h4>
                            <ul style={{ color: 'var(--text-light)', fontSize: '0.9rem', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}>Total Lectures: 12</li>
                                <li style={{ marginBottom: '8px' }}>Total Duration: 15 hours</li>
                                <li style={{ marginBottom: '8px' }}>Resources: 8 PDFs, 3 Templates</li>
                                <li style={{ marginBottom: '8px' }}>Assignments: 3</li>
                                <li>Certificate: Upon completion</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inline Styles */}
            <style jsx>{`
               

                .course-content-section {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 40px 20px;
                }

                .course-header {
                    background: linear-gradient(135deg, var(--primary-color), #3a4a23);
                    color: white;
                    padding: 30px;
                    border-radius: 12px;
                    margin-bottom: 30px;
                }

                .course-title {
                    font-size: 2rem;
                    margin-bottom: 10px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    color: #fff;
                }

                .course-instructor {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    margin-bottom: 20px;
                }

                .course-progress {
                    margin-top: 20px;
                }

                .progress-bar {
                    height: 8px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                    margin-bottom: 10px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: var(--secondary-color);
                    transition: width 0.3s ease;
                }

                .progress-text {
                    font-size: 0.9rem;
                    opacity: 0.8;
                }

                /* Content Layout */
                .content-container {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 30px;
                }

                /* Lectures/Videos Section */
                .lectures-section {
                    background: white;
                    border-radius: 12px;
                    padding: 30px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                }

                .section-title {
                    font-size: 1.5rem;
                    color: var(--primary-color);
                    margin-bottom: 25px;
                    font-weight: 700;
                    padding-bottom: 15px;
                    border-bottom: 2px solid var(--light-bg);
                    letter-spacing: 1px;
                }

                .lecture-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .lecture-item {
                    padding: 20px;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    transition: background 0.3s ease;
                }

                .lecture-item:hover {
                    background: rgba(86, 107, 47, 0.05);
                }

                .lecture-item.active {
                    background: rgba(86, 107, 47, 0.1);
                    border-left: 4px solid var(--secondary-color);
                }

                .lecture-number {
                    width: 40px;
                    height: 40px;
                    background: var(--light-bg);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    color: var(--primary-color);
                    flex-shrink: 0;
                }

                .lecture-content {
                    flex: 1;
                }

                .lecture-title {
                    font-size: 1.1rem;
                    color: var(--text-dark);
                    margin-bottom: 5px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }

                .lecture-meta {
                    display: flex;
                    gap: 15px;
                    font-size: 0.9rem;
                    color: var(--text-light);
                }

                .lecture-type {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                /* Video Player Area */
                .video-section {
                    margin-top: 30px;
                    background: #000;
                    border-radius: 12px;
                    overflow: hidden;
                }

                .video-placeholder {
                    height: 300px;
                    background: #222;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.2rem;
                    transition: background 0.3s ease;
                }

                .video-placeholder:hover {
                    background: #333;
                }

                .play-button {
                    width: 80px;
                    height: 80px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    transition: all 0.3s ease;
                }

                .video-placeholder:hover .play-button {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.1);
                }

                /* Resources Sidebar */
                .resources-sidebar {
                    background: white;
                    border-radius: 12px;
                    padding: 30px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                    height: fit-content;
                }

                .resource-item {
                    padding: 15px;
                    border: 1px solid #eee;
                    border-radius: 8px;
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .resource-item:hover {
                    border-color: var(--secondary-color);
                    transform: translateX(5px);
                }

                .resource-icon {
                    width: 50px;
                    height: 50px;
                    background: var(--light-bg);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary-color);
                    font-size: 1.3rem;
                    flex-shrink: 0;
                }

                .resource-info {
                    flex: 1;
                }

                .resource-title {
                    font-size: 1rem;
                    color: var(--text-dark);
                    margin-bottom: 5px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }

                .resource-size {
                    font-size: 0.85rem;
                    color: var(--text-light);
                }

                .dwn-btn {
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    border-radius: 6px;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .dwn-btn:hover {
                    background: var(--secondary-color);
                }

                /* Assignment Section */
                .assignments-section {
                    margin-top: 30px;
                    background: white;
                    border-radius: 12px;
                    padding: 30px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                }

                .assignment-item {
                    padding: 20px;
                    background: rgba(86, 107, 47, 0.05);
                    border-radius: 8px;
                    margin-bottom: 15px;
                    border-left: 4px solid var(--accent-color);
                }

                .assignment-title {
                    font-size: 1.1rem;
                    color: var(--text-dark);
                    margin-bottom: 10px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }

                .assignment-deadline {
                    color: var(--accent-color);
                    font-weight: 600;
                    font-size: 0.9rem;
                    margin-bottom: 15px;
                }

                .submit-btn {
                    background: var(--accent-color);
                    color: white;
                    border: none;
                    padding: 8px 20px;
                    border-radius: 6px;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .submit-btn:hover {
                    background: #a30000;
                }

                /* Responsive */
                @media (max-width: 992px) {
                    .content-container {
                        grid-template-columns: 1fr;
                    }
                    
                    .course-title {
                        font-size: 1.8rem;
                    }
                }

                @media (max-width: 768px) {
                    .course-content-section {
                        padding: 20px 15px;
                    }
                    
                    .course-header {
                        padding: 25px;
                    }
                    
                    .lecture-meta {
                        flex-direction: column;
                        gap: 5px;
                    }
                }

                /* Page Title Styles */
                .page-title-area {
                    position: relative;
                }

                .page-title {
                    font-size: 3rem;
                    color: white;
                    text-align: center;
                    margin-bottom: 10px;
                }

                .breadcrumb-menu {
                    text-align: center;
                }

                .breadcrumb-trail {
                    display: inline-flex;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .trail-items {
                    display: flex;
                    gap: 10px;
                    color: rgba(255, 255, 255, 0.8);
                }

                .trail-item a {
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .trail-item a:hover {
                    color: white;
                }

                .trail-end span {
                    color: white;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
};

export default CourseDetails;