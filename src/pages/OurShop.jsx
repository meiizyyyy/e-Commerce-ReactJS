import React, { useContext, useEffect, useState } from "react";
import NavigationBar from "@c/NavigationBar/NavigationBar";
import MainLayouts from "@c/Layouts/Layouts";
import { Link } from "react-router-dom";
import OurShopCountdownBanner from "@c/OurShopCountdownBanner/OurShopCountdownBanner";
import Filter from "@c/Filter/Filter";
import { StoreContext } from "@contexts/Store.context";
import { OurShopContext } from "@contexts/OurShop.context";
import { fetchAllProductAPI } from "@services/api.service.";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import OurShopProducts from "@c/OurShopProducts/OurShopProducts";
const OurShopPage = () => {
    const { isAppLoading, setIsAppLoading, isButtonLoading, setIsButtonLoading } = useContext(StoreContext);
    const { sortID, showID, showGrid, setTotal, total, page, setPage, setShowID } = useContext(OurShopContext);
    const [ProductList, setProductList] = useState([]);

    useEffect(() => {
        loadProduct();
    }, [sortID, showID]);

    const loadProduct = async () => {
        setIsAppLoading(true);
        const res = await fetchAllProductAPI(sortID, 1, showID);
        if (res.data) {
            setPage(1);
            setShowID(res.data.limit);
            setTotal(res.data.total);
            setProductList(res.data.contents);
        }
        setIsAppLoading(false);
    };

    const handleLoadMoreProduct = async () => {
        setIsButtonLoading(true);
        const res = await fetchAllProductAPI(sortID, +page + 1, showID);
        if (res.data) {
            setTotal(res.data.total);
            setPage(+res.data.page);
            setProductList((prev) => {
                return [...prev, ...res.data.contents];
            });
        }
        setIsButtonLoading(false);
    };

    return (
        <div className="mt-24">
            <MainLayouts>
                <NavigationBar
                    leftContent={
                        <>
                            <Link to="/">Home {`>`} </Link> Shop
                        </>
                    }
                    rightContent={<Link to={-1}>&lt; Return to previous page</Link>}
                />
                <OurShopCountdownBanner />
                <div className="flex flex-col items-center ">
                    <Filter />
                    {isAppLoading === true ? (
                        <div style={{ display: "flex", justifyContent: "center", margin: "120px 0 120px" }}>
                            <Spin indicator={<LoadingOutlined style={{ fontSize: 40, color: "#333333" }} spin />} />
                        </div>
                    ) : (
                        <>
                            <OurShopProducts data={ProductList} handleLoadMoreProduct={handleLoadMoreProduct} />
                        </>
                    )}
                </div>
            </MainLayouts>
        </div>
    );
};

export default OurShopPage;
