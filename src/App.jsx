import { useState } from "react";
import Header from "@c/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "@c/Footer/Footer";
import Sidebar from "@c/Sidebar/Sidebar";

function App() {
    return (
        <>
            <Sidebar />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
