import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { SidebarContext } from "../../contexts/Sidebar.context";
import classNames from "classnames";
import { TfiClose } from "react-icons/tfi";
import LoginSidebar from "@c/SideBar/Contents/Login.sidebar/Login.Sidebar";
import RegisterSidebar from "./Contents/Register.sidebar/Register.Sidebar";
import CompareSideBar from "./Contents/Compare.sidebar/Compare.SideBar";
import WishlistSideBar from "./Contents/Wishlist.sidebar/WishList.SideBar";
import CartSideBar from "./Contents/Cart.sidebar/Cart.SideBar";
import Cookies from "js-cookie";
import { getCartAPI } from "../../services/api.service.";

const Sidebar = () => {
    const { container__sidebar, sidebar__overlay, sidebar__content, slider, sidebar__close, sidebar__mainContent } = styles;

    const { isOpen, setIsOpen, type } = useContext(SidebarContext);

    const handleToggle = () => {
        setIsOpen(false);
    };

    const handleRenderSidebarContent = () => {
        switch (type) {
            case "login":
                return <LoginSidebar />;
            case "compare":
                return <CompareSideBar />;
            case "wishlist":
                return <WishlistSideBar />;
            case "cart":
                return <CartSideBar />;
            case "Register":
                return <RegisterSidebar />;

            default:
                break;
        }
    };

    // console.log("check type", type);

    return (
        <div className={container__sidebar}>
            <div className={classNames({ [sidebar__overlay]: isOpen })} onClick={handleToggle}></div>

            <div className={classNames(sidebar__content, { [slider]: isOpen })}>
                {isOpen && (
                    <div className={sidebar__close} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                <div className={sidebar__mainContent}>{handleRenderSidebarContent()}</div>
            </div>
        </div>
    );
};

export default Sidebar;
