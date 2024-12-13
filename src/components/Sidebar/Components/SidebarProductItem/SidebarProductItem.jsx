import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { message } from "antd";
import { removeItemFromCart } from "@services/api.service.";
import { StoreContext } from "@contexts/Store.context";
import Loading from "@c/Loading/Loading";
const SidebarProductItem = ({ icon, title, productId, userId, name, images, price, quantity, size, sku }) => {
    
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
        <div className="group relative gap-2 flex items-start p-5 transition-all duration-300 hover:bg-[#f7f7f7] hover:transition-all hover:duration-300">
            {isLoading && (
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#ffffff80]">
                    <Loading />
                </div>
            )}

            <div className="w-1/3">
                <img className="max-h-28 min-w-14" src={images} alt="" />
            </div>

            <div className="flex h-full max-w-[60%] flex-col justify-center gap-1">
                <div className="overflow-hidden text-ellipsis whitespace-nowrap text-mine-shaft-900">{name}</div>
                <div className="text-[#9e9e9e]">Size: {size}</div>

                <div className="flex items-start gap-2 text-sm text-shark-950">
                    <div className="text-nowrap">{quantity} *</div>
                    <div className="text-nowrap overflow-hidden">{quantity * price}</div>
                </div>
                <div className="">SKU: {sku}</div>
                <div className="absolute right-1 top-8 cursor-pointer opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" onClick={handleRemoveItem}>
                    <IoMdClose />
                </div>
            </div>
        </div>
    );
};

export default SidebarProductItem;
