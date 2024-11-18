import React, { useContext, useState } from "react";
import styles from "../styles.module.scss";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../../contexts/Sidebar.context";
import { StoreContext } from "../../../contexts/Store.context";
import Cookies from "js-cookie";

const MenuTitle = ({ content, href, setIsOpen }) => {
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const { header__menu, subMenu } = styles;

    const { setType } = useContext(SidebarContext);
    const { UserInfo, setUserInfo, handleLogout } = useContext(StoreContext);

    const handleClick = (e) => {
        if (content === "Sign In" && UserInfo.id === "") {
            e.preventDefault();
            setIsOpen(true);
            setType("login");
        } else if (content === "Search") {
            e.preventDefault();
            setIsOpen(true);
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
        console.log(content);
        if (content === "Sign In" && UserInfo.id) {
            setIsShowSubMenu(true);
        }
    };
    const handleMouseLeave = () => {
        setIsShowSubMenu(false);
    };

    return (
        <>
            <Link to={href} className={header__menu} onClick={handleClick} onMouseEnter={handleOnHover}>
                {isUserLoggedIn(content)}
                {isShowSubMenu && (
                    <div className={subMenu} onMouseLeave={handleMouseLeave}>
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
