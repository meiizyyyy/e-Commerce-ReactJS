import MainLayouts from "@c/Layouts/Layouts";
import Header from "@c/Header/Header";
import Footer from "@c/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "@c/Banner/Banner";
import HomePage from "./Pages/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import { getAccountInfoAPI } from "./services/api.service.";
import { StoreContext } from "./contexts/Store.context";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";

function App() {
    const { UserInfo, setUserInfo } = useContext(StoreContext);

    const location = useLocation();

    const hide = ["/Elements", "/AboutUs", "/Contacts", "/OurShop"].includes(location.pathname);
   
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
