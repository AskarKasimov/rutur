import { configureStore } from "@reduxjs/toolkit";
import { ruturAPI } from "./API/rutur.api";

export const store = configureStore({
    reducer: {
        [ruturAPI.reducerPath]: ruturAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ruturAPI.middleware),
    devTools: false
});

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>