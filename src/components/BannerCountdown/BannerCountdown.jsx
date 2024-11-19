import React from "react";
import styles from "./styles.module.scss";
import CountdownTime from "../CountdownTime/CountdownTime";
import Button from "../Button/Button";

const BannerCountdown = () => {
    const { container__bannerCountdown, container__items, headingline } = styles;

    const targetDate = "2025";

    return (
        <div className={container__bannerCountdown}>
            <div className={container__items}>
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

export default BannerCountdown;