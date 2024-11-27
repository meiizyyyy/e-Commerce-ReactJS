import { StrictMode } from "react";
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
import HomePage from "./pages/Home.jsx";
import "./index.css";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="AboutUs" element={<AboutUsPage />} />
                <Route path="Cart" element={<CartPage />} />
                <Route path="Contacts" element={<ContactsPage />} />
                <Route path="Elements" element={<ElementsPage />} />
                <Route path="Error" element={<ErrorPage />} />
                <Route path="OurShop" element={<OurShopPage />} />
                <Route path="ProductDetails" element={<ProductDetails />} />
            </Route>
        </Routes>
    </BrowserRouter>,
);
