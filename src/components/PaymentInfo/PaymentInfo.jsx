import React from "react";
import styles from "./styles.module.scss";
import { data } from "./data";

const PaymentInfo = () => {
    const { checkout__item } = styles;
    return (
        <div>
            <fieldset>
                <legend>
                    Guaranteed <span>safe </span>checkout
                </legend>
                {data.map((item, index) => {
                    return <img src={item.src} alt="" width={"50px"} height={"34px"} />;
                })}
            </fieldset>
            <p>Your Payment is 100% Secure</p>
        </div>
    );
};

export default PaymentInfo;
