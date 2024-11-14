import React from "react";
import styles from "./styles.module.scss";

import Youtube from "@icons/svgs/Youtube.svg";
import Compare from "@icons/svgs/Compare.svg";
import Favorite from "@icons/svgs/Favorite.svg";
import Cart from "@icons/svgs/Cart.svg";
import Eyes from "@icons/svgs/Eyes.svg";

const ProductItem = ({ image, hoverImage, name, price }) => {
    const { product__card, itemImg, imgOnHover, CTAList, ctaITEM, product__title, product__price } = styles;
    return (
        <div className={product__card}>
            <div className={itemImg}>
                <img src={image} alt="" />
                <img className={imgOnHover} src={hoverImage} alt="" />
                <div className={CTAList}>
                    <div className={ctaITEM}>
                        <img src={Cart} alt="" />
                    </div>
                    <div className={ctaITEM}>
                        <img src={Favorite} alt="" />
                    </div>
                    <div className={ctaITEM}>
                        <img src={Compare} alt="" />
                    </div>
                    <div className={ctaITEM}>
                        <img src={Eyes} alt="" />
                    </div>
                </div>
            </div>
            <div className={product__title}>
                <a>{name}</a>
            </div>
            <div className={product__price}>${price}</div>
        </div>
    );
};

export default ProductItem;
