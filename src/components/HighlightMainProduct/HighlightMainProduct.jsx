import React from "react";
import CountdownTime from "../CountdownTime/CountdownTime";
import styles from "./styles.module.scss";
import BannerCountdown from "@c/BannerCountdown/BannerCountdown";
import ProductItem from "../ProductItem/ProductItem";
const HighlightMainProduct = (props) => {
    const { data } = props;
    const { container__highlight, container__product } = styles;

    console.log("Check data props", data);
    return (
        <div className={container__highlight}>
            <BannerCountdown />
            <div className={container__product}>
                {data.map((item) => {
                    return <ProductItem key={item.id} image={item.images[0]} hoverImage={item.images[1]} name={item.name} price={item.price} />;
                })}
            </div>
        </div>
    );
};

export default HighlightMainProduct;
