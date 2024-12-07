import Loader from "./Loader";

const ForgetPass = () => {
    return (
        <>
            <Loader />

            <section className="signIn">
                <img src="/images/Ellipse 86.png" className="position-absolute start-0" alt />
                <img src="/images/Ellipse 87.png" className="position-absolute end-0" alt />
                <div className="container">
                    <div className="row justify-content-center position-relative z-3">
                        <div className="col-12 mt-5 pt-5">
                            <div className="text-center">
                                <img className="img-logo" style={{ width: '15%' }} src="/images/Finconne - Copy-1 (1) 1.png" alt />
                                <h3 className="text-uppercase" style={{ color: '#0066CC' }}>Forget Password</h3>
                                {/* <p>Login to continue</p> */}
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10 col-xl-8">
                                <label htmlFor className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Email:
                                    *</label>
                                <input type="text" className="w-100 px-3 py-2 my-2 rounded-3 border border-secondary-subtle border-2" placeholder="Email" />
                                <button className="w-100 mt-4 border-0 py-2 rounded-2 text-white btn-cus-sty">Send Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default ForgetPass;