import React, { useContext, useEffect, useState } from "react";
import MainLayouts from "@c/Layouts/Layouts";
import { StoreContext } from "../contexts/Store.context";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { fetchAllProductAPI, getProductInfoAPI } from "../services/api.service.";
import Product from "../components/ProductDetail/Product";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import PopularProductList from "../components/PopularProductList/PopularProductList";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const ProductDetail = () => {
    const { isAppLoading, setIsAppLoading } = useContext(StoreContext);
    const [ProductList, setProductList] = useState([]);

    const loadProduct = async () => {
        setIsAppLoading(true);
        const res = await fetchAllProductAPI(0, 1, 10);
        if (res.data) {
            setProductList(res.data.contents);
        }

        setIsAppLoading(false);
    };

    useEffect(() => {
        loadProduct();
    }, []);

    return (
        <MainLayouts>
            <NavigationBar
                leftContent={
                    <>
                        <Link to="/">Home {`>`} </Link> Product
                    </>
                }
                rightContent={<Link to={-1}>&lt; Return to previous page</Link>}
            />
            <Product />
            {isAppLoading === true ? (
                <div style={{ display: "flex", justifyContent: "center", margin: "120px 0 120px" }}>
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 40, color: "#333333" }} spin />} />
                </div>
            ) : (
                <>
                    <div style={{ marginTop: "80px", textAlign: "center", color: "#333333", fontSize: "25px" }}> Related products </div>
                    <PopularProductList data={ProductList.slice(0, 4)} />
                </>
            )}

            <ScrollRestoration />
        </MainLayouts>
    );
};

export default ProductDetail;
