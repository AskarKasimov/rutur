import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Article.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
                    <Carousel>
                        <div>
                            <img src="https://webformyself.com/wp-content/uploads/2020/141/1.png" alt="" />
                        </div>
                        <div>
                            <img src="https://luxe-host.ru/wp-content/uploads/b/7/2/b7246464fd7b72aa12e85b7641170c6d.png" alt="" />
                        </div>
                        <div>
                            <img src="https://ishadeed.com/assets/rhd/rhd-3.png" alt="" />
                        </div>
                    </Carousel>
                    <p>{data.content}</p>
                </>
                : null
            }
        </div>
    );
}

export default Article;