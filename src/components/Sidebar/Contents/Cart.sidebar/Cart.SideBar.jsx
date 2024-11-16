import React from "react";
import styles from "./styles.module.scss";
import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { GrCart } from "react-icons/gr";
import Button from "@c/Button/Button";
import SidebarProductItem from "../../Components/SidebarProductItem/SidebarProductItem";
const CartSideBar = () => {
    const { container, sidebar__cart, cart__header, cart__content, cart__button, card__total, cart__totalPrice } = styles;

    return (
        <div className={container}>
            <div className={cart__header}>
                <SidebarHeader icon={<GrCart />} title="CART" />
            </div>
            <div className={sidebar__cart}>
                <div className={cart__content}>
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />

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
