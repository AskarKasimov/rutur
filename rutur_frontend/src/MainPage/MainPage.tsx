import { Link } from "react-router-dom";
import style from "./MainPage.module.scss";
import News from "./News";

const MainPage = () => {
    return (
        <div className={style.content}>
            <div className={style.VideoLayout} >
                <video className={style.video} playsInline autoPlay muted loop>
                    <source src="/rutur.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={style.Rutur}>
                    <h1>Гид по просторам России и Удмуртии</h1>
                    <Link to="/places">Поехали!</Link>
                    <div className={style.arrow}>
                        <div className="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <News />
        </div>
    );
}

export default MainPage;