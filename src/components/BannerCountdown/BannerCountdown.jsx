import React from "react";
import styles from "./styles.module.scss";
import CountdownTime from "@c/CountdownTime/CountdownTime";
import Button from "@c/Button/Button";
import { useNavigate } from "react-router-dom";

const BannerCountdown = () => {
    const { container__bannerCountdown, container__items, headingline } = styles;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/OurShop");
    };
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
                <Button content={"Buy now"} onClick={handleClick} />
            </div>
        </div>
    );
};

export default BannerCountdown;
