import React, { useContext, useEffect, useState } from "react";
import MainLayouts from "@c/Layouts/Layouts";
import Banner from "@c/Banner/Banner";
import Shipping from "@c/Shipping/Shipping";
import HighlightTitle from "@c/HighlightTitle/HighlightTitle";
import HighlightMainProduct from "@c/HighlightMainProduct/HighlightMainProduct";
import { fetchAllProductAPI } from "@services/api.service.";
import { StoreContext } from "@contexts/Store.context";
import { OurShopContext } from "@contexts/OurShop.context";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import PopularProductList from "@c/PopularProductList/PopularProductList";
import SaleOfTheYear from "@c/SaleOfTheYear/SaleOfTheYear";
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

    return (
        <>
            <Banner />
            <MainLayouts>
                <Shipping />
                <HighlightTitle mainText={"Our best products"} subText={"don't miss super offers"} />
               
                {isAppLoading === true ? (
                    <div className="my-32 flex justify-center">
                        <Spin indicator={<LoadingOutlined className="text-mine-shaft-900" spin />} />
                    </div>
                ) : (
                    <>
                        <HighlightMainProduct data={ProductList.slice(0, 2)} />
                        <PopularProductList data={ProductList.slice(2, 10)} />
                    </>
                )}
                <SaleOfTheYear />
            </MainLayouts>
        </>
    );
};

export default HomePage;
