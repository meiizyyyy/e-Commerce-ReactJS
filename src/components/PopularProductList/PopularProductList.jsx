import React from "react";
import styles from "./styles.module.scss";
import ProductItem from "@c/ProductItem/ProductItem";

const PopularProductList = (props) => {

    const { data } = props;
    const { container__popularList } = styles;

    return (
        <>
            <div className={container__popularList}>
                {data.map((item) => {
                    return <ProductItem key={item._id} image={item.images[0]} hoverImage={item.images[1]} name={item.name} price={item.price} details={item} />;
                })}
            </div>
        </>
    );
};

export default PopularProductList;
