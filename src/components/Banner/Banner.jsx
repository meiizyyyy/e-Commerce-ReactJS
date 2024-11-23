import React from "react";
import styles from "./styles.module.scss";
import Button from "@c/Button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const { container, container__content, content__main, container_desc } = styles;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/OurShop");
    };

    return (
        <>
            <div className={container}>
                <div className={container__content}>
                    <h1 className={content__main}>XStore Marseille04 Demo</h1>
                    <div className={container_desc}> Make yours celebrations even more special this years with beautiful.</div>
                    <Button content={"Go to shop"} onClick={handleClick} />
                </div>
            </div>
        </>
    );
};

export default Banner;
