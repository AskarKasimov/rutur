import style from "./Footer.module.scss";
import { ReactComponent as TelegramSVG } from "./telegram.svg"

const Footer = () => {
    return (
        <div className={style.Footbar}>
            <div className={style.links}>
                <a href="https://t.me/a_s_k_a_rr"><TelegramSVG /></a>
                <a href="https://t.me/irurnneniana"><TelegramSVG /></a>
            </div>
            <p>Разработано в рамках хакатона “Открывай Удмуртию”, 2023 г.</p>
        </div>
    );
}

export default Footer;