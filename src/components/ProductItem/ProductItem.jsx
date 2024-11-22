import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Compare from "@icons/svgs/Compare.svg";
import Favorite from "@icons/svgs/Favorite.svg";
import Cart from "@icons/svgs/Cart.svg";
import Eyes from "@icons/svgs/Eyes.svg";
import cls from "classnames";
import Button from "@c/Button/Button";
import Cookies from "js-cookie";
import { OurShopContext } from "@contexts/OurShop.context";
import { SidebarContext } from "@contexts/Sidebar.context";
import { message } from "antd";
import { addToCartAPI, getCartAPI } from "@services/api.service.";
import { StoreContext } from "@contexts/Store.context";
import { AiOutlineLoading } from "react-icons/ai";
import Loading from "@c/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { getProductInfoAPI } from "@services/api.service.";

const ProductItem = ({ image, hoverImage, productID, name, size, price, details, isHomePage = true }) => {
    const { showGrid, setShowGrid } = useContext(OurShopContext);
    const { isOpen, setIsOpen, type, setType } = useContext(SidebarContext);
    const { handleGetCartList, CartList, setCartList, ProductDetailID, setProductDetailID, ProductDetail, setProductDetail } = useContext(StoreContext);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [chooseSize, setChooseSize] = useState("");
    const navigate = useNavigate();

    const handleChooseSize = (size) => {
        setChooseSize(size);
    };
    const handleClearSize = () => {
        setChooseSize("");
    };

    const handleGetProductDetail = async (productID) => {
        const resProd = await getProductInfoAPI(productID);
        if (resProd.data) {
            console.log(resProd.data);
            setProductDetailID(resProd.data._id);
            setProductDetail(resProd.data);
            navigate(`/ProductDetail/${productID}`);
        }
    };

    const handleAddToCart = async () => {
        setIsButtonLoading(true);
        const userId = Cookies.get("userId");
        if (!userId) {
            message.info({
                content: "Please login!",
            });
            setType("login");
            setIsOpen(true);
            setIsButtonLoading(false);
            return;
        }

        if (!chooseSize) {
            message.warning({
                content: "Please choose size!",
            });
            setIsButtonLoading(false);
            return;
        }

        const res = await addToCartAPI(userId, details._id, 1, chooseSize);
        if (res.data) {
            message.success({
                content: res.data.msg,
            });

            console.log(userId);
            console.log(res.data);
            handleGetCartList(userId);
            setType("cart");
            setIsOpen(true);
        } else {
            message.error({
                content: "Something went wrong :( ",
            });
        }
        setIsButtonLoading(false);
    };

    // console.log("Check cart list", CartList);
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
        btn__loading,
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
                <img src={image} alt="" onClick={() => handleGetProductDetail(productID)} />
                <img className={imgOnHover} src={hoverImage} alt="" onClick={() => handleGetProductDetail(productID)} />
                <div className={CTAList}>
                    <div className={ctaITEM}>
                        <img
                            src={Cart}
                            alt=""
                            onClick={() => {
                                handleGetProductDetail(productID);
                            }}
                        />
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
                            })}
                            onClick={() => handleGetProductDetail(productID)}>
                            {name}
                        </div>
                        <div className={product__brand} onClick={() => handleGetProductDetail(productID)}>
                            Brand 001
                        </div>
                        <div className={cls(product__price, { [isCenter]: !isHomePage && showGrid })} onClick={() => handleGetProductDetail(productID)}>
                            ${price}
                        </div>
                        <div className={product__button}>
                            <Button styles={{ fontSize: "12px" }} content={isButtonLoading ? <Loading /> : "ADD TO CARD"} onClick={handleAddToCart} />
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className={cls(product__title, {
                                [isCenter]: !isHomePage,
                            })}
                            onClick={() => handleGetProductDetail(productID)}>
                            {name}
                        </div>
                        <div className={cls(product__price, { [isCenter]: !isHomePage })} onClick={() => handleGetProductDetail(productID)}>
                            ${price}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
