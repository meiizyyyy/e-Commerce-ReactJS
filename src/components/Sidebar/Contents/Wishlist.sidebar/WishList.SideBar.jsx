import React from "react";
import styles from "./styles.module.scss";
import { GrFavorite } from "react-icons/gr";
import Button from "@c/Button/Button";
import SidebarHeader from "@c/SideBar/Components/SidebarHeader/SidebarHeader";
import SidebarProductItem from "@c/SideBar/Components/SidebarProductItem/SidebarProductItem";

const WishlistSideBar = () => {
    const { container, sidebar__wishlist, wishlist__header, wishlist__content, wishlist__button } = styles;

    return (
        <div className={container}>
            <div className={wishlist__header}>
                <SidebarHeader icon={<GrFavorite />} title="WISHLIST" />
            </div>
            <div className={sidebar__wishlist}>
                <div className={wishlist__content}>
                    <SidebarProductItem />
                    <SidebarProductItem />
                </div>
            </div>
            <div className={wishlist__button}>
                <Button content={"VIEW WISHLIST"} />
                <Button content={"ADD ALL TO CART"} isPrimary={false} />
            </div>
        </div>
    );
};

export default WishlistSideBar;
