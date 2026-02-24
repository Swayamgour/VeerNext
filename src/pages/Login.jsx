import React, { useState } from "react";
import AllPageHeader from "./components/AllPageHeader";
import { useCheckTokenQuery, useGetAllUsersQuery, useLoginMutation, useRegisterMutation } from "../redux/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Login() {
    const [activeTab, setActiveTab] = useState("login");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [login] = useLoginMutation()
    const [Register] = useRegisterMutation()

    const navigate = useNavigate()

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const [registerForm, setRegisterForm] = useState({
        name: "",
        studentId: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        let body = {
            email: loginForm.email,
            password: loginForm.password
        }

        let data = await login(body)

        // console.log()

        if (data?.data?.token) {
            toast.success('Log in Successfully')
            localStorage.setItem("token", data?.data?.token)
            navigate('/')



        } else {
            setLoading(false)
            console.log(data?.error?.data?.message)
            toast.error(data?.error?.data?.message)
            // setError(data?.error?.data?.message)
        }


    };

    const { data } = useGetAllUsersQuery()

    // console.log(data)

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (registerForm.password !== registerForm.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        setError(null);

        let body = {
            name: registerForm.name,
            studentId: registerForm.studentId,
            email: registerForm.email,
            phone: registerForm.phone,
            password: registerForm.password
        }

        const data = await Register(body)

        console.log(data)


        if (data?.data?.message) {
            // navigate()

            toast.success(data?.message)
            setActiveTab('login')
            setLoading(false)

        } else {
            toast.error(data?.error?.data?.message)
            setLoading(false);
        }


    };

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
                                                onClick={() => {
                                                    setActiveTab("login");
                                                    setError(null);
                                                }}
                                            >
                                                <i className="fas fa-sign-in-alt me-2"></i>Login
                                            </button>
                                        </li>

                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className={`nav-link ${activeTab === "register" ? "active" : ""}`}
                                                onClick={() => {
                                                    setActiveTab("register");
                                                    setError(null);
                                                }}
                                            >
                                                <i className="fas fa-user-plus me-2"></i>Register
                                            </button>
                                        </li>
                                    </ul>

                                    {/* ERROR MESSAGE */}
                                    {/* {error && (
                                        <div className="alert alert-danger mt-3" role="alert">
                                            <i className="fas fa-exclamation-circle me-2"></i>
                                            {error}
                                        </div>
                                    )} */}

                                    {/* TAB CONTENT */}
                                    <div className="tab-content login-tab-content">

                                        {/* =================== LOGIN =================== */}
                                        {activeTab === "login" && (
                                            <div className="tab-pane login-tab-pane show active">
                                                <form className="contact-details-form" onSubmit={handleLoginSubmit}>

                                                    {/* {error} */}
                                                    <div className="mb-3 form-group">
                                                        <label className="form-label">Email Address *</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-control"
                                                            placeholder="student@example.com"
                                                            required
                                                            value={loginForm.email}
                                                            onChange={handleLoginChange}
                                                        />
                                                    </div>

                                                    <div className="mb-3 form-group">
                                                        <label className="form-label">Password *</label>
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            className="form-control"
                                                            placeholder="Enter your password"
                                                            required
                                                            value={loginForm.password}
                                                            onChange={handleLoginChange}
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

                                                    <button
                                                        type="submit"
                                                        className="fill-btn"
                                                        disabled={loading}
                                                    >
                                                        {loading ? (
                                                            <>
                                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                                Logging in...
                                                            </>
                                                        ) : (
                                                            <>
                                                                <i className="fas fa-sign-in-alt me-2"></i>
                                                                Login to Account
                                                            </>
                                                        )}
                                                    </button>
                                                </form>
                                            </div>
                                        )}


                                        {/* =================== REGISTER =================== */}
                                        {activeTab === "register" && (
                                            <div className="tab-pane show active">
                                                <form className="contact-details-form" onSubmit={handleRegisterSubmit}>
                                                    <div className="row">

                                                        <div className="col-md-12 mb-3 form-group">
                                                            <label className="form-label">Full Name *</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="form-control"
                                                                placeholder="John Doe"
                                                                required
                                                                value={registerForm.name}
                                                                onChange={handleRegisterChange}
                                                            />
                                                        </div>

                                                        {/* <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Student ID *</label>
                                                            <input
                                                                type="text"
                                                                name="studentId"
                                                                className="form-control"
                                                                placeholder="STU2023001"
                                                                required
                                                                value={registerForm.studentId}
                                                                onChange={handleRegisterChange}
                                                            />
                                                        </div> */}

                                                        <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Email Address *</label>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                className="form-control"
                                                                placeholder="student@example.com"
                                                                required
                                                                value={registerForm.email}
                                                                onChange={handleRegisterChange}
                                                            />
                                                        </div>

                                                        <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Phone Number</label>
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                className="form-control"
                                                                placeholder="+91 9876543210"
                                                                value={registerForm.phone}
                                                                onChange={handleRegisterChange}
                                                            />
                                                        </div>

                                                        <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Password *</label>
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                className="form-control"
                                                                placeholder="Create a password"
                                                                required
                                                                value={registerForm.password}
                                                                onChange={handleRegisterChange}
                                                            />
                                                        </div>

                                                        <div className="col-md-6 mb-3 form-group">
                                                            <label className="form-label">Confirm Password *</label>
                                                            <input
                                                                type="password"
                                                                name="confirmPassword"
                                                                className="form-control"
                                                                placeholder="Confirm password"
                                                                required
                                                                value={registerForm.confirmPassword}
                                                                onChange={handleRegisterChange}
                                                            />
                                                        </div>

                                                    </div>

                                                    <button
                                                        type="submit"
                                                        className="fill-btn"
                                                        disabled={loading}
                                                    >
                                                        {loading ? (
                                                            <>
                                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                                Creating Account...
                                                            </>
                                                        ) : (
                                                            <>
                                                                <i className="fas fa-user-plus me-2"></i>
                                                                Create Account
                                                            </>
                                                        )}
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