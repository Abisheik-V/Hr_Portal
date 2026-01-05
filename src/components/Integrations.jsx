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
                        <li className="nav-item"><Link className="nav-link" to="/features">Features</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/integrations">Integrations</Link></li>
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

const IntegrationsHero = () => (
    <section className="hero-section" style={{ height: '50vh', background: 'linear-gradient(rgba(13, 27, 42, 0.9), rgba(13, 27, 42, 0.8)), url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") center/cover fixed' }}>
        <div className="hero-content container text-center">
            <div data-aos="fade-up">
                <h1 className="hero-title display-3">Connect Your Tools</h1>
                <p className="hero-subtitle mx-auto lead text-light opacity-75">
                    Seamlessly integrate with the software you already use and love.
                </p>
            </div>
        </div>
    </section>
);

const IntegrationsGrid = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Communication', 'Productivity', 'Finance', 'Recruiting'];

    const tools = [
        { name: "Slack", cat: "Communication", desc: "Receive notifications and approvals directly in your Slack channels.", icon: "💬" },
        { name: "Microsoft Teams", cat: "Communication", desc: "Collaborate on goals and reviews within Teams.", icon: "👥" },
        { name: "Zoom", cat: "Communication", desc: "Schedule interviews and meetings automatically.", icon: "🎥" },
        { name: "Google Workspace", cat: "Productivity", desc: "Sync calendars, emails, and drive files effortlessly.", icon: "📁" },
        { name: "Jira", cat: "Productivity", desc: "Link engineering performance to project deliverables.", icon: "🎫" },
        { name: "QuickBooks", cat: "Finance", desc: "Automate payroll journal entries and expense syncing.", icon: "💰" },
        { name: "Xero", cat: "Finance", desc: "Streamline accounting with direct payroll data feeds.", icon: "🧾" },
        { name: "LinkedIn", cat: "Recruiting", desc: "Import candidate profiles with a single click.", icon: "👔" },
        { name: "Greenhouse", cat: "Recruiting", desc: "Sync hired candidates and offer details instantly.", icon: "🌱" }
    ];

    const filteredTools = filter === 'All' ? tools : tools.filter(t => t.cat === filter);

    return (
        <section className="py-5 bg-white">
            <div className="container py-5">
                {/* Filter Buttons */}
                <div className="d-flex justify-content-center flex-wrap gap-2 mb-5" data-aos="fade-up">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`btn rounded-pill px-4 ${filter === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="row g-4">
                    {filteredTools.map((tool, idx) => (
                        <div className="col-md-6 col-lg-4" key={idx} data-aos="zoom-in" data-aos-delay={idx * 50}>
                            <div className="feature-card h-100 text-center">
                                <div className="display-4 mb-3">{tool.icon}</div>
                                <h4 className="fw-bold mb-2">{tool.name}</h4>
                                <span className="badge bg-light text-dark mb-3">{tool.cat}</span>
                                <p className="text-muted small mb-4">{tool.desc}</p>
                                <button className="btn btn-sm btn-outline-primary rounded-pill">Connect</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DeveloperAPI = () => (
    <section className="py-5 bg-light">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                    <h5 className="text-accent fw-bold text-uppercase ls-2">For Developers</h5>
                    <h2 className="display-4 fw-bold mb-4">Build Custom Integrations with Our API</h2>
                    <p className="lead text-muted mb-4">
                        Need something specific? Our robust REST API and webhooks allow you to build custom workflows and connect to any proprietary systems.
                    </p>
                    <div className="d-flex gap-3">
                        <button className="btn btn-dark px-4 py-2"><i className="bi bi-github me-2"></i> Documentation</button>
                        <button className="btn btn-outline-dark px-4 py-2">Get Key</button>
                    </div>
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
                    <div className="bg-dark p-4 rounded-3 shadow-lg font-monospace text-success small position-relative overflow-hidden">
                        <div className="position-absolute top-0 end-0 p-3 opacity-25 text-white">JSON</div>
                        <p className="mb-0">
                            <span className="text-primary">GET</span> /api/v1/employees/123 <br />
                            {'{'} <br />
                            &nbsp;&nbsp;"id": "123", <br />
                            &nbsp;&nbsp;"name": "Alex Smith", <br />
                            &nbsp;&nbsp;"role": "Product Designer", <br />
                            &nbsp;&nbsp;"status": "Active" <br />
                            {'}'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const IntegrationsCTA = () => (
    <section className="parallax-banner d-flex align-items-center">
        <div className="container text-center" data-aos="zoom-in">
            <h2 className="display-4 fw-bold mb-4">Don't see your favorite tool?</h2>
            <p className="lead mb-5 opacity-75">We add new integrations weekly based on customer requests.</p>
            <Link to="/contact" className="btn btn-custom btn-lg px-5 py-3">Request an Integration</Link>
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

export default function Integrations() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    }, []);

    return (
        <>
            <Header />
            <IntegrationsHero />
            <IntegrationsGrid />
            <DeveloperAPI />
            <IntegrationsCTA />
            <Footer />
        </>
    );
}
