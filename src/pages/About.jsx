import React from 'react'
import AllPageHeader from './components/AllPageHeader'

function About() {

    const stats = [
        {
            count: '1250 ',
            label: 'Veterans Helped',
            iconClass: '/assets/img/icons/riot-police.png',
        },
        {
            count: '350 ',
            label: 'Successful Transitions',
            iconClass: '/assets/img/icons/check.png',
        },
    ];

    return (
        <>

            <AllPageHeader props={"About US"} />
            {/* <!-- page title area end  -->

            <!-- about area start  --> */}
            <section className="about-area pt-40 pb-65 p-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-thumb-1-area">
                                <div className="about-thumb-1-wrapper mb-65 p-relative z-index-1">
                                    <div className="about-thumb about-thumb-1 p-relative wow fadeInLeft" data-wow-delay=".3s">
                                        <img src="/assets/img/about/img-2.png" alt="img not found" />
                                        <div className="panel wow"></div>
                                    </div>
                                    {/* <div className="facility-shape-wrapper">
                                        <img className="about-shape about-img" src="/assets/img/about/img-1.jpg"
                                            alt="img not found " />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-content-wrapper mb-20 wow fadeInRight" data-wow-delay=".3s">
                                <div className="about-tab-wrapper">
                                    <div className="about-tab-nav mb-20">
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button className="nav-link active" id="nav-1-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1"
                                                    aria-selected="true">Our Mission</button>
                                                <button className="nav-link" id="nav-2-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2"
                                                    aria-selected="false">Our Vision</button>
                                                <button className="nav-link" id="nav-3-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-3"
                                                    aria-selected="false">Our Goal</button>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="about-tab-content">
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-1" role="tabpanel"
                                                aria-labelledby="nav-1-tab">
                                                <div className="bd-section-title-wrapper">
                                                    <h5 className="bd-section-title mb-40">About Our Strategy</h5>
                                                </div>
                                                <div className="about-content">
                                                    <p>
                                                        Armado weapon often resembles real firearms, but the replicas shoot
                                                        small plastic
                                                        6mm BBs. In its nature, airsoft is similar to first-person shooting
                                                        video games, and
                                                        it allows experiencing realistic battle and tactical scenario
                                                        gameplay.
                                                    </p>
                                                </div>
                                                {/* <div className="border-box">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-md-6">
                                                            <div className="about-info">
                                                                <div className="about-info-icon">
                                                                    <i className="flaticon-032-riot-police"></i>
                                                                </div>
                                                                <div className="about-info-text">
                                                                    <span><span className="odometer" data-count="1250">0</span>
                                                                        +</span>
                                                                    <p>total Team members</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-md-6">
                                                            <div className="about-info">
                                                                <div className="about-info-icon">
                                                                    <i className="flaticon-027-check"></i>
                                                                </div>
                                                                <div className="about-info-text">
                                                                    <span><span className="odometer" data-count="350">0</span>
                                                                        +</span>
                                                                    <p>Operations Completed</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                <div className="border-box">
                                                    <div className="row">
                                                        {stats.map((stat, index) => (

                                                            <div className="col-xl-6 col-md-6" key={index}>
                                                                <div className="about-info">
                                                                    <div className="about-info-icon">

                                                                        <img src={stat.iconClass} />
                                                                    </div>
                                                                    <div className="about-info-text ">
                                                                        <span className="odometer" >
                                                                            {/* The number is displayed directly, awaiting external Odometer script */}
                                                                            <span
                                                                                className="odometer"
                                                                                data-count={stat.count}
                                                                            >
                                                                                {/* {useCountUp(stat.count, 1500)} */}
                                                                                {stat.count}
                                                                            </span>
                                                                            +
                                                                        </span>
                                                                        <p>{stat.label}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="about-content">
                                                    <p>
                                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                                        It has roots in a
                                                        piece of classNameical Latin literature from 45 BC, making it over 2000
                                                        years old.
                                                        Richard McClintock, a Latin professor at Hampden-Sydney College in
                                                        Virginia, looked
                                                        up
                                                        one of the more obscure.
                                                    </p>
                                                    <div className="about-btn mt-50">
                                                        <a href="contact.html" className="arm-btn"><span className="circle-btn"><i
                                                            className="fal fa-long-arrow-right"></i></span>Contact
                                                            Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-2" role="tabpanel"
                                                aria-labelledby="nav-2-tab">
                                                <div className="bd-section-title-wrapper">
                                                    <h3 className="bd-section-title mb-40">About Our Vision</h3>
                                                </div>
                                                <div className="about-content">
                                                    <p>
                                                        Armado weapon often resembles real firearms, but the replicas shoot
                                                        small plastic
                                                        6mm BBs. In its nature, airsoft is similar to first-person shooting
                                                        video games, and
                                                        it allows experiencing realistic battle and tactical scenario
                                                        gameplay.
                                                    </p>
                                                </div>
                                                <div className="about-content">
                                                    <p className="about-sp">Teachings of the great explorer of the truth, the
                                                        master-builder of
                                                        human happiness.
                                                        No one rejects, dislikes, or avoids pleasure itself.</p>
                                                </div>
                                                <div className="about-content">
                                                    <p>
                                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                                        It has roots in a
                                                        piece of classNameical Latin literature from 45 BC, making it over 2000
                                                        years old.
                                                        Richard McClintock, a Latin professor at Hampden-Sydney College in
                                                        Virginia, looked
                                                        up
                                                        one of the more obscure.
                                                    </p>
                                                    <div className="about-btn mt-50">
                                                        <span className="arm-btn">
                                                            <span className="circle-btn">
                                                                <i className="fal fa-long-arrow-right"></i>
                                                            </span>
                                                            Contact Us
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-3" role="tabpanel"
                                                aria-labelledby="nav-3-tab">
                                                <div className="bd-section-title-wrapper">
                                                    <h3 className="bd-section-title mb-40">About Our Goal</h3>
                                                </div>
                                                <div className="about-content">
                                                    <p>
                                                        Armado weapon often resembles real firearms, but the replicas shoot
                                                        small plastic
                                                        6mm BBs. In its nature, airsoft is similar to first-person shooting
                                                        video games, and
                                                        it allows experiencing realistic battle and tactical scenario
                                                        gameplay.
                                                    </p>
                                                </div>
                                                <div className="border-box">
                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="about-info">
                                                                <div className="about-info-icon">
                                                                    <i className="flaticon-032-riot-police"></i>
                                                                </div>
                                                                <div className="about-info-text">
                                                                    <span>1250 +</span>
                                                                    <p>total Team members</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="about-info">
                                                                <div className="about-info-icon">
                                                                    <i className="flaticon-027-check"></i>
                                                                </div>
                                                                <div className="about-info-text">
                                                                    <span>350 +</span>
                                                                    <p>Operations Completed</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="about-content">
                                                    <p>
                                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                                        It has roots in a
                                                        piece of classNameical Latin literature from 45 BC, making it over 2000
                                                        years old.
                                                        Richard McClintock, a Latin professor at Hampden-Sydney College in
                                                        Virginia, looked
                                                        up
                                                        one of the more obscure.
                                                    </p>
                                                    <div className="about-btn mt-50">
                                                        <a href="contact.html" className="arm-btn"><span className="circle-btn"><i
                                                            className="fal fa-long-arrow-right"></i></span>Contact
                                                            Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="fact-area fact-area-bg p-relative z-index-2">
                <div className="container">
                    <div className="fact-wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="fact-single">
                                    <div className="fact-content">
                                        <span className="fact-number"><span className="odometer" data-count="2">0</span>K<span
                                            className="plus">+</span></span>
                                        <span className="fact-title">EVENTS SERVED</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="fact-single">
                                    <div className="fact-content">
                                        <span className="fact-number"><span className="odometer" data-count="460">0</span><span
                                            className="plus">+</span></span>
                                        <span className="fact-title">QUA LIFIED STAFF</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="fact-single">
                                    <div className="fact-content">
                                        <span className="fact-number"><span className="odometer" data-count="120">0</span><span
                                            className="plus">+</span></span>
                                        <span className="fact-title">OUR LOCATIONS</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="fact-single">
                                    <div className="fact-content">
                                        <span className="fact-number"><span className="odometer" data-count="550">0</span><span
                                            className="plus">+</span></span>
                                        <span className="fact-title">AREAS SERVING</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About