import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Article.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Article = () => {
    const { articleId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={style.Article}>
            <h1>Открытие сайта</h1>
            <p>15/09/2023, 23:59</p>
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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quis rerum accusamus tempore suscipit repudiandae harum magni, sit aliquid. Aliquid cum atque odit placeat a temporibus quibusdam dolore. Fugiat, voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem odio quo minima error, iste nesciunt omnis laborum! Enim aperiam quas aut voluptates ea iste assumenda ipsa impedit possimus! Blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iusto magnam obcaecati mollitia veritatis? At voluptatibus pariatur repudiandae, iste soluta ratione doloribus nostrum? Quod praesentium nulla laboriosam delectus deleniti officiis.</p>
        </div>
    );
}

export default Article;