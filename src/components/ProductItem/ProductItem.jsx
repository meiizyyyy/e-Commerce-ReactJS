import React, { useContext, useEffect, useState } from "react";
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

const ProductItem = ({ variant, image, hoverImage, productID, name, size, price, details, isHomePage = true }) => {
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

    useEffect(() => {
        if (isHomePage) {
            setShowGrid(true);
        }
    }, [isHomePage]);
    // console.log(isHomePage);
    // console.log("Check showGrid", showGrid);
    // console.log("Check type list", showGrid);

    const customVariant = variant === "highlight" ? "w-1/2 h-full" : variant === "popular" ? "w-1/2 md:w-1/4 " : variant === "ourShop" ? "w-1/3 md:w-1/5" : "";

    return (
        <div className={showGrid ? `flex ${customVariant} flex-col items-center md:justify-start` : "flex items-center justify-center gap-[50px]"}>
            <div className={showGrid ? "group relative w-11/12 cursor-pointer" : "relative cursor-pointer"}>
                <img className="object-cover transition-all duration-700" src={image} alt="" onClick={() => handleGetProductDetail(productID)} />
                <img
                    className="absolute bottom-0 left-0 right-0 top-0 opacity-0 transition-all duration-700 hover:opacity-100 hover:transition-all hover:duration-700"
                    src={hoverImage}
                    alt=""
                    onClick={() => handleGetProductDetail(productID)}
                />
                <div className="absolute bottom-1 right-0 bg-white opacity-0 transition-all duration-300 group-hover:bottom-1 group-hover:right-2 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300">
                    <div className="flex h-10 w-10 cursor-pointer items-center justify-center transition-all duration-300 hover:bg-[#d9d9d9] hover:transition-all hover:duration-300">
                        <img
                            className="h-[17px] w-[17px]"
                            src={Cart}
                            alt=""
                            onClick={() => {
                                handleGetProductDetail(productID);
                            }}
                        />
                    </div>
                    <div className="flex h-10 w-10 cursor-pointer items-center justify-center transition-all duration-300 hover:bg-[#d9d9d9] hover:transition-all hover:duration-300">
                        <img src={Favorite} alt="" />
                    </div>
                    <div className="flex h-10 w-10 cursor-pointer items-center justify-center transition-all duration-300 hover:bg-[#d9d9d9] hover:transition-all hover:duration-300">
                        <img src={Compare} alt="" />
                    </div>
                    <div className="flex h-10 w-10 cursor-pointer items-center justify-center transition-all duration-300 hover:bg-[#d9d9d9] hover:transition-all hover:duration-300">
                        <img src={Eyes} alt="" />
                    </div>
                </div>
            </div>
            <div className={showGrid ? "flex w-full flex-col justify-start" : "flex flex-col items-center justify-start"}>
                {!isHomePage ? (
                    <>
                        <div className="mb-[10px] mt-1 flex w-full items-center justify-center text-center">
                            {details.size.map((item, index) => {
                                return (
                                    <div
                                        className={cls(
                                            "transition-all-200 hover:transition-all-200 flex cursor-pointer items-center justify-center border border-[#e1e1e1] px-[6px] py-1 text-[10px] hover:border-mine-shaft-900",
                                            {
                                                ["border-mine-shaft-900"]: chooseSize === item.name,
                                            },
                                        )}
                                        key={index}
                                        onClick={() => handleChooseSize(item.name)}>
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>
                        {chooseSize && (
                            <div className="transition-all-200 mb-1 w-full cursor-pointer text-center text-xs" onClick={handleClearSize}>
                                clear
                            </div>
                        )}
                        <div
                            className={cls("mt-3 w-full cursor-pointer", {
                                ["text-center"]: !isHomePage && showGrid,
                            })}
                            onClick={() => handleGetProductDetail(productID)}>
                            {name}
                        </div>
                        <div className="mt-0.5 w-full text-center text-sm text-chicago-400" onClick={() => handleGetProductDetail(productID)}>
                            Brand 001
                        </div>
                        <div
                            className={cls("cursor-pointer text-sm text-chicago-700", { ["text-center"]: !isHomePage && showGrid })}
                            onClick={() => handleGetProductDetail(productID)}>
                            ${price}
                        </div>
                        <div className="mt-3 flex items-center justify-center text-center">
                            <Button isPrimary content={isButtonLoading ? <Loading /> : "ADD TO CARD"} onClick={handleAddToCart} />
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className={cls("mt-3 w-full cursor-pointer", {
                                ["text-center"]: !isHomePage,
                            })}
                            onClick={() => handleGetProductDetail(productID)}>
                            {name}
                        </div>
                        <div className={`cursor-pointer text-sm text-chicago-700 ${isHomePage ? "text-start" : "text-center"}`} onClick={() => handleGetProductDetail(productID)}>
                            ${price}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
