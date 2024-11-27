import React from "react";
import styles from "./styles.module.scss";
import SidebarHeader from "@c/Sidebar/Components/SidebarHeader/SidebarHeader";
import { TfiReload } from "react-icons/tfi";
import Button from "@c/Button/Button";
import SidebarProductItem from "@c/Sidebar/Components/SidebarProductItem/SidebarProductItem";

const CompareSideBar = () => {
    const { container, sidebar__compare, compare__header, compare__content, compare__button } = styles;

    return (
        <div className={container}>
            <div className={compare__header}>
                <SidebarHeader icon={<TfiReload />} title="COMPARE" />
            </div>
            <div className={sidebar__compare}>
                <div className={compare__content}>
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />
                    <SidebarProductItem />
                </div>
            </div>
            <div className={compare__button}>
                <Button content={"VIEW COMPARE"} />
            </div>
        </div>
    );
};

export default CompareSideBar;
