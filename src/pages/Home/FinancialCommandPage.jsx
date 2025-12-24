import React, { useState } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import AllPageHeader from '../components/AllPageHeader';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const FinancialCommandPage = () => {
    const [activeDashboard, setActiveDashboard] = useState('overview');
    const [selectedMonth, setSelectedMonth] = useState('January 2024');

    // Sample financial data
    const [financialData, setFinancialData] = useState({
        totalSavings: 1250000,
        monthlyIncome: 75000,
        monthlyExpenses: 45000,
        investments: 850000,
        debt: 150000,
        netWorth: 1950000
    });

    // Investment portfolio
    const investments = [
        { name: 'PPF', amount: 300000, return: 7.1, type: 'Fixed Income' },
        { name: 'NPS', amount: 200000, return: 9.2, type: 'Pension' },
        { name: 'Mutual Funds', amount: 250000, return: 12.5, type: 'Equity' },
        { name: 'Real Estate', amount: 100000, return: 8.5, type: 'Property' }
    ];

    // Line chart data for income vs expenses
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Income',
                data: [70000, 72000, 75000, 78000, 80000, 82000],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4
            },
            {
                label: 'Expenses',
                data: [45000, 46000, 45000, 47000, 48000, 47000],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4
            }
        ]
    };

    // Pie chart for expense breakdown
    const expenseData = {
        labels: ['Housing', 'Food', 'Transport', 'Healthcare', 'Education', 'Entertainment'],
        datasets: [
            {
                data: [15000, 10000, 8000, 5000, 4000, 3000],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ]
            }
        ]
    };

    // Financial goals
    const financialGoals = [
        {
            id: 1,
            title: 'Retirement Corpus',
            target: 5000000,
            current: 1250000,
            deadline: '2035',
            progress: 25
        },
        {
            id: 2,
            title: 'Children Education',
            target: 2000000,
            current: 500000,
            deadline: '2028',
            progress: 25
        },
        {
            id: 3,
            title: 'Home Purchase',
            target: 7500000,
            current: 1500000,
            deadline: '2030',
            progress: 20
        }
    ];

    // Government schemes for veterans
    const governmentSchemes = [
        {
            name: 'Ex-Servicemen Contributory Health Scheme',
            benefit: 'Healthcare coverage for family',
            eligibility: 'All veterans',
            link: '#'
        },
        {
            name: 'Veteran Pension Plans',
            benefit: 'Additional pension benefits',
            eligibility: 'Retired personnel',
            link: '#'
        },
        {
            name: 'Defense Savings Scheme',
            benefit: 'Higher interest rates',
            eligibility: 'Serving/retired defense',
            link: '#'
        }
    ];

    return (
        <>
            <AllPageHeader props="Financial Command Center" />
            <div className="financial-command-page">
                {/* Dashboard Header */}
                <section className="dashboard-header">
                    <div className="container">
                        <div className="header-content">
                            <h1 className="dashboard-title">
                                Financial <span className="highlight">Command Center</span>
                            </h1>
                            <p className="dashboard-subtitle">
                                Take command of your finances with veteran-focused financial planning
                            </p>

                            <div className="dashboard-controls">
                                <div className="time-filter">
                                    <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                                        <option>January 2024</option>
                                        <option>February 2024</option>
                                        <option>March 2024</option>
                                    </select>
                                </div>
                                <div className="dashboard-tabs">
                                    <button
                                        className={`tab-btn ${activeDashboard === 'overview' ? 'active' : ''}`}
                                        onClick={() => setActiveDashboard('overview')}
                                    >
                                        <i className="fas fa-chart-pie"></i> Overview
                                    </button>
                                    <button
                                        className={`tab-btn ${activeDashboard === 'investments' ? 'active' : ''}`}
                                        onClick={() => setActiveDashboard('investments')}
                                    >
                                        <i className="fas fa-chart-line"></i> Investments
                                    </button>
                                    <button
                                        className={`tab-btn ${activeDashboard === 'planning' ? 'active' : ''}`}
                                        onClick={() => setActiveDashboard('planning')}
                                    >
                                        <i className="fas fa-bullseye"></i> Goals
                                    </button>
                                    <button
                                        className={`tab-btn ${activeDashboard === 'benefits' ? 'active' : ''}`}
                                        onClick={() => setActiveDashboard('benefits')}
                                    >
                                        <i className="fas fa-award"></i> Benefits
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Financial Summary Cards */}
                <section className="financial-summary">
                    <div className="container">
                        <div className="summary-grid">
                            <div className="summary-card income">
                                <div className="card-icon">
                                    <i className="fas fa-wallet"></i>
                                </div>
                                <div className="card-content">
                                    <h3>Monthly Income</h3>
                                    <h2>₹{financialData.monthlyIncome.toLocaleString()}</h2>
                                    <p className="change positive">+5% from last month</p>
                                </div>
                            </div>
                            <div className="summary-card expenses">
                                <div className="card-icon">
                                    <i className="fas fa-receipt"></i>
                                </div>
                                <div className="card-content">
                                    <h3>Monthly Expenses</h3>
                                    <h2>₹{financialData.monthlyExpenses.toLocaleString()}</h2>
                                    <p className="change negative">-2% from last month</p>
                                </div>
                            </div>
                            <div className="summary-card savings">
                                <div className="card-icon">
                                    <i className="fas fa-piggy-bank"></i>
                                </div>
                                <div className="card-content">
                                    <h3>Total Savings</h3>
                                    <h2>₹{financialData.totalSavings.toLocaleString()}</h2>
                                    <p className="change positive">+8% growth</p>
                                </div>
                            </div>
                            <div className="summary-card networth">
                                <div className="card-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <div className="card-content">
                                    <h3>Net Worth</h3>
                                    <h2>₹{financialData.netWorth.toLocaleString()}</h2>
                                    <p className="change positive">+12% this year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Charts Section */}
                <section className="charts-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="chart-card">
                                    <div className="chart-header">
                                        <h3>Income vs Expenses Trend</h3>
                                        <select defaultValue="6months">
                                            <option value="3months">Last 3 Months</option>
                                            <option value="6months">Last 6 Months</option>
                                            <option value="1year">Last 1 Year</option>
                                        </select>
                                    </div>
                                    <div className="chart-container">
                                        <Line data={lineChartData} options={{
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: 'top',
                                                }
                                            }
                                        }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="chart-card">
                                    <div className="chart-header">
                                        <h3>Expense Breakdown</h3>
                                    </div>
                                    <div className="chart-container">
                                        <Pie data={expenseData} options={{
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: 'bottom'
                                                }
                                            }
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Investment Portfolio */}
                <section className="investment-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Investment Portfolio</h2>
                            <button className="add-investment-btn">
                                <i className="fas fa-plus"></i> Add Investment
                            </button>
                        </div>

                        <div className="portfolio-grid">
                            {investments.map((investment, index) => (
                                <div key={index} className="portfolio-card">
                                    <div className="portfolio-header">
                                        <h3>{investment.name}</h3>
                                        <span className={`return-rate ${investment.return > 8 ? 'positive' : 'neutral'}`}>
                                            {investment.return}%
                                        </span>
                                    </div>
                                    <div className="portfolio-body">
                                        <p className="investment-amount">₹{investment.amount.toLocaleString()}</p>
                                        <p className="investment-type">{investment.type}</p>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{ width: `${(investment.amount / 850000) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className="portfolio-actions">
                                            <button className="action-btn view">
                                                <i className="fas fa-chart-line"></i> Details
                                            </button>
                                            <button className="action-btn invest">
                                                <i className="fas fa-plus-circle"></i> Add More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Financial Goals */}
                <section className="goals-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Your Financial Missions</h2>
                            <button className="add-goal-btn">
                                <i className="fas fa-flag"></i> Set New Goal
                            </button>
                        </div>

                        <div className="goals-grid">
                            {financialGoals.map(goal => (
                                <div key={goal.id} className="goal-card">
                                    <div className="goal-header">
                                        <h3>{goal.title}</h3>
                                        <span className="goal-deadline">Target: {goal.deadline}</span>
                                    </div>
                                    <div className="goal-progress">
                                        <div className="progress-info">
                                            <span className="current">₹{goal.current.toLocaleString()}</span>
                                            <span className="target">₹{goal.target.toLocaleString()}</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{ width: `${goal.progress}%` }}
                                            ></div>
                                        </div>
                                        <div className="progress-percentage">{goal.progress}% Complete</div>
                                    </div>
                                    <div className="goal-actions">
                                        <button className="action-btn contribute">
                                            <i className="fas fa-rupee-sign"></i> Contribute
                                        </button>
                                        <button className="action-btn adjust">
                                            <i className="fas fa-cog"></i> Adjust Plan
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Veteran Benefits Section */}
                <section className="benefits-section">
                    <div className="container">
                        <h2 className="section-title">Ex-Servicemen Financial Benefits</h2>
                        <div className="benefits-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Scheme Name</th>
                                        <th>Benefits</th>
                                        <th>Eligibility</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {governmentSchemes.map((scheme, index) => (
                                        <tr key={index}>
                                            <td>{scheme.name}</td>
                                            <td>{scheme.benefit}</td>
                                            <td>{scheme.eligibility}</td>
                                            <td>
                                                <button className="apply-btn">
                                                    <i className="fas fa-file-alt"></i> Apply
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="financial-tips">
                            <h3>Financial Command Tips</h3>
                            <div className="tips-grid">
                                <div className="tip-card">
                                    <i className="fas fa-shield-alt"></i>
                                    <h4>Emergency Fund</h4>
                                    <p>Maintain 6 months of expenses in liquid assets</p>
                                </div>
                                <div className="tip-card">
                                    <i className="fas fa-medal"></i>
                                    <h4>Pension Planning</h4>
                                    <p>Maximize NPS contributions for better retirement</p>
                                </div>
                                <div className="tip-card">
                                    <i className="fas fa-chart-pie"></i>
                                    <h4>Diversify Portfolio</h4>
                                    <p>Spread investments across equity, debt, and real estate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FinancialCommandPage;