import { useEffect } from "react";

const BackToTop = () => {


    useEffect(() => {


        // BackToTop Button
        const mybutton = document.getElementById('backToTopBtn');

        const scrollFunction = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = 'block';
            } else {
                mybutton.style.display = 'none';
            }
        };

        window.onscroll = scrollFunction;

        return () => {
            window.onscroll = null; // Clean up the event listener
        };
    }, []);

    

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    return (
        <button
            style={{ padding: '11px 12px', display: 'none' }}
            onClick={topFunction}
            id="backToTopBtn"
            title="Go to top"
        >
            <i className="bi bi-chevron-up"></i>
        </button>

    );
}

export default BackToTop;