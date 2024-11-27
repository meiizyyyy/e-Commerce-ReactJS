import React from "react";
import styles from "@c/CartPage/styles.module.scss";
import DataStep from "@c/CartPage/CartSteps/DataStep";
import { useLocation } from "react-router-dom";
const CartSteps = () => {
    const { stepsLayouts, cartSteps, line, cartSteps__content, cartSteps__promo } = styles;

    const dataSteps = [
        { steps: 1, content: "Shopping cart" },
        { steps: 2, content: "Checkout" },
        { steps: 3, content: "Order status" },
    ];

    return (
        <div className={cartSteps}>
            <div className={cartSteps__content}>
                {dataSteps.map((item, index) => {
                    return (
                        <>
                            <DataStep step={item.steps} content={item.content} disable={index !== 0} key={index} />
                            {index !== dataSteps.length - 1 && <div className={line}></div>}
                        </>
                    );
                })}
            </div>

            <div className={cartSteps__promo}>🔥 Hurry up, these products are limited 🔥</div>
        </div>
    );
};

export default CartSteps;
