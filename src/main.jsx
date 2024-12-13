import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AboutUsPage from "@/pages/AboutUs.jsx";
import CartPage from "@/pages/Cart.jsx";
import ContactsPage from "@/pages/Contacts.jsx";
import ElementsPage from "@/pages/Elements.jsx";
import ErrorPage from "@/pages/Error.jsx";
import OurShopPage from "@/pages/OurShop.jsx";
import ProductDetails from "@/pages/ProductDetails.jsx";
import HomePage from "@/pages/Home.jsx";
import Account from "@/pages/Account.jsx";
import "./index.css";
import { SidebarContext, SidebarWrapper } from "@contexts/Sidebar.context.jsx";
import { StoreWrapper } from "@contexts/Store.context.jsx";
import { OurShopWrapper } from "@contexts/OurShop.context.jsx";
import { StoreContext } from "@contexts/Store.context.jsx";
import { TopBarWrapper } from "@contexts/Topbar.context.jsx";
import { LeftBarWrapper } from "./contexts/LeftBarContext.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <StoreWrapper>
            <OurShopWrapper>
                <TopBarWrapper>
                    <LeftBarWrapper>
                        <SidebarWrapper>
                            <BrowserRouter>
                                <Routes>
                                    <Route element={<App />}>
                                        <Route index element={<HomePage />} />
                                        <Route path="AboutUs" element={<AboutUsPage />} />
                                        <Route path="Account" element={<Account />} />
                                        <Route path="Cart" element={<CartPage />} />
                                        <Route path="Contacts" element={<ContactsPage />} />
                                        <Route path="Elements" element={<ElementsPage />} />
                                        <Route path="Error" element={<ErrorPage />} />
                                        <Route path="OurShop" element={<OurShopPage />} />
                                        <Route path="ProductDetails" element={<ProductDetails />} />
                                    </Route>
                                </Routes>
                            </BrowserRouter>
                        </SidebarWrapper>
                    </LeftBarWrapper>
                </TopBarWrapper>
            </OurShopWrapper>
        </StoreWrapper>
    </React.StrictMode>,
);
