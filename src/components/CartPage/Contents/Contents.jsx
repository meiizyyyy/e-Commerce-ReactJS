import React, { useContext, useState } from "react";
import styles from "@c/CartPage/styles.module.scss";
import PaymentInfo from "@c/PaymentInfo/PaymentInfo";
import CartTable from "./CartTable";
import CartSummary from "./CartSummary";
import Button from "@c/Button/Button";
import { StoreContext } from "@contexts/Store.context";
import { changeQuantityAPI } from "@services/api.service.";
import { removeItemFromCart } from "@services/api.service.";
import { removeCartAPI } from "@services/api.service.";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Contents = () => {
    const {
        contentLayout,
        left__content,
        right__content,
        table__action,
        discount__action,
        clear__action,
        loading,
        cartEmpty,
        cartEmpty__mainText,
        cartEmpty__icon,
        cartEmpty__subText,
        cartEmpty__button,
    } = styles;
    const { CartList, handleGetCartList, UserInfo } = useContext(StoreContext);
    const [isCartLoading, setIsCartLoading] = useState(false);
    const navigate = useNavigate();

    const handleNavigateToShop = () => {
        navigate("/OurShop");
    };
    const handleGetData = async (data) => {
        setIsCartLoading(true);
        // console.log(data);
        const { userId, productId, quantity, size } = data;
        const res = await changeQuantityAPI(userId, productId, quantity, size, true);
        if (res.data) {
            // console.log(res.data);
            handleGetCartList(userId);
        } else {
            console.log("Something went wrong!");
        }
        setIsCartLoading(false);
    };

    const handleRemoveProduct = async (userId, productId) => {
        setIsCartLoading(true);
        console.log("Check ", userId, productId);
        const res = await removeItemFromCart(userId, productId);
        if (res.data) {
            handleGetCartList(userId);
        } else {
            console.log("Something went wrong!");
        }
        setIsCartLoading(false);
    };

    const handleRemoveCart = async () => {
        setIsCartLoading(true);
        console.log(UserInfo.id);
        const res = await removeCartAPI(UserInfo.id);
        if (res.data) {
            handleGetCartList(UserInfo.id);
        } else {
            console.log("Something went wrong!");
        }
        setIsCartLoading(false);
    };

    return (
        <>
            {CartList.length > 0 ? (
                <>
                    <div className={contentLayout}>
                        <div className={left__content}>
                            <CartTable CartList={CartList} handleGetData={handleGetData} isCartLoading={isCartLoading} handleRemoveProduct={handleRemoveProduct} />
                            <div className={table__action}>
                                <div className={discount__action}>
                                    <input type="text" name="" id="" placeholder="Coupon code" />
                                    <Button content={"OK"} isPrimary={false} />
                                </div>
                                <div className={clear__action}>
                                    <Button content={<div>&#128465; CLEAR SHOPPING CART</div>} isPrimary={false} onClick={handleRemoveCart} />
                                </div>
                            </div>
                        </div>
                        <div className={right__content}>
                            <CartSummary CartList={CartList} isCartLoading={isCartLoading} />
                            <PaymentInfo />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={cartEmpty}>
                        <div className={cartEmpty__icon}>
                            <IoCartOutline />
                        </div>
                        <div className={cartEmpty__mainText}>YOUR SHOPPING CART IS EMPTY</div>
                        <div className={cartEmpty__subText}>We invite you to get acquainted with an assortment of our shop. Surely you can find something for yourself!</div>
                        <div className={cartEmpty__button}>
                            <Button content={"RETURN TO SHOP"} onClick={handleNavigateToShop} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Contents;
