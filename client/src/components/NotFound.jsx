import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <>

            <div className="p-4">
                <Link to="/" className="text-decoration-none error-btn">
                    <i className="bi bi-arrow-left" />
                    <span className="mx-2">Go Back</span>
                </Link>

            </div>
            <div className="container">
                <div className="row align-items-center" style={{ height: '75vh' }}>
                    <div className="text-center">
                        <div className="hit-the-floor">404</div>
                        <p className="fs-5">Page Not Found</p>
                    </div>
                </div>
            </div>


        </>
    );
}

export default NotFound;