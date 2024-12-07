import Footer from "./Footer";
import Header from "./Header";

import React, { useEffect, useRef } from 'react';
// import ScrollReveal from 'scrollreveal';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BackToTop from "./Back-to-top";
import Loader from "./Loader";
import HowItWorks from "./HowItWorks";

import { useLocation } from "react-router-dom";



gsap.registerPlugin(ScrollTrigger);


const Home = () => {


    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on location change
    }, [location]);




    const bubbleRef = useRef(null);

    useEffect(() => {
        // Partners Carousel
        const slideTrack = document.querySelector('.slide-track');
        if (slideTrack) {
            const slides = Array.from(slideTrack.children);
            slides.forEach(slide => {
                const clone = slide.cloneNode(true);
                slideTrack.appendChild(clone);
            });
        }

        // Bubble Image Animation
        const bubble = document.querySelector('.bubble');
        if (bubble) {
            bubble.style.setProperty('--randX', Math.random() * 2 - 1);
            bubble.style.setProperty('--randY', Math.random() * 2 - 1);
        }


    }, []);



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

            <section className="sec-1-land">
                <img className="d-none d-lg-block img-fluid sec-1-land-top-frame-circle-img-1 animated-move" src="/images/Frame 56.png" alt="" />
                <img className="d-none d-lg-block img-fluid sec-1-land-top-frame-circle-img-2 animated-move" src="/images/Frame 57.png" alt="" />
                <img className="d-block d-lg-none img-fluid sec-1-land-top-frame-circle-img-3 animated-move" src="/images/Frame 58.png" alt="" />
                <img className="d-block d-lg-none img-fluid sec-1-land-top-frame-circle-img-4 animated-move" src="/images/Frame 57 (1).png" alt="" />

                <div className="container">
                    <div className="row justify-content-center align-items-center scroll" style={{ height: '90vh' }}>
                        <div className="col-12 col-lg-6">
                            <div className="text-center text-lg-start">
                                <h2 className="text-black fw-bold">A one-stop location for <br /> <span style={{ color: '#0066CC' }}>integrated financial services. </span></h2>
                                <p className="fw-semibold">Send and receive money, get access to full loan, saving and other financial services from different financial institutions across Nigeria.</p>
                                <button className="text-white border-0 py-3 px-4 rounded-3 btn-cus-sty">Learn more <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-12 col-lg-5 d-none d-lg-block">
                            <img ref={bubbleRef} className="img-fluid bubble" src="/images/Frame 54.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>



            <HowItWorks />




            {/* <section className="sec-3-land">
                <div className="container">
                    <div className="row my-5">
                        <h5>What we offer</h5>
                        <h3 style={{ color: '#0066CC' }} className="fw-bold">Unique features by <span className="text-black fw-bold">Fin<span className="fw-semibold">CONNE</span></span></h3>
                        <div className="col-12 col-lg-6 scroll">
                            <div className="sec-3-boxes-offer-cuv-sty-top box box-left sec-3-boxes-offer-cuv-sty-top-mobile">
                                <div className="position">
                                    <h2 className="title">Free sign up.</h2>
                                    <h6 className="my-3">Open a free account as an individual or institution in minutes.</h6>
                                    <button className="btn-box-sty-hov-cuv my-4 my-lg-4 py-3 px-4 rounded-4 border-0 text-white">Sign up
                                        now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 scroll">
                            <div className="sec-3-boxes-offer-cuv-sty-top box box-right">
                                <div className="position">
                                    <h2 className="title">Savings &amp; secure payment.</h2>
                                    <h6 className="my-3">Save money with rest of mind and have access to swift and secure payment
                                    </h6>
                                    <button className="btn-box-sty-hov-cuv my-4 my-lg-4 py-3 px-4 rounded-4 border-0 text-white">Sign up
                                        now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 scroll">
                            <div className="sec-3-boxes-offer-cuv-sty-bottom box box-left">
                                <div className="position">
                                    <h2 className="title">Automated group contribution</h2>
                                    <h6 className="my-3">As an individual (Civil Servant, students, etc) you have opportunities to
                                        organize group contributions which will be fully automated with decentralized wallet
                                        solution.</h6>
                                    <button className="btn-box-sty-hov-cuv my-0 py-3 px-4 rounded-4 border-0 text-white">Read
                                        more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 scroll">
                            <div className="sec-3-boxes-offer-cuv-sty-bottom box box-right  sec-3-boxes-offer-cuv-sty-bottom-mobile">
                                <div className="position">
                                    <h2 className="title">Easy access to loans.</h2>
                                    <h6 className="my-3">Get access to quick capital and personal loans from our available financial
                                        institutions with friendly interest rate.</h6>
                                    <button className="btn-box-sty-hov-cuv my-4 my-lg-4 py-3 px-4 rounded-4 border-0 text-white">Get
                                        a loan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* replace */}

            <section className="sec-3-land">
                <div className="container">
                    <div className="row my-5">
                        <h5>What we offer</h5>
                        <h3 style={{ color: '#0066CC' }} className="fw-bold">Unique features by <span className="text-black fw-bold">Fin<span className="fw-semibold">CONNE</span></span></h3>
                        {/* First Box */}
                        <div className="col-12 col-xl-6 scroll">
                            <div className="sec-3-boxes-offer-cuv-sty-top box box-left">
                                <div className="position">
                                    <h2 className="title">Free sign up.</h2>
                                    <h6 className="my-3">Open a free account as an individual or institution in minutes.</h6>
                                    <button className="btn-box-sty-hov-cuv my-4 my-lg-4 py-3 px-4 rounded-4 border-0 text-white">Sign up
                                        now</button>
                                </div>
                            </div>
                        </div>
                        {/* Second Box */}
                        <div className="col-12 col-xl-6 scroll">
                            <div className="sec-3-boxes-offer-cuv-sty-top box box-right">
                                <div className="position">
                                    <h2 className="title">Savings &amp; secure payment.</h2>
                                    <h6 className="my-3">Save money with rest of mind and have access to swift and secure payment
                                    </h6>
                                    <button className="btn-box-sty-hov-cuv my-4 my-lg-4 py-3 px-4 rounded-4 border-0 text-white">Sign up
                                        now</button>
                                </div>
                            </div>
                        </div>
                        {/* Third Box */}
                        <div className="col-12 col-xl-6 scroll">
                            <div className="sec-3-boxes-offer-cuv-sty-bottom box box-left">
                                <div className="position">
                                    <h2 className="title">Automated group contribution</h2>
                                    <h6 className="my-3">As an individual (Civil Servant, students, etc) you have opportunities to
                                        organize group contributions which will be fully automated with decentralized wallet
                                        solution.</h6>
                                    <button className="btn-box-sty-hov-cuv my-0 py-3 px-4 rounded-4 border-0 text-white">Read
                                        more</button>
                                </div>
                            </div>
                        </div>
                        {/* Fourth Box */}
                        <div className="col-12 col-xl-6 scroll">
                            <div className="sec-3-boxes-offer-cuv-sty-bottom box box-right">
                                <div className="position">
                                    <h2 className="title">Easy access to loans.</h2>
                                    <h6 className="my-3">Get access to quick capital and personal loans from our available financial
                                        institutions with friendly interest rate.</h6>
                                    <button className="btn-box-sty-hov-cuv my-4 my-lg-4 py-3 px-4 rounded-4 border-0 text-white">Get
                                        a loan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* replace */}






            {/* About Us */}
            {/* <section className="sec-4-land scroll">
                <div className="container my-4">
                    <div className="row">
                        <h5>About us</h5>
                        <h3 style={{ color: '#0066CC' }} className="fw-bold">Get to know more about <span className="text-black fw-bold">Fin<span className="fw-semibold">CONNE</span></span></h3>
                        <h4 className="my-3">
                            <span className="text-black fw-bold">Fin<span className="fw-semibold">CONNE</span></span> simply means
                            Financial Connection. It’s an automated system for integrated financial services ranging from micro
                            loans, savings, payments, group contributions etc. The platform provides MSME, individuals access to
                            a gamut of loans, saving and other financial services from different financial
                            institutions/governments agencies across Nigeria irrespective of the locations, business or amount
                            needed. This platform will enable organization, government, individuals to stretch beyond boundaries
                            and achieve stellar growth.
                        </h4>
                    </div>
                </div>
            </section>


            <section className="key-diff">
                <div className="pset">
                    <div className="container">
                        <div className="row listar-feature-items">
                            <div className="col-12 col-md-6 col-lg-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed scroll" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
                                <div className="listar-feature-item listar-feature-has-link">
                                    <div className="listar-feature-item-inner">
                                        <div className="listar-feature-right-border" />
                                        <div className="listar-feature-block-content-wrapper">
                                            <div className="listar-feature-icon-wrapper">
                                                <div className="listar-feature-icon-inner" />
                                            </div>
                                            <div className="listar-feature-content-wrapper" style={{ paddingTop: 0 }}>
                                                <div className="listar-feature-item-title listar-feature-counter-added">
                                                    <span className="fw-bold"><span>01</span> Unified Platform </span>
                                                </div>
                                                <div className="listar-feature-item-excerpt">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aliquid sapiente consequatur minima!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 listar-feature-item-wrapper listar-feature-item-wrapper listar-feature-with-image listar-height-changed scroll" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
                                <div className="listar-feature-item listar-feature-has-link">
                                    <div className="listar-feature-item-inner-opp-res">
                                        <div className="listar-feature-right-border" />
                                        <div className="listar-feature-block-content-wrapper">
                                            <div className="listar-feature-icon-wrapper">
                                                <div className="listar-feature-icon-inner" />
                                            </div>
                                            <div className="listar-feature-content-wrapper" style={{ paddingTop: 0 }}>
                                                <div className="listar-feature-item-title listar-feature-counter-added">
                                                    <span className="fw-bold"><span>02</span> Focus On User Experience </span>
                                                </div>
                                                <div className="listar-feature-item-excerpt">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aliquid sapiente consequatur minima!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed scroll  listar-feature-last-mob" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
                                <div className="listar-feature-item listar-feature-has-link">
                                    <div className="listar-feature-item-inner">
                                        <div className="listar-feature-right-border" />
                                        <div className="listar-feature-block-content-wrapper">
                                            <div className="listar-feature-icon-wrapper">
                                                <div className="listar-feature-icon-inner" />
                                            </div>
                                            <div className="listar-feature-content-wrapper" style={{ paddingTop: 0 }}>
                                                <div className="listar-feature-item-title listar-feature-counter-added">
                                                    <span className="fw-bold"><span>03</span> Group Saving Strengths </span>
                                                </div>
                                                <div className="listar-feature-item-excerpt">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aliquid sapiente consequatur minima!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}




            {/* replace */}
            <section className="sec-4-land scroll">
                <div className="container my-0 my-xl-4">
                    <div className="row">
                        <h5>About us</h5>
                        <h3 style={{ color: '#0066CC' }} className="fw-bold">Get to know more about <span className="text-black fw-bold">Fin<span className="fw-semibold">CONNE</span></span></h3>
                        <h4 className="my-0 my-lg-3">
                            <span className="text-black fw-bold">Fin<span className="fw-semibold">CONNE</span></span> simply means
                            Financial Connection. It’s an automated system for integrated financial services ranging from micro
                            loans, savings, payments, group contributions etc. The platform provides MSME, individuals access to
                            a gamut of loans, saving and other financial services from different financial
                            institutions/governments agencies across Nigeria irrespective of the locations, business or amount
                            needed. This platform will enable organization, government, individuals to stretch beyond boundaries
                            and achieve stellar growth.
                        </h4>
                    </div>
                </div>
            </section>
            <section className="key-diff">
                <div className="pset">
                    <div className="container">
                        <div className="row listar-feature-items">
                            <div className="col-12 col-lg-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed scroll" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
                                <div className="listar-feature-item listar-feature-has-link">
                                    <div className="listar-feature-item-inner">
                                        <div className="listar-feature-right-border" />
                                        <div className="listar-feature-block-content-wrapper">
                                            <div className="listar-feature-icon-wrapper">
                                                <div className="listar-feature-icon-inner" />
                                            </div>
                                            <div className="listar-feature-content-wrapper" style={{ paddingTop: 0 }}>
                                                <div className="listar-feature-item-title listar-feature-counter-added">
                                                    <span className="fw-bold"><span>01</span> Unified Platform </span>
                                                </div>
                                                <div className="listar-feature-item-excerpt">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aliquid
                                                    sapiente consequatur minima!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
                            </div>
                            <div className="col-12 col-lg-4 listar-feature-item-wrapper listar-feature-item-wrapper listar-feature-with-image listar-height-changed scroll" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
                                <div className="listar-feature-item listar-feature-has-link">
                                    <div className="listar-feature-item-inner-opp-res">
                                        <div className="listar-feature-right-border" />
                                        <div className="listar-feature-block-content-wrapper">
                                            <div className="listar-feature-icon-wrapper">
                                                <div className="listar-feature-icon-inner" />
                                            </div>
                                            <div className="listar-feature-content-wrapper" style={{ paddingTop: 0 }}>
                                                <div className="listar-feature-item-title listar-feature-counter-added">
                                                    <span className="fw-bold"><span>02</span> Focus On User Experience </span>
                                                </div>
                                                <div className="listar-feature-item-excerpt">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aliquid
                                                    sapiente consequatur minima!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
                            </div>
                            <div className="col-12 col-lg-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed scroll" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
                                <div className="listar-feature-item listar-feature-has-link">
                                    <div className="listar-feature-item-inner">
                                        <div className="listar-feature-right-border" />
                                        <div className="listar-feature-block-content-wrapper">
                                            <div className="listar-feature-icon-wrapper">
                                                <div className="listar-feature-icon-inner" />
                                            </div>
                                            <div className="listar-feature-content-wrapper" style={{ paddingTop: 0 }}>
                                                <div className="listar-feature-item-title listar-feature-counter-added">
                                                    <span className="fw-bold"><span>03</span> Group Saving Strengths </span>
                                                </div>
                                                <div className="listar-feature-item-excerpt">
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aliquid
                                                    sapiente consequatur minima!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* replace */}





            {/* Blogs */}
            <section className="sec-5-land scroll">
                <div className="container my-5">
                    <div className="row">
                        <h5>Blogs</h5>
                        <h3 style={{ color: '#0066CC' }} className="fw-bold">Event & product latest tips.</h3>

                        {/* Testimonials */}
                        <div className="testimonials">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <OwlCarousel
                                            className="owl-theme"
                                            loop
                                            center
                                            items={3}
                                            margin={30}
                                            autoplay
                                            dots
                                            nav
                                            autoplayTimeout={8500}
                                            smartSpeed={450}
                                            navText={[
                                                '<i class="bi bi-chevron-left"></i>',
                                                '<i class="bi bi-chevron-right"></i>'
                                            ]}
                                            responsive={{
                                                0: {
                                                    items: 1
                                                },
                                                768: {
                                                    items: 2
                                                },
                                                1170: {
                                                    items: 3
                                                }
                                            }}
                                        >
                                            {/* Testimonials Items */}
                                            <div className="item">
                                                <div className="shadow-effect">
                                                    <img className="img-responsive" src="/images/anima 3.png" alt="" />
                                                    <div className="item-details">
                                                        <h5 style={{ color: '#0066CC' }}>
                                                            Product Update <span className="fs-6">March 22, 2024</span>
                                                        </h5>
                                                        <p>Easily get access to loans.</p>
                                                        <p>By <span>Fin</span>CONNE</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="shadow-effect">
                                                    <img className="img-responsive" src="/images/anima 3.png" alt="" />
                                                    <div className="item-details">
                                                        <h5 style={{ color: '#0066CC' }}>
                                                            Product Update <span>March 22, 2024</span>
                                                        </h5>
                                                        <p>Easily get access to loans.</p>
                                                        <p>By <span>Fin</span>CONNE</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="shadow-effect">
                                                    <img className="img-responsive" src="/images/anima 3.png" alt="" />
                                                    <div className="item-details">
                                                        <h5 style={{ color: '#0066CC' }}>
                                                            Product Update <span>March 22, 2024</span>
                                                        </h5>
                                                        <p>Easily get access to loans.</p>
                                                        <p>By <span>Fin</span>CONNE</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="shadow-effect">
                                                    <img className="img-responsive" src="/images/anima 3.png" alt="" />
                                                    <div className="item-details">
                                                        <h5 style={{ color: '#0066CC' }}>
                                                            Product Update <span>March 22, 2024</span>
                                                        </h5>
                                                        <p>Easily get access to loans.</p>
                                                        <p>By <span>Fin</span>CONNE</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="shadow-effect">
                                                    <img className="img-responsive" src="/images/anima 3.png" alt="" />
                                                    <div className="item-details">
                                                        <h5 style={{ color: '#0066CC' }}>
                                                            Product Update <span>March 22, 2024</span>
                                                        </h5>
                                                        <p>Easily get access to loans.</p>
                                                        <p>By <span>Fin</span>CONNE</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="shadow-effect">
                                                    <img className="img-responsive" src="/images/anima 3.png" alt="" />
                                                    <div className="item-details">
                                                        <h5 style={{ color: '#0066CC' }}>
                                                            Product Update <span>March 22, 2024</span>
                                                        </h5>
                                                        <p>Easily get access to loans.</p>
                                                        <p>By <span>Fin</span>CONNE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/* Contact Us */}
            <section className="sec-6-land scroll">
                <div className="container">
                    <div className="row">
                        <h5>Contact</h5>
                        <h3 style={{ color: '#0066CC' }} className="fw-bold">React out to us.</h3>
                        <div className="col-12">
                            <input className="w-100 border border-2 border-secondary-subtle px-3 py-2 rounded-3 my-2" type="text" name id placeholder="Name" />
                            <input className="w-100 border border-2 border-secondary-subtle px-3 py-2 rounded-3 my-2" type="email" name id placeholder="Email" />
                            <textarea name id rows={6} className="w-100 border border-2 border-secondary-subtle px-3 py-3 rounded-3 my-2" placeholder="Message" defaultValue={""} />
                            <button className="w-100 border-0 p-3 text-white rounded-3 my-2 btn-cus-sty">Submit</button>
                        </div>
                    </div>
                </div>
            </section>



            {/* Our Partners */}
            <section className="sec-7-land scroll">
                <div className="container my-5">
                    <div className="row">
                        <h1 className="fw-bold text-black">Our Partners</h1>
                        <div className="slider">
                            <div className="slide-track">
                                <div className="slide">
                                    <img className="img-fluid h-100" src="/images/flutterwave_logo.svg.png" alt="Image 1" />
                                </div>
                                <div className="slide">
                                    <img className="img-fluid h-100" src="/images/Frame 512403.png" alt="Image 2" />
                                </div>
                                <div className="slide">
                                    <img className="img-fluid h-100" src="/images/Frame 512404.png" alt="Image 3" />
                                </div>
                                <div className="slide">
                                    <img className="img-fluid h-100" src="/images/microsoft_azure_portal_logo.svg.png" alt="Image 4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* <button style={{ padding: '11px 12px !important' }} onclick="topFunction()" id="backToTopBtn" title="Go to top"><i className="bi bi-chevron-up" /></button> */}

            <BackToTop />
        </>

    );
}

export default Home;