// VeerNXTReport.jsx
import React from 'react';
import '../../css/VeerNXTReport.css'; // We'll create this CSS file
import AllPageHeader from '../components/AllPageHeader';

import html2pdf from "html2pdf.js";




const VeerNXTReport = () => {
    const skills = [
        'Leadership',
        'Crisis Management',
        'Strategic Planning',
        'Risk Assessment',
        'Team Building',
        'Operations',
        'Logistics',
        'Security Protocols'
    ];

    const careerPaths = [
        {
            title: 'Corporate Security Manager',
            match: '95% Match',
            description: 'Lead security operations for large corporations. Your military experience in threat assessment and crisis management is highly valuable.',
            details: {
                salary: '₹18-25 LPA',
                type: 'Full-time',
                location: 'Metro Cities'
            },
            highlight: true
        },
        {
            title: 'Security Consultant',
            match: '88% Match',
            description: 'Advise organizations on security measures, risk mitigation, and compliance with security standards.',
            details: {
                salary: '₹15-22 LPA',
                type: 'Flexible',
                location: 'Pan India'
            },
            highlight: false
        }
    ];

    const nextSteps = [
        'Update LinkedIn profile with military achievements',
        'Complete basic security certification (online)',
        'Connect with 5 security professionals on LinkedIn',
        'Revise resume using corporate terminology'
    ];


    const handleDownload = () => {
        const element = document.getElementById("veer-report-pdf");

        const options = {
            // margin order: [top, left, bottom, right]
            margin: [0.2, 0, 0.2, 0],

            filename: "VeerNXT_Report.pdf",
            image: { type: "jpeg", quality: 0.98 },

            html2canvas: {
                scale: 2,
                useCORS: true,
                scrollY: 0,
            },

            jsPDF: {
                unit: "in",
                format: "a4",
                orientation: "portrait",
            },
        };

        html2pdf().from(element).set(options).save();
    };


    return (
        <>
            <AllPageHeader props='Veer NXT Report' />
            <div id="veer-report-pdf" className="veer-nxt-report-wrapper">
                <div className="container bg-white p-0 shadow-lg rounded-3 overflow-hidden">
                    {/* Report Header */}
                    <div className="dm-report-header py-4 px-3 px-md-5">
                        <h1 className="dm-report-title">Veer<span>NXT</span> Report</h1>
                        <p className="fs-5 opacity-90">Career Transition Analysis & Recommendations</p>
                    </div>

                    {/* Report Body */}
                    <div className="p-4 p-md-5">
                        {/* User Information */}
                        <div className="row g-4 mb-5 pb-4 border-bottom">
                            <div className="col-md-3 col-6">
                                <div className="dm-user-info-item">
                                    <div className="dm-user-info-label">Full Name</div>
                                    <div className="fs-5 fw-semibold">Major Rajesh Kumar</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="dm-user-info-item">
                                    <div className="dm-user-info-label">Service Branch</div>
                                    <div className="fs-5 fw-semibold">Indian Army</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="dm-user-info-item">
                                    <div className="dm-user-info-label">Years of Service</div>
                                    <div className="fs-5 fw-semibold">12 Years</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="dm-user-info-item">
                                    <div className="dm-user-info-label">Career Interest</div>
                                    <div className="fs-5 fw-semibold">Corporate Security</div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="dm-report-section mb-5">
                            <h2 className="dm-report-section-title">
                                <i className="fas fa-tools me-3"></i> Transferable Skills
                            </h2>
                            <div className="row row-cols-2 row-cols-md-4 g-3">
                                {skills.map((skill, index) => (
                                    <div className="col" key={index}>
                                        <div className="dm-skills-tag">{skill}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Career Recommendations */}
                        <div className="dm-report-section mb-5">
                            <h2 className="dm-report-section-title">
                                <i className="fas fa-briefcase me-3"></i> Recommended Career Paths
                            </h2>

                            <div className="row g-4">
                                {careerPaths.map((career, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className={`dm-career-path ${career.highlight ? 'highlight' : ''} p-4 h-100`}>
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <h3 className="dm-career-title">{career.title}</h3>
                                                <span className="dm-career-match">{career.match}</span>
                                            </div>
                                            <p className="dm-career-desc mb-3">{career.description}</p>
                                            <div className="dm-career-details text-muted">
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <span><i className="fas fa-rupee-sign"></i> {career.details.salary}</span>
                                                    </div>
                                                    <div className="col-12">
                                                        <span><i className="fas fa-clock"></i> {career.details.type}</span>
                                                    </div>
                                                    <div className="col-12">
                                                        <span><i className="fas fa-map-marker-alt"></i> {career.details.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Steps */}
                        <div className="dm-report-section mb-5">
                            <h2 className="dm-report-section-title">
                                <i className="fas fa-forward me-3"></i> Next Steps
                            </h2>
                            <div className="bg-light p-4 rounded-3 border-start border-4 border-secondary">
                                <p className="fw-semibold text-dark mb-3">30-Day Action Plan:</p>
                                <ul className="text-muted lh-lg ps-3 mb-0">
                                    {nextSteps.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Match Score */}
                        <div className="dm-match-score p-4 p-md-5">
                            <div className="dm-match-num">8.7/10</div>
                            <div className="fs-4 opacity-90">Overall Career Match Score</div>
                        </div>
                    </div>

                    {/* Report Footer */}
                    <div className="dm-report-footer p-4 p-md-5">
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <div className="text-muted">
                                    <div className="mb-1">Report ID: VNXT-2023-<span id="reportId">45872</span></div>
                                    <div>Generated on: <span id="reportDate">15 Dec 2023</span></div>
                                </div>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <button
                                    className="btn btn-primary me-3 mb-2 mb-md-0"

                                    onClick={handleDownload}
                                >
                                    <i className="fas fa-download me-2"></i> Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VeerNXTReport;