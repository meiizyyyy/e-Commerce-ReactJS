import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { SidebarContext } from "@contexts/Sidebar.context";
import { StoreContext } from "@contexts/Store.context";
import Cookies from "js-cookie";
import { TopBarContext } from "@contexts/Topbar.context";

const MenuTitle = ({ content, href, setIsOpen }) => {
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);

    // const { isTopBarOpen, setIsTopBarOpen } = useContext(TopBarContext);
    const { setType } = useContext(SidebarContext);
    const { UserInfo, setUserInfo, handleLogout } = useContext(StoreContext);

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

    // const handleOnHover = () => {
    //     if (content === "Sign In" && UserInfo.id) {
    //         setIsShowSubMenu(true);
    //     }
    // };
    // const handleMouseLeave = () => {
    //     setIsShowSubMenu(false);
    // };

    return (
        <>
            <Link
                to={href}
                className="text-mine-shaft-900 after:bg-shark-900 after:transition-transform-opacity flex-col py-[10px] text-[15px] after:block after:h-[3px] after:w-full after:origin-right after:scale-x-0 after:opacity-0 after:duration-300 hover:after:scale-x-100 hover:after:opacity-100"
                onClick={handleClick}
                // onMouseEnter={handleOnHover}
            >
                {content}
                {/* {isUserLoggedIn(content)} */}
                {/* {isShowSubMenu && (
                    <div  onMouseLeave={handleMouseLeave}>
                        <div>Hello {`${UserInfo.username}`}</div>
                        <div onClick={handleLogout}>LOG OUT</div>
                    </div>
                )} */}
            </Link>
            {/* <div className={header__menu}>{content}</div> */}
        </>
    );
};

export default MenuTitle;
