import style from "./MainPage.module.scss";

const News = () => {
    return (
        <div className={style.News}>
            <h2>Новости</h2>
            <div className={style.cards}>
                <div className={style.card}>
                    <img src="" alt="" />
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default News;