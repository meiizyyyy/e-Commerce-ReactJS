import React from "react";
import Truck from "@icons/svgs/Truck.svg";
const Item = ({ title, description, src }) => {
    return (
        <div className="ml-5 flex max-w-[300px] flex-row items-center justify-start gap-4 md:ml-0 md:h-[104] md:min-w-[290px] 1200:min-w-[150px] ">
            <img src={src} alt="" className="h-10 w-10" />
            <div className="flex flex-col items-start justify-center gap-2 text-white">
                <div className="text-lg">{title}</div>
                <div className="text-[#ffffffc7]">{description}</div>
            </div>
        </div>
    );
};

export default Item;
