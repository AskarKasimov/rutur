import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ruturAPI = createApi({
    reducerPath: "API",
    baseQuery: fetchBaseQuery({
        baseUrl: "?",
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

    })
})

export const {

} = ruturAPI;