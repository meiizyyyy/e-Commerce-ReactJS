import React, { useContext, useState } from "react";

import { SidebarContext } from "../../contexts/Sidebar.context";
import classNames from "classnames";
import { TfiClose } from "react-icons/tfi";
import LoginSidebar from "@c/Sidebar/Contents/Login.sidebar/Login.Sidebar";
// import RegisterSidebar from "./Contents/Register.sidebar/Register.Sidebar";
// import CompareSideBar from "./Contents/Compare.sidebar/Compare.SideBar";
// import WishlistSideBar from "./Contents/Wishlist.sidebar/WishList.SideBar";
import CartSideBar from "./Contents/Cart.sidebar/Cart.SideBar";
import Cookies from "js-cookie";
import { getCartAPI } from "@services/api.service.";
import RegisterSidebar from "./Contents/Register.sidebar/Register.Sidebar";

const Sidebar = () => {
    const { isOpen, setIsOpen, type } = useContext(SidebarContext);

    const handleToggle = () => {
        setIsOpen(false);
    };

    const handleRenderSidebarContent = () => {
        switch (type) {
            case "login":
                return <LoginSidebar />;
            // case "compare":
            //     return <CompareSideBar />;
            // case "wishlist":
            //     return <WishlistSideBar />;
            case "cart":
                return <CartSideBar />;
            case "Register":
                return <RegisterSidebar />;
            default:
                break;
        }
        console.log("hehehehehehehehehehehe");
    };

    console.log("check type", type);

    return (
        <div className="relative">
            <div className={classNames({ ["fixed inset-0 z-[1000] bg-[#0000004d] transition-all duration-500"]: isOpen })} onClick={handleToggle}></div>

            <div
                className={classNames("fixed right-0 top-0 z-[1001] h-screen w-[280px] translate-x-full bg-white transition-all duration-500 lg:w-[350px]", {
                    ["translate-x-[0%] transition-all duration-500"]: isOpen,
                })}>
                {isOpen && (
                    <div
                        className="absolute -left-9 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-300 hover:bg-[#e1e1e1] hover:transition-all hover:duration-300 md:-left-11"
                        onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                <div className="mt-4 h-screen">{handleRenderSidebarContent()}</div>
            </div>
        </div>
    );
};

export default Sidebar;
