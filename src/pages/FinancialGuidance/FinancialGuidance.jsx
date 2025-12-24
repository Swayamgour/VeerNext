import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/virtual";
import AllPageHeader from '../components/AllPageHeader';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/career.module.css';


function FinancialGuidance() {

    const missions = [
        {
            number: "01",
            title: "Sewa Nidhi Strategy",
            icon: "fas fa-piggy-bank",
            desc: "Learn how to maximize your Sewa Nidhi funds with smart investment approaches.",
            duration: "3 Minutes",
        },
        {
            number: "02",
            title: "Financial Traps",
            icon: "fas fa-traffic-light",
            desc: "5 common financial traps to avoid for better wealth management.",
            duration: "3 Minutes",
        },
        {
            number: "03",
            title: "SIP Investments",
            icon: "fas fa-chart-line",
            desc: "How Systematic Investment Plans grow your money over time.",
            duration: "3 Minutes",
        },
        {
            number: "04",
            title: "Government Schemes",
            icon: "fas fa-shield-alt",
            desc: "Safe, government-backed investment options with guaranteed returns.",
            duration: "3 Minutes",
        },
        {
            number: "05",
            title: "Insurance Basics",
            icon: "fas fa-umbrella",
            desc: "Essential insurance knowledge for financial protection.",
            duration: "3 Minutes",
        },
        {
            number: "06",
            title: "Emergency Fund",
            icon: "fas fa-first-aid",
            desc: "How to build and maintain a financial safety net.",
            duration: "3 Minutes",
        },
        {
            number: "07",
            title: "Wealth Building",
            icon: "fas fa-gem",
            desc: "Long-term strategies for sustainable wealth creation.",
            duration: "3 Minutes",
        }
    ];


    const testimonialSlides = [
        {
            img: "https://i.pravatar.cc/150?img=12",
            name: "Col. Rajiv Verma",
            role: "Retd. Indian Army",
            text:
                "VeerNXT helped me turn my Sewa Nidhi into a disciplined financial plan. I now save and invest with confidence, clarity, and a mission-driven approach that keeps my family financially secure for the long term.",
        },
        {
            img: "https://i.pravatar.cc/150?img=32",
            name: "Major Sunita Singh",
            role: "Financial Mentor",
            text:
                "VeerNXT helped me turn my Sewa Nidhi into a disciplined financial plan. I now save and invest with confidence, clarity, and a mission-driven approach that keeps my family financially secure for the long term.",
        },
    ];


    const navigate = useNavigate()




    return (
        <>
            <AllPageHeader props="Financial Guidance" />



            <section className="fn-hero">
                <div className="container">
                    {/* <div className="row align-items-center   "> */}
                    <div className="row align-items-center  g-md-0">

                        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 style={{ color: 'var(--' }} className="fn-hero-title">
                                Secure Your Sewa Nidhi. Build a Prosperous <span>Civilian Life.</span>
                            </h1>


                            <p className="financial-hero-text mb-3">
                                India’s first Defense Reintegration EdTech platform designed exclusively
                                for Agniveers and ex-servicemen. Get personalized financial planning,
                                career transition support, and expert guidance for a stable future.
                            </p>

                            <div className="fn-hero-action">
                                {/* <a href="#" className="fill-btn"> */}
                                <span onClick={() => navigate('/FinancialPlanningPlatform')} className="fill-btn">
                                    Generate My Personal Money Plan
                                    <i className="fas fa-chart-line btn-icon"></i>
                                </span>
                                {/* </a> */}
                            </div>
                        </div>


                        <div className="col-lg-4 text-center wow fadeInUp  " data-wow-delay="0.2s">
                            <div className="fn-hero-img  responsive-mt">
                                <img src='/assets/img/about/financial.jpg'
                                    alt="Financial Planning for Agniveers"
                                    className="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- hero section End  -->


            <!-- Why Financial Guidance Matters Start--> */}

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContainer}>

                    {/* Section Header */}
                    <div className={styles.benefitsHeader}>


                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>
                                WHY FINANCIAL GUIDANCE MATTERS
                            </span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle}>
                            Your Sewa Nidhi Is Not Just Money. It’s Your Launchpad.
                        </h2>

                        {/* <p className={styles.benefitsSectionSubtitle}>
                            Comprehensive tools and resources designed specifically for your transition journey
                        </p> */}
                    </div>

                    {/* <section className="features-area pt-70 pb-70 p-relative bg-white z-index-2">
                        <div className="container">

                            <div className="bd-section-title-wrapper wow fadeInUp" data-wow-delay="0.1s">
                                <div className="bd-section-subtitle">
                                    Your Sewa Nidhi Is Not Just Money. It’s Your Launchpad.
                                    <img alt="kjhgf" src="/assets/img/icons/icon-2/bullet.png" />
                                </div>
                                <h3 className="bd-section-title mb-60 ">WHY FINANCIAL GUIDANCE MATTERS</h3>
                            </div> */}
                    {/* <!-- Financial Cards --> */}
                    <div className="row g-4">
                        {/* <!-- C/ard 1 --> */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fn-matter-card">
                                <div className="fn-matter-card-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h3 className="fn-matter-card-title">Protect Your Wealth</h3>
                                <p className="fn-matter-card-desc">
                                    Avoid bad advice, risky investments, overspending, and money traps.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="fn-matter-card">
                                <div className="fn-matter-card-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3 className="fn-matter-card-title">Grow Your Wealth</h3>
                                <p className="fn-matter-card-desc">
                                    Smart investments → predictable returns → long-term stability.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fn-matter-card">
                                <div className="fn-matter-card-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3 className="fn-matter-card-title">Secure Your Family</h3>
                                <p className="fn-matter-card-desc">
                                    Insurance, emergency fund, and future planning in one place.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Why Financial Guidance Matters end-->

            <!-- WHAT VEERNXT GIVES YOU start --> */}
            <section className="contact-form-area pt-70 pb-70 contact-form-style parallax-bg fix"
                // data-background="{{asset('/assets/img/about/financial.jpg')}}"
                style={{
                    backgroundImage: "url('/assets/img/about/financial.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    // padding: '100px 0'
                }}
            >
                <div className="contact-overlay">
                </div>
                <div className="container">
                    <div className="contact-form-inner p-relative">
                        <div className="contact-content wow fadeInUp" data-wow-delay=".1s">
                            <div className="bd-section-title-wrapper">
                                <div className="bd-section-subtitle">
                                    Our Offering
                                    <img alt="kjhgf" src="/assets/img/icons/icon-2/bullet.png" />
                                </div>
                                <h3 className="bd-section-title mb-40">WHAT VEERNXT GIVES YOU</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row col-12 mx-auto mt-40">
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="fn-offering-card" data-card="1">
                                <div className="fn-offering-card-number">1</div>
                                <div className="fn-offering-card-content">
                                    <div className="fn-offering-card-icon">
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <h3 className="fn-offering-card-title">
                                        Personalised Money Plan
                                    </h3>
                                    <p className="fn-offering-card-desc">
                                        Based on your age, goals, family needs & risk
                                        profile. A customized financial roadmap designed
                                        specifically for your unique situation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fn-offering-card" data-card="2">
                                <div className="fn-offering-card-number">2</div>
                                <div className="fn-offering-card-content">
                                    <div className="fn-offering-card-icon">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <h3 className="fn-offering-card-title">
                                        Safe Investment Pathways
                                    </h3>
                                    <p className="fn-offering-card-desc">
                                        PPF, Post Office, SGB, SIPs, Fixed Deposits - all
                                        explained in simple terms. Secure investment options
                                        tailored to your risk appetite.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fn-offering-card" data-card="3">
                                <div className="fn-offering-card-number">3</div>
                                <div className="fn-offering-card-content">
                                    <div className="fn-offering-card-icon">
                                        <i className="fas fa-robot"></i>
                                    </div>
                                    <h3 className="fn-offering-card-title">
                                        Auto-Invest Deployment
                                    </h3>
                                    <p className="fn-offering-card-desc">
                                        Set monthly auto-SIPs and watch your money grow.
                                        Automated investing to ensure consistent wealth
                                        accumulation without manual effort.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="fn-offering-card" data-card="4">
                                <div className="fn-offering-card-number">4️</div>
                                <div className="fn-offering-card-content">
                                    <div className="fn-offering-card-icon">
                                        <i className="fas fa-hand-holding-usd"></i>
                                    </div>
                                    <h3 className="fn-offering-card-title">
                                        Sewa Nidhi Protection Module
                                    </h3>
                                    <p className="fn-offering-card-desc">
                                        Ensure nothing is wasted, every rupee is allocated
                                        with discipline. Advanced tracking to maximize the
                                        efficiency of your financial resources.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fn-offering-card" data-card="5">
                                <div className="fn-offering-card-number">5️</div>
                                <div className="fn-offering-card-content">
                                    <div className="fn-offering-card-icon">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <h3 className="fn-offering-card-title">
                                        Family Protection Plan
                                    </h3>
                                    <p className="fn-offering-card-desc">
                                        Term insurance + health insurance recommendations.
                                        Comprehensive coverage to safeguard your family's
                                        financial future against uncertainties.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fn-offering-card" data-card="6">
                                <div className="fn-offering-card-number">6️</div>
                                <div className="fn-offering-card-content">
                                    <div className="fn-offering-card-icon">
                                        <i className="fas fa-graduation-cap"></i>
                                    </div>
                                    <h3 className="fn-offering-card-title">
                                        Financial Education (3-Min Lessons)
                                    </h3>
                                    <p className="fn-offering-card-desc">
                                        Avoid scams, mis-selling, risky apps, and investment
                                        traps. Bite-sized lessons to build your financial
                                        literacy and protect your wealth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fn-offering-card" data-card="7">
                                <div className="fn-offering-card-number">7️</div>
                                <div className="fn-offering-card-content">
                                    <div className="fn-offering-card-icon">
                                        <i className="fas fa-bullseye"></i>
                                    </div>
                                    <h3 className="fn-offering-card-title">
                                        Goal-Based Planning
                                    </h3>
                                    <p className="fn-offering-card-desc">
                                        Home, marriage, education, vehicle — all mapped out.
                                        Structured financial plans to help you achieve your
                                        most important life goals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fn-offering-card" data-card="8">
                                <div className="fn-offering-card-number">8️</div>
                                <div className="fn-offering-card-content">
                                    <div className="fn-offering-card-icon">
                                        <i className="fas fa-life-ring"></i>
                                    </div>
                                    <h3 className="fn-offering-card-title">
                                        Emergency Shield Setup
                                    </h3>
                                    <p className="fn-offering-card-desc">
                                        Your first ₹1 lakh secured for emergencies. A
                                        dedicated safety net to protect you from unexpected
                                        financial shocks without derailing your plans.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 mb-3 wow fadeInup" data-wow-delay="0.3s">
                            <div className="fn-offering-card" data-card="9">
                                <div className="fn-offering-card-number">9️</div>
                                <div className="fn-offering-card-content">
                                    <div className="fn-offering-card-icon">
                                        <i className="fas fa-user-tie"></i>
                                    </div>
                                    <h3 className="fn-offering-card-title">
                                        Veteran Advisory Support
                                    </h3>
                                    <p className="fn-offering-card-desc">
                                        Trusted human guidance — not sales agents. Access to
                                        experienced financial advisors who prioritize your
                                        interests over sales commissions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--WHAT VEERNXT GIVES YOU end -->



            <!-- How work flow start  --> */}

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContainer}>

                    {/* Section Header */}
                    <div className={styles.benefitsHeader}>


                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>HOW IT WORKS </span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle}>
                            Simple. Transparent. Designed For Soldiers.
                        </h2>


                    </div>


                    {/* <!-- Workflow --> */}
                    <div className="fn-how-it-work mt-80">
                        {/* <!-- Step 1 --> */}
                        <div className="fn-how-it-work-step  wow zoomIn" data-wow-delay="0.2s">
                            <div className="fn-how-it-work-step-icon">
                                <i className="fa fa-user-check"></i>
                            </div>
                            <span className="fn-how-it-work-step-number">01</span>
                            <h4 className="fn-how-it-work-step-title">Profile Scan</h4>
                            <p className="fn-how-it-work-step-text">
                                Income, goals, savings habits, and family responsibilities.
                            </p>
                        </div>

                        {/* <!-- Step 2 --> */}
                        <div className="fn-how-it-work-step wow zoomIn" data-wow-delay="0.3s">
                            <div className="fn-how-it-work-step-icon">
                                <i className="fa fa-coins"></i>
                            </div>
                            <span className="fn-how-it-work-step-number">02</span>
                            <h4 className="fn-how-it-work-step-title">Sewa Nidhi Assessment</h4>
                            <p className="fn-how-it-work-step-text">
                                Strategic division of ₹8–10 lakh for safety and growth.
                            </p>
                        </div>

                        {/* <!-- Step 3 --> */}
                        <div className="fn-how-it-work-step wow zoomIn" data-wow-delay="0.4s">
                            <div className="fn-how-it-work-step-icon">
                                <i className="fa fa-robot"></i>
                            </div>
                            <span className="fn-how-it-work-step-number">03</span>
                            <h4 className="fn-how-it-work-step-title">AI Money Plan</h4>
                            <p className="fn-how-it-work-step-text">
                                3-year, 5-year, and 10-year financial mission plans.
                            </p>
                        </div>

                        {/* <!-- Step 4 --> */}
                        <div className="fn-how-it-work-step wow zoomIn" data-wow-delay="0.5s">
                            <div className="fn-how-it-work-step-icon">
                                <i className="fa fa-chart-line"></i>
                            </div>
                            <span className="fn-how-it-work-step-number">04</span>
                            <h4 className="fn-how-it-work-step-title">Investment Guidance</h4>
                            <p className="fn-how-it-work-step-text">
                                SIP, SGB, PPF, Post Office schemes by risk profile.
                            </p>
                        </div>

                        {/* <!-- Step 5 --> */}
                        <div className="fn-how-it-work-step wow zoomIn" data-wow-delay="0.6s">
                            <div className="fn-how-it-work-step-icon">
                                <i className="fa fa-shield"></i>
                            </div>
                            <span className="fn-how-it-work-step-number">05</span>
                            <h4 className="fn-how-it-work-step-title">Protection Layer</h4>
                            <p className="fn-how-it-work-step-text">
                                Insurance, health cover, and family security.
                            </p>
                        </div>

                        {/* <!-- Step 6 --> */}
                        <div className="fn-how-it-work-step wow zoomIn" data-wow-delay="0.7s">
                            <div className="fn-how-it-work-step-icon">
                                <i className="fa fa-tachometer"></i>
                            </div>
                            <span className="fn-how-it-work-step-number">06</span>
                            <h4 className="fn-how-it-work-step-title">Growth Dashboard</h4>
                            <p className="fn-how-it-work-step-text">
                                Monitor progress like a real mission log.
                            </p>
                        </div>

                    </div>

                    <div className="col-12 mt-40 text-center wow  fadeInUp" data-wow-delay="0.3s">
                        {/* <a href="#" className="fill-btn"> */}
                        <span className='fill-btn'>
                            Start My Financial Scan<i className="fas fa-rocket btn-icon "></i>
                        </span>
                        {/* </a> */}
                    </div>
                </div>
            </section>
            {/* <!--How workflow end -->


            <!-- Money plan Preview start  --> */}

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContainer}>

                    {/* Section Header */}
                    <div className={styles.benefitsHeader}>


                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>Money Plan </span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle}>
                            {/* Simple. Transparent. Designed For Soldiers. */}
                            Explore our strategic financial plans designed specifically for armed forces personnel.
                        </h2>

                        {/* <p className={styles.benefitsSectionSubtitle}>
                            Comprehensive tools and resources designed specifically for your transition journey
                        </p> */}
                    </div>



                    {/* <section className="features-area pt-70 pb-40 p-relative bg-white z-index-2">
                        <div className="container">

                            <div className="bd-section-title-wrapper">
                                <div className="bd-section-subtitle">
                                    Explore our strategic financial plans designed specifically for armed forces personnel.
                                    <img alt="kjhgf" src="/assets/img/icons/icon-2/bullet.png" />
                                </div>
                                <h3 className="bd-section-title mb-60 ">Money Plan
                                </h3>
                            </div>
                            */}
                    <div className="row g-4">

                        <div className="col-lg-4 col-md-6  wow fadeInLeft" data-wow-delay="0.6s">
                            <div className="fn-money-plan-card secure-card">
                                <div className="fn-money-plan-card-top-element"></div>
                                <div className="fn-money-plan-card-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>

                                <div className="fn-money-plan-card-head">
                                    <h3 className="fn-money-plan-card-title">SECURE SOLDIER PLAN</h3>
                                    <p className="fn-money-plan-card-subtitle">Maximum Safety Focus</p>
                                    <span className="fn-money-plan-type">Conservative Strategy</span>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: 'var(--safe-color)' }}>
                                        <span className="fn-money-plan-per-value">40%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Safe Savings</div>
                                        <p className="fn-money-plan-allocation-desc">PPF, Post Office Schemes</p>
                                    </div>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: 'var(--growth-color)' }}>
                                        <span className="fn-money-plan-per-value">30%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Growth Investments</div>
                                        <p className="fn-money-plan-allocation-desc">Conservative Equity Funds</p>
                                    </div>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: "var(--protection-color)" }}>
                                        <span className="fn-money-plan-per-value">20%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Protection</div>
                                        <p className="fn-money-plan-allocation-desc">Insurance & Health Cover</p>
                                    </div>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: "var(--skills-color)" }}>
                                        <span className="fn-money-plan-per-value">10%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Skills Development</div>
                                        <p className="fn-money-plan-allocation-desc">Courses & Certifications</p>
                                    </div>
                                </div>

                                <div onClick={() => navigate('/MoneyPlanView')} className="fn-money-plan-cta">
                                    <button className="fill-btn">
                                        View Example <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6  wow fadeInUp" data-wow-delay="0.6s">
                            <div className="fn-money-plan-card growth-card">
                                <div className="fn-money-plan-card-top-element"></div>
                                <div className="fn-money-plan-card-icon">
                                    <i className="fas fa-rocket"></i>
                                </div>

                                <div className="fn-money-plan-card-head">
                                    <h3 className="fn-money-plan-card-title">GROWTH WARRIOR PLAN</h3>
                                    <p className="fn-money-plan-card-subtitle">Aggressive Growth Focus</p>
                                    <span className="fn-money-plan-type">High Growth Strategy</span>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: 'var(--growth-color)' }}>
                                        <span className="fn-money-plan-per-value">50%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">SIP Investments</div>
                                        <p className="fn-money-plan-allocation-desc">Index + Balanced Funds</p>
                                    </div>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: 'var(--gold-color)' }}>
                                        <span className="fn-money-plan-per-value">20%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Gold Allocation</div>
                                        <p className="fn-money-plan-allocation-desc">Sovereign Gold Bonds</p>
                                    </div>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: 'var(--safe-color)' }}>
                                        <span className="fn-money-plan-per-value">20%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Safe Savings</div>
                                        <p className="fn-money-plan-allocation-desc">PPF & Fixed Deposits</p>
                                    </div>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: 'var(--emergency-color)' }}>
                                        <span className="fn-money-plan-per-value">10%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Emergency Fund</div>
                                        <p className="fn-money-plan-allocation-desc">Liquid & Instant Access</p>
                                    </div>
                                </div>

                                <div onClick={() => navigate('/MoneyPlanView')} className="fn-money-plan-cta">
                                    <button className="fill-btn">
                                        View Example <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6  wow fadeInRight" data-wow-delay="0.6s">
                            <div className="fn-money-plan-card balanced-card">
                                <div className="fn-money-plan-card-top-element"></div>
                                <div className="fn-money-plan-card-icon">
                                    <i className="fas fa-balance-scale"></i>
                                </div>

                                <div className="fn-money-plan-card-head">
                                    <h3 className="fn-money-plan-card-title">BALANCED PATRIOT PLAN</h3>
                                    <p className="fn-money-plan-card-subtitle">Smart Balanced Approach</p>
                                    <span className="fn-money-plan-type">Balanced Strategy</span>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: 'var(--safe-color)' }}>
                                        <span className="fn-money-plan-per-value">40%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Secure Investments</div>
                                        <p className="fn-money-plan-allocation-desc">PPF, Post Office, NSCs</p>
                                    </div>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: 'var(--growth-color)' }}>
                                        <span className="fn-money-plan-per-value">35%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Growth Instruments</div>
                                        <p className="fn-money-plan-allocation-desc">Equity & Debt Mix</p>
                                    </div>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: 'var(--protection-color)' }}>
                                        <span className="fn-money-plan-per-value">15%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Protection Shield</div>
                                        <p className="fn-money-plan-allocation-desc">Insurance & Health</p>
                                    </div>
                                </div>

                                <div className="fn-money-plan-allocation-item">
                                    <div className="fn-money-plan-per-circle" style={{ color: 'var(--gold-color)' }}>
                                        <span className="fn-money-plan-per-value">10%</span>
                                    </div>
                                    <div className="fn-money-plan-allocation-details">
                                        <div className="fn-money-plan-allocation-label">Gold Reserve</div>
                                        <p className="fn-money-plan-allocation-desc">Digital Gold & SGBs</p>
                                    </div>
                                </div>

                                <div onClick={() => navigate('/MoneyPlanView')} className="fn-money-plan-cta">
                                    <button className="fill-btn">
                                        View Example <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Money Plan Preview end  -->


            <!-- Featured Tools & Modules start  --> */}

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContainer}>

                    {/* Section Header */}
                    <div className={styles.benefitsHeader}>


                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>Featured Tools & Modules </span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle}>
                            Mission-ready financial systems built for disciplined
                            civilian success.
                        </h2>


                    </div>


                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6  wow fadeInUp" data-wow-delay="0.2s">
                            <div className="fn-feature-tool-card">
                                <div className="fn-feature-tool-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h4 className="fn-feature-tool-card-title">Investment Zone</h4>
                                <p className="fn-feature-tool-card-desc">
                                    Beginner-friendly investment options focused on
                                    steady growth.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6  wow fadeInUp" data-wow-delay="0.4s">
                            <div className="fn-feature-tool-card">
                                <div className="fn-feature-tool-icon">
                                    <i className="fa fa-shield"></i>
                                </div>
                                <h4 className="fn-feature-tool-card-title">Family Protection Hub</h4>
                                <p className="fn-feature-tool-card-desc">
                                    Insurance guidance built on protection, not
                                    selling.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6  wow fadeInUp" data-wow-delay="0.6s">
                            <div className="fn-feature-tool-card">
                                <div className="fn-feature-tool-icon">
                                    <i className="fa fa-tachometer"></i>
                                </div>
                                <h4 className="fn-feature-tool-card-title">Prosperity Score</h4>
                                <p className="fn-feature-tool-card-desc">
                                    Track readiness using a 0–100 mission scale.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6  wow fadeInUp" data-wow-delay="0.8s">
                            <div className="fn-feature-tool-card">
                                <div className="fn-feature-tool-icon">
                                    <i className="fa fa-folder-open"></i>
                                </div>
                                <h4 className="fn-feature-tool-card-title">Record Locker</h4>
                                <p className="fn-feature-tool-card-desc">
                                    Secure storage for certificates & documents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Featured Tools & Modules end -->

            <!-- why agniveer trust start  --> */}

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContainer}>

                    {/* Section Header */}
                    <div className={styles.benefitsHeader}>


                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>WHY AGNIVEERS TRUST US </span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle}>
                            Built with military integrity, designed for soldier success
                        </h2>

                      
                    </div>

                    

                    <div className="row gy-4 col-12 mx-auto" style={{ marginBottom: "80px" }}>

                        <div className="col-lg-6">
                            {/* <!-- /Point 1 --> */}
                            <div className="fn-credibility-card">
                                <div className="fn-credibility-card-number">01</div>
                                <div className="fn-credibility-card-content">
                                    <h3 className="fn-credibility-card-title">
                                        Veteran-Led Platform
                                    </h3>
                                    <p className="fn-credibility-card-text">
                                        Founded and operated by ex-servicemen who
                                        understand the unique financial challenges faced
                                        by armed forces personnel.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <!-- Point 2 --> */}
                            <div className="fn-credibility-card">
                                <div className="fn-credibility-card-number">02</div>
                                <div className="fn-credibility-card-content">
                                    <h3 className="fn-credibility-card-title">
                                        Military-Grade Integrity
                                    </h3>
                                    <p className="fn-credibility-card-text">
                                        Every recommendation follows strict ethical
                                        guidelines, mirroring the discipline and honor
                                        of military service.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <!-- Point 3 --> */}
                            <div className="fn-credibility-card">
                                <div className="fn-credibility-card-number">03</div>
                                <div className="fn-credibility-card-content">
                                    <h3 className="fn-credibility-card-title">
                                        Zero Mis-Selling Policy
                                    </h3>
                                    <p className="fn-credibility-card-text">
                                        No commissions, no hidden charges, no biased
                                        recommendations. Your benefit is our only
                                        priority.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <!-- Point 4 --> */}
                            <div className="fn-credibility-card">
                                <div className="fn-credibility-card-number">04</div>
                                <div className="fn-credibility-card-content">
                                    <h3 className="fn-credibility-card-title">
                                        Jargon-Free Simplicity
                                    </h3>
                                    <p className="fn-credibility-card-text">
                                        Complex financial concepts explained in simple,
                                        straightforward language anyone can understand.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <!-- Point 5 --> */}
                            <div className="fn-credibility-card">
                                <div className="fn-credibility-card-number">05</div>
                                <div className="fn-credibility-card-content">
                                    <h3 className="fn-credibility-card-title">
                                        First-Timer Friendly
                                    </h3>
                                    <p className="fn-credibility-card-text">
                                        Everything designed specifically for first-time
                                        investors, with step-by-step guidance at every
                                        stage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <!-- Point 6 - Bonus --> */}
                            <div className="fn-credibility-card">
                                <div className="fn-credibility-card-number">06</div>
                                <div className="fn-credibility-card-content">
                                    <h3 className="fn-credibility-card-title">
                                        Mission-First Approach
                                    </h3>
                                    <p className="fn-credibility-card-text">
                                        Your financial goals become our mission
                                        objectives, tracked and achieved with military
                                        precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-40">
                        <div className="col-xl-7 col-lg-8 col-md-10 col-12">

                            <Swiper
                                direction="vertical"
                                modules={[Autoplay, Pagination]}
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                style={{
                                    height: "480px",
                                }}
                            >
                                {testimonialSlides.map((item, i) => (
                                    <SwiperSlide style={{
                                        // height: "480px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} key={i}>
                                        <div className="fn-quote-outer-box">
                                            <i className="fa fa-quote-left fn-quote-left-icon"></i>
                                            <i className="fa fa-quote-right fn-quote-right-icon"></i>

                                            <div className="fn-quote-inner-box text-center">
                                                <div className="fn-quote-profile-img mb-4">
                                                    <img src={item.img} alt={item.name} />
                                                    <h4 className="mt-3 mb-1">{item.name}</h4>
                                                    <span>{item.role}</span>
                                                </div>

                                                <p className="fn-quote-text">“{item.text}”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>

                </div>
            </section>


            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContainer}>

                    {/* Section Header */}
                    <div className={styles.benefitsHeader}>


                        <div className={styles.headerDecorator}>
                            <div className={styles.decLine}></div>
                            <span className={styles.decText}>  Learn in 7 Short Missions </span>
                            <div className={styles.decLine}></div>
                        </div>

                        <h2 className={styles.sectionTitle}>
                            Financial Learning Bootcamp
                        </h2>

                        {/* <p className={styles.benefitsSectionSubtitle}>
                            Comprehensive tools and resources designed specifically for your transition journey
                        </p> */}
                    </div>


                    {/* <section className="features-area pt-70 pb-70 p-relative bg-white z-index-2">
                <div className="container">

                    <div className="bd-section-title-wrapper">
                        <div className="bd-section-subtitle">
                            Learn in 7 Short Missions
                            <img alt="kjhgf" src="/assets/img/icons/icon-2/bullet.png" />
                        </div>
                        <h3 className="bd-section-title mb-60 ">Financial Learning Bootcamp
                        </h3>
                    </div> */}

                    <div className="row col-12 gy-4 mx-auto">
                        {missions.map((item, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                                <div className="fn-learn-bootcamp-card float-animation">
                                    <div className="fn-learn-bootcamp-card-number">{item.number}</div>

                                    <div className="fn-learn-bootcamp-card-icon">
                                        <i className={item.icon}></i>
                                    </div>

                                    <h3 className="fn-learn-bootcamp-card-title">{item.title}</h3>

                                    <p className="fn-learn-bootcamp-card-desc">{item.desc}</p>

                                    <div className="fn-learn-bootcamp-card-dura">
                                        <i className="fas fa-clock me-2"></i> {item.duration}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* last button section */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center justify-content-center mx-auto">
                        <div className="float-animation">
                            <div className="col-12 mt-40 text-center wow fadeInUp" data-wow-delay="0.3s">
                                <button className="fill-btn">
                                    Start All 7 Missions <i className="fas fa-play-circle ms-2"></i>
                                </button>

                                <p className="mt-3 text-muted text-center">
                                    7 Missions • 3 Minutes Each • 21 Minutes Total
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Start All Button --> */}

                </div>
            </section>
            {/* <!--Financial Learning Bootcamp end -->

            <!-- bottom CTA center start --> */}
            <section className="mission-cta-section  mb-85">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="mission-content">
                                <h1 className="mission-headline wow fadeInUp" data-wow-delay=".3s">
                                    Your Service Was <span className="highlight"> Disciplined.</span> Your <span className="highlight"> Money</span> Should Be Too.
                                </h1>

                                <p className="mission-subtitle wow fadeInUp text-center mb-1">
                                    Take control of your financial future today.
                                </p>
                                <p className="mission-subtitle wow fadeInUp text-center">
                                    Your personalised money plan is ready.
                                </p>

                                <div className="mission-cta-buttons wow fadeInUp" data-wow-delay=".3s">
                                    {/* <a href="#" > */}
                                    <span onClick={() => navigate('/FinancialPlanningPlatform')} className="mission-btn fill-btn" >Generate My Personal Money Plan
                                        <i className="fas fa-chart-line btn-icon"></i>
                                    </span>

                                    {/* </a> */}

                                    {/* <a href="#" > */}
                                    <span className="mission-btn border-btn">Explore Financial Tools

                                        <i className="fas fa-arrow-right btn-icon"></i>
                                    </span>

                                    {/* </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- bottom CTA center end --> */}


            <style>{`
                        .swiper-pagination-bullet {
                          width: 10px;
                          height: 10px;
                          background: rgba(0, 0, 0, 0.3);
                          opacity: 1;
                          transition: all 0.3s ease;
                        }

                        .swiper-pagination-bullet-active {
                          background: var(--primary-color);
                          transform: scale(1.4);
                        }

                        .swiper-vertical > .swiper-pagination-bullets {
                          right: 10px;
                        }
                    `}
            </style>
        </>
    )
}




export default FinancialGuidance