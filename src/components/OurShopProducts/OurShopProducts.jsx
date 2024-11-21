import React, { useContext } from "react";
import ProductItem from "@c/ProductItem/ProductItem";
import styles from "./styles.module.scss";
import { OurShopContext } from "@contexts/OurShop.context";

import { StoreContext } from "@contexts/Store.context";
import { AiOutlineLoading } from "react-icons/ai";
import Button from "@c/Button/Button";

const OurShopProducts = ({ data, handleLoadMoreProduct }) => {
    const { showGrid, total } = useContext(OurShopContext);
    const { isButtonLoading, setIsButtonLoading } = useContext(StoreContext);
    const { container__highlight, container__product, container__productList, btn__loading } = styles;
    return (
        <>
            <div className={showGrid ? container__product : container__productList}>
                {data.map((item) => {
                    return <ProductItem key={item._id} image={item.images[0]} hoverImage={item.images[1]} name={item.name} price={item.price} details={item} isHomePage={false} />;
                })}
            </div>
            {data.length < total && (
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <Button content={isButtonLoading ? <AiOutlineLoading className={btn__loading} /> : "Load more product"} isPrimary={false} onClick={handleLoadMoreProduct} />
                </div>
            )}
        </>
    );
};

export default OurShopProducts;
