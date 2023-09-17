import ReactDOM from 'react-dom/client';
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store";
import App from './App';

import "./index.scss";
import MainPage from './MainPage/MainPage';
import Error from './404';
import Article from './Article/Article';

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: "/news/:articleId",
                element: <Article />
            }
        ]
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);