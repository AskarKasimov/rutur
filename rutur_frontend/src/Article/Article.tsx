import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Article.module.scss";
import { useGetArticleByIdQuery } from "../store/API/rutur.api";

const Article = () => {
    const { articleId } = useParams();
    const { data, isSuccess, isLoading } = useGetArticleByIdQuery(articleId!);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={style.Article}>
            {isSuccess
                ? <><h1>{data.title}</h1>
                    <p>{[new Date(data.timestamp * 1000).getDate(), new Date(data.timestamp * 1000).getMonth(), new Date(data.timestamp * 1000).getFullYear()].join("/")}, {[new Date(data.timestamp * 1000).getHours(), new Date(data.timestamp * 1000).toTimeString().slice(3, 5)].join(":")}</p>
                    <img src={"http://localhost:2180/v1/image/" + data.image_id} alt="" />
                    <p>{data.content}</p>
                </>
                : null
            }
        </div>
    );
}

export default Article;