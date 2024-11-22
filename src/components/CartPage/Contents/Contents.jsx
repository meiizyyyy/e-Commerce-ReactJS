import React from "react";
import styles from "@c/CartPage/styles.module.scss";
const Contents = () => {
    const { contentLayout } = styles;
    return (
        <div className={contentLayout}>
            <div>Products List</div>
            <div>Payment</div>
        </div>
    );
};

export default Contents;
