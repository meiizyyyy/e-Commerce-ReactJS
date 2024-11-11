import React from "react";
import styles from "../styles.module.scss";

const MenuTitle = ({ content, href }) => {
    const { header__menu } = styles;
    return <div className={header__menu}>{content}</div>;
};

export default MenuTitle;
