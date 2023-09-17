import { useParams } from "react-router-dom";
import style from "./Place.module.scss";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { useGetCityByIdQuery, useGetPlaceByIdQuery, useGetRegionByIdQuery } from "../store/API/rutur.api";

const Place = () => {
    const { placeId } = useParams();
    const { data, isSuccess, isLoading } = useGetPlaceByIdQuery(placeId!);
    const { data: city, isSuccess: citySuccess, isLoading: cityLoading } = useGetCityByIdQuery(data?.city_id!, { skip: !data });
    const { data: region, isSuccess: regionSuccess, isLoading: regionLoading } = useGetRegionByIdQuery(city?.region_id!, { skip: !city });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={style.Place}>
            {
                isSuccess
                    ?
                    <>
                        <h1>{data.title}</h1>
                        <div className={style.tags}>
                            {regionSuccess
                                ?
                                <span>{region.region_name}</span>
                                : null
                            }
                            {citySuccess
                                ?
                                <span>{city.city_name}</span>
                                : null
                            }
                        </div>
                        <iframe src={"https://www.youtube.com/embed/" + data.youtube_id} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        {
                            data.images_id.length > 1
                                ?
                                <Carousel>
                                    {
                                        data.images_id.map(element =>
                                            <div>
                                                <img key={element} src={"http://localhost:2180/v1/image/" + element} alt="" />
                                            </div>
                                        )
                                    }
                                </Carousel>
                                : null
                        }
                        {
                            data.images_id.length === 1
                                ? <img src={"http://localhost:2180/v1/image/" + data.images_id[0]} alt="" />
                                : null
                        }
                        <h2>Описание</h2>
                        <p>{data.content}</p>
                        <h2>Как добраться?</h2>
                    </>
                    : null
            }

        </div>
    );
}

export default Place;