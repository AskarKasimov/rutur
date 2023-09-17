import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { ReactComponent as RoadSVG } from "./road.svg";
import { ReactComponent as ProfileSVG } from "./person.svg";
import { useState, useEffect } from "react";

const Header = () => {
    const [scrollTop, setScrollTop] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);
    const [hover2, setHover2] = useState<boolean>(false);
    const [hover3, setHover3] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");

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
                <Link onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={hover ? { backgroundColor: "#fff", color: "#000" } : { backgroundColor: "inherit", color: "inherit" }} className={style.Logo} to="/">рутур</Link>
                <div className={style.Menu}>
                    <form>
                        <input style={searchText.length > 0 ? {width: "500px"} : {}} type="text" className={style.input} value={searchText} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchText(event.currentTarget.value)} />
                        <input type="submit" value="" disabled={searchText.length === 0} />
                    </form>
                    <Link onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} style={hover2 ? { backgroundColor: "#fff" } : { backgroundColor: "inherit" }} to="/places"><RoadSVG style={hover2 ? { fill: "#000" } : { fill: "#fff" }} /></Link>
                    <Link onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} style={hover3 ? { backgroundColor: "#fff" } : { backgroundColor: "inherit" }} to="/profile"><ProfileSVG style={hover3 ? { fill: "#000" } : { fill: "#fff" }} /></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;