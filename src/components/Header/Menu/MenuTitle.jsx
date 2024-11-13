import React from "react";
import styles from "../styles.module.scss";
import { Link } from "react-router-dom";

const MenuTitle = ({ content, href }) => {
    const { header__menu } = styles;
    return (
        <>
            <Link to={href} className={header__menu}>
                {content}
            </Link>
            {/* <div className={header__menu}>{content}</div> */}
        </>
    );
};

export default MenuTitle;
