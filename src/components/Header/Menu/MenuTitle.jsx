import React, { useContext, useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { SidebarContext } from "@contexts/Sidebar.context";
import { StoreContext } from "@contexts/Store.context";
import Cookies from "js-cookie";
import { TopBarContext } from "@contexts/Topbar.context";

const MenuTitle = ({ content, href, setIsOpen }) => {
    // const { isTopBarOpen, setIsTopBarOpen } = useContext(TopBarContext);

    const { setType } = useContext(SidebarContext);
    const { UserInfo, setUserInfo, handleLogout } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname.slice(1, location.pathname.length);
    const isActive = currentPath === href;


    const handleClick = (e) => {
        if (content === "Sign In" && UserInfo.id === "") {
            e.preventDefault();
            setIsOpen(true);
            setType("login");
        } else if (content === "Search") {
            e.preventDefault();
            setIsTopBarOpen(true);
            setType("search");
        } else {
            setType("");
        }
    };

    const isUserLoggedIn = (content) => {
        if (content === "Sign In" && UserInfo.id) {
            return `Welcome! `;
        } else {
            return content;
        }
    };

    const handleOnHover = () => {
        if (content === "Sign In" && UserInfo.id) {
            setIsShowSubMenu(true);
        }
    };
    const handleMouseLeave = () => {
        setIsShowSubMenu(false);
    };

    useEffect(() => {
        isUserLoggedIn();
    }, [UserInfo.id]);
   
    return (
        <>
            <Link
                to={href}
                className={`relative flex-col py-[10px] text-[15px] text-mine-shaft-900 after:block after:h-[3px] after:w-full after:origin-right after:scale-x-0 after:bg-shark-900 after:opacity-0 after:duration-300 hover:after:scale-x-100 hover:after:opacity-100 ${
                    isActive ? "after:scale-x-100 after:opacity-100" : ""
                }`}
                onClick={handleClick}
                onMouseEnter={handleOnHover}>
                {isUserLoggedIn(content)}
                {isShowSubMenu && (
                    <div
                        className="absolute right-1 top-10 flex w-56 flex-col items-start justify-center gap-1 bg-[#ffffffe6] p-3 shadow-customHeader backdrop-blur-sm transition-all duration-500 ease-linear"
                        onMouseLeave={handleMouseLeave}
                        onClick={handleMouseLeave}>
                        <div>Hello {`${UserInfo.username}`}</div>
                        <div onClick={handleLogout}>LOG OUT</div>
                    </div>
                )}
            </Link>
            {/* <div className={header__menu}>{content}</div> */}
        </>
    );
};

export default MenuTitle;
