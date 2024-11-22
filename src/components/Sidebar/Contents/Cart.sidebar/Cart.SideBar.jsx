import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SidebarHeader from "@c/Sidebar/Components/SidebarHeader/SidebarHeader";
import { GrCart } from "react-icons/gr";
import Button from "@c/Button/Button";
import SidebarProductItem from "@c/Sidebar/Components/SidebarProductItem/SidebarProductItem";
import { StoreContext } from "@contexts/Store.context";
import Loading from "@c/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "@contexts/Sidebar.context";

const CartSideBar = ({}) => {
    const { container, sidebar__cart, cart__header, cart__content, cart__button, card__total, cart__totalPrice, loading__overlay, noItem__content, noItem__button } = styles;
    const { handleGetCartList, UserInfo, CartList, setCartList, isSidebarLoading, setIsSidebarLoading } = useContext(StoreContext);
    const { setIsOpen } = useContext(SidebarContext);
    const userId = UserInfo.id;
    const navigate = useNavigate();

    const handleNavigateToShop = () => {
        setIsOpen(false);
        navigate("/OurShop");
    };

    const handleNavigateToCart = () => {
        setIsOpen(false);
        navigate("/Cart");
    };
    const subTotal = CartList.reduce((total, item) => {
        return total + item.total;
    }, 0);
    useEffect(() => {
        handleGetCartList(userId);
    }, []);

    // console.log("Check cart list", CartList);
    // console.log("Check sub Total", subTotal);
    return (
        <div className={container}>
            <div className={cart__header}>
                <SidebarHeader icon={<GrCart />} title="CART" />
            </div>

            {CartList.length === 0 ? (
                <>
                    <div className={noItem__content}>No product in the cart</div>
                    <div className={noItem__button}>
                        <Button content={"RETURN TO SHOP"} isPrimary={false} onClick={handleNavigateToShop} />
                    </div>
                </>
            ) : (
                <>
                    {isSidebarLoading ? (
                        <div className={loading__overlay}>
                            <Loading />
                        </div>
                    ) : (
                        <>
                            <div className={sidebar__cart}>
                                <div className={cart__content}>
                                    {CartList.map((item, index) => {
                                        return (
                                            <SidebarProductItem
                                                key={item.productId}
                                                userId={item.userId}
                                                productId={item.productId}
                                                name={item.name}
                                                images={item.images[0]}
                                                size={item.size}
                                                price={item.price}
                                                quantity={item.quantity}
                                                sku={item.sku}
                                            />
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={card__total}>
                                <div className={cart__totalPrice}>
                                    <p>Sub Total: </p>
                                    <p>${subTotal}</p>
                                </div>
                                <div className={cart__button}>
                                    <Button content={"VIEW CART"} onClick={handleNavigateToCart} />
                                    <Button content={"CHECK OUT"} isPrimary={false} />
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default CartSideBar;
