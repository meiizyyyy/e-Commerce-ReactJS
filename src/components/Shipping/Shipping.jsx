import React from "react";
import MainLayouts from "../Layouts/Layouts";
import Item from "./Item/Item";
import { shipping } from "./shipping_constant";
import styles from "./styles.module.scss";
const Shipping = () => {
    const { container__shipping } = styles;
    return (
        <>
           
                <div className={container__shipping}>
                    {shipping.map((item, index) => {
                        return <Item title={item.title} description={item.description} src={item.src} key={index} />;
                    })}
                </div>
          
        </>
    );
};

export default Shipping;
