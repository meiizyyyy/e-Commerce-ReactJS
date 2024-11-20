import React, { useContext, useEffect, useState } from "react";
import Banner from "@c/Banner/Banner";
import Shipping from "@c/Shipping/Shipping";
import HighlightTitle from "@c/HighlightTitle/HighlightTitle";
import MainLayouts from "@c/Layouts/Layouts";
import HighlightMainProduct from "@c/HighlightMainProduct/HighlightMainProduct";
import { fetchAllProductAPI } from "../services/api.service.";
import PopularProductList from "../components/PopularProductList/PopularProductList";
import SaleOfTheYear from "../components/SaleOfTheYear/SaleOfTheYear";
import { StoreContext } from "../contexts/Store.context";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { ScrollRestoration } from "react-router-dom";
import { OurShopContext } from "../contexts/OurShop.context";

const HomePage = () => {
    const { isAppLoading, setIsAppLoading } = useContext(StoreContext);
    const { sortID, setSortID, showID, showGrid, setTotal, total, page, setPage, setShowID, setShowGrid } = useContext(OurShopContext);
    const [ProductList, setProductList] = useState([]);

    useEffect(() => {
        loadProduct();
    }, []);

    useEffect(() => {}, [ProductList]);

    const loadProduct = async () => {
        setIsAppLoading(true);
        const res = await fetchAllProductAPI(0, 1, 10);
        if (res.data) {
            setProductList(res.data.contents);
            setSortID(0);
            setShowGrid(true);
            setShowID(8);
            // console.log("check res", res);
            // console.log("Check res data", res.data.contents);
        }
        setIsAppLoading(false);
    };
    //async
    // console.log("Check list", ProductList);
    return (
        <>
            <Banner />
            <MainLayouts>
                <Shipping />
                <HighlightTitle mainText={"Our best products"} subText={"don't miss super offers"} />
                {isAppLoading === true ? (
                    <div style={{ display: "flex", justifyContent: "center", margin: "120px 0 120px" }}>
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 40, color: "#333333" }} spin />} />
                    </div>
                ) : (
                    <>
                        <HighlightMainProduct data={ProductList.slice(0, 2)} />
                        <PopularProductList data={ProductList.slice(2, 10)} />
                    </>
                )}
            </MainLayouts>
            <SaleOfTheYear />
            <ScrollRestoration />
        </>
    );
};

export default HomePage;
