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
                        <li className="nav-item"><Link className="nav-link active" to="/pricing">Pricing</Link></li>
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

const PricingHero = () => (
    <section className="hero-section" style={{ height: '60vh', background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.95), rgba(27, 38, 59, 0.9)), url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") center/cover fixed' }}>
        <div className="hero-content container text-center">
            <div data-aos="fade-up">
                <h1 className="hero-title">Simple, Transparent Pricing</h1>
                <p className="hero-subtitle mx-auto">No hidden fees. Cancel anytime. Choose the plan that fits your growth.</p>
            </div>
        </div>
    </section>
);

const PricingSwitch = ({ isYearly, setIsYearly }) => (
    <div className="text-center py-5 d-flex justify-content-center align-items-center gap-3">
        <span className={`fw-bold ${!isYearly ? 'text-dark' : 'text-muted'}`}>Monthly</span>
        <div className="form-check form-switch fs-4 m-0">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
                style={{ cursor: 'pointer', backgroundColor: isYearly ? 'var(--accent-color)' : '#adb5bd', borderColor: 'transparent' }}
            />
        </div>
        <span className={`fw-bold ${isYearly ? 'text-dark' : 'text-muted'}`}>
            Yearly <span className="badge bg-success rounded-pill ms-1" style={{ fontSize: '0.6em', verticalAlign: 'middle' }}>SAVE 20%</span>
        </span>
    </div>
);

const PricingCards = ({ isYearly }) => {
    const plans = [
        {
            name: "Starter",
            monthly: 49,
            features: ["Up to 20 Employees", "Basic Reporting", "Email Support", "Mobile App Access"],
            btnClass: "btn-outline-primary"
        },
        {
            name: "Growth",
            monthly: 99,
            features: ["Up to 50 Employees", "Advanced Analytics", "Priority Support", "Payroll Integration", "Performance Reviews"],
            popular: true,
            btnClass: "btn-light text-primary"
        },
        {
            name: "Enterprise",
            monthly: 199,
            features: ["Unlimited Employees", "Dedicated Manager", "SLA Support", "Custom API Access", "White Labeling", "On-premise Option"],
            btnClass: "btn-outline-primary"
        }
    ];

    return (
        <section className="pb-5">
            <div className="container">
                <div className="row g-4 align-items-center">
                    {plans.map((plan, idx) => (
                        <div className="col-lg-4" key={idx} data-aos="flip-up" data-aos-delay={idx * 100}>
                            <div className={`pricing-card text-center h-100 d-flex flex-column ${plan.popular ? 'popular' : ''}`}>
                                {plan.popular && <div className="pricing-badge">BEST VALUE</div>}
                                <h3 className="fw-bold mb-3">{plan.name}</h3>
                                <div className="display-4 fw-bold mb-4 price">
                                    ${isYearly ? (plan.monthly * 12 * 0.8).toFixed(0) : plan.monthly}
                                    <span className="fs-6 text-muted fw-normal">/{isYearly ? 'yr' : 'mo'}</span>
                                </div>
                                <ul className="list-unstyled mb-5 text-start d-inline-block mx-auto flex-grow-1">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="mb-3"><span className="text-accent me-2">✔</span> {f}</li>
                                    ))}
                                </ul>
                                <button className={`btn w-100 rounded-pill py-2 fw-bold ${plan.btnClass}`}>
                                    {plan.name === "Enterprise" ? "Contact Sales" : "Choose " + plan.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ComparisonTable = () => (
    <section className="py-5 bg-light">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="fw-bold">Detailed Feature Comparison</h2>
            </div>
            <div className="table-responsive" data-aos="fade-up">
                <table className="table table-hover table-borderless bg-white shadow-sm rounded-3 overflow-hidden text-center align-middle">
                    <thead className="bg-primary-dark text-white">
                        <tr>
                            <th className="py-4 text-start ps-4">Features</th>
                            <th className="py-4" style={{ width: '20%' }}>Starter</th>
                            <th className="py-4" style={{ width: '20%' }}>Growth</th>
                            <th className="py-4" style={{ width: '20%' }}>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: "Employee Database", s: true, g: true, e: true },
                            { name: "Mobile App", s: true, g: true, e: true },
                            { name: "Payroll Integration", s: false, g: true, e: true },
                            { name: "Performance Reviews", s: false, g: true, e: true },
                            { name: "API Access", s: false, g: false, e: true },
                            { name: "Dedicated Support", s: false, g: false, e: true },
                        ].map((row, i) => (
                            <tr key={i} className="border-bottom">
                                <td className="text-start ps-4 py-3 fw-bold text-muted">{row.name}</td>
                                <td className="py-3 text-accent">{row.s ? '●' : <span className="text-muted opacity-25">-</span>}</td>
                                <td className="py-3 text-accent">{row.g ? '●' : <span className="text-muted opacity-25">-</span>}</td>
                                <td className="py-3 text-accent">{row.e ? '●' : <span className="text-muted opacity-25">-</span>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);

const PricingCTA = () => (
    <section className="parallax-banner d-flex align-items-center">
        <div className="container text-center" data-aos="zoom-in">
            <h2 className="display-4 fw-bold mb-4">Still have questions?</h2>
            <p className="lead mb-5 opacity-75">Our sales team is ready to answer any questions you have about our plans.</p>
            <Link to="/contact" className="btn btn-custom btn-lg px-5 py-3">Contact Us</Link>
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
                        <button type="button" className="btn btn-custom px-4">Join</button>
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

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    }, []);

    return (
        <>
            <Header />
            <PricingHero />
            <PricingSwitch isYearly={isYearly} setIsYearly={setIsYearly} />
            <PricingCards isYearly={isYearly} />
            <ComparisonTable />
            <PricingCTA />
            <Footer />
        </>
    );
}
