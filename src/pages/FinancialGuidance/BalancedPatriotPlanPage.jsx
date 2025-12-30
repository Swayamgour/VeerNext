import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AllPageHeader from '../components/AllPageHeader';
import '../../css/mpv.css'; // Existing CSS file
import styles from '../../css/career.module.css';

function BalancedPatriotPlanPage() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    const handleContactUs = () => {
        navigate('/contact');
    };

    return (
        <>
            <AllPageHeader props="Balanced Patriot Plan" />

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
                            BALANCED PATRIOT PLAN
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Smart Balanced Approach for Steady Growth with Safety
                        </p>
                    </div>

                    {/* Plan Overview */}
                    <div className="BPP-plan-overview">
                        <h2 className="BPP-plan-overview-title">
                            <i className="fas fa-balance-scale"></i>
                            Plan Overview
                        </h2>
                        <div className="BPP-plan-overview-content">
                            <div className="BPP-plan-overview-item">
                                <h4>
                                    <i className="fas fa-user-friends"></i> Target Audience
                                </h4>
                                <p>
                                    Mid-career officers (35-45 years), personnel with
                                    moderate risk appetite, those with family responsibilities,
                                    seeking balance between growth and security.
                                </p>
                            </div>
                            <div className="BPP-plan-overview-item">
                                <h4>
                                    <i className="fas fa-calendar-alt"></i> Time Horizon
                                </h4>
                                <p>
                                    7-10 year investment horizon with quarterly reviews.
                                    Ideal for medium-term goals like child higher education,
                                    home down payment, and retirement planning.
                                </p>
                            </div>
                            <div className="BPP-plan-overview-item">
                                <h4>
                                    <i className="fas fa-chart-line"></i> Expected Returns
                                </h4>
                                <p>
                                    9-11% annual returns (pre-tax) with balanced risk-reward
                                    ratio. Capital protection with moderate growth potential
                                    through diversified portfolio.
                                </p>
                            </div>
                            <div className="BPP-plan-overview-item">
                                <h4>
                                    <i className="fas fa-rupee-sign"></i> Minimum Investment
                                </h4>
                                <p>
                                    ₹35,000 initial investment with SIP options starting
                                    from ₹4,000 monthly. Suitable for monthly savings from
                                    ₹20,000 to ₹75,000.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Allocation Breakdown */}
                    <div className="MPV-alloca-sec">
                        <h2 className="MPV-sec-title">Portfolio Allocation</h2>

                        <div className="MPV-alloca-chart">
                            <div className="MPV-alloca-chart-visual">
                                <div className="MPV-alloca-chart-circle">
                                    <div className="MPV-alloca-chart-center">
                                        <div className="MPV-alloca-chart-total">100%</div>
                                        <div className="MPV-alloca-chart-label">Total Allocation</div>
                                    </div>
                                </div>
                            </div>

                            <div className="MPV-alloca-chart-legand">
                                <div className="MPV-alloca-legend-item">
                                    <div className="MPV-alloca-legend-color"></div>
                                    <div className="MPV-alloca-legend-content">
                                        <h4>40% - Safe Savings</h4>
                                        <p>
                                            Public Provident Fund (PPF), Post Office
                                            Monthly Income Scheme, Senior Citizen
                                            Savings Scheme, Fixed Deposits
                                        </p>
                                    </div>
                                </div>
                                <div className="MPV-alloca-legend-item">
                                    <div className="MPV-alloca-legend-color"></div>
                                    <div className="MPV-alloca-legend-content">
                                        <h4>30% - Growth Investments</h4>
                                        <p>
                                            Conservative Equity Funds, Balanced
                                            Advantage Funds, Debt Mutual Funds,
                                            Government Bonds
                                        </p>
                                    </div>
                                </div>
                                <div className="MPV-alloca-legend-item">
                                    <div className="MPV-alloca-legend-color"></div>
                                    <div className="MPV-alloca-legend-content">
                                        <h4>20% - Protection</h4>
                                        <p>
                                            Term Insurance, Health Insurance, Critical
                                            Illness Cover, Emergency Fund (12 months
                                            expenses)
                                        </p>
                                    </div>
                                </div>
                                <div className="MPV-alloca-legend-item">
                                    <div className="MPV-alloca-legend-color"></div>
                                    <div className="MPV-alloca-legend-content">
                                        <h4>10% - Skills Development</h4>
                                        <p>
                                            Online Certifications, Technical Training,
                                            Language Courses, Professional Development
                                            Programs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Investment Details */}
                    <div className="BPP-invst-detail">
                        <h2 className="BPP-sec-title">
                            Recommended Investment Options
                        </h2>

                        <div className="row col-12 mx-auto">
                            <div className="col-lg-4 col-md-6">
                                <div className="BPP-invst-card">
                                    <div className="BPP-invst-icon">
                                        <i className="fas fa-university"></i>
                                    </div>
                                    <h4>Balanced Advantage Funds</h4>
                                    <ul className="BPP-invst-features">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Dynamic equity-debt allocation
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Automatic rebalancing based on market levels
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Lower volatility than pure equity funds
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            SIP and SWP options available
                                        </li>
                                    </ul>
                                    <div className="BPP-invst-return">
                                        10-12% p.a. Expected Returns
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="BPP-invst-card">
                                    <div className="BPP-invst-icon">
                                        <i className="fas fa-file-invoice-dollar"></i>
                                    </div>
                                    <h4>Multi-Asset Allocation Funds</h4>
                                    <ul className="BPP-invst-features">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Equity + Debt + Gold combination
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Automatic diversification
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Single fund for complete portfolio
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Tax-efficient compared to multiple funds
                                        </li>
                                    </ul>
                                    <div className="BPP-invst-return">
                                        9-11% p.a. Expected
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="BPP-invst-card">
                                    <div className="BPP-invst-icon">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <h4>Public Provident Fund (PPF)</h4>
                                    <ul className="BPP-invst-features">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Government-backed security
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Tax-free returns (EEE benefit)
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            15-year lock-in with extension options
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            ₹1.5 lakh annual investment limit
                                        </li>
                                    </ul>
                                    <div className="BPP-invst-return">
                                        7.1% p.a. Current Rate
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Plan Timeline */}
                    <div className="BPP-action-plan">
                        <h2 className="BPP-sec-title">
                            Implementation Timeline
                        </h2>

                        <div className="BPP-timline">
                            <div className="BPP-timline-item">
                                <div className="BPP-timline-marker">1</div>
                                <div className="BPP-timline-content">
                                    <h4>Month 1-3: Foundation Phase</h4>
                                    <p>
                                        Open PPF and NSC accounts, set up emergency fund
                                        (9 months expenses), purchase term & health insurance,
                                        start SIP in balanced advantage funds.
                                    </p>
                                </div>
                            </div>

                            <div className="BPP-timline-item">
                                <div className="BPP-timline-marker">2</div>
                                <div className="BPP-timline-content">
                                    <h4>Month 4-6: Growth Allocation</h4>
                                    <p>
                                        Allocate to multi-asset funds, invest in Sovereign
                                        Gold Bonds, set up systematic transfer plans,
                                        review insurance coverage adequacy.
                                    </p>
                                </div>
                            </div>

                            <div className="BPP-timline-item">
                                <div className="BPP-timline-marker">3</div>
                                <div className="BPP-timline-content">
                                    <h4>Month 7-12: Portfolio Optimization</h4>
                                    <p>
                                        Add equity savings funds, set up SWP for regular
                                        income, invest in dividend yield funds, complete
                                        tax-saving investments under Section 80C.
                                    </p>
                                </div>
                            </div>

                            <div className="BPP-timline-item">
                                <div className="BPP-timline-marker">4</div>
                                <div className="BPP-timline-content">
                                    <h4>Quarterly Reviews</h4>
                                    <p>
                                        Review portfolio performance, rebalance allocations,
                                        assess financial goals progress, update insurance
                                        coverage, optimize tax planning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="BPP-cta">
                        <h3 className="BPP-cta-title">
                            Ready to Build Your Balanced Portfolio?
                        </h3>
                        <p>
                            Get your personalized Balanced Patriot Plan with optimal
                            asset allocation, steady growth recommendations, and
                            comprehensive protection coverage.
                        </p>

                        <div className="BPP-cta-buttons">
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

export default BalancedPatriotPlanPage;