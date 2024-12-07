import { useEffect } from "react";

const Loader = () => {


    useEffect(() => {


        // Loader
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 300);
            }
        }, 2000);




    }, []);

    return (
        <div class="loader-container" id="loader">
            <div class="loader"></div>
        </div>
    );
}

export default Loader;