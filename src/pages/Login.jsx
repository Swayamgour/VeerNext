import React, { useState } from "react";
import AllPageHeader from "./components/AllPageHeader";

function Login() {
    const [activeTab, setActiveTab] = useState("login");

    return (
        <>
            <AllPageHeader props="Student Portal Login" />

            <section
                className="contact-form-area pt-60 pb-60 mt-80 mb-80 contact-form-style parallax-bg fix"
                style={{ backgroundImage: "var(--thm-gradient4)" }}
            >
                <div className="container">
                    <div className="contact-form-inner p-relative">
                        <div className="row align-items-center g-4">

                            {/* LEFT CONTENT SIDE */}
                            <div className="col-xl-7 col-lg-5">
                                <div className="contact-content pt-50 pb-50">
                                    <div className="bd-section-title-wrapper">
                                        <div className="bd-section-subtitle">
                                            Student Portal <i className="fas fa-graduation-cap ms-2"></i>
                                        </div>

                                        <h3 className="bd-section-title fs-2 mb-40">
                                            Access Your Educational Resources
                                        </h3>
                                    </div>

                                    <p>
                                        Welcome to the Student Portal where you can access all your educational
                                        resources, course materials, grades, and important announcements.
                                        Whether you're a new student or returning, this portal gives you
                                        everything needed for your academic journey.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT FORM SIDE */}
                            <div className="col-xl-5 col-lg-7">
                                <div className="login-tab-sec">

                                    {/* TAB NAVIGATION */}
                                    <ul className="nav nav-tabs login-nav-tabs nav-fill w-100">
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${activeTab === "login" ? "active" : ""}`}
                                                onClick={() => setActiveTab("login")}
                                            >
                                                <i className="fas fa-sign-in-alt me-2"></i>Login
                                            </button>
                                        </li>

                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${activeTab === "register" ? "active" : ""}`}
                                                onClick={() => setActiveTab("register")}
                                            >
                                                <i className="fas fa-user-plus me-2"></i>Register
                                            </button>
                                        </li>
                                    </ul>

                                    {/* TAB CONTENT */}
                                    <div className="tab-content login-tab-content">

                                        {/* =================== LOGIN =================== */}
                                        {activeTab === "login" && (
                                            <div className="tab-pane login-tab-pane show active">
                                                <form className="contact-details-form">
                                                    <div className="mb-3 form-group">
                                                        <label className="form-label">Email Address *</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="student@example.com"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="mb-3 form-group">
                                                        <label className="form-label">Password *</label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="Enter your password"
                                                            required
                                                        />
                                                    </div>


                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="rememberMe"
                                                            />
                                                            <label className="form-check-label" htmlFor="rememberMe">
                                                                Remember me
                                                            </label>
                                                        </div>

                                                        <a href="#" className="login-forget-link">
                                                            Forgot password?
                                                        </a>
                                                    </div>

                                                    <button type="submit" className="fill-btn">
                                                        <i className="fas fa-sign-in-alt me-2"></i> Login to Account
                                                    </button>
                                                </form>
                                            </div>
                                        )}


                                        {/* =================== REGISTER =================== */}
                                        {activeTab === "register" && (
                                            <div className="tab-pane show active">
                                                <form className="contact-details-form">
                                                    <div className="row">

                                                        <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Full Name *</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="John Doe"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Student ID *</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="STU2023001"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Email Address *</label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="student@example.com"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Phone Number</label>
                                                            <input
                                                                type="tel"
                                                                className="form-control"
                                                                placeholder="+91 9876543210"
                                                            />
                                                        </div>

                                                        <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Password *</label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Create a password"
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Confirm Password *</label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Confirm password"
                                                                required
                                                            />
                                                        </div>

                                                    </div>

                                                    <button type="submit" className="fill-btn">
                                                        <i className="fas fa-user-plus me-2"></i>
                                                        Create Account
                                                    </button>

                                                    <div className="text-center mt-3">
                                                        <small className="text-muted">
                                                            By registering, you confirm you are a student.
                                                        </small>
                                                    </div>
                                                </form>
                                            </div>
                                        )}


                                    </div>
                                </div>
                            </div>
                            {/* END RIGHT SIDE */}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
