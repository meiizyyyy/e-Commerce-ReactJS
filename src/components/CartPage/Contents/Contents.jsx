import React from "react";
import styles from "@c/CartPage/styles.module.scss";
import PaymentInfo from "@c/PaymentInfo/PaymentInfo";
import CartTable from "./CartTable";
const Contents = () => {
    const { contentLayout, left__content, right__content } = styles;
    return (
        <div className={contentLayout}>
            <div className={left__content}>
                <CartTable />
            </div>
            <div className={right__content}>
                <div>Cart Summary</div>
                <PaymentInfo />
            </div>
        </div>
    );
};

export default Contents;
