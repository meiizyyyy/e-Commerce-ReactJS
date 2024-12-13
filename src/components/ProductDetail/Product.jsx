import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "@contexts/Store.context";
import { SidebarContext } from "@contexts/Sidebar.context";
import { useParams } from "react-router-dom";
import { getProductInfoAPI } from "@services/api.service.";
import styles from "./styles.module.scss";
import Button from "@c/Button/Button";
import OurShopProducts from "@c/OurShopProducts/OurShopProducts";
import { fetchAllProductAPI } from "@services/api.service.";
import PaymentInfo from "@c/PaymentInfo/PaymentInfo";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { addToCartAPI } from "@services/api.service.";
import Cookies from "js-cookie";
const Product = () => {
    const {
        product,
        product__leftContent,
        product__rightContent,
        item__image,
        product__name,
        product__price,
        product__size,
        product__description,
        size__item,
        product__sizeCurrent,
        variation,
        product__quantity,
        cta__addToCart,
        line,
        hr__line,
        hr__text,
        cta__buyNow,
        checkout__info,
        clearSize,
    } = styles;
    const { isOpen, setIsOpen, type, setType } = useContext(SidebarContext);
    const { ProductDetail, setProductDetail, isAppLoading, setIsAppLoading, handleGetCartList } = useContext(StoreContext);
    //incase slow API
    const { _id, description, images = [], material, name, price, size = [] } = ProductDetail;
    const { ProductID } = useParams();
    const [ProductList, setProductList] = useState([]);
    const [currentSize, setCurrentSize] = useState("");
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const handleGetProduct = async (ProductID) => {
        setIsAppLoading(true);
        const res = await getProductInfoAPI(ProductID);
        if (res.data && res.data.images && res.data.size) {
            setProductDetail(res.data);
        }
        setIsAppLoading(false);
    };

    const handleChooseSize = (size) => {
        console.log(size);
        setCurrentSize(size);
    };
    const handleClearSize = () => {
        setCurrentSize("");
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

        if (!currentSize) {
            message.warning({
                content: "Please choose size!",
            });
            setIsButtonLoading(false);
            return;
        }

        const res = await addToCartAPI(userId, _id, 1, currentSize);
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

    useEffect(() => {
        handleGetProduct(ProductID);
    }, []);

    return (
        <>
            {isAppLoading === true ? (
                // <div style={{ display: "flex", justifyContent: "center", margin: "120px 0 120px" }}>
                <div className="mb-[120] mt-[120] flex justify-center">
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 40, color: "#333333" }} spin />} />
                </div>
            ) : (
                <div className={product}>
                    <div className={product__leftContent}>
                        {images?.length > 0 ? (
                            images.map((item, index) => (
                                <div className={item__image} key={index}>
                                    <img src={item} alt={`product-image-${index}`} />
                                </div>
                            ))
                        ) : (
                            <div>No images available</div>
                        )}
                    </div>
                    <div className={product__rightContent}>
                        <div className={product__name}>{name}</div>
                        <div className={product__price}>${price}</div>
                        <div className={product__description}>{description}</div>
                        <div className={product__sizeCurrent}>Size: {currentSize} </div>

                        <div className={product__size}>
                            {currentSize && (
                                <div className={clearSize} onClick={handleClearSize}>
                                    Clear
                                </div>
                            )}
                            {size?.length > 0 ? (
                                size.map((item, index) => (
                                    <div key={index} onClick={() => handleChooseSize(item.name)}>
                                        <div className={size__item}>{item.name}</div>
                                    </div>
                                ))
                            ) : (
                                <div>No sizes available</div>
                            )}
                        </div>

                        <div className={variation}>
                            <div className={product__quantity}>Quantity</div>
                            <div className={cta__addToCart}>
                                <Button content={"ADD TO CART"} onClick={handleAddToCart} />
                            </div>
                        </div>
                        <div className={hr__line}>
                            <div className={line}></div>
                            <div className={hr__text}> OR </div>
                            <div className={line}></div>
                        </div>
                        <div className={cta__buyNow}>
                            <Button content={"BUY NOW"} />
                        </div>
                        <div> Brand 01</div>
                        <div>Material: {material}</div>
                        <div className={checkout__info}>
                            <PaymentInfo />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Product;
