import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import '../assets/style/style.css';

const Header = () => (
    <>
        <div className="announcement-bar py-2 text-center fade-in-down">
            <div className="container">
                <span className="me-2">🚀 New Feature: AI-Powered Analytics is now live!</span>
                <Link to="#features" className="text-white text-decoration-underline">Learn More</Link>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    HR<span className="text-accent">Portal</span>
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/solutions">Solutions</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item ms-lg-3">
                            <Link to="/login" className="btn btn-outline-light rounded-pill px-4 btn-sm active">Login</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link to="/demo" className="btn btn-custom rounded-pill px-4 btn-sm">Get Demo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
);

const AuthSection = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <section className="auth-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="auth-card" data-aos="zoom-in" data-aos-duration="1000">
                            {/* Toggle Header */}
                            <div className="d-flex justify-content-center gap-4 mb-5">
                                <span
                                    className={`auth-toggle h4 mb-0 ${isLogin ? 'active' : ''}`}
                                    onClick={() => setIsLogin(true)}
                                >
                                    Login
                                </span>
                                <span
                                    className={`auth-toggle h4 mb-0 ${!isLogin ? 'active' : ''}`}
                                    onClick={() => setIsLogin(false)}
                                >
                                    Sign Up
                                </span>
                            </div>

                            {/* Form Content */}
                            <div className="text-center mb-4">
                                <h3 className="fw-bold">{isLogin ? 'Welcome Back!' : 'Start Your Free Trial'}</h3>
                                <p className="opacity-75 small">
                                    {isLogin
                                        ? 'Access your pro dashboard and manage your team.'
                                        : 'No credit card required. 14-day free trial.'}
                                </p>
                            </div>

                            <form>
                                {!isLogin && (
                                    <div className="mb-3" data-aos="fade-up">
                                        <input type="text" className="form-control auth-input" placeholder="Full Name" />
                                    </div>
                                )}
                                <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
                                    <input type="email" className="form-control auth-input" placeholder="Work Email Address" />
                                </div>
                                <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
                                    <input type="password" className="form-control auth-input" placeholder="Password" />
                                </div>
                                {!isLogin && (
                                    <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
                                        <input type="text" className="form-control auth-input" placeholder="Company Name" />
                                    </div>
                                )}

                                {isLogin && (
                                    <div className="d-flex justify-content-between align-items-center mb-4 small">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input bg-transparent border-light" id="remember" />
                                            <label className="form-check-label opacity-75" htmlFor="remember">Remember me</label>
                                        </div>
                                        <Link to="#" className="text-accent text-decoration-none">Forgot Password?</Link>
                                    </div>
                                )}

                                <button type="button" className="btn btn-custom w-100 py-2 mb-4 mt-2">
                                    {isLogin ? 'Log In' : 'Create Account'}
                                </button>

                                <div className="text-center opacity-75 small mb-3">Or continue with</div>

                                <div className="d-flex justify-content-center gap-3 mb-4">
                                    <Link to="#" className="social-btn"><i className="bi bi-google"></i></Link>
                                    <Link to="#" className="social-btn"><i className="bi bi-linkedin"></i></Link>
                                    <Link to="#" className="social-btn"><i className="bi bi-github"></i></Link>
                                </div>
                            </form>

                            <div className="text-center small opacity-75">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <span
                                    className="text-accent fw-bold"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setIsLogin(!isLogin)}
                                >
                                    {isLogin ? 'Sign Up' : 'Log In'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="pro-footer">
        <div className="container">
            <div className="row gy-5">
                <div className="col-lg-4 col-md-6">
                    <Link to="/" className="footer-brand">HR<span className="text-accent">Portal</span></Link>
                    <p className="mb-4 text-white-50">
                        Reimagining human resources for the modern enterprise. We provide the tools you need to build a world-class culture.
                    </p>
                    <div className="d-flex gap-3">
                        {['fb', 'tw', 'in', 'ig'].map(s => (
                            <Link to="#" key={s} className="text-white-50 hover-accent"><i className={`bi bi-${s}`}></i></Link>
                        ))}
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <h5 className="footer-heading">Platform</h5>
                    <ul className="footer-links">
                        <li><Link to="/">Overview</Link></li>
                        <li><Link to="/solutions">Features</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/integrations">Integrations</Link></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <h5 className="footer-heading">Company</h5>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                    <h5 className="footer-heading">Subscribe</h5>
                    <p className="text-white-50 mb-3">Get the latest insights on HR tech and culture.</p>
                    <form className="newsletter-form d-flex gap-2">
                        <input type="email" className="form-control" placeholder="Your email address" />
                        <button className="btn btn-custom px-4">Join</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; {new Date().getFullYear()} HR Portal Inc. All rights reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <Link to="/privacy-policy" className="text-white-50 text-decoration-none me-3">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="text-white-50 text-decoration-none">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default function Login() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    }, []);

    return (
        <>
            <Header />
            <AuthSection />
            <Footer />
        </>
    );
}
