import React from 'react'
import HeroSection from './HeroSection'
import OpportunitySection from './OpportunitySection'
import BenefitsSection from './BenefitsSection'
import HowItWorks from './HowItWorks'
import ReportSnapshot from './ReportSnapshot'
import Testimonials from './Testimonials'
import CTA from './CTA'
import styles from '../../css/career.module.css';


function Career() {
    return (
        <>

            <section
                className="page-title-area"
                style={{
                    backgroundImage: "url('/assets/img/bg/page-title-bg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    // padding: '100px 0'
                }}
            >
                <div className="page-title-shape">
                    <img className="shape-cube" src="/assets/img/shape/cube-shape.png" alt="cube shape" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-title-wrapper">
                                <h1 className="page-title mb-10">CAREER TRANSITION </h1>
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
                                            <span>CAREER TRANSITION </span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className={styles.app}>
                <HeroSection />
                <OpportunitySection />
                <BenefitsSection />
                <HowItWorks />
                <ReportSnapshot />
                <Testimonials />
                <CTA />
            </div>
        </>

    )
}

export default Career