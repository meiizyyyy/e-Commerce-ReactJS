import React from "react";
import CountdownTime from "@c/CountdownTime/CountdownTime";
import styles from "./styles.module.scss";
import Button from "@c/Button/Button";

const OurShopCountdownBanner = () => {
    const { container__ourShopCountdown,container__ourShopCountdownTimer, headingline } = styles;
    const targetDate = "2025";
    return (
        <div className={container__ourShopCountdown}>
            <div className={container__ourShopCountdownTimer}>
                <CountdownTime targetDate={targetDate} />
            </div>
            <div>
                <h2 className={headingline}>The classics make a comeback</h2>
            </div>
            <div>
                <Button content={"Buy now"} />
            </div>
        </div>
    );
};

export default OurShopCountdownBanner;
