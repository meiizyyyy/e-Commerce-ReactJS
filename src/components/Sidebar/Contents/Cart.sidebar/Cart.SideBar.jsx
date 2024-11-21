import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { GrCart } from "react-icons/gr";
import Button from "@c/Button/Button";
import SidebarProductItem from "../../Components/SidebarProductItem/SidebarProductItem";
import { StoreContext } from "../../../../contexts/Store.context";
import { getCartAPI } from "../../../../services/api.service.";

const CartSideBar = ({}) => {
    const { container, sidebar__cart, cart__header, cart__content, cart__button, card__total, cart__totalPrice } = styles;
    const { UserInfo, CartList, setCartList } = useContext(StoreContext);

    const userId = UserInfo.id;

    const fetchCartData = async () => {
        const resCart = await getCartAPI(userId);
        if (resCart.data) {
            setCartList(resCart.data);
        }
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    console.log("Check cart list", CartList);

    return (
        <div className={container}>
            <div className={cart__header}>
                <SidebarHeader icon={<GrCart />} title="CART" />
            </div>
            <div className={sidebar__cart}>
                <div className={cart__content}>
                    {CartList.map((item, index) => {
                        return (
                            <SidebarProductItem
                                key={item.productId}
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
                    <p>Sub Total</p>
                    <p>$123</p>
                </div>
                <div className={cart__button}>
                    <Button content={"VIEW CART"} />
                    <Button content={"CHECK OUT"} isPrimary={false} />
                </div>
            </div>
        </div>
    );
};

export default CartSideBar;
