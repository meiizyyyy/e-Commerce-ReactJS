import MainLayouts from "@c/Layouts/Layouts";
import Header from "@c/Header/Header";
import Footer from "@c/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "@c/Banner/Banner";
import HomePage from "@/Pages/Home";
import Sidebar from "@c/Sidebar/Sidebar";
import { getAccountInfoAPI } from "./services/api.service.";
import { StoreContext } from "@contexts/Store.context";
import { useContext } from "react";

function App() {
    const location = useLocation();

    const hide = ["/Elements", "/AboutUs", "/Contacts", "/OurShop", "/Cart"].includes(location.pathname);

    return (
        <>
            <Sidebar />
            <Header />
            {!hide && <HomePage />}
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
