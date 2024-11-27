import React from "react";
import styles from "@c/CartPage/styles.module.scss";
import SelectBox from "@c/Filter/SelectBox";
import Loading from "@c/Loading/Loading";
const CartTable = ({ CartList, handleGetData, isCartLoading, handleRemoveProduct }) => {
    const { cartTable, size, loading__overlay } = styles;

    const handleQuantityChange = (id, newQuantity) => {
        console.log("Update item:", id, "to quantity:", newQuantity);
    };

    const showOptions = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
    ];

    const getValueSelect = (userId, productId, quantity, size) => {
        const data = { userId: userId, productId: productId, quantity: quantity, size: size };
        handleGetData(data);
    };

    return (
        <div className={cartTable}>
            <table>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th />
                        <th>PRICE</th>
                        <th>SKU</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {CartList.map((item) => (
                        <tr key={item.id}>
                            <td className={styles.product}>
                                <img src={item.images[0]} alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>
                                        <p className={size}>Size:</p> {item.size}
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div onClick={() => handleRemoveProduct(item.userId, item.productId)}>&#128465;</div>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.sku}</td>
                            <td>
                                <SelectBox
                                    options={showOptions}
                                    getValue={(e) => getValueSelect(item.userId, item.productId, e, item.size)}
                                    type="show"
                                    currentValue={item.quantity}
                                />
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isCartLoading && (
                <div className={loading__overlay}>
                    <Loading />
                </div>
            )}
        </div>
    );
};
export default CartTable;
