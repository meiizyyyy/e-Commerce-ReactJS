import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { message } from "antd";
import { removeItemFromCart } from "@services/api.service.";
import { StoreContext } from "@contexts/Store.context";
import Loading from "@c/Loading/Loading";
const SidebarProductItem = ({ icon, title, productId, userId, name, images, price, quantity, size, sku }) => {
    const { product__item, item__image, item__content, item__title, item__desc, item__quantity, item__price, item__remove, item__size, item__sku, loading__overlay } = styles;
    const [isLoading, setIsLoading] = useState(false);
    const { handleGetCartList } = useContext(StoreContext);

    const handleRemoveItem = async () => {
        setIsLoading(true);
        const res = await removeItemFromCart(userId, productId);
        if (res.data) {
            handleGetCartList(userId);
            message.success({
                content: "Remove item successfully",
            });
        }
        setIsLoading(false);
    };

    return (
        <div className={product__item}>
            {isLoading && (
                <div className={loading__overlay}>
                    <Loading />
                </div>
            )}

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
                <div className={item__remove} onClick={handleRemoveItem}>
                    <IoMdClose />
                </div>
            </div>
        </div>
    );
};

export default SidebarProductItem;
