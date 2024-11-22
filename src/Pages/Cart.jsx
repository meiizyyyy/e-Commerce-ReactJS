import React from "react";
import MainLayouts from "@c/Layouts/Layouts";
import CartSteps from "@c/CartPage/CartSteps/CartSteps";
import Contents from "@c/CartPage/Contents/Contents";
import styles from "@c/CartPage/styles.module.scss";
const CartPage = () => {
    const { stepsLayouts } = styles;

    return (
        <div>
            <div className={stepsLayouts}>
                <CartSteps />
            </div>
            <MainLayouts>
                <Contents />
            </MainLayouts>
        </div>
    );
};

export default CartPage;
