import React from "react";
import styles from "./styles.module.scss";
import MainLayouts from "@c/Layouts/Layouts";
const HighlightTitle = ({ mainText, subText }) => {
    const { container, container__headline, container__headline_main, container__headline_desc } = styles;

    return (
        <>
            <div className={container}>
                <div className={container__headline}>
                    <div className={container__headline_desc}>{subText} </div>
                    <div className={container__headline_main}>{mainText}</div>
                </div>
            </div>
        </>
    );
};

export default HighlightTitle;
