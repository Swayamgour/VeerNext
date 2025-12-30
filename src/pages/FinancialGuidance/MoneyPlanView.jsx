import React, { useEffect } from 'react'
import AllPageHeader from '../components/AllPageHeader'
import '../../css/mpv.css'
import styles from '../../css/career.module.css';

function MoneyPlanView() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <AllPageHeader props="Money Plan View" />

            <section className={styles.opportunitySection}>
                <div className={styles.container}>
                    {/* Section Header */}
                    <div className={styles.sectionHeader}>
                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>  Money Plan View</span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle}>
                            SECURE SOLDIER PLAN
                        </h2>


                    </div>



                    <div className="MPV-plan-overview">
                        <h2 className="MPV-plan-overview-title">
                            <i className="fas fa-bullseye"></i>
                            Plan Overview
                        </h2>
                        <div className="MPV-plan-overview-content">
                            <div className="MPV-plan-overview-item">
                                <h4>
                                    <i className="fas fa-user-shield"></i> Target Audience
                                </h4>
                                <p>
                                    Junior commissioned officers, personnel with family
                                    responsibilities, those nearing retirement (5-10
                                    years), risk-averse investors, and first-time
                                    investors.
                                </p>
                            </div>
                            <div className="MPV-plan-overview-item">
                                <h4>
                                    <i className="fas fa-calendar-alt"></i> Time Horizon
                                </h4>
                                <p>
                                    5-7 year investment horizon with quarterly reviews.
                                    Suitable for short to medium-term financial goals
                                    with capital preservation as priority.
                                </p>
                            </div>
                            <div className="MPV-plan-overview-item">
                                <h4>
                                    <i className="fas fa-chart-line"></i> Expected Returns
                                </h4>
                                <p>
                                    7-9% annual returns (pre-tax) with 100% capital
                                    protection guarantee on government-backed schemes.
                                    Tax benefits under Sections 80C and 10(10D).
                                </p>
                            </div>
                            <div className="MPV-plan-overview-item">
                                <h4>
                                    <i className="fas fa-rupee-sign"></i> Minimum Investment
                                </h4>
                                <p>
                                    ₹50,000 initial investment with SIP options starting
                                    from ₹5,000 monthly. Suitable for monthly savings
                                    from ₹15,000 to ₹50,000.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Allocation Breakdown --> */}
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

                    {/* <!-- Investment Details --> */}
                    <div className="MPV-invst-detail">
                        <h2 className="MPV-sec-title">
                            Recommended Investment Options
                        </h2>

                        <div className="row col-12 mx-auto">
                            <div className="col-lg-4 col-md-6">
                                <div className="MPV-invst-card">
                                    <div className="MPV-invst-icon">
                                        <i className="fas fa-university"></i>
                                    </div>
                                    <h4>Public Provident Fund (PPF)</h4>
                                    <ul className="MPV-invst-features">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Government-backed security
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> Tax-free
                                            returns (EEE benefit)
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> 15-year lock-in
                                            period
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> ₹1.5 lakh
                                            annual limit
                                        </li>
                                    </ul>
                                    <div className="MPV-invst-return">
                                        7.1% p.a. Current Rate
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="MPV-invst-card">
                                    <div className="MPV-invst-icon">
                                        <i className="fas fa-file-invoice-dollar"></i>
                                    </div>
                                    <h4>Post Office Schemes</h4>
                                    <ul className="MPV-invst-features">
                                        <li>
                                            <i className="fas fa-check"></i> SCSS (7.4%
                                            p.a.)
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> Monthly Income
                                            Scheme (6.6% p.a.)
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> National
                                            Savings Certificate (6.8% p.a.)
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> Complete
                                            capital protection
                                        </li>
                                    </ul>
                                    <div className="MPV-invst-return">6.6-7.4% p.a.</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="MPV-invst-card">
                                    <div className="MPV-invst-icon">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <h4>Conservative Mutual Funds</h4>
                                    <ul className="MPV-invst-features">
                                        <li>
                                            <i className="fas fa-check"></i> Hybrid Funds
                                            (20-40% equity)
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> Dynamic Asset
                                            Allocation
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> SIP option from
                                            ₹500/month
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i> Regular income
                                            through SWP
                                        </li>
                                    </ul>
                                    <div className="MPV-invst-return">
                                        8-10% p.a. Expected
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Action Plan --> */}

                    {/* Action Plan Timeline */}
                    <div  className="GWP-action-plan mt-5">
                        <h2 className="GWP-sec-title">
                            Implementation MPV-timline
                        </h2>

                        <div className="GWP-timline">
                            <div className="GWP-timline-item">
                                <div className="GWP-timline-marker">1</div>
                                <div className="GWP-timline-content">
                                    <h4>Month 1-3: Foundation Setup</h4>
                                    <p>
                                        Open PPF account, set up Post Office schemes, create emergency fund (12 months expenses), purchase term insurance (20× annual income).
                                    </p>
                                </div>
                            </div>

                            <div className="GWP-timline-item">
                                <div className="GWP-timline-marker">2</div>
                                <div className="GWP-timline-content">
                                    <h4>Month 4-6: Investment Phase</h4>
                                    <p>
                                        Start SIP in conservative mutual funds, allocate funds to government bonds, set up health insurance with critical illness rider.
                                    </p>
                                </div>
                            </div>

                            <div className="GWP-timline-item">
                                <div className="GWP-timline-marker">3</div>
                                <div className="GWP-timline-content">
                                    <h4>Quarterly Reviews</h4>
                                    <p>
                                        Review portfolio performance, rebalance if needed, update insurance coverage, assess skill development progress.
                                    </p>
                                </div>
                            </div>

                           
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="GWP-cta">
                        <h3 className="GWP-cta-title">
                            Ready to Implement This Plan?
                        </h3>
                        <p>
                            Get your personalized Secure Soldier Plan with exact allocations, specific investment recommendations, and implementation checklist.
                        </p>

                        <div className="GWP-cta-buttons">
                            <button className="border-btn">
                                Contact Us
                                <i className="fas fa-phone ms-2"></i>
                            </button>
                            <button className="border-btn">
                                Back to Plans
                                <i className="fas fa-arrow-left ms-2"></i>
                            </button>
                        </div>
                    </div>


             

                   
                </div>
            </section>

        </>
    )
}

export default MoneyPlanView