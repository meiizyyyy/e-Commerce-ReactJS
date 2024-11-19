import React from "react";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
const SidebarProductItem = ({ icon, title }) => {
    const { product__item, item__image, item__content, item__title, item__desc, item__quantity, item__price, item__close, item__size, item__sku } = styles;

    return (
        <div className={product__item}>
            <div className={item__image}>
                <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg" alt="" />
            </div>

            <div className={item__content}>
                <div className={item__title}>Consectetur nibh at</div>
                <div className={item__size}>Size: M</div>

                <div className={item__desc}>
                    <div className={item__quantity}>1 x</div>
                    <div className={item__price}>Price Here</div>
                </div>
                <div className={item__sku}>SKU</div>
                <div className={item__close}>
                    <IoMdClose />
                </div>
            </div>
        </div>
    );
};

export default SidebarProductItem;