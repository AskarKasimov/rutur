import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle, ICities, ICity, IGetNews, IGetPlaces, INews, IPlace, IPlaces, IRegion, IRegions } from "./models.api";

export const ruturAPI = createApi({
    reducerPath: "API",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.rutur.run.place/v1",
        prepareHeaders: (headers) => {
            let token = "";
            try {
                document.cookie.split("; ").forEach(elem => elem.slice(0, 6) === "token=" ? token = decodeURIComponent(elem.slice(6)) : null);
            }
            catch {
                return headers;
            }
            headers.set("Authorization", token);
            return headers;
        }
    }),
    endpoints: build => ({
        getNews: build.query<INews[], IGetNews>({
            query: (params) => ({
                url: "news",
                method: "GET",
                params: params,
            })
        }),
        getArticleById: build.query<IArticle, string>({
            query: (articleId) => ({
                url: "news/" + articleId,
                method: "GET",
            })
        }),
        getPlaces: build.query<IPlaces[], IGetPlaces>({
            query: (filter) => ({
                url: "place",
                method: "GET",
                params: filter,
            })
        }),
        getPlaceById: build.query<IPlace, string>({
            query: (placeId) => ({
                url: "place/" + placeId,
                method: "GET",
            })
        }),
        getAllRegions: build.query<IRegions[], null>({
            query: () => ({
                url: "region/all",
                method: "GET",
            })
        }),
        getCitiesByRegionId: build.query<ICities[], number>({
            query: (regionId) => ({
                url: "region/" + regionId + "/cities",
                method: "GET"
            })
        }),
        getRegionById: build.query<IRegion, number>({
            query: (regiodId) => ({
                url: "region/" + regiodId,
                method: "GET",
            })
        }),
        getCityById: build.query<ICity, number>({
            query: (cityId) => ({
                url: "city/" + cityId,
                method: "GET",
            })
        })
    })
})

export const {
    useGetNewsQuery,
    useGetArticleByIdQuery,
    useGetPlacesQuery,
    useGetPlaceByIdQuery,
    useGetAllRegionsQuery,
    useGetCitiesByRegionIdQuery,
    useGetRegionByIdQuery,
    useGetCityByIdQuery,
} = ruturAPI;