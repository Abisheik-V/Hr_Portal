import React, { useEffect } from 'react';
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
                <Link to="/features" className="text-white text-decoration-underline">Learn More</Link>
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
                        <li className="nav-item"><Link className="nav-link active" to="/features">Features</Link></li>
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

const FeaturesHero = () => (
    <section className="hero-section" style={{ height: '60vh', background: 'linear-gradient(rgba(13, 27, 42, 0.9), rgba(13, 27, 42, 0.8)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") center/cover fixed' }}>
        <div className="hero-content container text-center">
            <div data-aos="fade-up">
                <h1 className="hero-title display-3">Powerful Features</h1>
                <p className="hero-subtitle mx-auto lead text-light opacity-75">
                    Everything you need to manage your workforce, from hire to retire.
                </p>
            </div>
        </div>
    </section>
);

const FeatureHighlights = () => (
    <section className="py-5 bg-white">
        <div className="container py-5">
            {[
                {
                    title: "Smart Payroll Processing",
                    desc: "Run payroll in minutes, not days. Our system automatically calculates taxes, deductions, and benefits for over 100+ countries.",
                    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    points: ["Automated Tax Filing", "Multi-currency Support", "Direct Deposit Integration"]
                },
                {
                    title: "Advanced Performance Management",
                    desc: "Ditch the annual review. Creating a culture of continuous feedback with real-time goals, 360-degree reviews, and recognition tools.",
                    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    reverse: true,
                    points: ["OKR Tracking", "360° Feedback Loops", "Skill Gap Analysis"]
                },
                {
                    title: "Automated Onboarding",
                    desc: "Give new hires a world-class welcome. Automate paperwork, provisioning, and training workflows to get them productive faster.",
                    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    points: ["Digital Signatures", "Asset Provisioning", "Customizable Workflows"]
                }
            ].map((feature, idx) => (
                <div key={idx} className={`row align-items-center mb-5 ${feature.reverse ? 'flex-lg-row-reverse' : ''}`} data-aos={feature.reverse ? "fade-left" : "fade-right"}>
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <img src={feature.img} alt={feature.title} className="img-fluid rounded-4 shadow-lg" />
                    </div>
                    <div className="col-lg-6 px-lg-5">
                        <h2 className="fw-bold mb-3">{feature.title}</h2>
                        <p className="lead text-muted mb-4">{feature.desc}</p>
                        <ul className="list-unstyled">
                            {feature.points.map((p, i) => (
                                <li key={i} className="mb-2 d-flex align-items-center">
                                    <span className="badge bg-accent rounded-circle p-1 me-3"><i className="bi bi-check text-white small"></i></span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const FeatureGrid = () => (
    <section className="py-5 bg-light">
        <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold">And So Much More...</h2>
                <p className="text-muted w-75 mx-auto">A complete ecosystem for your HR needs.</p>
            </div>
            <div className="row g-4">
                {[
                    { icon: "clock", title: "Time & Attendance", desc: "Geofenced clock-ins and automated timesheets." },
                    { icon: "calendar-check", title: "Leave Management", desc: "Self-service time off requests and approval flows." },
                    { icon: "file-earmark-text", title: "Document Vault", desc: "Securely store and share employee contracts and files." },
                    { icon: "graph-up", title: "HR Analytics", desc: "Visual dashboards for retention, diversity, and costs." },
                    { icon: "phone", title: "Mobile App", desc: "Full functionality on iOS and Android for teams on the go." },
                    { icon: "shield-lock", title: "Enterprise Security", desc: "SOC2 Type II compliant with role-based access control." }
                ].map((item, idx) => (
                    <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                        <div className="bg-white p-4 h-100 rounded-3 shadow-sm border hover-up transition">
                            <div className="h2 text-accent mb-3"><i className={`bi bi-${item.icon}`}></i></div>
                            <h4 className="fw-bold">{item.title}</h4>
                            <p className="text-muted small mb-0">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FeaturesCTA = () => (
    <section className="parallax-banner d-flex align-items-center">
        <div className="container text-center" data-aos="zoom-in">
            <h2 className="display-4 fw-bold mb-4">Experience the Power of HR Portal</h2>
            <p className="lead mb-5 opacity-75">Join 10,000+ companies streamlining their HR operations today.</p>
            <button className="btn btn-custom btn-lg px-5 py-3">Start 14-Day Free Trial</button>
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
                        <li><Link to="/features">Features</Link></li>
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

export default function Features() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    }, []);

    return (
        <>
            <Header />
            <FeaturesHero />
            <FeatureHighlights />
            <FeatureGrid />
            <FeaturesCTA />
            <Footer />
        </>
    );
}
