import React from "react";
import styles from "@c/CartPage/styles.module.scss";
import Button from "@c/Button/Button";
import Loading from "@c/Loading/Loading";
const CartSummary = ({ CartList, isCartLoading }) => {
    const { cartSummary_container, summary_Title, summary_SubTotal, summary_Total, summary_cta, loading__overlay } = styles;

    const Total = CartList.reduce((total, item) => {
        return total + item.total;
    }, 0);

    return (
        <div className={cartSummary_container}>
            <div className={summary_Title}> Cart totals</div>
            <div className={summary_SubTotal}>
                <div>Subtotal</div>
                <div>{Total}</div>
            </div>
            <div className={summary_Total}>
                <div>Total</div>
                <div>{Total}</div>
            </div>
            <div className={summary_cta}>
                <Button content={"PROCESS TO CHECKOUT"} />
                <Button content={"CONTINUE SHOPPING"} isPrimary={false} />
            </div>
            {isCartLoading && (
                <div className={loading__overlay}>
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default CartSummary;
