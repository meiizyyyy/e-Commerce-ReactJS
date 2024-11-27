import { useState } from "react";
import Header from "@c/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "@c/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
