import React from 'react'
// import HeaderHome from '../Header'
import BannerSlider from './BannerSlider'
import AboutArea from './AboutArea'
import OfferSection from './PriceCard'
import HowItWorksSection from './HowItWorksSection'
import DashboardSlider from './DashboardSlider'
import KeyFeaturesSection from './KeyFeaturesSection'
import MissionCtaSection from './MissionCtaSection'
import Footer from '../Footer'
import { useCheckTokenQuery } from '../../redux/api'

function Home() {

    const { data } = useCheckTokenQuery()

    return (
        <div>
            {/* <HeaderHome /> */}
            <BannerSlider />
            <AboutArea />
            <OfferSection />
            <HowItWorksSection />
            <DashboardSlider />
            <KeyFeaturesSection />
            <MissionCtaSection />
            {/* <Footer /> */}
        </div>
    )
}

export default Home