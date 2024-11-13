import React from "react";
import styles from "./styles.module.scss";
import MainLayouts from "../Layouts/Layouts";
const HighlightTitle = () => {
    const { container, container__headline, container__headline_main, container__headline_desc } = styles;

    return (
        <>
            <div className={container}>
                <div className={container__headline}>
                    <div className={container__headline_desc}>don't miss super offers </div>
                    <div className={container__headline_main}>Our best products</div>
                </div>
            </div>
        </>
    );
};

export default HighlightTitle;
