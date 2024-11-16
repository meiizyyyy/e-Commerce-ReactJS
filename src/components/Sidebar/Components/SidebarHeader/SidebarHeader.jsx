import React from "react";
import styles from "./styles.module.scss";
const SidebarHeader = ({ icon, title }) => {
    const { sidebar__HeaderContainer } = styles;

    return (
        <div className={sidebar__HeaderContainer}>
            {icon}
            <div>{title}</div>
        </div>
    );
};

export default SidebarHeader;
