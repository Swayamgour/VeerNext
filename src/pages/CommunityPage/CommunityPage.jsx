import React from 'react'
// import Header from './Header'
import HeroSection from './HeroSection'
import CommunityPillars from './CommunityPillars'
import SkillForgeAcademy from './SkillForgeAcademy'
import MissionCertify from './MissionCertify'
import VeerConnect from './VeerConnect'
import OfficersCompass from './OfficersCompass'
import OperationRakshak from './OperationRakshak'
import VeerGear from './VeerGear'
import VeteranSewaKendra from './VeteranSewaKendra'
import AllPageHeader from '../components/AllPageHeader'

function CommunityPage() {
    return (
        <div>

           

            <AllPageHeader props="COMMUNITY SUPPORT " />


            <main>
                <HeroSection />
                <CommunityPillars />
                <SkillForgeAcademy />
                <MissionCertify />
                <VeteranSewaKendra />
                <VeerConnect />
                <OfficersCompass />
                <OperationRakshak />
                {/* <VeerGear /> */}
            </main>
        </div>
    )
}

export default CommunityPage