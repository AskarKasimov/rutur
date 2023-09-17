import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Article.module.scss";

const Article = () => {
    const { articleId } = useParams();

    useEffect(() => {

    }, []);
    return (
        <div className={style.Article}>
            <h1>Открытие сайта</h1>
            <p>15/09/2023, 23:59</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quis rerum accusamus tempore suscipit repudiandae harum magni, sit aliquid. Aliquid cum atque odit placeat a temporibus quibusdam dolore. Fugiat, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem odio quo minima error, iste nesciunt omnis laborum! Enim aperiam quas aut voluptates ea iste assumenda ipsa impedit possimus! Blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iusto magnam obcaecati mollitia veritatis? At voluptatibus pariatur repudiandae, iste soluta ratione doloribus nostrum? Quod praesentium nulla laboriosam delectus deleniti officiis.</p>
        </div>
    );
}

export default Article;