import React from 'react'
import HeroSection from './HeroSection'
import OpportunitySection from './OpportunitySection'
import BenefitsSection from './BenefitsSection'
import HowItWorks from './HowItWorks'
import ReportSnapshot from './ReportSnapshot'
import Testimonials from './Testimonials'
import CTA from './CTA'
import styles from '../../css/career.module.css';
import AllPageHeader from '../components/AllPageHeader'


function Career() {
    return (
        <>

         

            <AllPageHeader props="CAREER TRANSITION " />


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