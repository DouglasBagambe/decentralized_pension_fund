import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="position-relative">
            <div className="footer-box d-flex justify-content-center align-items-center text-white">
                <img className="img-fluid position-absolute bottom-0 end-0 footer-eclipse-circle-positioned-sty" src="/images/Ellipse 4 (1).png" alt />
                <img className="img-fluid position-absolute bottom-0 start-0" src="/images/Ellipse 4.png" alt />
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <h1>Subscribe now!</h1>
                            <p>Get the latest update</p>
                            <div className="text-center d-flex justify-content-center align-items-center">
                                <div className="col-8 col-lg-5" style={{zIndex:100}}>
                                    <div className="mx-2">
                                        <input style={{ borderColor: 'transparent' }} type="text" className="w-100 py-2 border-2 px-3 rounded-3" placeholder="Enter your email address" />
                                    </div>
                                </div>
                                <div className="col-4 col-lg-2" style={{zIndex:100}}>
                                    <button className="w-100 btn btn-primary border-0 px-0 px-lg-4 py-2 btn-cus-sty">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="figure-box-wave">
                <div>
                    <img className="w-100" src="/images/Vector 125.png" alt />
                </div>
            </div>
            <div className="footer-wave-bottom-box-bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <img className="footer-img my-2 p-0 m-0" src="/images/Finconn 1.png" alt />
                            <div className="text-white">
                                <h6>Lagos, Nigeria.</h6>
                                <h6 className="text-white pt-4">Open Hours</h6>
                                <h6>Mon - Sat: 8am - 5pm</h6>
                                <h6>Sunday: Closed</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h4 className="text-white">Links</h4>
                            <ul className="list-unstyled">
                                <li className="text-white fs-light my-2"><i className="bi bi-chevron-right pe-3" /><Link className="text-white text-decoration-none" to="/">Home</Link></li>
                                <li className="text-white fs-light my-2"><i className="bi bi-chevron-right pe-3" /><Link className="text-white text-decoration-none" to="/">FAQ</Link></li>
                                <li className="text-white fs-light my-2"><i className="bi bi-chevron-right pe-3" /><Link className="text-white text-decoration-none" to="/">Gallery</Link></li>
                                <li className="text-white fs-light my-2"><i className="bi bi-chevron-right pe-3" /><Link className="text-white text-decoration-none" to="/">Contact</Link></li>
                                <li className="text-white fs-light my-2"><i className="bi bi-chevron-right pe-3" /><Link className="text-white text-decoration-none" to="/">Blogs</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2">
                            <ul className="list-unstyled mt-4 pt-1 pt-lg-2">
                                <li className="text-white fs-light my-2"><i className="bi bi-chevron-right pe-3" /><Link className="text-white text-decoration-none" to="/">Team</Link></li>
                                <li className="text-white fs-light my-2"><i className="bi bi-chevron-right pe-3" /><Link className="text-white text-decoration-none" to="/">Services</Link></li>
                                <li className="text-white fs-light my-2"><i className="bi bi-chevron-right pe-3" /><Link className="text-white text-decoration-none" to="/">About us</Link></li>
                                <li className="text-white fs-light my-2"><i className="bi bi-chevron-right pe-3" /><Link className="text-white text-decoration-none" to="/">Testimonials</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h4 className="text-white">Newsletter</h4>
                            <p className="text-white my-3">Send us a newsletter to get update</p>
                            <input className="footer-input-box-sty my-2 py-2 px-3 border-1 w-75" style={{ borderColor: 'transparent' }} type="text" placeholder="Enter Your Email Address" />
                            <button className="footer-btn-sty"><img src="/images/Vector.png" alt /></button>
                            <div className="mt-3">
                                <Link to="/"><img className="ms-2" src="/images/logos_facebook.png" alt /></Link>
                                <Link to="/"><img className="ms-3" src="/images/pajamas_twitter.png" alt /></Link>
                                <Link to="/"><img className="ms-3" src="/images/skill-icons_instagram.png" alt /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#222222' }} className="py-3 text-center">
                <h6 className="text-white fw-normal">Copyright <span className="fw-bold" style={{ color: '#0066CC' }}>Fin</span><span style={{ color: '#0066CC' }}>CONNE</span> 2024 All Right Reserved</h6>
            </div>
        </footer>


    );
}

export default Footer;