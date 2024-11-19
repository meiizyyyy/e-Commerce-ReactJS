import React, { useContext, useEffect, useState } from "react";
import MainLayouts from "@c/Layouts/Layouts";
import NavigationBar from "@c/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";
import OurShopCountdownBanner from "@c/OurShopCountdownBanner/OurShopCountdownBanner";
import Filter from "@c/Filter/Filter";
import { OurShopContext } from "../contexts/OurShop.context";
import { fetchAllProductAPI } from "../services/api.service.";
import OurShopProducts from "../components/OurShopProducts/OurShopProducts";
import { StoreContext } from "../contexts/Store.context";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const OurShopPage = () => {
    const { isAppLoading, setIsAppLoading } = useContext(StoreContext);

    const { sortID, showID, showGrid } = useContext(OurShopContext);
    const [ProductList, setProductList] = useState([]);

    useEffect(() => {
        loadProduct();
    }, [sortID, showID]);

    const loadProduct = async () => {
        setIsAppLoading(true);
        const res = await fetchAllProductAPI(sortID, 1, showID);
        if (res.data) {
            setProductList(res.data.contents);
        }
        setIsAppLoading(false);
    };

    return (
        <MainLayouts>
            <NavigationBar
                leftContent={
                    <>
                        <Link to="/">Home {`>`} </Link> Shop
                    </>
                }
                rightContent={<Link to={-1}>&lt; Return to previous page</Link>}
            />
            <div>
                <OurShopCountdownBanner />
            </div>
            <div>
                <Filter />
                {isAppLoading === true ? (
                    <div style={{ display: "flex", justifyContent: "center", margin: "120px 0 120px" }}>
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 40, color: "#333333" }} spin />} />
                    </div>
                ) : (
                    <>
                        <OurShopProducts data={ProductList} />
                    </>
                )}
            </div>
        </MainLayouts>
    );
};

export default OurShopPage;
