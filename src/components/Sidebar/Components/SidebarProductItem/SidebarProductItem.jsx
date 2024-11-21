import React from "react";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
const SidebarProductItem = ({ icon, title, name, images, price, quantity, size, sku }) => {
    const { product__item, item__image, item__content, item__title, item__desc, item__quantity, item__price, item__close, item__size, item__sku } = styles;

    return (
        <div className={product__item}>
            <div className={item__image}>
                <img src={images} alt="" />
            </div>

            <div className={item__content}>
                <div className={item__title}>{name}</div>
                <div className={item__size}>Size: {size}</div>

                <div className={item__desc}>
                    <div className={item__quantity}>{quantity} *</div>
                    <div className={item__price}>{quantity * price}</div>
                </div>
                <div className={item__sku}>SKU: {sku}</div>
                <div className={item__close}>
                    <IoMdClose />
                </div>
            </div>
        </div>
    );
};

export default SidebarProductItem;
