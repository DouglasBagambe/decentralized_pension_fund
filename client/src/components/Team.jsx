import BackToTop from "./Back-to-top";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

import { useEffect } from "react";

import { useLocation } from "react-router-dom";


const Team = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on location change
    }, [location]); 

    return (
        <>
            <Loader />
            <Header />

            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4 px-4">
                        <div className="team-member-main">
                            <div className="text-center">
                                <h1 className="mb-5 mt-2 display-3 fw-semibold">Team</h1>
                            </div>
                            <img className="img-fluid" src="/images/Akinade Ayodeji Timothew.png" alt="Akinade Ayodeji Timothew" />
                            <h5>Akinade Ayodeji Timothew</h5>
                            <p>Founder, Product Manager, Software Engineer</p>
                            <h6>Ayodeji is the visionary behind FinConne, with a robust background in software engineering and product management. He spearheads the company’s strategic direction and product innovation, ensuring we consistently deliver cutting-edge financial solutions.</h6>
                        </div>
                    </div>
                    <div className="col-lg-8 px-4" style={{ borderLeft: '1px solid grey' }}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="team-member">
                                    <img className="img-fluid" src="/images/Ajayi ObaniJesu Toluwanimi.png" alt="Ajayi Obaniesu Toluwanmi" />
                                    <h5>Ajayi Obaniesu Toluwanmi</h5>
                                    <p>Co-founder, Product Designer, Assistant Product Manager</p>
                                    <h6>Ajayi brings a unique blend of design and management skills, ensuring our products not only function seamlessly but also provide an engaging user experience.</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="team-member">
                                    <img className="img-fluid" src="/images/Joba Adewumi.jpg" alt="Adewunmi Joba" />
                                    <h5>Adewunmi Joba</h5>
                                    <p>Chief Technology Officer, Software Engineer</p>
                                    <h6>Joba leads the technical team with a focus on developing scalable and robust software solutions. He ensures our platform is reliable and secure.</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="team-member">
                                    <img src="/images/Akinade Opeyemi.png" alt="Akinade Opeyemi" />
                                    <h5>Akinade Opeyemi</h5>
                                    <p>Product Designer</p>
                                    <h6>Opeyemi is responsible for the overall user experience and visual design of our products. He ensures that our designs are both user-friendly and aesthetically pleasing.</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="team-member">
                                    <img src="/images/Akinsanya Adedoyin Zainab.jpg" alt="Akinsanya Adedoyin Zainab" />
                                    <h5>Akinsanya Adedoyin Zainab</h5>
                                    <p>Brand Designer</p>
                                    <h6>Adedoyin creates the visual identity of our brand, making sure our branding is consistent across all channels and resonates with our target audience.</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="team-member">
                                    <img src="/images/Shobo Omotoyosi Elizabeth.jpg" alt="Shoob Omotoyosi Elizabeth" />
                                    <h5>Shoob Omotoyosi Elizabeth</h5>
                                    <p>Social Media Manager</p>
                                    <h6>Omotoyosi manages our social media presence, engaging with our community and growing our audience across various platforms.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <BackToTop />
            <Footer />
        </>
    );
}

export default Team;