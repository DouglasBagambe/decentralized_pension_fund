

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {



    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileNavActive, setMobileNavActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header');
            const headerNavbar = document.querySelector('.header-navbar');

            if (header && headerNavbar) {
                const navbarHeight = header.offsetHeight;

                if (window.scrollY > 50) {
                    header.classList.add('fixed-top', 'fade-in');
                    headerNavbar.classList.add('scrolled');
                    document.body.style.paddingTop = `${navbarHeight}px`;
                    setIsScrolled(true);
                } else {
                    header.classList.remove('fixed-top', 'fade-in');
                    headerNavbar.classList.remove('scrolled');
                    document.body.style.paddingTop = '0';
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleMobileNavToggle = (isActive) => {
        document.body.classList.toggle('mobile-nav-active', isActive);
        document.body.classList.toggle('no-scroll', isActive);

        const mobileNavShow = document.querySelector('.mobile-nav-show');
        const mobileNavHide = document.querySelector('.mobile-nav-hide');

        if (mobileNavShow) mobileNavShow.classList.toggle('d-none', !isActive);
        if (mobileNavHide) mobileNavHide.classList.toggle('d-none', isActive);

        setMobileNavActive(isActive);
    };



    useEffect(() => {
        // const handleMobileNavToggle = () => {
        //     document.body.classList.toggle('mobile-nav-active', !mobileNavActive);
        //     document.body.classList.toggle('no-scroll', !mobileNavActive);

        //     const mobileNavShow = document.querySelector('.mobile-nav-show');
        //     const mobileNavHide = document.querySelector('.mobile-nav-hide');

        //     if (mobileNavShow) mobileNavShow.classList.toggle('d-none', mobileNavActive);
        //     if (mobileNavHide) mobileNavHide.classList.toggle('d-none', !mobileNavActive);

        //     setMobileNavActive(!mobileNavActive);
        // };


        const toggleElements = document.querySelectorAll('.mobile-nav-toggle');

        // toggleElements.forEach((el) => {
        //     el.addEventListener('click', (event) => {
        //         event.preventDefault();
        //         handleMobileNavToggle(true); // Ensure mobile nav is open
        //     });
        // });

        const navbarLinks = document.querySelectorAll('#navbar a');

        // navbarLinks.forEach((navbarlink) => {
        //     if (!navbarlink.hash) return;

        //     let section = document.querySelector(navbarlink.hash);
        //     if (!section) return;

        //     navbarlink.addEventListener('click', () => {
        //         if (document.querySelector('.mobile-nav-active')) {
        //             handleMobileNavToggle();
        //         }
        //     });
        // });

        // Example usage for other event listeners
        toggleElements.forEach((el) => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                handleMobileNavToggle(!mobileNavActive);
            });
        });

        navbarLinks.forEach((navbarlink) => {
            navbarlink.addEventListener('click', () => {
                handleMobileNavToggle(false); // Close mobile navigation on link click
            });
        });


        // navbarLinks.forEach((navbarlink) => {
        //     navbarlink.addEventListener('click', () => {
        //         handleMobileNavToggle(); // Close mobile navigation on link click
        //     });
        // });

        return () => {
            toggleElements.forEach((el) => {
                el.removeEventListener('click', handleMobileNavToggle);
            });

            navbarLinks.forEach((navbarlink) => {
                navbarlink.removeEventListener('click', handleMobileNavToggle);
            });
        };
    }, [mobileNavActive]);

    useEffect(() => {
        const handleHamburgerClick = () => {
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.classList.toggle('is-active');
            }
        };

        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.addEventListener('click', handleHamburgerClick);
        }

        return () => {
            if (hamburger) {
                hamburger.removeEventListener('click', handleHamburgerClick);
            }
        };
    }, []);


    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState('about-product-hov-box-d-1');

    const handleMouseOver = (item) => {
        setHoveredItem(item);
        if (item === 'about-product-hov-box-d-1') {
            document.querySelector('.about-product-hov-box-d-1').classList.add('show-box');
            document.querySelector('.about-product-hov-box-d-2').classList.remove('show-box');
        } else if (item === 'about-product-hov-box-d-2') {
            document.querySelector('.about-product-hov-box-d-2').classList.add('show-box');
            document.querySelector('.about-product-hov-box-d-1').classList.remove('show-box');
        }
    };

    const handleMouseLeave = () => {
        // Optionally handle mouse leave if needed
    };




    // Mobile navbar
    const [mobileDropdownVisible, setMobileDropdownVisible] = useState(false);
    const [activeBox, setActiveBox] = useState('about-product-hov-box-d-1-res');



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileDropdownVisible(false);
            }
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = (e) => {
        e.preventDefault()
        if (window.innerWidth <= 768) {
            setMobileDropdownVisible(!mobileDropdownVisible);
            handleMobileNavToggle(true);

            // if (!mobileDropdownVisible) {
            //     setActiveBox('about-product-hov-box-d-1-res');
            //     document.getElementById('mob-link').classList.add('active-link'); // Add active-link class
            // } else {
            //     document.getElementById('mob-link').classList.remove('active-link'); // Remove active-link class
            // }
        }
    };

    const showBox1 = (e) => {
        e.preventDefault();
        setActiveBox('about-product-hov-box-d-1-res');
        setMobileDropdownVisible(true);
        handleMobileNavToggle(true);
    };

    const showBox2 = (e) => {
        e.preventDefault();
        setActiveBox('about-product-hov-box-d-2-res');
        setMobileDropdownVisible(true);
        handleMobileNavToggle(true);
    };



    const [getStartedDropdown, setgetStartedDropdown] = useState(false);

    const getStartedtoggleDropdown = () => {
        setgetStartedDropdown(!getStartedDropdown);
    };


    const navbarClose = () => {
        handleMobileNavToggle(false);
    }



    return (
        <>
            <header id="header" className="header-navbar d-flex align-items-center">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <Link to="/">
                        <img className="navbar-img mt-1" src="/images/Finconne - Copy-1 (1) 1.png" alt="" />
                    </Link>

                    <nav id="navbar" className="navbar d-flex justify-content-center">
                        <ul className="list-unstyled d-block d-xl-flex align-items-center mb-0">
                            <li className="nav-item product-item">
                                <Link
                                    className="nav-link"
                                    to="#"
                                    role="button"
                                    id="productsLink"
                                    aria-expanded={dropdownVisible ? 'true' : 'false'}
                                    onMouseOver={() => setDropdownVisible(true)}
                                    onMouseLeave={() => setDropdownVisible(true)}
                                    onClick={toggleDropdown}
                                >
                                    Products
                                    <i className="bi bi-chevron-down"></i>
                                </Link>

                            </li>


                            {/* Mobile view Navbar */}

                            {mobileDropdownVisible && (
                                <>
                                    <div className="product-scroll-wrapper animate__animated animate__slideInUp">
                                        <div style={{ cursor: 'pointer' }} className="product-item-drag-flex">
                                            <h6 className="my-2">
                                                <Link
                                                    id='mob-link'
                                                    to="#"
                                                    style={{ borderColor: '#0066CC !important' }}
                                                    className={`text-decoration-none text-black border border-1 rounded-pill px-3 py-1 ${activeBox === 'about-product-hov-box-d-1-res' ? 'active-link' : ''}`}
                                                    onClick={showBox1}
                                                >
                                                    Financial <br /> Institution
                                                </Link>
                                            </h6>
                                        </div>
                                        <div style={{ cursor: 'pointer' }} className="product-item-drag-flex">
                                            <h6 className="my-2">
                                                <Link
                                                    to="#"
                                                    style={{ borderColor: '#0066CC !important' }}
                                                    className={`text-decoration-none text-black border border-1 rounded-pill px-3 py-1 ${activeBox === 'about-product-hov-box-d-2-res' ? 'active-link' : ''}`}
                                                    onClick={showBox2}
                                                >
                                                    Individual <br /> Customer
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>

                                    {activeBox === 'about-product-hov-box-d-1-res' && (
                                        <div className="col-12 about-product-hov-box-d-1-res show-box animate__animated animate__fadeIn">
                                            <div className="row">
                                                <div className="col-12">
                                                    <Link to="/team" className="text-decoration-none text-black product-dd-it">
                                                        <div className="d-flex">
                                                            <i className="bi bi-ui-checks-grid fs-4 me-3 d-block position-relative" style={{ top: '5px' }}></i>
                                                            <div>
                                                                <h6>Finance</h6>
                                                                <small>Lorem ipsum dolor sit amet consectetur.</small>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-12">
                                                    <Link to="/error" className="text-decoration-none text-black product-dd-it">
                                                        <div className="d-flex">
                                                            <i className="bi bi-wallet fs-4 me-3 d-block position-relative" style={{ top: '5px' }}></i>
                                                            <div>
                                                                <h6>Saving</h6>
                                                                <small>Lorem ipsum dolor sit amet consectetur.</small>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-12">
                                                    <Link to="#" className="text-decoration-none text-black product-dd-it">
                                                        <div className="d-flex">
                                                            <i className="bi bi-bar-chart fs-4 me-3 d-block position-relative" style={{ top: '5px' }}></i>
                                                            <div>
                                                                <h6>Investment - coming soon</h6>
                                                                <small>Lorem ipsum dolor sit amet consectetur.</small>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeBox === 'about-product-hov-box-d-2-res' && (
                                        <div className="col-12 about-product-hov-box-d-2-res show-box animate__animated animate__fadeIn">
                                            <div className="row">
                                                <div className="col-12">
                                                    <Link to="#" className="text-decoration-none text-black product-dd-it">
                                                        <div className="d-flex">
                                                            <i className="bi bi-gear fs-4 me-3 d-block position-relative" style={{ top: '5px' }}></i>
                                                            <div>
                                                                <h6>Automated Group Contribution</h6>
                                                                <small>Lorem ipsum dolor sit amet consectetur.</small>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-12">
                                                    <Link to="#" className="text-decoration-none text-black product-dd-it">
                                                        <div className="d-flex">
                                                            <i className="bi bi-box-seam fs-4 me-3 d-block position-relative" style={{ top: '5px' }}></i>
                                                            <div>
                                                                <h6>Institution Service Offering</h6>
                                                                <small>Lorem ipsum dolor sit amet consectetur.</small>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}


                            <li className="navbar-item"><Link className="text-decoration-none" to="/careers" onMouseOver={() => setDropdownVisible(false)}>About</Link></li>
                            <li className="navbar-item"><Link to="/" className="text-decoration-none" onMouseOver={() => setDropdownVisible(false)}>Contact</Link></li>
                            <li className="navbar-item"><Link className="text-decoration-none" to="/blog" onMouseOver={() => setDropdownVisible(false)}>Blog</Link></li>

                            {/* get started mobile view */}

                            <li className="mx-3 d-lg-none">
                                {/* <div className="dropdown-center dropdown">


                                    <button
                                        className="w-75 btn btn-secondary position-absolute nav-btn text-decoration-none mx-xl-0 py-2 px-3"
                                        type="button"
                                        style={{ bottom: '2%', left: '12%' }}
                                        onClick={getStartedtoggleDropdown}
                                    >
                                        Get Started
                                        <i className="bi bi-chevron-down" style={{ marginLeft: '7px' }}></i>
                                    </button>

                                    {getStartedDropdown && (
                                        <ul className="dropdown-menu product-dropmenu-res animate__animated animate__fadeIn">
                                            <li>
                                                <Link className="dropdown-item d-block border-bottom border-secondary-subtle px-2 pb-2" to="#">
                                                    Register
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={navbarClose} className="dropdown-item px-4 pb-2 pt-3" style={{ fontSize: '15px' }} to="/individualregister">
                                                    As An individual
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={navbarClose} className="dropdown-item px-4 pb-2" style={{ fontSize: '15px' }} to="/institutionregister">
                                                    As An institution
                                                </Link>
                                            </li>
                                            <div className="text-center">
                                                <Link
                                                    onClick={navbarClose}
                                                    to="/login"
                                                    style={{ backgroundColor: '#0066CC !important', color: 'white' }}
                                                    className="btn btn-primary mt-2 mb-2 d-block w-50 m-auto rounded-pill"
                                                >
                                                    login
                                                </Link>
                                            </div>
                                        </ul>
                                    )}

                                </div> */}

                                <div class="dropdown text-center">

                                    {/* <button
                                        className="w-75 btn btn-secondary position-absolute nav-btn text-decoration-none mx-xl-0 py-2 px-3"
                                        type="button"
                                        style={{}}
                                        onClick={getStartedtoggleDropdown}
                                    >
                                        Get Started
                                        <i className="bi bi-chevron-down" style={{ marginLeft: '7px' }}></i>
                                    </button> */}


                                    <button
                                        class="w-75 btn btn-secondary position-absolute nav-btn text-decoration-none mx-xl-0 py-2 px-3"
                                        type="button"
                                        style={{}}
                                        onClick={getStartedtoggleDropdown}
                                        >
                                        Get Started
                                        <i className="bi bi-chevron-down" style={{ marginLeft: '7px' }}></i>
                                    </button>

                                    {getStartedDropdown && (
                                        <ul className="dropdown-menu product-dropmenu-res position-absolute animate__animated animate__fadeIn">
                                            <li>
                                                <Link className="dropdown-item d-block border-bottom border-secondary-subtle px-2 pb-2" to="#">
                                                    Register
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={navbarClose} className="dropdown-item px-4 pb-2 pt-3" style={{ fontSize: '15px' }} to="/individualregister">
                                                    As An individual
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={navbarClose} className="dropdown-item px-4 pb-2" style={{ fontSize: '15px' }} to="/institutionregister">
                                                    As An institution
                                                </Link>
                                            </li>
                                            <div className="text-center">
                                                <Link
                                                    onClick={navbarClose}
                                                    to="/login"
                                                    style={{ backgroundColor: '#0066CC !important', color: 'white' }}
                                                    className="btn btn-primary mt-2 mb-2 d-block w-50 m-auto rounded-pill"
                                                >
                                                    login
                                                </Link>
                                            </div>
                                        </ul>
                                    )}


                                </div>
                            </li>

                        </ul>
                    </nav>



                    {/* get stared desktop view */}

                    <div className="mx-4 d-none d-xl-block">
                        <div className="dropdown-center dropdown">
                            <button className="btn btn-secondary nav-btn text-decoration-none mx-xl-0 py-2 px-3" type="button">
                                Get Started
                                <i className="bi bi-chevron-down" style={{ marginLeft: '7px' }}></i>
                            </button>
                            <ul className="dropdown-menu position-absolute" style={{ right: '22px' }}>
                                <li>

                                    <Link className="dropdown-item d-block border-bottom border-secondary-subtle px-2 pb-2" to="#">
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item px-4 pb-2 pt-3" style={{ fontSize: '15px' }} to="/individualregister">
                                        As An individual
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item px-4 pb-2" style={{ fontSize: '15px' }} to="/institutionregister">
                                        As An institution
                                    </Link>
                                </li>
                                <div className="text-center">
                                    <Link
                                        to="/login"
                                        style={{ backgroundColor: '#0066CC !important' }}
                                        className="btn btn-primary w-75 m-auto rounded-pill"
                                    >
                                        login
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>



                    <div className="d-flex align-items-center nav-list-button ">
                        <i className={`mobile-nav-toggle mobile-nav-show bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}></i>
                    </div>


                    

                </div>
            </header>


            {/* for desktop view */}

            {dropdownVisible && (
                <div
                    className="product-container dropdown-product position-fixed animate__animated animate__fadeInUp"
                    style={{ zIndex: 99999 }}
                    onMouseOver={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                >
                    <div className="row justify-content-center border border-1 bg-white position-relative rounded-4 p-4">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <Link
                                        to="#"
                                        className={`text-decoration-none text-black product-dd-it product-dd-it-1 ${hoveredItem === 'about-product-hov-box-d-1' ? 'active' : ''}`}
                                        onMouseOver={() => handleMouseOver('about-product-hov-box-d-1')}
                                    >
                                        <div className="p-2">
                                            <h5>Financial Institution</h5>
                                            <small>Lorem ipsum dolor sit amet consectetur.</small>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 my-2">
                                    <Link
                                        to="#"
                                        className={`text-decoration-none text-black product-dd-it product-dd-it-2 ${hoveredItem === 'about-product-hov-box-d-2' ? 'active' : ''}`}
                                        onMouseOver={() => handleMouseOver('about-product-hov-box-d-2')}
                                    >
                                        <div className="p-2">
                                            <h5>Individual Customer</h5>
                                            <small>Lorem ipsum dolor sit amet consectetur.</small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={`col-6 about-product-hov-box-d-1 ${hoveredItem === 'about-product-hov-box-d-1' ? 'show-box' : ''}`}>
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <Link to="/team" className="text-decoration-none text-black product-dd-it">
                                        <div className="d-flex p-2">
                                            <i className="bi bi-ui-checks-grid fs-4 me-3 d-block position-relative" style={{ top: '5px' }}></i>
                                            <div>
                                                <h5>Finance</h5>
                                                <small>Lorem ipsum dolor sit amet consectetur.</small>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 my-2">
                                    <Link to="/error" className="text-decoration-none text-black product-dd-it">
                                        <div className="d-flex p-2">
                                            <i className="bi bi-wallet fs-4 me-3 d-block position-relative" style={{ top: '5px' }}></i>
                                            <div>
                                                <h5>Saving</h5>
                                                <small>Lorem ipsum dolor sit amet consectetur.</small>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 my-2">
                                    <Link to="#" className="text-decoration-none text-black product-dd-it">
                                        <div className="d-flex p-2">
                                            <i className="bi bi-bar-chart fs-4 me-3 d-block position-relative" style={{ top: '5px' }}></i>
                                            <div>
                                                <h5>Investment - coming soon</h5>
                                                <small>Lorem ipsum dolor sit amet consectetur.</small>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={`col-6 about-product-hov-box-d-2 ${hoveredItem === 'about-product-hov-box-d-2' ? 'show-box' : ''}`}>
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <Link to="#" className="text-decoration-none text-black product-dd-it">
                                        <div className="d-flex p-2">
                                            <i className="bi bi-gear fs-4 me-3 d-block position-relative" style={{ top: '5px' }}></i>
                                            <div>
                                                <h5>Automated Group Contribution</h5>
                                                <small>Lorem ipsum dolor sit amet consectetur.</small>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 my-2">
                                    <Link to="#" className="text-decoration-none text-black product-dd-it">
                                        <div className="d-flex p-2">
                                            <i className="bi bi-box-seam fs-4 me-3 d-block position-relative" style={{ top: '5px' }}></i>
                                            <div>
                                                <h5>Institution Service Offering</h5>
                                                <small>Lorem ipsum dolor sit amet consectetur.</small>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}





        </>
    );
}

export default Header;