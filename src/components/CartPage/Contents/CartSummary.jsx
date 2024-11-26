import React from "react";
import styles from "@c/CartPage/styles.module.scss";
import Button from "@c/Button/Button";
const CartSummary = () => {
    const { cartSummary_container, summary_Title, summary_SubTotal, summary_Total, summary_cta } = styles;

    return (
        <div className={cartSummary_container}>
            <div className={summary_Title}> Cart totals</div>
            <div className={summary_SubTotal}>
                <div>Subtotal</div>
                <div>$299.97</div>
            </div>
            <div className={summary_Total}>
                <div>Total</div>
                <div>$299.97</div>
            </div>
            <div className={summary_cta}>
                <Button content={"PROCESS TO CHECKOUT"} />
                <Button content={"CONTINUE SHOPPING"} isPrimary={false} />
            </div>
        </div>
    );
};

export default CartSummary;
