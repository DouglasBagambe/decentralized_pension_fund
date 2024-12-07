import BackToTop from "./Back-to-top";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BlogSingle = () => {


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

            <section className="sec-1-s-blog">
                <div className="container">
                    <div className="my-4 scroll">
                        <Link to="/Blog" className="text-decoration-none"><h6 style={{ color: '#0066CC' }}><i className="bi bi-arrow-left" /> Back</h6></Link>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <div className="my-4">
                                <h6 className="scroll" style={{ color: '#0066CC' }}>Product Update</h6>
                            </div>
                            <div className="my-5">
                                <h6 className="text-secondary scroll">March 22, 2024</h6>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="my-4 scroll">
                                <h2>Easily Get Access To Loans</h2>
                            </div>
                            <div className="my-4 d-flex justify-content-between scroll">
                                <small>By <span className="fw-bold">Fin</span>CONNE</small>
                                <div>
                                    <Link to="#" className="text-black text-decoration-none mx-1">
                                        <img style={{ width: 25 }} src="/images/Facebook.png" alt />
                                    </Link>
                                    <Link to="#" className="text-black text-decoration-none mx-1">
                                        <img style={{ width: 25 }} src="/images/Twiter.png" alt />
                                    </Link>
                                    <Link to="#" className="text-black text-decoration-none mx-1">
                                        <img style={{ width: 25 }} src="/images/Linkedin.png" alt />
                                    </Link>
                                    <Link to="#" className="text-black text-decoration-none mx-1">
                                        <img style={{ width: 25 }} src="/images/Instagram.png" alt />
                                    </Link>
                                </div>
                            </div>
                            <div className="my-4">
                                <img className="img-fluid scroll" src="/images/anima 4.png" alt />
                                <div className="my-4">
                                    <ul className="scroll">
                                        <li className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li className="my-2">Maecenas feugiat lectus a gravida porta.</li>
                                        <li className="my-2">Nam pellentesque quis odio blandit, sit amet elementum augue tincidunt.
                                        </li>
                                        <li className="my-2">Nulla semper libero non purus consectetur, id gravida orci varius.</li>
                                        <li className="my-2">Mauris egestas metus non consectetur mollis.</li>
                                        <li className="my-2">Vestibulum sit amet lacus elementum, convallis elit ut, varius.</li>
                                        <li className="my-2">Mauris id turpis sit amet nunc aliquet auctor ac at enim.</li>
                                        <li className="my-2">Duis pulvinar augue vitae felis suscipit facilisis sit amet at urna.
                                        </li>
                                        <li className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li className="my-2">Maecenas feugiat lectus a gravida porta.</li>
                                        <li className="my-2">Nam pellentesque quis odio blandit, sit amet elementum augue tincidunt.
                                        </li>
                                        <li className="my-2">Nulla semper libero non purus consectetur, id gravida orci varius.</li>
                                        <li className="my-2">Mauris egestas metus non consectetur mollis.</li>
                                        <li className="my-2">Vestibulum sit amet lacus elementum, convallis elit ut, varius.</li>
                                        <li className="my-2">Mauris id turpis sit amet nunc aliquet auctor ac at enim.</li>
                                        <li className="my-2">Duis pulvinar augue vitae felis suscipit facilisis sit amet at urna.
                                        </li>
                                        <li className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    </ul>
                                    <p className="my-3 scroll">Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                        has roots in a piece of classical Latin literature from 45 BC, making it over 2000
                                        years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                                        Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                                        Ipsum passage, and going</p>
                                    <h4 className="scroll">Perks &amp; Benefits You'll Get</h4>
                                    <ul className="scroll">
                                        <li className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li className="my-2">Maecenas feugiat lectus a gravida porta.</li>
                                        <li className="my-2">Nam pellentesque quis odio blandit, sit amet elementum augue tincidunt.
                                        </li>
                                        <li className="my-2">Nulla semper libero non purus consectetur, id gravida orci varius.</li>
                                        <li className="my-2">Mauris egestas metus non consectetur mollis.</li>
                                        <li className="my-2">Vestibulum sit amet lacus elementum, convallis elit ut, varius.</li>
                                        <li className="my-2">Mauris id turpis sit amet nunc aliquet auctor ac at enim.</li>
                                        <li className="my-2">Duis pulvinar augue vitae felis suscipit facilisis sit amet at urna.
                                        </li>
                                        <li className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    </ul>
                                    <hr />
                                    <h4 className="scroll">The Application Process</h4>
                                    <ul className="scroll">
                                        <li className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li className="my-2">Maecenas feugiat lectus a gravida porta.</li>
                                        <li className="my-2">Nam pellentesque quis odio blandit, sit amet elementum augue tincidunt.
                                        </li>
                                        <li className="my-2">Nulla semper libero non purus consectetur, id gravida orci varius.</li>
                                        <li className="my-2">Mauris egestas metus non consectetur mollis.</li>
                                        <li className="my-2">Vestibulum sit amet lacus elementum, convallis elit ut, varius.</li>
                                        <li className="my-2">Mauris id turpis sit amet nunc aliquet auctor ac at enim.</li>
                                        <li className="my-2">Duis pulvinar augue vitae felis suscipit facilisis sit amet at urna.
                                        </li>
                                        <li className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    </ul>
                                    <h4 className="scroll">Our Statement</h4>
                                    <p className="scroll">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                        piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                                        up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                                        going</p>
                                    <h5 className="scroll">Share</h5>
                                    <div className="scroll">
                                        <Link to="#" className="text-black text-decoration-none mx-1">
                                            <img style={{ width: 40 }} src="/images/Facebook.png" alt />
                                        </Link>
                                        <Link to="#" className="text-black text-decoration-none mx-1">
                                            <img style={{ width: 40 }} src="/images/Twiter.png" alt />
                                        </Link>
                                        <Link to="#" className="text-black text-decoration-none mx-1">
                                            <img style={{ width: 40 }} src="/images/Linkedin.png" alt />
                                        </Link>
                                        <Link to="#" className="text-black text-decoration-none mx-1">
                                            <img style={{ width: 40 }} src="/images/Instagram.png" alt />
                                        </Link>
                                        <button className="border-0 rounded-4 pb-2 fs-6 fw-semibold mx-2 mt-3 mt-lg-0" style={{ backgroundColor: '#CCE6FF90', color: '#0066CC' }}><i className="bi bi-file-earmark fs-4" />Copy Link</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll m-5">
                        <h3 className="fw-bold text-black">Read similar updates</h3>



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



            <Footer />

            <BackToTop />

        </>
    );
}

export default BlogSingle;