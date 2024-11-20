import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Compare from "@icons/svgs/Compare.svg";
import Favorite from "@icons/svgs/Favorite.svg";
import Cart from "@icons/svgs/Cart.svg";
import Eyes from "@icons/svgs/Eyes.svg";
import cls from "classnames";
import Button from "../Button/Button";
import { OurShopContext } from "../../contexts/OurShop.context";

const ProductItem = ({ image, hoverImage, name, size, price, details, isHomePage = true }) => {
    const { showGrid, setShowGrid } = useContext(OurShopContext);


    const [chooseSize, setChooseSize] = useState("");

    const handleChooseSize = (size) => {
        setChooseSize(size);
    };
    const handleClearSize = () => {
        setChooseSize("");
    };
    const {
        product__card,
        itemImg,
        imgOnHover,
        CTAList,
        ctaITEM,
        product__content,
        product__title,
        product__price,
        product__size,
        size__item,
        isCenter,
        product__brand,
        product__button,
        product__cardList,
        isActiveSize,
        clearSize,
    } = styles;

    useEffect(() => {
        if (isHomePage) {
            setShowGrid(true);
        }
    }, [isHomePage]);

    // console.log("Check type list", showGrid);
    return (
        <div className={showGrid ? product__card : product__cardList}>
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
            <div className={product__content}>
                {!isHomePage ? (
                    <>
                        <div className={product__size}>
                            {details.size.map((item, index) => {
                                return (
                                    <div className={cls(size__item, { [isActiveSize]: chooseSize === item.name })} key={index} onClick={() => handleChooseSize(item.name)}>
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>
                        {chooseSize && (
                            <div className={clearSize} onClick={handleClearSize}>
                                clear
                            </div>
                        )}
                        <div
                            className={cls(product__title, {
                                [isCenter]: !isHomePage && showGrid,
                            })}>
                            <a>{name}</a>
                        </div>
                        <div className={product__brand}>Brand 001</div>
                        <div className={cls(product__price, { [isCenter]: !isHomePage && showGrid })}>${price}</div>
                        <div className={product__button}>
                            <Button styles={{ fontSize: "12px" }} content={"ADD TO CARD"} />
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className={cls(product__title, {
                                [isCenter]: !isHomePage,
                            })}>
                            <a>{name}</a>
                        </div>
                        <div className={cls(product__price, { [isCenter]: !isHomePage })}>${price}</div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
