import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AllPageHeader from '../components/AllPageHeader';
import '../../css/mpv.css'; // Existing CSS file
import styles from '../../css/career.module.css';

function GrowthWarriorPlanPage() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    const handleContactUs = () => {
        // Navigate to contact page or open contact form
        navigate('/contact');
    };

    return (
        <>
            <AllPageHeader props="Growth Warrior Plan" />

            <section className={styles.opportunitySection}>
                <div className={styles.container}>
                    {/* Section Header */}
                    <div className={styles.sectionHeader}>
                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>Money Plan View</span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle}>
                            GROWTH WARRIOR PLAN
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Aggressive Growth Focus with Higher Equity Exposure
                        </p>
                    </div>

                    {/* Plan Overview */}
                    <div className="GWP-plan-overview">
                        <h2 className="GWP-plan-overview-title">
                            <i style={{ color: 'var(--secondary-color)' }} className="fas fa-rocket"></i>
                            Plan Overview
                        </h2>
                        <div className="GWP-plan-overview-content">
                            <div className="GWP-plan-overview-item">
                                <h4>
                                    <i style={{ color: 'var(--secondary-color)' }} className="fas fa-user-tie"></i> Target Audience
                                </h4>
                                <p>
                                    Young service personnel (under 35), single officers,
                                    those with high risk appetite, long investment horizon
                                    (10+ years), aiming for wealth creation.
                                </p>
                            </div>
                            <div className="GWP-plan-overview-item">
                                <h4>
                                    <i style={{ color: 'var(--secondary-color)' }} className="fas fa-calendar-alt"></i> Time Horizon
                                </h4>
                                <p>
                                    10-15 year investment horizon with semi-annual reviews.
                                    Suitable for long-term goals like retirement planning,
                                    child education, and wealth accumulation.
                                </p>
                            </div>
                            <div className="GWP-plan-overview-item">
                                <h4>
                                    <i style={{ color: 'var(--secondary-color)' }} className="fas fa-chart-line"></i> Expected Returns
                                </h4>
                                <p>
                                    12-15% annual returns (pre-tax) with systematic
                                    compounding. Higher volatility but superior long-term
                                    growth potential compared to traditional options.
                                </p>
                            </div>
                            <div className="GWP-plan-overview-item">
                                <h4>
                                    <i style={{ color: 'var(--secondary-color)' }} className="fas fa-rupee-sign"></i> Minimum Investment
                                </h4>
                                <p>
                                    ₹25,000 initial investment with SIP options starting
                                    from ₹3,000 monthly. Ideal for monthly savings from
                                    ₹10,000 to ₹1,00,000.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Allocation Breakdown */}
                    <div className="GWP-alloca-sec">
                        <h2 className="GWP-sec-title">Portfolio Allocation</h2>

                        <div className="GWP-alloca-chart">
                            <div className="GWP-alloca-chart-visual">
                                <div className="GWP-alloca-chart-circle">
                                    <div className="GWP-alloca-chart-center">
                                        <div className="GWP-alloca-chart-total">100%</div>
                                        <div className="GWP-alloca-chart-label">Total Allocation</div>
                                    </div>
                                </div>
                            </div>

                            <div className="GWP-alloca-chart-legand">
                                <div className="GWP-alloca-legend-item">
                                    <div className="GWP-alloca-legend-color" style={{ background: '#4CAF50' }}></div>
                                    <div className="GWP-alloca-legend-content">
                                        <h4>50% - SIP Investments</h4>
                                        <p>
                                            Index Funds, Flexi-Cap Funds, Sectoral Funds,
                                            Technology Funds, Mid & Small Cap Funds with
                                            Systematic Investment Plans
                                        </p>
                                    </div>
                                </div>
                                <div className="GWP-alloca-legend-item">
                                    <div className="GWP-alloca-legend-color" style={{ background: '#FFD700' }}></div>
                                    <div className="GWP-alloca-legend-content">
                                        <h4>20% - Gold Allocation</h4>
                                        <p>
                                            Sovereign Gold Bonds, Gold ETFs, Gold Mutual Funds,
                                            Digital Gold Platforms for inflation hedging and
                                            portfolio diversification
                                        </p>
                                    </div>
                                </div>
                                <div className="GWP-alloca-legend-item">
                                    <div className="GWP-alloca-legend-color" style={{ background: '#2196F3' }}></div>
                                    <div className="GWP-alloca-legend-content">
                                        <h4>20% - Safe Savings</h4>
                                        <p>
                                            Public Provident Fund (PPF), Corporate Fixed Deposits,
                                            Debt Mutual Funds, Government Securities for capital
                                            preservation
                                        </p>
                                    </div>
                                </div>
                                <div className="GWP-alloca-legend-item">
                                    <div className="GWP-alloca-legend-color" style={{ background: '#FF9800' }}></div>
                                    <div className="GWP-alloca-legend-content">
                                        <h4>10% - Emergency Fund</h4>
                                        <p>
                                            Liquid Funds, Ultra Short-Term Funds, Savings Account,
                                            Recurring Deposits for immediate liquidity needs and
                                            unexpected expenses
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Investment Details */}
                    <div className="GWP-invst-detail">
                        <h2 className="GWP-sec-title">
                            Recommended Investment Options
                        </h2>

                        <div className="row col-12 mx-auto">
                            <div className="col-lg-4 col-md-6">
                                <div className="GWP-invst-card">
                                    <div className="GWP-invst-icon">
                                        <i style={{ color: 'var(--secondary-color)' }} className="fas fa-chart-line"></i>
                                    </div>
                                    <h4>Index & Flexi-Cap Funds</h4>
                                    <ul className="GWP-invst-features">
                                        <li>
                                            <i style={{ color: 'var(--secondary-color)' }} className="fas fa-check"></i>
                                            Nifty 50 Index Funds (Low cost)
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Flexi-Cap Funds (Dynamic allocation)
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            SIP starting from ₹500/month
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Direct plan for lower expense ratio
                                        </li>
                                    </ul>
                                    <div className="GWP-invst-return">
                                        12-14% p.a. Historical Returns
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="GWP-invst-card">
                                    <div className="GWP-invst-icon">
                                        <i style={{ color: 'var(--secondary-color)' }} className="fas fa-gem"></i>
                                    </div>
                                    <h4>Sovereign Gold Bonds (SGB)</h4>
                                    <ul className="GWP-invst-features">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Government-backed security
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            2.5% annual interest on issue price
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Capital gains tax exemption at maturity
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            8-year tenure with exit options
                                        </li>
                                    </ul>
                                    <div className="GWP-invst-return">
                                        2.5% + Gold Appreciation
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="GWP-invst-card">
                                    <div className="GWP-invst-icon">
                                        <i style={{ color: 'var(--secondary-color)' }} className="fas fa-shield-alt"></i>
                                    </div>
                                    <h4>Aggressive Hybrid Funds</h4>
                                    <ul className="GWP-invst-features">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            65-80% equity exposure
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Systematic Withdrawal Plan option
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Monthly income through SWP
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Better risk-adjusted returns
                                        </li>
                                    </ul>
                                    <div className="GWP-invst-return">
                                        10-12% p.a. Expected
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Plan Timeline */}
                    <div className="GWP-action-plan">
                        <h2 className="GWP-sec-title">
                            Implementation Timeline
                        </h2>

                        <div className="GWP-timline">
                            <div className="GWP-timline-item">
                                <div className="GWP-timline-marker">1</div>
                                <div className="GWP-timline-content">
                                    <h4>Quarter 1: Foundation Setup</h4>
                                    <p>
                                        Open Demat & trading account, set up emergency fund
                                        (6 months expenses), start SIP in index funds,
                                        purchase term insurance (15× annual income).
                                    </p>
                                </div>
                            </div>

                            <div className="GWP-timline-item">
                                <div className="GWP-timline-marker">2</div>
                                <div className="GWP-timline-content">
                                    <h4>Quarter 2: Growth Phase</h4>
                                    <p>
                                        Allocate to sectoral funds, start SIP in flexi-cap
                                        funds, invest in Sovereign Gold Bonds, set up
                                        health insurance with super top-up.
                                    </p>
                                </div>
                            </div>

                            <div className="GWP-timline-item">
                                <div className="GWP-timline-marker">3</div>
                                <div className="GWP-timline-content">
                                    <h4>Quarter 3: Diversification</h4>
                                    <p>
                                        Add international equity exposure, invest in
                                        technology/theme-based funds, rebalance portfolio
                                        based on market conditions.
                                    </p>
                                </div>
                            </div>

                            <div className="GWP-timline-item">
                                <div className="GWP-timline-marker">4</div>
                                <div className="GWP-timline-content">
                                    <h4>Semi-Annual Reviews</h4>
                                    <p>
                                        Review portfolio performance, rebalance if needed,
                                        increase SIP amounts annually, assess financial goals
                                        progress, optimize tax-saving investments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="GWP-cta">
                        <h3 className="GWP-cta-title">
                            Ready to Launch Your Growth Journey?
                        </h3>
                        <p>
                            Get your personalized Growth Warrior Plan with aggressive
                            allocations, high-growth investment recommendations, and
                            dynamic rebalancing strategy.
                        </p>

                        <div className="GWP-cta-buttons">
                            <button onClick={handleContactUs} className="border-btn">
                                Contact Us
                                <i className="fas fa-phone ms-2"></i>
                            </button>
                            <button onClick={handleBack} className="border-btn">
                                Back to Plans
                                <i className="fas fa-arrow-left ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GrowthWarriorPlanPage;