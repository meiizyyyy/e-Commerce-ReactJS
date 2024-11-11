import React from "react";
import styles from "../styles.module.scss";
import Facebook from "@icons/svgs/Facebook.svg";
import Instagram from "@icons/svgs/Instagram.svg";
import Youtube from "@icons/svgs/Youtube.svg";
import Compare from "@icons/svgs/Compare.svg";
import Favorite from "@icons/svgs/Favorite.svg";
import Cart from "@icons/svgs/Cart.svg";

const BoxIcon = ({ type, href }) => {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case "Facebook":
                return Facebook;
            case "Instagram":
                return Instagram;
            case "Youtube":
                return Youtube;
           
        }
    };

    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
};

export default BoxIcon;
