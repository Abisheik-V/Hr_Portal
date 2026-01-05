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
                <span className="me-2">📞 Need urgent support? Call our 24/7 hotline: +1 (800) 123-4567</span>
                <Link to="#support" className="text-white text-decoration-underline">Visit Help Center</Link>
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

const ContactHero = () => (
    <section className="hero-section" style={{ height: '55vh', background: 'linear-gradient(rgba(13, 27, 42, 0.9), rgba(13, 27, 42, 0.8)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") center/cover fixed' }}>
        <div className="hero-content container text-center">
            <div data-aos="fade-up">
                <h1 className="hero-title display-3">Get in Touch</h1>
                <p className="hero-subtitle mx-auto lead text-light opacity-75">
                    We'd love to hear from you. Our friendly team is always here to chat.
                </p>
            </div>
        </div>
    </section>
);

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-5 bg-white position-relative" style={{ marginTop: '-80px', zIndex: 10 }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow-lg border-0 rounded-4 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                            <div className="row g-0">
                                <div className="col-lg-5 bg-dark text-white p-5 d-flex flex-column justify-content-between">
                                    <div>
                                        <h3 className="fw-bold mb-4">Contact Information</h3>
                                        <p className="mb-4 text-white-50">Fill up the form and our Team will get back to you within 24 hours.</p>

                                        <div className="d-flex align-items-center mb-4">
                                            <div className="btn btn-primary-dark rounded-circle me-3"><i className="bi bi-telephone"></i></div>
                                            <span>+1 (555) 123-4567</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="btn btn-primary-dark rounded-circle me-3"><i className="bi bi-envelope"></i></div>
                                            <span>hello@hrportal.com</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="btn btn-primary-dark rounded-circle me-3"><i className="bi bi-geo-alt"></i></div>
                                            <span>102 Street 2714, New York, NY</span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3 mt-4">
                                        {['twitter', 'linkedin', 'instagram', 'facebook'].map(s => (
                                            <a href="#" key={s} className="btn btn-outline-light rounded-circle btn-sm p-2" style={{ width: '36px', height: '36px' }}><i className={`bi bi-${s}`}></i></a>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-7 p-5 bg-white">
                                    {!submitted ? (
                                        <form onSubmit={handleSubmit}>
                                            <h3 className="fw-bold mb-4 text-dark">Send us a message</h3>
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <label className="form-label text-muted small fw-bold">First Name</label>
                                                    <input type="text" className="form-control rounded-pill px-3" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label text-muted small fw-bold">Last Name</label>
                                                    <input type="text" className="form-control rounded-pill px-3" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label text-muted small fw-bold">Email</label>
                                                    <input type="email" className="form-control rounded-pill px-3" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label text-muted small fw-bold">Phone</label>
                                                    <input type="tel" className="form-control rounded-pill px-3" />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label text-muted small fw-bold">Message</label>
                                                    <textarea className="form-control rounded-4 px-3 py-3" rows="4" required></textarea>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <button className="btn btn-custom rounded-pill px-5 py-2 fw-bold w-100">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
                                            <div className="display-1 text-success mb-3"><i className="bi bi-check-circle-fill"></i></div>
                                            <h3 className="fw-bold text-dark">Message Sent!</h3>
                                            <p className="text-muted">We'll be in touch shortly.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Offices = () => (
    <section className="py-5 bg-light">
        <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="fw-bold">Our Global Offices</h2>
                <p className="text-muted">Come visit us at one of our hubs.</p>
            </div>
            <div className="row g-4 justify-content-center">
                {[
                    { city: "New York", country: "USA", address: "102 Street 2714, NY 10001", img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/bd/6f/17.jpg" },
                    { city: "London", country: "UK", address: "14 Tottenham Court Rd, W1T 1JY", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
                    { city: "Singapore", country: "Singapore", address: "88 Market St, CapitaSpring", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" }
                ].map((office, idx) => (
                    <div className="col-md-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 hover-up transition">
                            <img src={office.img} className="card-img-top" alt={office.city} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body p-4 text-center">
                                <h4 className="fw-bold text-dark mb-1">{office.city}</h4>
                                <span className="badge bg-light text-muted mb-3">{office.country}</span>
                                <p className="text-muted small mb-0">{office.address}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const SupportParallax = () => (
    <section className="parallax-banner d-flex align-items-center" id="support">
        <div className="container text-center" data-aos="zoom-in">
            <h2 className="display-4 fw-bold mb-4">Already a customer?</h2>
            <p className="lead mb-5 opacity-75">Our dedicated support team is here to help you succeed.</p>
            <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-light btn-lg px-4 rounded-pill text-primary fw-bold">Visit Help Center</button>
                <button className="btn btn-outline-light btn-lg px-4 rounded-pill">Submit a Ticket</button>
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

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    }, []);

    return (
        <>
            <Header />
            <ContactHero />
            <ContactForm />
            <Offices />
            <SupportParallax />
            <Footer />
        </>
    );
}
