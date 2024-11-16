import React, { useEffect, useState } from "react";
import Banner from "@c/Banner/Banner";
import Shipping from "@c/Shipping/Shipping";
import HighlightTitle from "@c/HighlightTitle/HighlightTitle";
import MainLayouts from "@c/Layouts/Layouts";
import HighlightMainProduct from "@c/HighlightMainProduct/HighlightMainProduct";
import { fetchAllProductAPI } from "../services/api.service.";
import PopularProductList from "../components/PopularProductList/PopularProductList";
import SaleOfTheYear from "../components/SaleOfTheYear/SaleOfTheYear";

const HomePage = () => {
    const [ProductList, setProductList] = useState([]);

    useEffect(() => {
        loadProduct();
    }, []);

    useEffect(() => {}, [ProductList]);

    const loadProduct = async () => {
        const res = await fetchAllProductAPI();
        if (res.data) {
            setProductList(res.data.contents);
            // console.log("check res", res);
            console.log("Check res data", res.data.contents);
        }
    };
    //async
    // console.log("Check list", ProductList);
    return (
        <>
            <Banner />
            <MainLayouts>
                <Shipping />
                <HighlightTitle />
                <HighlightMainProduct data={ProductList.slice(0, 2)} />
                <PopularProductList data={ProductList.slice(2, 10)} />
                
            </MainLayouts>
            <SaleOfTheYear />
        </>
    );
};

export default HomePage;
