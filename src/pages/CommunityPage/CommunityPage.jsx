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

function CommunityPage() {
    return (
        <div>

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
                                <h1 className="page-title mb-10">Community Support</h1>
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
                                            <span>Community Support </span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


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