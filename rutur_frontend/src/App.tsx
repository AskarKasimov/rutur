import { Outlet, useLocation } from "react-router-dom";
import style from "./App.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { YMaps } from '@pbe/react-yandex-maps';
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function App() {
    const path = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path.pathname]);

    return (
        <>
            <div className={style.App}>
                <Header />
                <YMaps><Outlet /></YMaps>
                <Footer />
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    rtl={false}
                    draggable
                    pauseOnHover
                    theme="dark" />
            </div>
        </>
    );
}

export default App;
