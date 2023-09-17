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
                                    <img src="https://avatars.mds.yandex.net/i?id=fcfa24355a3970e0c491eb419d469c720c017221-8497636-images-thumbs&n=13" alt="" />
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