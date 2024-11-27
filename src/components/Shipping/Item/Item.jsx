import React from "react";
import styles from "../styles.module.scss";
import Truck from "@icons/svgs/Truck.svg";
const Item = ({ title, description, src }) => {
    const { item, content, content__main, content__sub } = styles;
    return (
        <div className={item}>
            <img src={src} alt="" style={{ width: "40px", height: "41px" }} />
            <div className={content}>
                <div className={content__main}>{title}</div>
                <div className={content__sub}>{description}</div>
            </div>
        </div>
    );
};

export default Item;
