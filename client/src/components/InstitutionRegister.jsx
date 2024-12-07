
import Loader from "./Loader";

import React, { useEffect, useState } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);


const InstitutionRegister = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [location]); 


    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        dob: '',
        contactNo: '',
        ninNo: '',
        institutionName: '',
        category: '',
        businessService: '',
        address: '',
        regNo: '',
        document: '',
        signaturePhoto: ''
    });
    const [errors, setErrors] = useState({});

    const handleNext = () => {
        const stepErrors = validateStep(currentStep);
        if (Object.keys(stepErrors).length === 0) {
            if (currentStep < totalSteps) {
                document.getElementById(`regStep${currentStep}`).style.display = 'none';
                setCurrentStep(currentStep + 1);
                let progressBar = document.querySelector('.progress-bar');
                progressBar.style.width = `${currentStep * 20}%`;
                document.getElementById(`regStep${currentStep + 1}`).style.display = 'flex';

                // Update image styles
                const images = document.getElementsByClassName("regStatusImg");
                for (let i = 0; i < images.length; i++) {
                    images[i].style.opacity = i < currentStep ? '1' : '0.6';
                }
            }
        } else {
            setErrors(stepErrors);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            document.getElementById(`regStep${currentStep}`).style.display = 'none';
            document.getElementById(`step${currentStep}`).style.opacity = '0.6';
            setCurrentStep(currentStep - 1);
            let progressBar = document.querySelector('.progress-bar');
            progressBar.style.width = `${(currentStep - 1) * 20}%`;
            document.getElementById(`regStep${currentStep - 1}`).style.display = 'flex';
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validateStep = (step) => {
        const stepErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (step === 1) {
            if (!formData.email) {
                stepErrors.email = 'Email must not be empty!';
            } else if (!emailRegex.test(formData.email)) {
                stepErrors.email = 'Email is not valid!';
            }

            if (!formData.username) {
                stepErrors.username = 'Username must not be empty!';
            } else if (!usernameRegex.test(formData.username)) {
                stepErrors.username = 'Username must be 3-16 characters and can only contain letters, numbers, and underscores!';
            }

            if (!formData.password) {
                stepErrors.password = 'Password must not be empty!';
            } else if (!passwordRegex.test(formData.password)) {
                stepErrors.password = 'Password must be at least 8 characters long and contain at least one letter and one number!';
            }

            if (!formData.confirmPassword) {
                stepErrors.confirmPassword = 'Confirm Password must not be empty!';
            } else if (formData.confirmPassword !== formData.password) {
                stepErrors.confirmPassword = 'Passwords do not match!';
            }
        } else if (step === 2) {
            if (!formData.firstName) stepErrors.firstName = 'First Name must not be empty!';
            if (!formData.lastName) stepErrors.lastName = 'Last Name must not be empty!';
            if (!formData.dob) stepErrors.dob = 'Date of Birth must not be empty!';
            if (!formData.contactNo) stepErrors.contactNo = 'Contact No must not be empty!';
            if (!formData.ninNo) stepErrors.ninNo = 'Nin No must not be empty!';
        } else if (step === 3) {
            if (!formData.institutionName) stepErrors.institutionName = 'Institution Name must not be empty!';
            if (!formData.category) stepErrors.category = 'Category must not be empty!';
            if (!formData.businessService) stepErrors.businessService = 'Business Service must not be empty!';
            if (!formData.address) stepErrors.address = 'Address must not be empty!';
            if (!formData.regNo) stepErrors.regNo = 'Reg No must not be empty!';
        } else if (step === 4) {
            if (!formData.document) stepErrors.document = 'Document must not be empty!';
            if (!formData.signaturePhoto) stepErrors.signaturePhoto = 'Signature Photo must not be empty!';
        }
        // Add validation for step 5 if needed
        return stepErrors;
    };







    return (
        <>

            <Loader />

            <section className="reg">
                <img src="/images/Ellipse 86.png" className="position-absolute start-0" alt="" />
                <img src="/images/Ellipse 87.png" className="position-absolute end-0" alt="" />
                <div className="container">
                    <div className="row justify-content-center position-relative z-3">
                        <div className="col-12 mt-md-5" style={{ marginTop: '100px' }}>
                            <div className="text-center">
                                <img className="img-logo" style={{ width: '15%' }} src="/images/Finconne - Copy-1 (1) 1.png" alt="" />
                                <h3 className="text-uppercase" style={{ color: '#0066CC' }}>Sign up for Institution account</h3>
                                <p>Fill all form field to go to next step</p>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <div className="my-4">
                                <img id="step1" style={{ width: '13%' }} src="/images/Frame 59940.png" alt="No Image Found" />
                                <img id="step2" style={{ width: '13%' }} className="regStatusImg" src="/images/Frame 59941 (1).png" alt="No Image Found" />
                                <img id="step3" style={{ width: '13%' }} className="regStatusImg" src="/images/Frame 59944 (1).png" alt="No Image Found" />
                                <img id="step4" style={{ width: '13%' }} className="regStatusImg" src="/images/Frame 59942 (1).png" alt="No Image Found" />
                                <img id="step5" style={{ width: '13%' }} className="regStatusImg" src="/images/Frame 59943 (1).png" alt="No Image Found" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div id="progress-bar" className="progress m-auto" style={{ height: '30px', width: '100%' }} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped" style={{ width: `${currentStep * 20}%` }}></div>
                            </div>
                        </div>



                        {/* Step 1: Account Information */}
                        <div className="row justify-content-center" id="regStep1">
                            <div className="col-lg-8">
                                <div className="my-4">
                                    <h3 className="float-start" style={{ color: '#0066CC' }}>Account Information</h3>
                                    <h3 className="float-end">Step 1 - 5</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Email: *</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.email ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="Email Id"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}

                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Username: *</label>
                                <input
                                    type="text"
                                    name="username"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.username ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                {errors.username && <small className="text-danger">{errors.username}</small>}

                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Password: *</label>
                                <input
                                    type="password"
                                    name="password"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.password ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <small className="text-danger">{errors.password}</small>}

                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Confirm Password: *</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.confirmPassword ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}

                                <button id="next-btn" className="next-btn float-end my-3 px-5 py-3 border-0 rounded-4 text-white btn-cus-sty" onClick={handleNext}>Next <i className="ms-1 bi bi-arrow-right"></i></button>

                            </div>
                        </div>







                        {/* Step 2: Personal Information */}
                        <div className="row justify-content-center" id="regStep2" style={{ display: 'none' }}>
                            <div className="col-lg-8">
                                <div className="my-4">
                                    <h3 className="float-start" style={{ color: '#0066CC' }}>Personal Information</h3>
                                    <h3 className="float-end">Step 2 - 5</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">First Name: *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.firstName ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}

                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Last Name: *</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.lastName ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}

                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Date of Birth: *</label>
                                <input
                                    type="date"
                                    name="dob"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.dob ? 'border-danger' : 'border-secondary-subtle'}`}
                                    value={formData.dob}
                                    onChange={handleChange}
                                />
                                {errors.dob && <small className="text-danger">{errors.dob}</small>}

                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Contact No: *</label>
                                <input
                                    type="text"
                                    name="contactNo"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.contactNo ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="Contact No"
                                    value={formData.contactNo}
                                    onChange={handleChange}
                                />
                                {errors.contactNo && <small className="text-danger">{errors.contactNo}</small>}

                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">NIN No: *</label>
                                <input
                                    type="text"
                                    name="ninNo"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.ninNo ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="NIN No"
                                    value={formData.ninNo}
                                    onChange={handleChange}
                                />
                                {errors.ninNo && <small className="text-danger">{errors.ninNo}</small>}

                                <button id="next-btn" className="next-btn float-end my-3 px-5 py-3 border-0 rounded-4 text-white btn-cus-sty" onClick={handleNext}>Next <i className="ms-1 bi bi-arrow-right"></i></button>
                                <button id="previous-btn" className="previous-btn float-end mb-2 mb-lg-0 my-sm-0 my-3 mx-sm-2 mt-sm-3 mx-lg-3 px-5 py-3 rounded-4 bg-white text-black" style={{ border: '1px solid #0066CC' }} onClick={handlePrevious}>
                                    <i className="me-2 bi bi-arrow-left text-black"></i>Previous
                                </button>
                            </div>
                        </div>









                        {/* Step 3: Institution Information */}
                        <div className="row justify-content-center" id="regStep3" style={{ display: 'none' }}>
                            <div className="col-lg-8">
                                <div className="my-4">
                                    <h3 className="float-start" style={{ color: '#0066CC' }}>Institution Information</h3>
                                    <h3 className="float-end">Step 3 - 5</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Institution Name: *</label>
                                <input
                                    type="text"
                                    name="institutionName"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.institutionName ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="Institution Name"
                                    value={formData.institutionName}
                                    onChange={handleChange}
                                />
                                {errors.institutionName && <small className="text-danger">{errors.institutionName}</small>}



                                <label htmlFor="" className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Category: *</label>
                                <select
                                    name="category"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.category ? 'border-danger' : 'border-secondary-subtle'}`}
                                    value={formData.category}
                                    onChange={handleChange}
                                >
                                    <option value="">Category</option>
                                    <option value="items">items</option>
                                    <option value="items">items</option>
                                    <option value="items">items</option>
                                    <option value="items">items</option>
                                    <option value="items">items</option>
                                    <option value="items">items</option>
                                    <option value="items">items</option>
                                    <option value="items">items</option>
                                </select>
                                {errors.category && <small className="text-danger">{errors.category}</small>}





                                <label htmlFor="" className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Business Services: *</label>
                                <select
                                    name="businessService"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.businessService ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="Business Service"
                                    value={formData.businessService}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Service</option>
                                    <option value="items">items</option>
                                    <option value="items">items</option>
                                    <option value="items">items</option>

                                </select>
                                {errors.businessService && <small className="text-danger">{errors.businessService}</small>}



                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Address: *</label>
                                <input
                                    type="text"
                                    name="address"

                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.address ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="Business Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                                {errors.address && <small className="text-danger">{errors.address}</small>}

                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Reg No: *</label>
                                <input
                                    type="text"
                                    name="regNo"
                                    className={`w-100 px-3 py-2 my-2 rounded-3 border border-2 ${errors.regNo ? 'border-danger' : 'border-secondary-subtle'}`}
                                    placeholder="Enter CAC Reg No: *"
                                    value={formData.regNo}
                                    onChange={handleChange}
                                />
                                {errors.regNo && <small className="text-danger">{errors.regNo}</small>}

                                <button id="next-btn" className="next-btn float-end my-3 px-5 py-3 border-0 rounded-4 text-white btn-cus-sty" onClick={handleNext}>Next <i className="ms-1 bi bi-arrow-right"></i></button>
                                <button id="previous-btn" className="previous-btn float-end mb-2 mb-lg-0 my-sm-0 my-3 mx-sm-2 mt-sm-3 mx-lg-3 px-5 py-3 rounded-4 bg-white text-black" style={{ border: '1px solid #0066CC' }} onClick={handlePrevious}>
                                    <i className="me-2 bi bi-arrow-left text-black"></i>Previous
                                </button>
                            </div>
                        </div>







                        {/* Step 4: Documents */}
                        <div className="row justify-content-center" style={{ display: 'none' }} id="regStep4">
                            <div className="col-lg-8">
                                <div className="my-4">
                                    <h3 className="float-start" style={{ color: '#0066CC' }}>Image Upload</h3>
                                    <h3 className="float-end">Step 4 - 5</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <label className="mt-3 d-block text-body-tertiary fw-semibold fs-5">Upload Your Document: *</label>
                                <div className={`my-2 border border-2 py-2 px-2 rounded-3 w-100 ${errors.document ? 'border-danger' : 'border-secondary-subtle'}`}>
                                    <input
                                        type="file"
                                        name="document"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                    {errors.document && <small className="text-danger">{errors.document}</small>}
                                </div>

                                <label className="mt-5 d-block text-body-tertiary fw-semibold fs-5">Upload Signature Photo: *</label>
                                <div className={`my-2 border border-2 py-2 px-2 rounded-3 w-100 ${errors.signaturePhoto ? 'border-danger' : 'border-secondary-subtle'}`}>
                                    <input
                                        type="file"
                                        name="signaturePhoto"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                    {errors.signaturePhoto && <small className="text-danger">{errors.signaturePhoto}</small>}
                                </div>

                                <button id="next-btn" className="next-btn float-end my-3 px-5 py-3 border-0 rounded-4 text-white btn-cus-sty" onClick={handleNext}>Next <i className="ms-1 bi bi-arrow-right"></i></button>
                                <button id="previous-btn" className="previous-btn float-end mb-2 mb-lg-0 my-sm-0 my-3 mx-sm-2 mt-sm-3 mx-lg-3 px-5 py-3 rounded-4 bg-white text-black" style={{ border: '1px solid #0066CC' }} onClick={handlePrevious}>
                                    <i className="me-2 bi bi-arrow-left text-black"></i>Previous
                                </button>
                            </div>
                        </div>




                        {/* Step 5: Confirmation */}
                        <div className="row justify-content-center" style={{ display: 'none' }} id="regStep5">
                            <div className="col-lg-8">
                                <div className="my-4">
                                    <h3 className="float-start" style={{ color: '#0066CC' }}>Finish</h3>
                                    <h3 className="float-end">Step 5 - 5</h3>
                                </div>
                            </div>
                            <div className="col-lg-8 my-5">

                                <div className="text-center mb-5">
                                    <img className="img-fluid" src="/images/Frame 59976.png" alt />
                                    <h3 className="mt-2 text-capitalize fw-normal" style={{ color: '#0066CC' }}>You have successfully signed up</h3>
                                </div>



                                <button className="submit-btn float-end my-3 px-5 py-3 border-0 rounded-4 text-white btn-cus-sty">Submit</button>
                                {/* <button id="previous-btn" className="previous-btn float-end mb-2 mb-lg-0 my-sm-0 my-3 mx-sm-2 mt-sm-3 mx-lg-3 px-5 py-3 rounded-4 bg-white text-black" style={{ border: '1px solid #0066CC' }} onClick={handlePrevious}>
                                    <i className="me-2 bi bi-arrow-left text-black"></i>Previous
                                </button> */}
                            </div>
                        </div>



















                    </div>
                </div>
            </section>

        </>
    );
}

export default InstitutionRegister;