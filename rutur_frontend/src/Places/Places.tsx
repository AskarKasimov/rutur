import { Link } from "react-router-dom";
import style from "./Places.module.scss";
import { useGetAllRegionsQuery, useGetCitiesByRegionIdQuery, useGetPlacesQuery } from "../store/API/rutur.api";
import { useState, useEffect } from "react";

const Places = () => {
    const [regionId, setRegionId] = useState<number>(0);
    const [cityId, setCityId] = useState<number>(0);

    const { data, isSuccess, isLoading } = useGetPlacesQuery({ count: 100, region_id: regionId!, city_id: cityId! });
    const { data: regions, isSuccess: regionsIsSuccess, isLoading: regionsIsLoading } = useGetAllRegionsQuery(null);
    const { data: cities, isSuccess: citiesIsSuccess, isLoading: citiesIsLoading } = useGetCitiesByRegionIdQuery(regionId!, { skip: !regionId });

    useEffect(() => {
        if (regionId === 0) setCityId(0);
    }, [regionId])

    return (
        <div className={style.Places}>
            <h1>Куда съездить?</h1>
            <div className={style.filters}>
                <select value={regionId} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setRegionId(Number.parseInt(event.currentTarget.value))}>
                    <option value={0}>Регион</option>
                    {
                        regionsIsSuccess
                            ? regions.map(element =>
                                <option key={element.region_id} value={element.region_id}>{element.region_name}</option>
                            )
                            : null
                    }
                </select>
                <select disabled={regionId === 0} value={cityId} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setCityId(Number.parseInt(event.currentTarget.value))}>
                    <option value={0}>Город</option>
                    {
                        citiesIsSuccess
                            ? cities.map(element =>
                                <option key={element.city_id} value={element.city_id}>{element.city_name}</option>
                            )
                            : null
                    }
                </select>
            </div>
            <div className={style.cards}>
                {
                    isSuccess
                        ? data.map(element =>
                            <Link key={element.place_id} to={"/places/" + element.place_id} className={style.card}>
                                <div className={style.image}>
                                    <img src={"http://api.rutur.run.place/v1/image/" + element.image_id} alt="" />
                                </div>
                                <p className={style.title}>{element.title}</p>
                                <p className={style.desc}>{element.content.slice(0, 200) + "..."}</p>
                            </Link>
                        )
                        : null
                }
            </div>
        </div>
    );
}

export default Places;