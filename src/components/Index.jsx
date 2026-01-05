import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import '../assets/style/style.css';

// SVG Icons for inline use (Feather Icons style)
const Icons = {
    Users: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    Activity: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    Shield: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    Award: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
    Check: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
                        <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
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

const Hero = () => (
    <section id="home" className="hero-section">
        <div className="hero-content container">
            <div data-aos="fade-up" data-aos-duration="1000">
                <span className="badge bg-primary-dark border border-secondary mb-3 px-3 py-2 rounded-pill">
                    Build for Modern Teams
                </span>
                <h1 className="hero-title">
                    Empower Your Workforce with <br />
                    <span className="text-accent">Intelligent HR Solutions</span>
                </h1>
                <p className="hero-subtitle mx-auto">
                    Streamline operations, boost engagement, and drive growth with our all-in-one platform designed for the future of work.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <Link to="/demo" className="btn btn-custom btn-lg">Start Free Trial</Link>
                    <Link to="/demo" className="btn btn-outline-light btn-lg rounded-pill">Watch Video</Link>
                </div>
            </div>
        </div>
    </section>
);

const Features = () => (
    <section id="features" className="features-section">
        <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
                <h5 className="text-accent fw-bold text-uppercase ls-2">Our Features</h5>
                <h2 className="display-5 fw-bold text-dark">Why Choose HR Portal?</h2>
                <p className="text-muted w-75 mx-auto">Everything you need to manage your talent effectively in one unified system.</p>
            </div>

            <div className="row g-4">
                {[
                    { icon: <Icons.Users />, title: "Employee Management", desc: "Centralize all employee data in a secure, easy-to-access cloud database." },
                    { icon: <Icons.Activity />, title: "Performance Tracking", desc: "Real-time analytics and goal setting to keep your team aligned and productive." },
                    { icon: <Icons.Shield />, title: "Compliance & Security", desc: "Bank-grade security ensures your data is safe and compliant with global regulations." },
                    { icon: <Icons.Award />, title: "Talent Acquisition", desc: "Streamline your hiring process from application to offer letter with AI tools." }
                ].map((feature, idx) => (
                    <div className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                        <div className="feature-card">
                            <div className="icon-box">
                                {feature.icon}
                            </div>
                            <h4 className="fw-bold mb-3">{feature.title}</h4>
                            <p className="text-muted mb-0">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ParallaxBanner = () => (
    <section className="parallax-banner d-flex align-items-center">
        <div className="container" data-aos="zoom-in">
            <h2 className="display-4 fw-bold mb-4">Ready to Transform Your Workplace?</h2>
            <p className="lead mb-5 opacity-75">Join 10,000+ companies delivering exceptional employee experiences.</p>
            <button className="btn btn-custom btn-lg px-5 py-3">Get Started Now</button>
        </div>
    </section>
);

const TrustedBy = () => (
    <div className="py-5 bg-white border-bottom">
        <div className="container">
            <p className="text-center text-muted text-uppercase ls-2 mb-4 fs-7 fw-bold">Trusted by market leaders</p>
            <div className="d-flex justify-content-around flex-wrap align-items-center client-logos gap-4">
                {/* Placeholders for logos */}
                {['Google', 'Microsoft', 'Amazon', 'Spotify', 'Slack'].map((name, i) => (
                    <h3 key={i} className="mb-0 fw-bold text-muted opacity-50">{name}</h3>
                ))}
            </div>
        </div>
    </div>
);

const Process = () => (
    <section id="how-it-works" className="py-5 bg-white">
        <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-up">
                <h5 className="text-accent fw-bold text-uppercase ls-2">How It Works</h5>
                <h2 className="display-5 fw-bold text-dark">Simple Steps to Success</h2>
            </div>

            <div className="row g-4 text-center">
                {[
                    { icon: "1", title: "Create Account", desc: "Sign up in seconds and customize your workspace." },
                    { icon: "2", title: "Invite Team", desc: "Add your employees via email or bulk import." },
                    { icon: "3", title: "Start Managing", desc: "Automate payroll, leave, and performance reviews instantly." }
                ].map((step, idx) => (
                    <div className="col-lg-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
                        <div className="process-step">
                            <div className="process-icon-wrapper">
                                <span className="h2 fw-bold text-accent mb-0">{step.icon}</span>
                                {idx !== 2 && <div className="process-line"></div>}
                            </div>
                            <h4 className="fw-bold mb-3">{step.title}</h4>
                            <p className="text-muted">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section id="pricing" className="py-5 bg-light">
        <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-up">
                <h5 className="text-accent fw-bold text-uppercase ls-2">Pricing Plans</h5>
                <h2 className="display-5 fw-bold text-dark">Choose Your Plan</h2>
            </div>

            <div className="row g-4 align-items-center">
                {[
                    { title: "Starter", price: "$49", features: ["Up to 20 Employees", "Basic Reporting", "Email Support"] },
                    { title: "Growth", price: "$99", features: ["Up to 50 Employees", "Advanced Analytics", "Priority Support", "Payroll Integration"], popular: true },
                    { title: "Enterprise", price: "Custom", features: ["Unlimited Employees", "Dedicated Manager", "SLA Support", "Custom API Access"] }
                ].map((plan, idx) => (
                    <div className="col-lg-4" key={idx} data-aos="flip-left" data-aos-delay={idx * 100}>
                        <div className={`pricing-card text-center ${plan.popular ? 'popular' : ''}`}>
                            {plan.popular && <div className="pricing-badge">BEST VALUE</div>}
                            <h3 className="fw-bold mb-3">{plan.title}</h3>
                            <div className="display-4 fw-bold mb-4 price">{plan.price}</div>
                            <ul className="list-unstyled mb-4 text-start d-inline-block mx-auto">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="mb-2"><span className="text-accent me-2">✔</span> {f}</li>
                                ))}
                            </ul>
                            <button className={`btn w-100 ${plan.popular ? 'btn-light text-primary fw-bold' : 'btn-outline-primary rounded-pill'}`}>
                                Choose Plan
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialParallax = () => (
    <section className="testimonial-parallax d-flex align-items-center">
        <div className="container text-center" data-aos="zoom-in">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt="CEO" className="testimonial-avatar" />
            <blockquote className="display-6 fst-italic mb-4">"HR Portal revolutionized how we manage our remote workforce. The analytics features alone saved us 20 hours a week."</blockquote>
            <cite className="text-white opacity-75 d-block fs-5">- Sarah Johnson, CEO of TechStream</cite>
        </div>
    </section>
);

const Stats = () => (
    <section className="stats-section">
        <div className="container">
            <div className="row text-center">
                {[
                    { num: "99%", label: "Customer Satisfaction" },
                    { num: "24/7", label: "Support Available" },
                    { num: "15M+", label: "Users Worldwide" },
                    { num: "500+", label: "Integrations" }
                ].map((stat, idx) => (
                    <div className="col-6 col-md-3 mb-4 mb-md-0" key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                        <div className="stat-item">
                            <h3>{stat.num}</h3>
                            <p className="mb-0">{stat.label}</p>
                        </div>
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

export default function Index() {
    useEffect(() => {
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
            <Hero />
            <TrustedBy />
            <Features />
            <ParallaxBanner />
            <Process />
            <Pricing />
            <TestimonialParallax />
            <Stats />
            <Footer />
        </>
    );
}
