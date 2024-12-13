import React from "react";
import MainLayouts from "../Layouts/Layouts";
import Item from "./Item/Item";
import { shipping } from "./shipping_constant";

const Shipping = () => {
    return (
        <>
            <div className="1200:flex-nowrap -mt-10 flex w-[95%] flex-col items-start justify-center gap-5 bg-mine-shaft-900 py-8 md:w-11/12 md:flex-row md:flex-wrap md:items-center lg:w-4/5 lg:flex-wrap lg:justify-evenly lg:px-10">
                {shipping.map((item, index) => {
                    return <Item title={item.title} description={item.description} src={item.src} key={index} />;
                })}
            </div>
        </>
    );
};

export default Shipping;
