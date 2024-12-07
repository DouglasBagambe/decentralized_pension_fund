import BackToTop from "./Back-to-top";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);



const CareerSingle = () => {


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



            <section className="sec-1-s-career">
                <div className="container scroll">
                    <div className="row justify-content-center align-items-center">
                        <div className="text-center text-white ">
                            <h1 className="fw-bold">WORDPRESS DEVELOPER</h1>
                            <p>Job Type: Full Time | No. of Vacancies:03</p>
                            <button className="rounded-4 px-5 py-3 border-0 text-white btn-cus-sty">Apply
                                Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-2-s-career">
                <div className="container">
                    <div className="row py-5 my-5">
                        <div className="col-12 col-lg-8">
                            <div className="scroll">
                                <h2>WORDPRESS DEVELOPER</h2>
                                <h4 className="mt-4">Who Are We Looking For</h4>
                                <ul className="ps-4">
                                    <li className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li className="mt-2">Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className="mt-2">Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.
                                    </li>
                                    <li className="mt-2">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                                    <li className="mt-2">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                    <li className="mt-2">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                    <li className="mt-2">Vestibulum porta libero nec aliquet blandit.</li>
                                    <li className="mt-2">Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                                    <li className="mt-2">Cras ut erat eu ante suscipit rutrum.</li>
                                </ul>
                            </div>
                            <div className="mt-5 scroll">
                                <h4 className="mt-4">What You Will Be Doing</h4>
                                <ul className="ps-4">
                                    <li className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li className="mt-2">Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className="mt-2">Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.
                                    </li>
                                    <li className="mt-2">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                                    <li className="mt-2">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                    <li className="mt-2">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                    <li className="mt-2">Vestibulum porta libero nec aliquet blandit.</li>
                                    <li className="mt-2">Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                                    <li className="mt-2">Cras ut erat eu ante suscipit rutrum.</li>
                                </ul>
                            </div>
                            <div className="mt-5 scroll">
                                <h4 className="mt-4">Bonus Points for Familiarity withg</h4>
                                <ul className="ps-4">
                                    <li className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li className="mt-2">Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className="mt-2">Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.
                                    </li>
                                    <li className="mt-2">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                                    <li className="mt-2">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                    <li className="mt-2">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                    <li className="mt-2">Vestibulum porta libero nec aliquet blandit.</li>
                                    <li className="mt-2">Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                                    <li className="mt-2">Cras ut erat eu ante suscipit rutrum.</li>
                                </ul>
                            </div>
                            <div className="mt-5 scroll">
                                <h4 className="mt-4">Educational Requirement</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>
                            </div>
                            <div className="mt-5 scroll">
                                <h4 className="mt-4">Salary</h4>
                                <ul className="ps-4">
                                    <li className="mt-2">Salary:  18,000 to 35,000 BDT (Depends on Skill and Experience)</li>
                                    <li className="mt-2">Salary Review: Yearly</li>
                                </ul>
                            </div>
                            <div className="mt-5 scroll">
                                <h4 className="mt-4">Working Hours</h4>
                                <ul className="ps-4">
                                    <li className="mt-2">8 AM – 5 PM</li>
                                </ul>
                            </div>
                            <div className="mt-5 scroll">
                                <h4 className="mt-4">Working Days</h4>
                                <ul className="ps-4">
                                    <li className="mt-2">Weekly: 5 days.</li>
                                    <li className="mt-2">Weekend: Friday.Saturday</li>
                                </ul>
                            </div>
                            <div className="mt-5 scroll">
                                <h4 className="mt-4">Perks &amp; Benefits You’ll Get </h4>
                                <ul className="ps-4">
                                    <li className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li className="mt-2">Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className="mt-2">Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.
                                    </li>
                                    <li className="mt-2">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                                    <li className="mt-2">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                    <li className="mt-2">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                    <li className="mt-2">Vestibulum porta libero nec aliquet blandit.</li>
                                    <li className="mt-2">Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                                    <li className="mt-2">Cras ut erat eu ante suscipit rutrum.</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="mt-5 scroll">
                                <h4 className="mt-4">The Application Process</h4>
                                <ul className="ps-4">
                                    <li className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li className="mt-2">Lorem ipsum dolor sit amet consectetur.</li>
                                    <li className="mt-2">Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.
                                    </li>
                                    <li className="mt-2">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
                                    <li className="mt-2">Nulla non enim eu quam rutrum dictum in non urna.</li>
                                    <li className="mt-2">Integer et felis a purus convallis condimentum nec vel eros.</li>
                                    <li className="mt-2">Vestibulum porta libero nec aliquet blandit.</li>
                                    <li className="mt-2">Duis pretium sapien vitae felis tincidunt lobortis vel et urna</li>
                                    <li className="mt-2">Cras ut erat eu ante suscipit rutrum.</li>
                                </ul>
                            </div>
                            <div className="mt-5 scroll">
                                <h4 className="mt-4">Our Statement</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="job-apply-shadow-box py-4 scroll">
                                <div className="text-center">
                                    <button className="px-5 py-3 border-0 rounded-4 text-white d-none d-lg-inline-block btn-cus-sty">Apply Now</button>
                                </div>
                                <div className="px-3 mt-4">
                                    <h5 className="fw-bold">Job Summary</h5>
                                    <div className="mt-4">
                                        <div className="flex-icon-txt-container">
                                            <i className="bi bi-geo-alt-fill fs-2 me-3" />
                                            <div>
                                                <div className="text-secondary fs-6">Location</div>
                                                <div>Lagos state</div>
                                            </div>
                                        </div>
                                        <div className="flex-icon-txt-container mt-4">
                                            <i className="bi bi-briefcase fs-2 me-3" />
                                            <div>
                                                <div className="text-secondary fs-6">Job Type</div>
                                                <div>Full Time</div>
                                            </div>
                                        </div>
                                        <div className="flex-icon-txt-container mt-4">
                                            <i className="bi bi-calendar-week fs-2 me-3" />
                                            <div>
                                                <div className="text-secondary fs-6">Date Posted</div>
                                                <div>posted 1 month ago</div>
                                            </div>
                                        </div>
                                        <div className="flex-icon-txt-container mt-4">
                                            <i className="bi bi-book fs-2 me-3" />
                                            <div>
                                                <div className="text-secondary fs-6">Experience</div>
                                                <div>Experience: 1-3 year</div>
                                            </div>
                                        </div>
                                        <div className="flex-icon-txt-container mt-4">
                                            <i className="bi bi-clock fs-2 me-3" />
                                            <div>
                                                <div className="text-secondary fs-6">Working Hours</div>
                                                <div>9 AM - 6 PM</div>
                                            </div>
                                        </div>
                                        <div className="flex-icon-txt-container mt-4">
                                            <i className="bi bi-calendar2-day fs-2 me-3" />
                                            <div>
                                                <div className="text-secondary fs-6">Working Days</div>
                                                <div>Weekly: 5 days</div>
                                                <div>Weekend: Saturday, Sunday</div>
                                            </div>
                                        </div>
                                        <div className="flex-icon-txt-container mt-4">
                                            <i className="bi bi-person fs-2 me-3" />
                                            <div>
                                                <div className="text-secondary fs-6">Vacancy</div>
                                                <div>No. of Vacancy: 3</div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <Link className="text-black fw-semibold" href="#">View all job</Link>
                                        </div>
                                        <div className="text-center my-5 d-block d-lg-none">
                                            <button className="px-5 py-3 border-0 rounded-4 text-white btn-cus-sty">Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="share-icon-box ms-3 mt-4 scroll">
                                <h5>Share this:</h5>
                                <Link href="#"><img style={{ width: 40 }} src="/images/Facebook.png" alt /></Link>
                                <Link href="#"><img style={{ width: 40 }} src="/images/Twiter.png" alt /></Link>
                                <Link href="#"><img style={{ width: 40 }} src="/images/Linkedin.png" alt /></Link>
                                <Link href="#"><img style={{ width: 40 }} src="/images/Instagram.png" alt /></Link>
                            </div>
                        </div>
                        <div className="text-center my-5 d-none d-lg-block scroll">
                            <button className="px-5 py-3 border-0 rounded-4 text-white btn-cus-sty">Apply Now</button>
                        </div>
                    </div>
                </div>
            </section>





            <Footer />

            <BackToTop />
        </>
    );
}

export default CareerSingle;