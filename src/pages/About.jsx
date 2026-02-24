import React, { useState } from "react";
import AllPageHeader from "./components/AllPageHeader";

function About() {
    const [activeTab, setActiveTab] = useState("nav-1");

    const stats = [
        {
            count: "1250",
            label: "Veterans Helped",
            iconClass: "/assets/img/icons/riot-police.png",
        },
        {
            count: "350",
            label: "Successful Transitions",
            iconClass: "/assets/img/icons/check.png",
        },
    ];

    const aboutTabs = [
        {
            id: "nav-1",
            title: "Our Mission",
            heading: "About Our Mission",
            content1:
                "VeerNXT is dedicated to guiding Agniveers and veterans toward a confident and successful civilian life. Through job opportunities, training programs, skills development, and mentorship, we ensure defence professionals receive a strong new beginning.",
            content2:
                "Our mission goes beyond assistance — we aim to empower. With military-grade clarity and discipline, VeerNXT helps former soldiers transform experience into opportunity and step into a future filled with stability and pride.",
            stats: true,
        },
        {
            id: "nav-2",
            title: "Our Vision",
            heading: "About Our Vision",
            content1:
                "Our vision is to become India’s most trusted Defence Reintegration ecosystem, reshaping how soldiers transition from service to society.",
            content2:
                "We envision a platform that inspires transformation — enabling former servicemen to grow and lead civilian industries with the same strength and courage they showed in uniform.",
            stats: false,
        },
        {
            id: "nav-3",
            title: "Our Goal",
            heading: "About Our Goal",
            content1:
                "Our goal is to build a structured path that connects military skills with modern workforce needs and accelerate civilian success.",
            content2:
                "We strive to create a future where no soldier feels lost after service; our goal ensures respect and opportunity for every Agniveer and veteran.",
            stats: false,
        },
    ];

    return (
        <>
            <AllPageHeader props={"About US"} />

            <section className="about-area pt-40 pb-65 p-relative">
                <div className="container">
                    <div className="row">

                        {/* =================== LEFT IMAGE SIDE ===================== */}
                        <div className="col-xl-6">
                            <div className="about-thumb-1-area">
                                <div className="about-thumb-1-wrapper mb-65 p-relative z-index-1">
                                    <div
                                        className="about-thumb about-thumb-1 p-relative wow fadeInLeft"
                                        data-wow-delay=".3s"
                                    >
                                        <img src="/assets/img/about/abt2.webp" alt="img" />
                                        <div className="panel wow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =================== RIGHT TAB SIDE ===================== */}
                        <div className="col-xl-6">
                            <div
                                className="about-content-wrapper mb-65 wow fadeInRight"
                                data-wow-delay=".3s"
                            >
                                <div className="about-tab-wrapper">

                                    {/* TAB NAVIGATION (Bootstrap original style) */}
                                    <div className="about-tab-nav mb-20">
                                        <nav>
                                            <div className="nav nav-tabs" role="tablist">

                                                {aboutTabs.map((tab) => (
                                                    <button
                                                        key={tab.id}
                                                        className={`nav-link ${activeTab === tab.id && "active"
                                                            }`}
                                                        onClick={() => setActiveTab(tab.id)}
                                                        type="button"
                                                    >
                                                        {tab.title}
                                                    </button>
                                                ))}

                                            </div>
                                        </nav>
                                    </div>

                                    {/* TAB CONTENT */}
                                    <div className="about-tab-content">
                                        <div className="tab-content">

                                            {aboutTabs.map((tab) => (
                                                <div
                                                    key={tab.id}
                                                    className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""
                                                        }`}
                                                >

                                                    <div className="bd-section-title-wrapper">
                                                        <h3 className="bd-section-title mb-40">
                                                            {tab.heading}
                                                        </h3>
                                                    </div>

                                                    {/* Top Text */}
                                                    <div className="about-content">
                                                        <p>{tab.content1}</p>
                                                    </div>

                                                    {/* Stats Box Show only in Mission */}
                                                    {tab.stats && (
                                                        <div className="border-box">
                                                            <div className="row">

                                                                {stats.map((stat, i) => (
                                                                    <div className="col-xl-6 col-md-6" key={i}>
                                                                        <div className="about-info">
                                                                            <div className="about-info-icon">
                                                                                <img src={stat.iconClass} />
                                                                            </div>

                                                                            <div className="about-info-text">
                                                                                <span  className="odometer">
                                                                                    {stat.count} +
                                                                                </span>
                                                                                <p>{stat.label}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}

                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Bottom Text */}
                                                    <div className="about-content">
                                                        <p>{tab.content2}</p>
                                                    </div>

                                                </div>
                                            ))}

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
