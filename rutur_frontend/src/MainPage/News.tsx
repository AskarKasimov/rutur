import { Link } from "react-router-dom";
import style from "./MainPage.module.scss";
import { useGetNewsQuery } from "../store/API/rutur.api";

const News = () => {
    const { data, isSuccess, isLoading } = useGetNewsQuery({ count: 6 });

    return (
        <div className={style.News}>
            <h2>Новости</h2>
            <div className={style.cards}>
                {
                    isSuccess
                        ? data.map(element =>
                            <Link key={element.news_id} to={"/news/" + element.news_id} className={style.card}>
                                <div className={style.image}>
                                    <img src={"http://api.rutur.run.place/v1/image/" + element.image_id} alt="" />
                                </div>
                                <p className={style.title}>{element.title}</p>
                                <p className={style.desc}>{element.content.slice(0, 100) + "..."}</p>
                            </Link>
                        )
                        : null
                }
            </div>
        </div>
    );
}

export default News;