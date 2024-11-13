
import MainLayouts from "@c/Layouts/Layouts";
import Header from "@c/Header/Header";
import Footer from "@c/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "@c/Banner/Banner";
import HomePage from "./Pages/Home";

function App() {
    const location = useLocation();

    const hide = ["/Elements", "/AboutUs", "/Contacts", "/OurShop"].includes(location.pathname);

    return (
        <>
            <Header />
            {!hide && <HomePage />}
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
