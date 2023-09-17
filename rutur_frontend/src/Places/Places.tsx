import { Link } from "react-router-dom";
import style from "./Places.module.scss";

const Places = () => {
    return (
        <div className={style.Places}>
            <h1>Куда съездить?</h1>
            <div className={style.filters}></div>
            <div className={style.cards}>
                <Link to={"/places/1"} className={style.card}>
                    <div className={style.image}>
                        <img src="https://avatars.mds.yandex.net/i?id=fcfa24355a3970e0c491eb419d469c720c017221-8497636-images-thumbs&n=13" alt="" />
                    </div>
                    <p className={style.title}>Открыли сайт</p>
                    <p className={style.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quia, qui molestias dolor temporibus, aut id doloribus, quod exercitationem deserunt cum inventore. Numquam ex, nisi eligendi odit quos doloribus consequuntur!</p>
                </Link>
            </div>
        </div>
    );
}

export default Places;