import React from "react";
import styles from "@c/CartPage/styles.module.scss";
import PaymentInfo from "@c/PaymentInfo/PaymentInfo";
import CartTable from "./CartTable";
import CartSummary from "./CartSummary";
import Button from "@c/Button/Button";
const Contents = () => {
    const { contentLayout, left__content, right__content, table__action, discount__action, clear__action } = styles;
    return (
        <div className={contentLayout}>
            <div className={left__content}>
                <CartTable />
                <div className={table__action}>
                    <div className={discount__action}>
                        <input type="text" name="" id="" placeholder="Coupon code" />
                        <Button content={"OK"} isPrimary={false} />
                    </div>
                    <div className={clear__action}>
                        <Button content={<div>&#128465; CLEAR SHOPPING CART</div>} isPrimary={false} />
                    </div>
                </div>
            </div>
            <div className={right__content}>
                <CartSummary />
                <PaymentInfo />
            </div>
        </div>
    );
};

export default Contents;
