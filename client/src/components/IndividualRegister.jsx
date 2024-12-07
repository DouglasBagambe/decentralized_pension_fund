import { Link } from "react-router-dom";

import Loader from "./Loader";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const IndividualRegister = () => {


    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on location change
    }, [location]); 

    return (

        <>
            <Loader />
            

            <section className="ind-reg">
                <img src="/images/Ellipse 86.png" className="position-absolute start-0" alt />
                <img src="/images/Ellipse 87.png" className="position-absolute end-0" alt />
                <div className="container">
                    <div className="row justify-content-center position-relative z-3">
                        <div className="col-12 mt-5">
                            <div className="text-center">
                                <img className="img-logo" style={{ width: '15%' }} src="/images/Finconne - Copy-1 (1) 1.png" alt />
                                <h3 className="text-uppercase" style={{ color: '#0066CC' }}>Sign up for Individual account</h3>
                                <p>Fill all form field to go to Get started</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10 col-xl-8">
                                <label htmlFor className="mt-3 d-block text-body-tertiary fw-semibold fs-5">First Name: *</label>
                                <input type="text" className="w-100 px-3 py-2 my-2 rounded-3 border border-secondary-subtle border-2" placeholder="First Name" />
                                <label htmlFor className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Last Name: *</label>
                                <input type="text" className="w-100 px-3 py-2 my-2 rounded-3 border border-secondary-subtle border-2" placeholder="Last Name" />
                                <label htmlFor className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Email: *</label>
                                <input type="email" className="w-100 px-3 py-2 my-2 rounded-3 border border-secondary-subtle border-2" placeholder="Email Id" />
                                <label htmlFor className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Date of Brith:
                                    *</label>
                                <input type="text" className="w-100 px-3 py-2 my-2 rounded-3 border border-secondary-subtle border-2" placeholder="Verification Required" />
                                <label htmlFor className="mt-3 d-block text-body-tertiary fw-semibold fs-5">NIN:
                                    *</label>
                                <input type="text" className="w-100 px-3 py-2 my-2 rounded-3 border border-secondary-subtle border-2" placeholder="NIN Verification Required" />
                                <label htmlFor className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Username:
                                    *</label>
                                <input type="text" className="w-100 px-3 py-2 my-2 rounded-3 border border-secondary-subtle border-2" placeholder="Username" />
                                <label htmlFor className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Password:
                                    *</label>
                                <input type="text" className="w-100 px-3 py-2 my-2 rounded-3 border border-secondary-subtle border-2" placeholder="Password" />
                                <label htmlFor className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Confirm Password:
                                    *</label>
                                <input type="text" className="w-100 px-3 py-2 my-2 rounded-3 border border-secondary-subtle border-2" placeholder="Confirm Password" />
                                <label htmlFor className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Phone Number:
                                    *</label>
                                <input type="text" className="w-100 px-3 py-2 my-2 rounded-3 border border-secondary-subtle border-2" placeholder="Phone Number" />
                                <button className="btn-cus-sty w-100 mt-4 border-0 py-2 rounded-2 text-white" style={{ backgroundColor: '#0066CC' }}>Button</button>
                                <div className="divider mt-5">
                                    <span>OR</span>
                                </div>
                                <div className="text-center mt-4 mb-5">
                                    <h6>Already have an account? <Link to="/login" className="fw-semibold" style={{ color: '#0066CC' }}>Log in</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </>
    );
}

export default IndividualRegister;