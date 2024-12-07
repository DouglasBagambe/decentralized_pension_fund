import BackToTop from "./Back-to-top";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

import React, { useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);


const Blog = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [location]); 


    // Scroll Reveal 

    useEffect(() => {

        gsap.utils.toArray('.scroll').forEach(box => {
            gsap.fromTo(box,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: box,
                        start: "top 100%",
                        end: "top 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        });

        // Cleanup function to remove cloned slides and GSAP ScrollTriggers
        return () => {

            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    return (
        <>

            <Loader />


            <Header />


            <section className="sec-1-blog">
                <div className="container scroll">
                    <div className="row justify-content-center align-content-center">
                        <div className="text-center text-white">
                            <h2 style={{ color: '#0066CC' }}><span className="fw-bold">Fin</span>CONNE Blog</h2>
                            <p className="text-black">Get behind the scene update and news about us</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-2-blog my-5">
                <div className="container">
                    <div className="scroll">
                        <h2 className="fw-bold">All Updates</h2>
                        <p>Recent update you need to know about our products</p>
                    </div>
                    <div className="row my-4">
                        <div className="col-12 col-md-6 col-lg-4 scroll">
                            <Link to="/BlogSingle" className="text-black text-decoration-none">
                                <div className="my-3">
                                    <img className="zoom-blog-img img-fluid" src="/images/anima 3.png" alt />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 style={{ color: '#0066CC' }}>Product update</h5>
                                        <h5 className="text-secondary">March 22, 2024</h5>
                                    </div>
                                    <h4>Easily get access to loans.</h4>
                                    <small>By <span className="fw-bold">Fin</span>CONNE</small>
                                </div>
                           </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 scroll">
                            <Link to="/BlogSingle" className="text-black text-decoration-none">
                                <div className="my-3">
                                    <img className="zoom-blog-img img-fluid" src="/images/anima 3.png" alt />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 style={{ color: '#0066CC' }}>Product update</h5>
                                        <h5 className="text-secondary">March 22, 2024</h5>
                                    </div>
                                    <h4>Easily get access to loans.</h4>
                                    <small>By <span className="fw-bold">Fin</span>CONNE</small>
                                </div>
                           </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 scroll">
                            <Link to="/BlogSingle" className="text-black text-decoration-none">
                                <div className="my-3">
                                    <img className="zoom-blog-img img-fluid" src="/images/anima 3.png" alt />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 style={{ color: '#0066CC' }}>Product update</h5>
                                        <h5 className="text-secondary">March 22, 2024</h5>
                                    </div>
                                    <h4>Easily get access to loans.</h4>
                                    <small>By <span className="fw-bold">Fin</span>CONNE</small>
                                </div>
                           </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 scroll">
                            <Link to="/BlogSingle" className="text-black text-decoration-none">
                                <div className="my-3">
                                    <img className="zoom-blog-img img-fluid" src="/images/anima 3.png" alt />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 style={{ color: '#0066CC' }}>Product update</h5>
                                        <h5 className="text-secondary">March 22, 2024</h5>
                                    </div>
                                    <h4>Easily get access to loans.</h4>
                                    <small>By <span className="fw-bold">Fin</span>CONNE</small>
                                </div>
                           </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 scroll">
                            <Link to="/BlogSingle" className="text-black text-decoration-none">
                                <div className="my-3">
                                    <img className="zoom-blog-img img-fluid" src="/images/anima 3.png" alt />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 style={{ color: '#0066CC' }}>Product update</h5>
                                        <h5 className="text-secondary">March 22, 2024</h5>
                                    </div>
                                    <h4>Easily get access to loans.</h4>
                                    <small>By <span className="fw-bold">Fin</span>CONNE</small>
                                </div>
                           </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 scroll">
                            <Link to="/BlogSingle" className="text-black text-decoration-none">
                                <div className="my-3">
                                    <img className="zoom-blog-img img-fluid" src="/images/anima 3.png" alt />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 style={{ color: '#0066CC' }}>Product update</h5>
                                        <h5 className="text-secondary">March 22, 2024</h5>
                                    </div>
                                    <h4>Easily get access to loans.</h4>
                                    <small>By <span className="fw-bold">Fin</span>CONNE</small>
                                </div>
                           </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 scroll">
                            <Link to="/BlogSingle" className="text-black text-decoration-none">
                                <div className="my-3">
                                    <img className="zoom-blog-img img-fluid" src="/images/anima 3.png" alt />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 style={{ color: '#0066CC' }}>Product update</h5>
                                        <h5 className="text-secondary">March 22, 2024</h5>
                                    </div>
                                    <h4>Easily get access to loans.</h4>
                                    <small>By <span className="fw-bold">Fin</span>CONNE</small>
                                </div>
                           </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 scroll">
                            <Link to="/BlogSingle" className="text-black text-decoration-none">
                                <div className="my-3">
                                    <img className="zoom-blog-img img-fluid" src="/images/anima 3.png" alt />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 style={{ color: '#0066CC' }}>Product update</h5>
                                        <h5 className="text-secondary">March 22, 2024</h5>
                                    </div>
                                    <h4>Easily get access to loans.</h4>
                                    <small>By <span className="fw-bold">Fin</span>CONNE</small>
                                </div>
                           </Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 scroll">
                            <Link to="/BlogSingle" className="text-black text-decoration-none">
                                <div className="my-3">
                                    <img className="zoom-blog-img img-fluid" src="/images/anima 3.png" alt />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 style={{ color: '#0066CC' }}>Product update</h5>
                                        <h5 className="text-secondary">March 22, 2024</h5>
                                    </div>
                                    <h4>Easily get access to loans.</h4>
                                    <small>By <span className="fw-bold">Fin</span>CONNE</small>
                                </div>
                           </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center my-5 scroll">
                <h5 style={{ cursor: 'pointer', color: '#0066CC' }}>Load more <i className="bi bi-arrow-down text-black" /></h5>
            </div>




            <Footer />

            <BackToTop />

        </>

    );
}

export default Blog;