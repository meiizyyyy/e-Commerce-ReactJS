import React from "react";
import styles from "./styles.module.scss";
const NavigationBar = ({ leftContent, rightContent }) => {
    const { navigationBar, navigationBar__left, navigationBar__right } = styles;
    return (
        <div className={navigationBar}>
            <div className={navigationBar__left}>{leftContent}</div>
            <div className={navigationBar__right}>{rightContent}</div>
        </div>
    );
};

export default NavigationBar;
