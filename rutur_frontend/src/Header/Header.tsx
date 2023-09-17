import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { ReactComponent as SearchSVG } from "./search.svg";
import { ReactComponent as RoadSVG } from "./road.svg";
import { ReactComponent as ProfileSVG } from "./person.svg";
import { useState, useEffect } from "react";

const Header = () => {
    const [scrollTop, setScrollTop] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 99) setScrollTop(true);
            else setScrollTop(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={style.Header} style={scrollTop ? { backgroundColor: "#000" } : { backgroundColor: "inherit" }}>
            <div className={style.container}>
                <Link onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={scrollTop && hover ? { backgroundColor: "#fff", color: "#000" } : { backgroundColor: "inherit", color: "inherit" }} className={style.Logo} to="/">рутур</Link>
                <div className={style.Menu}>
                    <Link style={scrollTop ? { backgroundColor: "#fff" } : { backgroundColor: "inherit" }} to="/search"><SearchSVG style={scrollTop ? { fill: "#000" } : { fill: "#fff" }} /></Link>
                    <Link style={scrollTop ? { backgroundColor: "#fff" } : { backgroundColor: "inherit" }} to="/places"><RoadSVG style={scrollTop ? { fill: "#000" } : { fill: "#fff" }} /></Link>
                    <Link style={scrollTop ? { backgroundColor: "#fff" } : { backgroundColor: "inherit" }} to="/profile"><ProfileSVG style={scrollTop ? { fill: "#000" } : { fill: "#fff" }} /></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;