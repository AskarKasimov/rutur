export type IGetNews = {
    count: number;
    offset?: number;
}

export type INews = {
    news_id: number;
    image_id: number;
    title: string;
    timestamp: number;
    content: string;
}

export type IArticle = {
    news_id: number;
    image_id: number;
    title: string;
    timestamp: number;
    content: string;
}

export type IPlaces = {
    place_id: number;
    title: string;
    city_id: number;
    image_id: number;
    youtube_id: string;
    content: string;
    latitude: number;
    longitude: number;
}

export type IGetPlaces = {
    count: number;
    offset?: number;
    region_id?: number;
    city_id?: number;
}

export type IPlace = {
    place_id: number;
    title: string;
    city_id: number;
    images_id: number[];
    youtube_id: string;
    content: string;
    latitude: number;
    longitude: number;
}

export type IRegions = {
    region_id: number;
    region_name: string;
}

export type ICities = {
    city_id: number;
    region_id: number;
    region_name: string;
    city_name: string;
}

export type IRegion = {
    region_id: number;
    region_name: string;
}

export type ICity = {
    city_id: number;
    region_id: number;
    region_name: string;
    city_name: string;
}