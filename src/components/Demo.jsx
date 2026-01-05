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
                            <Link to="/login" className="btn btn-outline-light rounded-pill px-4 btn-sm">Login</Link>
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

const DemoHero = () => (
    <section className="hero-section" style={{ height: '70vh', background: 'linear-gradient(rgba(13, 27, 42, 0.9), rgba(13, 27, 42, 0.8)), url("https://images.unsplash.com/photo-1553877607-3507d722d733?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") center/cover fixed' }}>
        <div className="hero-content container text-center">
            <div data-aos="fade-up" data-aos-duration="1000">
                <span className="badge bg-accent text-dark fw-bold px-3 py-2 rounded-pill mb-3">Live Walkthrough</span>
                <h1 className="hero-title display-3">See HR Portal in Action</h1>
                <p className="hero-subtitle mx-auto lead text-light opacity-75">
                    Discover how our platform can streamline your workflows. Book a personalized demo with our product experts.
                </p>
            </div>
        </div>
    </section>
);

const DemoForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-5 bg-white position-relative" style={{ marginTop: '-100px', zIndex: 10 }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="auth-card bg-white text-dark shadow-lg border-0" data-aos="zoom-in" data-aos-delay="200" style={{ background: 'white', backdropFilter: 'none', color: '#333' }}>
                            {!submitted ? (
                                <>
                                    <div className="text-center mb-5">
                                        <h2 className="fw-bold">Schedule Your Demo</h2>
                                        <p className="text-muted">Fill out the form below and we'll be in touch shortly.</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold small text-uppercase">First Name</label>
                                                <input type="text" className="form-control rounded-pill px-3" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold small text-uppercase">Last Name</label>
                                                <input type="text" className="form-control rounded-pill px-3" required />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label fw-bold small text-uppercase">Work Email</label>
                                                <input type="email" className="form-control rounded-pill px-3" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold small text-uppercase">Company Size</label>
                                                <select className="form-select rounded-pill px-3">
                                                    <option>1-50 employees</option>
                                                    <option>51-200 employees</option>
                                                    <option>201-500 employees</option>
                                                    <option>500+ employees</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-bold small text-uppercase">Primary Interest</label>
                                                <select className="form-select rounded-pill px-3">
                                                    <option>Payroll Management</option>
                                                    <option>Talent Acquisition</option>
                                                    <option>Employee Engagement</option>
                                                    <option>Performance Management</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-custom w-100 rounded-pill py-3 fw-bold mt-3">Request Demo</button>
                                            </div>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-5">
                                    <div className="display-1 text-success mb-3">
                                        <i className="bi bi-check-circle-fill"></i>
                                    </div>
                                    <h2 className="fw-bold mb-3">Request Received!</h2>
                                    <p className="lead text-muted">Thanks for your interest. Check your email for booking options.</p>
                                    <button className="btn btn-outline-primary rounded-pill mt-3" onClick={() => setSubmitted(false)}>Back to Form</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhatToExpect = () => (
    <section className="py-5 bg-light">
        <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold">What to expect from the demo?</h2>
            </div>
            <div className="row g-4 text-center">
                {[
                    { icon: "🎯", title: "Tailored Walkthrough", desc: "We'll focus on the specific features that solve your unique challenges." },
                    { icon: "💡", title: "Expert Advice", desc: "Get best practices on implementation and change management from our pros." },
                    { icon: "💲", title: "Custom Pricing", desc: "Receive a personalized quote based on your organization's needs." }
                ].map((item, idx) => (
                    <div className="col-md-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
                        <div className="bg-white p-4 h-100 rounded-4 shadow-sm border-bottom border-4 border-primary">
                            <div className="display-4 mb-3">{item.icon}</div>
                            <h4 className="fw-bold mb-3">{item.title}</h4>
                            <p className="text-muted">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const CompaniesParallax = () => (
    <section className="parallax-banner d-flex align-items-center" style={{ backgroundAttachment: 'fixed', minHeight: '400px' }}>
        <div className="container text-center" data-aos="zoom-in">
            <p className="text-uppercase fw-bold ls-2 mb-5 opacity-75">Join thousands of forward-thinking companies</p>
            <div className="row justify-content-center align-items-center opacity-75 grayscale-hover gap-5">
                {['Stripe', 'Airbnb', 'Netflix', 'Shopify', 'Uber'].map((name, i) => (
                    <div key={i} className="col-auto">
                        <h2 className="fw-bold text-white mb-0">{name}</h2>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

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

export default function Demo() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    }, []);

    return (
        <>
            <Header />
            <DemoHero />
            <DemoForm />
            <WhatToExpect />
            <CompaniesParallax />
            <Footer />
        </>
    );
}
