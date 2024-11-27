import React from "react";
import MainLayouts from "@c/Layouts/Layouts";
import Banner from "@c/Banner/Banner";
const HomePage = () => {
    return (
        <>
            <Banner />
            <MainLayouts>
                <div>content here</div>
                <div>content here</div>
                <div>content here</div>
                <div>content here</div>
            </MainLayouts>
        </>
    );
};

export default HomePage;
