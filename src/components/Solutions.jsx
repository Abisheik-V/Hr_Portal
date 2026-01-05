import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import '../assets/style/style.css';

// Reuse Icons for consistency
const Icons = {
    Zap: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
    TrendingUp: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
    Globe: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    Cpu: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
};

const Header = () => (
    <>
        {/* Announcement Bar */}
        <div className="announcement-bar py-2 text-center fade-in-down">
            <div className="container">
                <span className="me-2">🚀 New Feature: AI-Powered Analytics is now live!</span>
                <Link to="#features" className="text-white text-decoration-underline">Learn More</Link>
            </div>
        </div>

        {/* Navbar */}
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
                        <li className="nav-item"><Link className="nav-link active" to="/solutions">Solutions</Link></li>
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

const SolutionsHero = () => (
    <section className="hero-section" style={{ height: '70vh' }}>
        <div className="hero-content container">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className="hero-title">
                    Our <span className="text-accent">Solutions</span>
                </h1>
                <p className="hero-subtitle mx-auto">
                    Comprehensive tools designed to tackle every HR challenge.
                </p>
            </div>
        </div>
    </section>
);

const SolutionList = () => (
    <section className="py-5">
        <div className="container py-5">
            {[
                {
                    title: "Recruitment Automation",
                    desc: "Automate your hiring pipeline with AI-driven candidate scoring and automated scheduling.",
                    icon: <Icons.Zap />,
                    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                },
                {
                    title: "Employee Engagement",
                    desc: "Keep your teams connected and motivated with pulse surveys, recognition tools, and feedback loops.",
                    icon: <Icons.TrendingUp />,
                    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    reverse: true
                },
                {
                    title: "Payroll & Benefits",
                    desc: "Global payroll processing in 100+ currencies with automated tax compliance and benefits administration.",
                    icon: <Icons.Globe />,
                    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                },
                {
                    title: "People Analytics",
                    desc: "Turn data into actionable insights. Predict retention risks and optimize workforce planning.",
                    icon: <Icons.Cpu />,
                    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    reverse: true
                }
            ].map((sol, idx) => (
                <div key={idx} className={`row align-items-center mb-5 ${sol.reverse ? 'flex-lg-row-reverse' : ''}`} data-aos={sol.reverse ? "fade-left" : "fade-right"}>
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="position-relative">
                            <img src={sol.img} alt={sol.title} className="img-fluid rounded-3 shadow-lg" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary-dark opacity-25 rounded-3"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 px-lg-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-light text-accent rounded-circle mb-3" style={{ width: '60px', height: '60px' }}>
                            {sol.icon}
                        </div>
                        <h2 className="fw-bold mb-3">{sol.title}</h2>
                        <p className="lead text-muted mb-4">{sol.desc}</p>
                        <ul className="list-unstyled mb-4">
                            <li className="mb-2"><span className="text-accent me-2">✔</span> Increased Efficiency</li>
                            <li className="mb-2"><span className="text-accent me-2">✔</span> Reduced Costs</li>
                            <li className="mb-2"><span className="text-accent me-2">✔</span> Data-Driven Decisions</li>
                        </ul>
                        <button className="btn btn-outline-primary rounded-pill px-4">Learn More</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const SolutionsCTA = () => (
    <section className="parallax-banner d-flex align-items-center">
        <div className="container text-center" data-aos="zoom-in">
            <h2 className="display-4 fw-bold mb-4">Find the Perfect Solution for Your Team</h2>
            <p className="lead mb-5 opacity-75">Talk to our experts to customize a package that fits your needs.</p>
            <Link to="/contact" className="btn btn-custom btn-lg px-5 py-3">Schedule a Consultation</Link>
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
                        {/* Social Placeholders */}
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

export default function Solutions() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on load
        AOS.init({
            once: true,
            offset: 100,
            duration: 800,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <>
            <Header />
            <SolutionsHero />
            <SolutionList />
            <SolutionsCTA />
            <Footer />
        </>
    );
}
