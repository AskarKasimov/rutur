import { Outlet } from "react-router-dom";
import style from "./App.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
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
