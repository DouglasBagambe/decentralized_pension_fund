import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
    useEffect(() => {
        const lrBoxes = document.querySelectorAll('.box-arrow-flow-img-l-to-r');
        const tbBoxes = document.querySelectorAll('.box-arrow-flow-img-t-to-b');

        lrBoxes.forEach(box => {
            gsap.fromTo(box, {
                opacity: 0,
                scale: 0.5,
                x: -100,
            }, {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: box,
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: "play none none none"
                }
            });
        });

        tbBoxes.forEach(box => {
            gsap.fromTo(box, {
                opacity: 0,
                scale: 0.5,
                y: -100,
            }, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: box,
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: "play none none none"
                }
            });
        });

        // Cleanup function to kill ScrollTriggers on unmount (optional)
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (
        <section className="sec-2-land scroll">
            <div className="container">
                <div className="row align-content-center align-items-center">
                    <h5 className="fw-bold">How it works</h5>
                    <h2 style={{ color: '#0066CC' }} className="fw-bold">Get started in 3 simple steps</h2>
                    <div className="col-12 col-lg-4">
                        <div className="me-lg-5 mt-4 mb-5 bg-light py-4 px-4 rounded-4 three-step-boxes position-relative">
                            <h5 className="fw-bold">1. Create an account</h5>
                            <p>Open a free account as an individual or institution in minutes.</p>
                            <img
                                className="img-fluid d-none d-lg-block box-arrow-flow-img-l-to-r"
                                src="/images/Arrow 1.png"
                                alt="Arrow"
                            />
                            <img
                                className="img-fluid d-block d-lg-none box-arrow-flow-img-t-to-b"
                                src="/images/Arrow 1 (1).png"
                                alt="Arrow"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="mx-lg-4 mt-4 mb-5 bg-light py-4 px-4 rounded-4 three-step-boxes position-relative">
                            <h5 className="fw-bold">2. Choose Package</h5>
                            <p>Create an application package (loans, group contributions, savings)</p>
                            <img
                                className="img-fluid d-none d-lg-block box-arrow-flow-img-l-to-r"
                                src="/images/Arrow 1.png"
                                alt="Arrow"
                            />
                            <img
                                className="img-fluid d-block d-lg-none box-arrow-flow-img-t-to-b"
                                src="/images/Arrow 1 (1).png"
                                alt="Arrow"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="ms-lg-5 mt-4 mb-5 bg-light py-4 px-4 rounded-4 three-step-boxes position-relative">
                            <h5 className="fw-bold">3. Enjoy</h5>
                            <p>Enjoy your selected package</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;