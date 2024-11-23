import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "normalize.css";
import "/src/assets/styles/_global.module.scss";
import "@styles/main.module.scss";



import App from "./App.jsx";
import ElementsPage from "@/Pages/Elements.jsx";
import AboutUsPage from "@/Pages/AboutUs.jsx";
import ContactsPage from "@/Pages/Contacts.jsx";
import OurShopPage from "@/Pages/OurShop.jsx";
import { SidebarContext, SidebarWrapper } from "@contexts/Sidebar.context.jsx";
import { StoreWrapper } from "@contexts/Store.context.jsx";
import { OurShopWrapper } from "@contexts/OurShop.context.jsx";
import CartPage from "@/Pages/Cart.jsx";
import ProductDetail from "@/Pages/ProductDetail.jsx";
import { StoreContext } from "@contexts/Store.context.jsx";
import { TopBarWrapper } from "@contexts/Topbar.context.jsx";
import ErrorPage from "./Pages/Error.jsx";

const router = createBrowserRouter([
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
            {
                path: "/Cart",
                element: <CartPage />,
            },
            {
                path: `/ProductDetail/:ProductID`,
                element: <ProductDetail />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <StoreWrapper>
            <OurShopWrapper>
                <TopBarWrapper>
                    <SidebarWrapper>
                        <RouterProvider router={router} />
                    </SidebarWrapper>
                </TopBarWrapper>
            </OurShopWrapper>
        </StoreWrapper>
    </React.StrictMode>,
);
