import React, { useContext } from "react";
import styles from "../styles.module.scss";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../../contexts/Sidebar.context";

const MenuTitle = ({ content, href, setIsOpen }) => {
    const { header__menu } = styles;

    const { setType } = useContext(SidebarContext);

    const handleClick = (e) => {
        if (content === "Sign In") {
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

    return (
        <>
            <Link to={href} className={header__menu} onClick={handleClick}>
                {content}
            </Link>
            {/* <div className={header__menu}>{content}</div> */}
        </>
    );
};

export default MenuTitle;
