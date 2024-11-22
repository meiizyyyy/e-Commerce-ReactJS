import React from "react";
import styles from "@c/CartPage/styles.module.scss";
import cls from "classnames";
const DataStep = ({ step, content, disable }) => {
    const { stepsLayouts, cartSteps__contentItem, contentItem__number, contentItem__text, isDisabled } = styles;
    return (
        <div className={cartSteps__contentItem}>
            <div className={cls(contentItem__number, { [isDisabled]: disable })}>{step}</div>
            <div className={cls(contentItem__text, { [isDisabled]: disable })}>{content}</div>
        </div>
    );
};

export default DataStep;
