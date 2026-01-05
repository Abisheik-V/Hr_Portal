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
                <span className="me-2">🚀 We are hiring! Join our team today.</span>
                <Link to="#positions" className="text-white text-decoration-underline">View Roles</Link>
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
                        <li className="nav-item"><Link className="nav-link" to="/integrations">Integrations</Link></li>
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

const CareersHero = () => (
    <section className="hero-section" style={{ height: '60vh', background: 'linear-gradient(rgba(13, 27, 42, 0.8), rgba(13, 27, 42, 0.7)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") center/cover fixed' }}>
        <div className="hero-content container text-center">
            <div data-aos="fade-up">
                <h1 className="hero-title display-3">Build the Future of Work</h1>
                <p className="hero-subtitle mx-auto lead text-light opacity-75">
                    Join a team of dreamers, doers, and innovators. We're hiring for remote roles worldwide.
                </p>
                <Link to="#positions" className="btn btn-custom btn-lg px-4 mt-3">View Openings</Link>
            </div>
        </div>
    </section>
);

const Perks = () => (
    <section className="py-5 bg-white">
        <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-up">
                <h5 className="text-accent fw-bold text-uppercase ls-2">Life at HR Portal</h5>
                <h2 className="display-5 fw-bold text-dark">Why You'll Love It Here</h2>
            </div>
            <div className="row g-4">
                {[
                    { icon: "laptop", title: "Remote First", desc: "Work from anywhere. We believe in output, not hours in a chair." },
                    { icon: "heart-pulse", title: "Comprehensive Health", desc: "Premium medical, dental, and vision coverage for you and your family." },
                    { icon: "piggy-bank", title: "Competitive Comp", desc: "Top-tier salary, equity packages, and 401(k) matching." },
                    { icon: "book", title: "Learning Budget", desc: "$2,000 annual stipend for courses, conferences, and books." },
                    { icon: "emoji-smile", title: "Wellness Program", desc: "Monthly allowance for gym memberships, meditation apps, or massages." },
                    { icon: "tree", title: "Time Off", desc: "Unlimited PTO and mandatory mental health days to recharge." }
                ].map((perk, idx) => (
                    <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                        <div className="p-4 h-100 rounded-3 border-start border-4 border-primary bg-light hover-shadow transition">
                            <div className="h2 text-primary mb-3"><i className={`bi bi-${perk.icon}`}></i></div>
                            <h4 className="fw-bold">{perk.title}</h4>
                            <p className="text-muted small mb-0">{perk.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Positions = () => {
    const jobs = [
        { title: "Senior Full Stack Engineer", dept: "Engineering", loc: "Remote (US)", type: "Full-time" },
        { title: "Product Designer", dept: "Design", loc: "Remote (Europe)", type: "Full-time" },
        { title: "Customer Success Manager", dept: "Sales", loc: "New York, NY", type: "Full-time" },
        { title: "DevOps Engineer", dept: "Engineering", loc: "Remote (Global)", type: "Contract" },
        { title: "Content Marketing Lead", dept: "Marketing", loc: "London, UK", type: "Full-time" }
    ];

    return (
        <section id="positions" className="py-5 bg-light">
            <div className="container py-5">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="display-5 fw-bold">Open Roles</h2>
                    <p className="text-muted">Find your next challenge.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {jobs.map((job, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-3 shadow-sm mb-3 position-relative job-card" data-aos="fade-up" data-aos-delay={idx * 50}>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <h4 className="fw-bold mb-1"><Link to="#" className="text-dark text-decoration-none stretched-link">{job.title}</Link></h4>
                                        <span className="badge bg-light text-muted fw-normal me-2">{job.dept}</span>
                                    </div>
                                    <div className="col-md-4 my-2 my-md-0">
                                        <div className="text-muted small"><i className="bi bi-geo-alt me-1"></i> {job.loc}</div>
                                    </div>
                                    <div className="col-md-2 text-md-end">
                                        <span className="badge bg-primary-dark text-white rounded-pill px-3">{job.type}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const OfficeParallax = () => (
    <section className="parallax-banner d-flex align-items-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}>
        <div className="container text-center" data-aos="zoom-in">
            <h2 className="display-4 fw-bold mb-4">Not finding the right fit?</h2>
            <p className="lead mb-5 opacity-75">We're always looking for talent. Send us your resume and we'll keep you in mind.</p>
            <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">Join Talent Network</button>
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

export default function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    }, []);

    return (
        <>
            <Header />
            <CareersHero />
            <Perks />
            <Positions />
            <OfficeParallax />
            <Footer />
        </>
    );
}
