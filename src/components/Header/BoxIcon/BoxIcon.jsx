import React from "react";

import Facebook from "@icons/svgs/Facebook.svg";
import Instagram from "@icons/svgs/Instagram.svg";
import Youtube from "@icons/svgs/Youtube.svg";
import Compare from "@icons/svgs/Compare.svg";
import Favorite from "@icons/svgs/Favorite.svg";
import Cart from "@icons/svgs/Cart.svg";

const BoxIcon = ({ type, href }) => {
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
        <div className="bg-shark-950 flex h-[26px] w-[26px] items-center justify-center rounded-full">
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
};

export default BoxIcon;
