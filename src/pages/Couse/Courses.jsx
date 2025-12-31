import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Courses = () => {
    const [activeFilter, setActiveFilter] = useState('All Courses');
    const [courses, setCourses] = useState([
        {
            id: 1,
            badge: 'free',
            badgeText: 'Free',
            category: 'Government Jobs',
            title: 'SSC GD Constable Preparation',
            description: 'Complete preparation for SSC GD Constable exam with special focus on physical and written tests. Includes previous year papers and mock tests.',
            rating: 4.5,
            reviews: 1240,
            duration: '8 Weeks',
            enrolled: '3,450 enrolled',
            isCertified: false,
            hasMentorship: false,
            templates: null,
            successRate: null,
            isPremium: false
        },
        {
            id: 2,
            badge: 'premium',
            badgeText: 'Premium',
            category: 'Corporate Careers',
            title: 'Corporate Security Management',
            description: 'Transform military security experience into corporate security management career. Includes certification and job placement assistance.',
            rating: 5.0,
            reviews: 890,
            duration: '12 Weeks',
            enrolled: null,
            isCertified: true,
            hasMentorship: false,
            templates: null,
            successRate: null,
            isPremium: true
        },
        {
            id: 3,
            badge: 'new',
            badgeText: 'New',
            category: 'Entrepreneurship',
            title: 'Veteran Startup Launchpad',
            description: 'Complete guide to starting your own business after service. Includes funding guidance, business registration, and veteran benefits.',
            rating: 4.0,
            reviews: 540,
            duration: '16 Weeks',
            enrolled: null,
            isCertified: false,
            hasMentorship: true,
            templates: null,
            successRate: null,
            isPremium: false
        },
        {
            id: 4,
            badge: 'free',
            badgeText: 'Free',
            category: 'Skill Development',
            title: 'Resume Writing for Veterans',
            description: 'Learn how to translate military experience into civilian resume. Includes templates and examples specifically for defense personnel.',
            rating: 4.7,
            reviews: 2150,
            duration: '4 Weeks',
            enrolled: null,
            isCertified: false,
            hasMentorship: false,
            templates: '5 Templates',
            successRate: null,
            isPremium: false
        },
        {
            id: 5,
            badge: 'premium',
            badgeText: 'Premium',
            category: 'Corporate Careers',
            title: 'Project Management Professional (PMP)',
            description: 'Military to PMP certification. Transform your leadership experience into globally recognized project management certification.',
            rating: 5.0,
            reviews: 1120,
            duration: '20 Weeks',
            enrolled: null,
            isCertified: true,
            hasMentorship: false,
            templates: null,
            successRate: null,
            isPremium: true
        },
        {
            id: 6,
            badge: 'hot',
            badgeText: 'Hot',
            category: 'Government Jobs',
            title: 'Railway Group D Exam Prep',
            description: 'Complete preparation for Railway Group D exams with special coaching for physical efficiency tests and medical standards.',
            rating: 4.2,
            reviews: 1890,
            duration: '10 Weeks',
            enrolled: null,
            isCertified: false,
            hasMentorship: false,
            templates: null,
            successRate: '85% Success',
            isPremium: false
        }
    ]);

    const filters = ['All Courses', 'Government Jobs', 'Corporate Careers', 'Entrepreneurship', 'Free Courses', 'Certification'];

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const handleStartCourse = (course) => {
        // alert(`Starting course: ${course.title}`);
        // Navigation logic can be added here
    };

    const handleViewDetails = (course) => {
        // alert(`Viewing details for: ${course.title}`);
        // Navigation to course details page
    };

    const handleEnroll = (course) => {
        // alert(`Enrolling in: ${course.title}`);
        // Payment/Enrollment logic
    };

    const handlePreview = (course) => {
        // alert(`Previewing: ${course.title}`);
        // Preview logic
    };

    const filteredCourses = activeFilter === 'All Courses'
        ? courses
        : activeFilter === 'Free Courses'
            ? courses.filter(course => course.badge === 'free')
            : activeFilter === 'Certification'
                ? courses.filter(course => course.isCertified)
                : courses.filter(course => course.category === activeFilter);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
        }

        if (hasHalfStar) {
            stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
        }

        const remainingStars = 5 - stars.length;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
        }

        return stars;
    };


    const navigate = useNavigate()

    return (
        <>
            {/* Page Title Area */}
            <section
                className="page-title-area"
                style={{
                    backgroundImage: "url('/VEER/assets/img/bg/page-title-bg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    // padding: '100px 0'
                }}
            >
                <div className="page-title-shape">
                    <img className="shape-cube" src="/VEER/assets/img/shape/cube-shape.png" alt="cube shape" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-title-wrapper">
                                <h1 className="page-title mb-10">Courses</h1>
                            </div>
                            <div className="breadcrumb-menu">
                                <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                    <ul className="trail-items">
                                        <li className="trail-item trail-begin">
                                            {/* <Link to="/"> */}
                                                <span>home</span>
                                            {/* </Link> */}
                                        </li>
                                        <li className="trail-item trail-end">
                                            <span>Courses</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="courses-section">
                <div className="section-header">
                    <h2 className="section-title">Choose Your Career Path</h2>
                    <p className="section-subtitle">
                        Select from our specialized courses designed for defense personnel transitioning to civilian careers.
                        Each course includes military-to-civilian skill translation.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="filter-buttons">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => handleFilterClick(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="courses-grid">
                    {filteredCourses.map((course) => (
                        <div onClick={() => navigate('/CourseDetails')} key={course.id} className="course-card">
                            <div className="course-image">
                                <span className={`course-badge ${course.badge}`}>{course.badgeText}</span>
                            </div>
                            <div className="course-content">
                                <span className="course-category">{course.category}</span>
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-description">{course.description}</p>

                                <div className="course-rating">
                                    <div className="stars">
                                        {renderStars(course.rating)}
                                    </div>
                                    <span className="rating-text">
                                        {course.rating} ({course.reviews.toLocaleString()} reviews)
                                    </span>
                                </div>

                                <div className="course-meta">
                                    <div className="meta-item">
                                        <i className="far fa-clock"></i>
                                        <span>{course.duration}</span>
                                    </div>
                                    {course.enrolled && (
                                        <div className="meta-item">
                                            <i className="fas fa-users"></i>
                                            <span>{course.enrolled}</span>
                                        </div>
                                    )}
                                    {course.isCertified && (
                                        <div className="meta-item">
                                            <i className="fas fa-certificate"></i>
                                            <span>Certified</span>
                                        </div>
                                    )}
                                    {course.hasMentorship && (
                                        <div className="meta-item">
                                            <i className="fas fa-user-tie"></i>
                                            <span>Mentorship</span>
                                        </div>
                                    )}
                                    {course.templates && (
                                        <div className="meta-item">
                                            <i className="fas fa-file-download"></i>
                                            <span>{course.templates}</span>
                                        </div>
                                    )}
                                    {course.successRate && (
                                        <div className="meta-item">
                                            <i className="fas fa-chart-line"></i>
                                            <span>{course.successRate}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="course-buttons">
                                    {course.isPremium ? (
                                        <>
                                            <button
                                                className="btn btn-accent"
                                                onClick={() => handleEnroll(course)}
                                            >
                                                <i className="fas fa-shopping-cart"></i> Enroll Now
                                            </button>
                                            <button
                                                className="btn btn-outline"
                                                onClick={() => handlePreview(course)}
                                            >
                                                <i className="fas fa-eye"></i> Preview
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleStartCourse(course)}
                                            >
                                                <i className="fas fa-play-circle"></i> Start Course
                                            </button>
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => handleViewDetails(course)}
                                            >
                                                <i className="fas fa-info-circle"></i> Details
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Inline Styles */}
            <style jsx>{`
                :root {
                    --primary-color: #556b2f;
                    --secondary-color: #b9972f;
                    --accent-color: #8b0000;
                    --light-bg: #f8f8f8;
                    --text-dark: #2c3e50;
                    --text-light: #5d6d7e;
                }

                .courses-section {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 40px 20px;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 50px;
                }

                .section-title {
                    font-size: 2.5rem;
                    color: var(--primary-color);
                    margin-bottom: 15px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                .section-subtitle {
                    font-size: 1.1rem;
                    color: var(--text-light);
                    max-width: 800px;
                    margin: 0 auto;
                }

                /* Course Cards Grid */
                .courses-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 30px;
                    margin-top: 40px;
                }

                .course-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                    border: 2px solid transparent;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .course-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
                    border-color: var(--secondary-color);
                }

                .course-image {
                    height: 180px;
                    background: linear-gradient(135deg, var(--primary-color), #3a4a23);
                    position: relative;
                }

                .course-badge {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    color: white;
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .course-badge.free {
                    background: var(--primary-color);
                }

                .course-badge.premium {
                    background: var(--accent-color);
                }

                .course-badge.new {
                    background: #27ae60;
                }

                .course-badge.hot {
                    background: #e74c3c;
                }

                .course-content {
                    padding: 25px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .course-category {
                    display: inline-block;
                    background: rgba(86, 107, 47, 0.1);
                    color: var(--primary-color);
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 15px;
                    align-self: flex-start;
                }

                .course-title {
                    font-size: 1.3rem;
                    color: var(--text-dark);
                    margin-bottom: 12px;
                    font-weight: 700;
                    line-height: 1.4;
                    letter-spacing: 1px;
                }

                .course-description {
                    color: var(--text-light);
                    font-size: 0.95rem;
                    margin-bottom: 20px;
                    line-height: 1.5;
                    flex: 1;
                }

                .course-rating {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 15px;
                }

                .stars {
                    color: var(--secondary-color);
                }

                .rating-text {
                    font-size: 0.9rem;
                    color: var(--text-light);
                }

                .course-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                    padding-top: 20px;
                    border-top: 1px solid #eee;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 0.9rem;
                    color: var(--text-light);
                }

                /* Buttons Section */
                .course-buttons {
                    display: flex;
                    gap: 10px;
                    margin-top: auto;
                }

                .btn {
                    padding: 12px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                    text-align: center;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    flex: 1;
                }

                .btn-primary {
                    background: var(--primary-color);
                    color: white;
                    font-size: 14px;
                }

                .btn-primary:hover {
                    background: #3a4a23;
                    transform: translateY(-2px);
                }

                .btn-secondary {
                    background: transparent;
                    color: var(--primary-color);
                    border-color: var(--primary-color);
                }

                .btn-secondary:hover {
                    background: var(--primary-color);
                    color: white;
                    transform: translateY(-2px);
                }

                .btn-accent {
                    background: var(--accent-color);
                    color: white;
                }

                .btn-accent:hover {
                    background: #a30000;
                    transform: translateY(-2px);
                }

                .btn-outline {
                    background: transparent;
                    color: var(--accent-color);
                    border-color: var(--accent-color);
                }

                .btn-outline:hover {
                    background: var(--accent-color);
                    color: white;
                    transform: translateY(-2px);
                }

                /* Filter Buttons */
                .filter-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-bottom: 30px;
                    flex-wrap: wrap;
                }

                .filter-btn {
                    padding: 10px 25px;
                    background: white;
                    border: 2px solid #ddd;
                    border-radius: 8px;
                    font-weight: 600;
                    color: var(--text-light);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .filter-btn:hover {
                    border-color: var(--primary-color);
                    color: var(--primary-color);
                }

                .filter-btn.active {
                    background: var(--primary-color);
                    color: white;
                    border-color: var(--primary-color);
                }

                /* Responsive */
                @media (max-width: 992px) {
                    .courses-grid {
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                        gap: 25px;
                    }

                    .course-buttons {
                        flex-direction: column;
                    }
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2rem;
                    }

                    .courses-grid {
                        grid-template-columns: 1fr;
                    }

                    .filter-buttons {
                        justify-content: flex-start;
                        overflow-x: auto;
                        padding-bottom: 10px;
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

export default Courses;