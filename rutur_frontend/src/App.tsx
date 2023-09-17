import { Outlet, useLocation } from "react-router-dom";
import style from "./App.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect } from "react";

function App() {
    const path = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path.pathname]);

    return (
        <>
            <div className={style.App}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default App;
