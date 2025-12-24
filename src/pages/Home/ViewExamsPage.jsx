import React, { useState } from 'react';
import AllPageHeader from '../components/AllPageHeader';
// import './ViewExamsPage.css';

const ViewExamsPage = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [searchTerm, setSearchTerm] = useState('');

    const examCategories = [
        {
            id: 'government',
            name: 'Government Exams',
            icon: 'fas fa-landmark',
            count: 45,
            color: '#2E86C1'
        },
        {
            id: 'defense',
            name: 'Defense PSUs',
            icon: 'fas fa-shield-alt',
            count: 28,
            color: '#E74C3C'
        },
        {
            id: 'corporate',
            name: 'Corporate Jobs',
            icon: 'fas fa-briefcase',
            count: 120,
            color: '#28B463'
        },
        {
            id: 'state',
            name: 'State Govt Jobs',
            icon: 'fas fa-university',
            count: 67,
            color: '#8E44AD'
        }
    ];

    const upcomingExams = [
        {
            id: 1,
            title: 'Indian Army SSC Tech 2024',
            organization: 'Indian Army',
            lastDate: '2024-02-15',
            examDate: '2024-03-10',
            eligibility: 'B.Tech Graduates',
            vacancies: 150,
            ageLimit: '20-27 years',
            applicationFee: '₹0',
            category: 'defense',
            featured: true
        },
        {
            id: 2,
            title: 'BEL Engineer Recruitment 2024',
            organization: 'Bharat Electronics Limited',
            lastDate: '2024-02-20',
            examDate: '2024-03-25',
            eligibility: 'B.E/B.Tech + Experience',
            vacancies: 85,
            ageLimit: '21-30 years',
            applicationFee: '₹500',
            category: 'defense-psu',
            featured: false
        },
        {
            id: 3,
            title: 'DRDO Scientist Entry',
            organization: 'DRDO',
            lastDate: '2024-02-28',
            examDate: '2024-04-15',
            eligibility: 'M.Tech/Ph.D',
            vacancies: 120,
            ageLimit: '21-28 years',
            applicationFee: '₹100',
            category: 'defense',
            featured: true
        }
    ];

    const filters = {
        category: ['All', 'Defense', 'Government', 'Corporate', 'PSU'],
        eligibility: ['Veterans Only', 'Open to All', 'Age Relaxation'],
        location: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad'],
        salary: ['5-10 LPA', '10-15 LPA', '15-20 LPA', '20+ LPA']
    };

    const [selectedFilters, setSelectedFilters] = useState({
        category: 'All',
        eligibility: '',
        location: '',
        salary: ''
    });

    const handleFilterChange = (filterType, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    return (
        <>
            <AllPageHeader props="Mission Opportunities" />
            <div className="view-exams-page">
                {/* Hero Section */}
                <section className="exams-hero">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Mission <span className="highlight">Opportunities</span>
                            </h1>
                            <p className="hero-subtitle">
                                500+ Exclusive Opportunities for Veterans. Age relaxation and priority for ex-servicemen.
                            </p>

                            {/* Search Bar */}
                            <div className="exam-search-bar">
                                <div className="search-input">
                                    <i className="fas fa-search"></i>
                                    <input
                                        type="text"
                                        placeholder="Search exams, jobs, or organizations..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <button className="search-btn">
                                    <i className="fas fa-search"></i> Search
                                </button>
                                <button className="filter-btn">
                                    <i className="fas fa-filter"></i> Filters
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="quick-stats">
                                <div className="stat-card">
                                    <i className="fas fa-calendar-check"></i>
                                    <div className="stat-info">
                                        <h3>45</h3>
                                        <p>Upcoming Exams</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <i className="fas fa-user-shield"></i>
                                    <div className="stat-info">
                                        <h3>1500+</h3>
                                        <p>Veteran Positions</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <i className="fas fa-rupee-sign"></i>
                                    <div className="stat-info">
                                        <h3>₹0</h3>
                                        <p>Fee Waiver Benefits</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <i className="fas fa-clock"></i>
                                    <div className="stat-info">
                                        <h3>30 Days</h3>
                                        <p>Average Process Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="exam-categories">
                    <div className="container">
                        <h2 className="section-title">Browse by Category</h2>
                        <div className="categories-grid">
                            {examCategories.map(category => (
                                <div key={category.id} className="category-card" style={{ borderLeftColor: category.color }}>
                                    <div className="category-icon" style={{ backgroundColor: category.color }}>
                                        <i className={category.icon}></i>
                                    </div>
                                    <h3>{category.name}</h3>
                                    <p>{category.count} Opportunities</p>
                                    <button className="view-category-btn">
                                        View All <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Content with Filters */}
                <section className="exams-main">
                    <div className="container">
                        <div className="row">
                            {/* Filters Sidebar */}
                            <div className="col-lg-3">
                                <div className="filters-sidebar">
                                    <h4>Filter Opportunities</h4>

                                    {/* Category Filter */}
                                    <div className="filter-group">
                                        <h5>Category</h5>
                                        {filters.category.map(item => (
                                            <label key={item} className="filter-option">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    checked={selectedFilters.category === item}
                                                    onChange={() => handleFilterChange('category', item)}
                                                />
                                                <span>{item}</span>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Eligibility Filter */}
                                    <div className="filter-group">
                                        <h5>Eligibility</h5>
                                        {filters.eligibility.map(item => (
                                            <label key={item} className="filter-option">
                                                <input
                                                    type="radio"
                                                    name="eligibility"
                                                    checked={selectedFilters.eligibility === item}
                                                    onChange={() => handleFilterChange('eligibility', item)}
                                                />
                                                <span>{item}</span>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Location Filter */}
                                    <div className="filter-group">
                                        <h5>Location</h5>
                                        {filters.location.map(item => (
                                            <label key={item} className="filter-option">
                                                <input
                                                    type="radio"
                                                    name="location"
                                                    checked={selectedFilters.location === item}
                                                    onChange={() => handleFilterChange('location', item)}
                                                />
                                                <span>{item}</span>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Salary Filter */}
                                    <div className="filter-group">
                                        <h5>Salary Range</h5>
                                        {filters.salary.map(item => (
                                            <label key={item} className="filter-option">
                                                <input
                                                    type="radio"
                                                    name="salary"
                                                    checked={selectedFilters.salary === item}
                                                    onChange={() => handleFilterChange('salary', item)}
                                                />
                                                <span>{item}</span>
                                            </label>
                                        ))}
                                    </div>

                                    <button className="apply-filters-btn">
                                        Apply Filters
                                    </button>
                                    <button className="reset-filters-btn">
                                        Reset All
                                    </button>
                                </div>
                            </div>

                            {/* Exams Listing */}
                            <div className="col-lg-9">
                                <div className="exams-listing">
                                    {/* Tabs */}
                                    <div className="exams-tabs">
                                        <button
                                            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('upcoming')}
                                        >
                                            Upcoming Exams
                                        </button>
                                        <button
                                            className={`tab-btn ${activeTab === 'notifications' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('notifications')}
                                        >
                                            Job Notifications
                                        </button>
                                        <button
                                            className={`tab-btn ${activeTab === 'applied' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('applied')}
                                        >
                                            Applied Jobs
                                        </button>
                                        <button
                                            className={`tab-btn ${activeTab === 'recommended' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('recommended')}
                                        >
                                            Recommended For You
                                        </button>
                                    </div>

                                    {/* Exams Grid */}
                                    <div className="exams-grid">
                                        {upcomingExams.map(exam => (
                                            <div key={exam.id} className={`exam-card ${exam.featured ? 'featured' : ''}`}>
                                                {exam.featured && (
                                                    <div className="featured-badge">
                                                        <i className="fas fa-star"></i> Featured
                                                    </div>
                                                )}
                                                <div className="exam-header">
                                                    <h3>{exam.title}</h3>
                                                    <span className="exam-org">{exam.organization}</span>
                                                </div>

                                                <div className="exam-details">
                                                    <div className="detail-item">
                                                        <i className="fas fa-calendar-alt"></i>
                                                        <div>
                                                            <small>Last Date</small>
                                                            <strong>{exam.lastDate}</strong>
                                                        </div>
                                                    </div>
                                                    <div className="detail-item">
                                                        <i className="fas fa-calendar-check"></i>
                                                        <div>
                                                            <small>Exam Date</small>
                                                            <strong>{exam.examDate}</strong>
                                                        </div>
                                                    </div>
                                                    <div className="detail-item">
                                                        <i className="fas fa-user-graduate"></i>
                                                        <div>
                                                            <small>Eligibility</small>
                                                            <strong>{exam.eligibility}</strong>
                                                        </div>
                                                    </div>
                                                    <div className="detail-item">
                                                        <i className="fas fa-users"></i>
                                                        <div>
                                                            <small>Vacancies</small>
                                                            <strong>{exam.vacancies}</strong>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="exam-footer">
                                                    <div className="exam-meta">
                                                        <span><i className="fas fa-clock"></i> Age: {exam.ageLimit}</span>
                                                        <span><i className="fas fa-rupee-sign"></i> Fee: {exam.applicationFee}</span>
                                                    </div>
                                                    <div className="exam-actions">
                                                        <button className="view-details-btn">
                                                            <i className="fas fa-eye"></i> View Details
                                                        </button>
                                                        <button className="apply-now-btn">
                                                            <i className="fas fa-paper-plane"></i> Apply Now
                                                        </button>
                                                        <button className="reminder-btn">
                                                            <i className="fas fa-bell"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    <div className="pagination">
                                        <button className="page-btn active">1</button>
                                        <button className="page-btn">2</button>
                                        <button className="page-btn">3</button>
                                        <span>...</span>
                                        <button className="page-btn">10</button>
                                        <button className="next-btn">
                                            Next <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Veteran Benefits Section */}
                <section className="veteran-benefits">
                    <div className="container">
                        <h2 className="section-title">Exclusive Veteran Benefits</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <i className="fas fa-percentage"></i>
                                </div>
                                <h3>Age Relaxation</h3>
                                <p>Up to 5 years age relaxation in government jobs as per rules</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <i className="fas fa-money-bill-wave"></i>
                                </div>
                                <h3>Fee Exemption</h3>
                                <p>Complete waiver of examination fees for most government exams</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <i className="fas fa-medal"></i>
                                </div>
                                <h3>Priority Hiring</h3>
                                <p>Reserved vacancies in PSUs and government departments</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                                <h3>Training Support</h3>
                                <p>Free preparation courses and study materials</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ViewExamsPage;