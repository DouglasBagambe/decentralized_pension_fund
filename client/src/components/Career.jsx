import BackToTop from "./Back-to-top";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {


    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on location change
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
                        end: "top 0%"                    
                    }
                }
            );
        });

        



        // Cleanup function to remove cloned slides and GSAP ScrollTriggers
        return () => {

            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const [activeCategory, setActiveCategory] = useState('hr-admin');

    const showCategory = (category) => {
        // Hide all career categories
        document.querySelectorAll('.career-category').forEach((element) => {
            element.style.display = 'none';
            element.style.opacity = '0';
            element.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                element.style.display = 'none';
            }, 100);
        });

        setTimeout(() => {
            // Show selected category
            const selectedCategory = document.getElementById(category);
            if (selectedCategory) {
                selectedCategory.style.transition = 'opacity 0.7s ease';
                selectedCategory.style.opacity = '1';
                selectedCategory.style.display = 'block';
            }
        }, 100);

        // Update active link color
        document.querySelectorAll('.active-box-links-color h6').forEach((link) => {
            if (link.id === category + '-link') {
                link.style.color = '#0066CC';
            } else {
                link.style.color = '';
            }
        });

        // Set active category state
        setActiveCategory(category);
    };


    return (
        <>

            <Loader />

            <Header />


            <div>
                <section className="sec-1-career">
                    <div className="container">
                        <div className="row justify-content-center align-content-center scroll">
                            <div className="text-center text-white">
                                <h2>JOIN US</h2>
                                <p>Come join a team that's redefining the financial <br /> experience for millions of people in
                                    emerging markets.</p>
                                <button className="px-5 py-3 rounded-4 text-white border-0 btn-cus-sty">Join the
                                    team</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec-2-career my-5">
                    <div className="container">
                        <div className="row scroll">
                            <h5>BENEFITS</h5>
                            <div className="col-12 col-lg-4">
                                <h2 className="fw-bold">Why you Should Join Our Awesome Team</h2>
                                <p>we want to feel like home when you are working at <span className="fw-bold">Fin</span>CONNE &amp; for
                                    that we have curated a great set of benefits for you.</p>
                            </div>



                            <div className="col-12 col-lg-8">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <img className="img-fluid" src="/images/Frame 512309.png" alt />
                                        <h5 className="fw-bold my-2">Team work</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry.</p>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <img className="img-fluid" src="/images/Frame 512310.png" alt />
                                        <h5 className="fw-bold my-2">Secured Future</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry.</p>
                                    </div>
                                    <div className="col-12 col-lg-6 mt-4">
                                        <img className="img-fluid" src="/images/Frame 512307.png" alt />
                                        <h5 className="fw-bold my-2">Learning Opportunity</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry.</p>
                                    </div>
                                    <div className="col-12 col-lg-6 mt-4">
                                        <img className="img-fluid" src="/images/Frame 512308.png" alt />
                                        <h5 className="fw-bold my-2">Upgrate Skills</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 scroll">
                            <div className="text-center">
                                <h5>COME JOIN US</h5>
                                <h2 className="fw-bold">Career Openings</h2>
                                <p>We’re always looking for creative, talented self-starters to join the <br /><span className="fw-bold">Fin</span>CONNE family. Check out our open roles below and fill out an
                                    application.</p>
                            </div>



                            <div className="row d-flex d-lg-none">
                                <div className="scroll-wrapper">
                                    <div style={{ cursor: 'pointer' }} className={`item ${activeCategory === 'hr-admin' ? 'active-box-links-color' : ''}`} onClick={() => showCategory('hr-admin')}>
                                        <h6 id="hr-admin-link" style={{ color: activeCategory === 'hr-admin' ? '#0066CC' : '' }} className="my-4">HR & ADMIN</h6>
                                    </div>
                                    <div style={{ cursor: 'pointer' }} className={`item ${activeCategory === 'engineer' ? 'active-box-links-color' : ''}`} onClick={() => showCategory('engineer')}>
                                        <h6 id="engineer-link" className="my-4">ENGINEER (5)</h6>
                                    </div>
                                    <div style={{ cursor: 'pointer' }} className={`item ${activeCategory === 'support' ? 'active-box-links-color' : ''}`} onClick={() => showCategory('support')}>
                                        <h6 id="support-link" className="my-4">SUPPORT</h6>
                                    </div>
                                    <div style={{ cursor: 'pointer' }} className={`item ${activeCategory === 'design' ? 'active-box-links-color' : ''}`} onClick={() => showCategory('design')}>
                                        <h6 id="design-link" className="my-4">DESIGN</h6>
                                    </div>
                                    <div style={{ cursor: 'pointer' }} className={`item ${activeCategory === 'digital-marketing' ? 'active-box-links-color' : ''}`} onClick={() => showCategory('digital-marketing')}>
                                        <h6 id="digital-marketing-link" className="my-4">DIGITAL MARKETING</h6>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop View */}
                            <div className="col-12 col-lg-4 mt-4 d-none d-lg-block">
                                <div className="text-start">
                                    <div style={{ cursor: 'pointer' }} className={`active-box-links-color ${activeCategory === 'hr-admin' ? 'active' : ''}`} onClick={() => showCategory('hr-admin')}>
                                        <h6 id="hr-admin-link" style={{ color: activeCategory === 'hr-admin' ? '#0066CC' : '' }} className="my-4">HR & ADMIN</h6>
                                    </div>
                                    <div style={{ cursor: 'pointer' }} className={`active-box-links-color ${activeCategory === 'engineer' ? 'active' : ''}`} onClick={() => showCategory('engineer')}>
                                        <h6 id="engineer-link" className="my-4">ENGINEER (5)</h6>
                                    </div>
                                    <div style={{ cursor: 'pointer' }} className={`active-box-links-color ${activeCategory === 'support' ? 'active' : ''}`} onClick={() => showCategory('support')}>
                                        <h6 id="support-link" className="my-4">SUPPORT</h6>
                                    </div>
                                    <div style={{ cursor: 'pointer' }} className={`active-box-links-color ${activeCategory === 'design' ? 'active' : ''}`} onClick={() => showCategory('design')}>
                                        <h6 id="design-link" className="my-4">DESIGN</h6>
                                    </div>
                                    <div style={{ cursor: 'pointer' }} className={`active-box-links-color ${activeCategory === 'digital-marketing' ? 'active' : ''}`} onClick={() => showCategory('digital-marketing')}>
                                        <h6 id="digital-marketing-link" className="my-4">DIGITAL MARKETING</h6>
                                    </div>
                                </div>
                            </div>










                            <div className="col-12 col-lg-8 mt-4 animate__animated animate__fadeIn">
                                {/* HR & ADMIN Category */}
                                <div id="hr-admin" className="career-category animate__animated animate__fadeIn animate__delay-0.3s">
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">HR Manager</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">3 Years</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2023-12-31</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">HR Manager</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">3 Years</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2023-12-31</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">HR Manager</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">3 Years</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2023-12-31</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* ENGINEER Category */}
                                <div id="engineer" className="career-category animate__animated animate__fadeIn animate__delay-0.3s" style={{ display: 'none' }}>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Wordpress Developer</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">2 Years</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2021-05-08</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Wordpress Developer</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">2 Years</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2021-05-08</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Wordpress Developer</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">2 Years</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2021-05-08</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* SUPPORT Category */}
                                <div id="support" className="career-category animate__animated animate__fadeIn animate__delay-0.3s" style={{ display: 'none' }}>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Customer Support Specialist</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">1 Year</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2024-01-15</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Customer Support Specialist</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">1 Year</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2024-01-15</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Customer Support Specialist</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">1 Year</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2024-01-15</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* DESIGN Category */}
                                <div id="design" className="career-category animate__animated animate__fadeIn animate__delay-0.3s" style={{ display: 'none' }}>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Graphic Designer</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">1 Year</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2024-02-01</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Graphic Designer</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">1 Year</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2024-02-01</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Graphic Designer</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">1 Year</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2024-02-01</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* DIGITAL MARKETING Category */}
                                <div id="digital-marketing" className="career-category animate__animated animate__fadeIn animate__delay-0.3s" style={{ display: 'none' }}>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Digital Marketing Specialist</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">2 Years</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2024-03-01</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Digital Marketing Specialist</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">2 Years</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2024-03-01</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/Career-Single" className="text-black text-decoration-none">
                                        <div className="clk-shade-box-sty py-3 mb-4 row">
                                            <div className="col-12 col-lg-6">
                                                <h4 className="mt-3 pt-1 px-0 px-lg-3 fw-bold">Digital Marketing Specialist</h4>
                                            </div>
                                            <div className="col-4 col-lg-2">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Experience</small>
                                                <h4 className="mt-2 fw-bold">2 Years</h4>
                                            </div>
                                            <div className="col-6 col-lg-3">
                                                <small className="text-body-tertiary fs-6 fw-semibold">Deadline</small>
                                                <h4 className="mt-2 fw-bold">2024-03-01</h4>
                                            </div>
                                            <div className="col-2 col-lg-1">
                                                <div className="px-4 float-end mt-0 mt-lg-4">
                                                    <i className="bi bi-arrow-right fs-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="float-end mb-4">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item fw-semibold"><Link className="page-link" href="#">Previous</Link></li>
                                    <li className="page-item fw-semibold"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item fw-semibold"><Link className="page-link" href="#">2</Link></li>
                                    <li className="page-item fw-semibold"><Link className="page-link" href="#">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>




            <Footer />

            <BackToTop />


        </>


    );
}

export default Career;