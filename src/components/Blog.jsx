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
                <span className="me-2">🚀 New Guide: "Future of Remote Work 2026" released!</span>
                <Link to="#featured" className="text-white text-decoration-underline">Read Report</Link>
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

const BlogHero = () => (
    <section className="hero-section" style={{ height: '55vh', background: 'linear-gradient(rgba(13, 27, 42, 0.9), rgba(13, 27, 42, 0.8)), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") center/cover fixed' }}>
        <div className="hero-content container text-center">
            <div data-aos="fade-up">
                <h1 className="hero-title display-3">The HR Portal Blog</h1>
                <p className="hero-subtitle mx-auto lead text-light opacity-75">
                    Insights, trends, and strategies for modern people ops.
                </p>
            </div>
        </div>
    </section>
);

const FeaturedPost = () => (
    <section id="featured" className="py-5 bg-white" style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
        <div className="container">
            <div className="card border-0 shadow-lg overflow-hidden rounded-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="row g-0">
                    <div className="col-lg-7">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="img-fluid h-100 object-fit-cover" alt="Featured Post" />
                    </div>
                    <div className="col-lg-5 p-5 d-flex flex-column justify-content-center bg-white">
                        <span className="badge bg-accent text-dark w-auto mb-3 align-self-start">Featured Post</span>
                        <h2 className="display-6 fw-bold mb-3">The Ultimate Guide to Hybrid Work Cultures in 2026</h2>
                        <p className="text-muted mb-4">
                            Remote work is here to stay. Discover the secrets to building a thriving, connected workforce regardless of physical location.
                        </p>
                        <div className="d-flex align-items-center mb-4">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Author" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
                            <div>
                                <h6 className="fw-bold mb-0">Sarah Jenkins</h6>
                                <small className="text-muted">Editor in Chief • 5 min read</small>
                            </div>
                        </div>
                        <Link to="#" className="btn btn-outline-primary rounded-pill w-auto align-self-start px-4">Read Article</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const RecentPosts = () => {
    const posts = [
        {
            title: "5 AI Trends Reshaping HR Tech",
            desc: "From predictive analytics to automated recruiting, see what's next for AI in the workplace.",
            cat: "Technology",
            img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            author: "Mike Ross",
            date: "May 15, 2026"
        },
        {
            title: "Retention Strategies that Actually Work",
            desc: "Stop the churn. Learn actionable strategies to keep your best talent engaged and happy.",
            cat: "Strategy",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            author: "Elena Rodriguez",
            date: "May 12, 2026"
        },
        {
            title: "Navigating Global Compliance 101",
            desc: "Expanding internationally? Here's what you need to know about local labor laws.",
            cat: "Legal",
            img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            author: "David Kim",
            date: "May 10, 2026"
        },
        {
            title: "Designing for Diversity & Inclusion",
            desc: "How to build hiring pipelines that support a diverse and inclusive workforce.",
            cat: "Culture",
            img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            author: "Sarah Jenkins",
            date: "May 08, 2026"
        },
        {
            title: "The Death of the Annual Review",
            desc: "Why continuous feedback loops are replacing the dreaded yearly performance appraisal.",
            cat: "Management",
            img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            author: "Mike Ross",
            date: "May 05, 2026"
        },
        {
            title: "Mental Health Awareness in Tech",
            desc: "Creating safe spaces and support systems for engineering teams under pressure.",
            cat: "Wellness",
            img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            author: "Elena Rodriguez",
            date: "May 02, 2026"
        }
    ];

    return (
        <section className="py-5 bg-light">
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-5" data-aos="fade-up">
                    <h2 className="fw-bold m-0">Latest Articles</h2>
                    <div className="dropdown">
                        <button className="btn btn-outline-secondary dropdown-toggle rounded-pill px-4" type="button" data-bs-toggle="dropdown">
                            Filter by Category
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">All</Link></li>
                            <li><Link className="dropdown-item" to="#">Technology</Link></li>
                            <li><Link className="dropdown-item" to="#">Strategy</Link></li>
                            <li><Link className="dropdown-item" to="#">Culture</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="row g-4">
                    {posts.map((post, idx) => (
                        <div className="col-lg-4 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="card h-100 border-0 shadow-sm rounded-4 hover-up transition overflow-hidden">
                                <div className="position-relative">
                                    <img src={post.img} className="card-img-top" alt={post.title} style={{ height: '240px', objectFit: 'cover' }} />
                                    <span className="badge bg-white text-dark position-absolute top-0 start-0 m-3 shadow-sm">{post.cat}</span>
                                </div>
                                <div className="card-body p-4 d-flex flex-column">
                                    <h4 className="fw-bold mb-3"><Link to="#" className="text-dark text-decoration-none stretched-link">{post.title}</Link></h4>
                                    <p className="text-muted small mb-4 flex-grow-1">{post.desc}</p>
                                    <div className="d-flex justify-content-between align-items-center text-muted small">
                                        <span>{post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <button className="btn btn-outline-primary rounded-pill px-5 py-2">Load More Articles</button>
                </div>
            </div>
        </section>
    );
};

const SubscribeCTA = () => (
    <section className="parallax-banner d-flex align-items-center">
        <div className="container text-center" data-aos="zoom-in">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="display-5 fw-bold mb-4">Stay Ahead of the Curve</h2>
                    <p className="lead mb-5 opacity-75">Join 50,000+ HR professionals getting the best insights delivered to their inbox weekly.</p>
                    <form className="d-flex gap-3 justify-content-center">
                        <input type="email" className="form-control rounded-pill px-4" placeholder="Enter your email" style={{ maxWidth: '400px' }} />
                        <button className="btn btn-custom px-5 rounded-pill">Subscribe</button>
                    </form>
                    <p className="text-white-50 small mt-3">No spam, ever. Unsubscribe anytime.</p>
                </div>
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

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    }, []);

    return (
        <>
            <Header />
            <BlogHero />
            <FeaturedPost />
            <RecentPosts />
            <SubscribeCTA />
            <Footer />
        </>
    );
}
