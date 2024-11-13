import React from "react";
import styles from "./styles.module.scss";
import ProductItem from "../ProductItem/ProductItem";

const PopularProductList = (props) => {
    const { data } = props;
    const { container__popularList } = styles;

    return (
        <>
            <div className={container__popularList}>
                {data.map((item) => {
                    return <ProductItem key={item.id} image={item.images[0]} hoverImage={item.images[1]} name={item.name} price={item.price} />;
                })}
            </div>
        </>
    );
};

export default PopularProductList;
