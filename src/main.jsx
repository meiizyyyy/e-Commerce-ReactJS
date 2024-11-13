import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "normalize.css";
import "@styles/main.module.scss";

import App from "./App.jsx";
import ElementsPage from "./Pages/Elements.jsx";
import AboutUsPage from "./Pages/AboutUs.jsx";
import ContactsPage from "./Pages/Contacts.jsx";
import OurShopPage from "./Pages/OurShop.jsx";
import Banner from "./components/Banner/Banner.jsx";
import HomePage from "./Pages/Home.jsx";

const router = createBrowserRouter([
    {},
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/Elements",
                element: <ElementsPage />,
            },
            {
                path: "/AboutUs",
                element: <AboutUsPage />,
            },
            {
                path: "/Contacts",
                element: <ContactsPage />,
            },
            {
                path: "/OurShop",
                element: <OurShopPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider
            router={router}
            future={{
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
                v7_partialHydration: true,
                v7_relativeSplatPath: true,
                v7_skipActionErrorRevalidation: true,
                v7_startTransition: true,
            }}
        />
    </React.StrictMode>,
);
