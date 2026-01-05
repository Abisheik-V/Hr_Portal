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
                        <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
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

const AboutHero = () => (
    <section className="hero-section" style={{ height: '70vh', background: 'linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.7)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") center/cover fixed' }}>
        <div className="hero-content container text-center">
            <div data-aos="zoom-in" data-aos-duration="1200">
                <span className="text-accent text-uppercase fw-bold ls-2 mb-3 d-block">Our Mission</span>
                <h1 className="hero-title display-3">Humanize the Workplace</h1>
                <p className="hero-subtitle mx-auto lead text-light opacity-75">
                    We're on a mission to empower organizations to build happier, more productive teams through technology that puts people first.
                </p>
            </div>
        </div>
    </section>
);

const OurStory = () => (
    <section className="py-5 bg-white">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Office collaboration" className="img-fluid rounded-4 shadow-lg" />
                    <div className="bg-primary-dark text-white p-4 rounded-3 position-absolute d-none d-lg-block shadow-lg" style={{ bottom: '-30px', right: '30px', maxWidth: '300px' }} data-aos="fade-up" data-aos-delay="200">
                        <p className="mb-0 fw-light">"We founded HR Portal because we believe software should serve employees, not just track them."</p>
                    </div>
                </div>
                <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
                    <h5 className="text-accent fw-bold text-uppercase ls-2">Our Story</h5>
                    <h2 className="display-5 fw-bold text-dark mb-4">From Chaos to Culture</h2>
                    <p className="text-muted mb-4 lead">
                        Started in a small garage in 2015, HR Portal was born from frustration. Our founders struggled with clunky, outdated legacy systems that treated people like rows in a spreadsheet.
                    </p>
                    <p className="text-muted mb-4">
                        Today, we serve over 10,000 forward-thinking companies. We've grown from a team of 3 to a global workforce of 250+, but our core belief remains unchanged: <strong>Great businesses are built by happy people.</strong>
                    </p>
                    <div className="d-flex gap-4 border-top pt-4">
                        <div>
                            <h3 className="fw-bold text-primary mb-0">8+</h3>
                            <small className="text-muted">Years of Innovation</small>
                        </div>
                        <div>
                            <h3 className="fw-bold text-primary mb-0">98%</h3>
                            <small className="text-muted">Client Retention</small>
                        </div>
                        <div>
                            <h3 className="fw-bold text-primary mb-0">50M+</h3>
                            <small className="text-muted">Employees Managed</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Values = () => (
    <section className="py-5 bg-light">
        <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold">Our Core Values</h2>
                <p className="text-muted w-75 mx-auto">The principles that guide every decision we make.</p>
            </div>
            <div className="row g-4">
                {[
                    { title: "Transparency", icon: "🔍", desc: "We believe in open communication and honesty in all our interactions." },
                    { title: "Empathy", icon: "❤️", desc: "We design with empathy, understanding that behind every data point is a human being." },
                    { title: "Innovation", icon: "💡", desc: "We constantly challenge the status quo to solve complex problems simply." },
                    { title: "Customer Obsession", icon: "🤝", desc: "Your success is our obsession. We exist to help you thrive." }
                ].map((val, idx) => (
                    <div className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                        <div className="bg-white p-4 h-100 rounded-3 shadow-sm border text-center hover-up transition">
                            <div className="display-4 mb-3">{val.icon}</div>
                            <h4 className="fw-bold">{val.title}</h4>
                            <p className="text-muted small mb-0">{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Team = () => (
    <section className="py-5 bg-white">
        <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-up">
                <h5 className="text-accent fw-bold text-uppercase ls-2">Leadership</h5>
                <h2 className="display-5 fw-bold">Meet the Minds</h2>
            </div>
            <div className="row g-4 justify-content-center">
                {[
                    { name: "Sarah Johnson", role: "CEO & Co-Founder", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                    { name: "Michael Chen", role: "CTO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                    { name: "Elena Rodriguez", role: "Head of Product", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                    { name: "David Kim", role: "VP of Sales", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
                ].map((member, idx) => (
                    <div className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                        <div className="team-card text-center">
                            <div className="mb-4 position-relative d-inline-block">
                                <img src={member.img} alt={member.name} className="rounded-circle shadow" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                                <div className="position-absolute bottom-0 end-0 bg-accent text-white rounded-circle p-2" style={{ width: '40px', height: '40px', lineHeight: '24px' }}>in</div>
                            </div>
                            <h4 className="fw-bold mb-1">{member.name}</h4>
                            <p className="text-muted text-uppercase small ls-1">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const AboutCTA = () => (
    <section className="parallax-banner d-flex align-items-center">
        <div className="container text-center" data-aos="zoom-in">
            <h2 className="display-4 fw-bold mb-4">Join Us on Our Journey</h2>
            <p className="lead mb-5 opacity-75">Ready to transform your company culture? Let's build something great together.</p>
            <div className="d-flex justify-content-center gap-3">
                <Link to="/careers" className="btn btn-custom btn-lg px-5 py-3">View Careers</Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">Contact Press</Link>
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
                        <li><Link to="#">Overview</Link></li>
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

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    }, []);

    return (
        <>
            <Header />
            <AboutHero />
            <OurStory />
            <Values />
            <Team />
            <AboutCTA />
            <Footer />
        </>
    );
}
