import React, { useContext, useEffect, useState } from "react";

import SidebarHeader from "@c/Sidebar/Components/SidebarHeader/SidebarHeader";
import { GrCart } from "react-icons/gr";
import Button from "@c/Button/Button";
import SidebarProductItem from "@c/Sidebar/Components/SidebarProductItem/SidebarProductItem";
import { StoreContext } from "@contexts/Store.context";
import Loading from "@c/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "@contexts/Sidebar.context";

const CartSideBar = ({}) => {

    const { handleGetCartList, UserInfo, CartList, setCartList, isSidebarLoading, setIsSidebarLoading } = useContext(StoreContext);
    const { setIsOpen } = useContext(SidebarContext);
    const userId = UserInfo.id;
    const navigate = useNavigate();

    const handleNavigateToShop = () => {
        setIsOpen(false);
        navigate("/OurShop");
    };

    const handleNavigateToCart = () => {
        setIsOpen(false);
        navigate("/Cart");
    };
    const subTotal = CartList.reduce((total, item) => {
        return total + item.total;
    }, 0);
    useEffect(() => {
        handleGetCartList(userId);
    }, []);

    // console.log("Check cart list", CartList);
    // console.log("Check sub Total", subTotal);
    return (
        <div className="flex h-screen w-full flex-col items-center gap-1">
            <div className="text-lg">
                <SidebarHeader icon={<GrCart />} title="CART" />
            </div>

            {CartList.length === 0 ? (
                <>
                    <div className="mt-2 text-sm text-shark-950">No product in the cart</div>
                    <div className="mt-5 text-xs">
                        <Button content={"RETURN TO SHOP"} isPrimary={false} onClick={handleNavigateToShop} />
                    </div>
                </>
            ) : (
                <>
                    {isSidebarLoading ? (
                        <div className="absolute bottom-0 top-0 flex h-full w-full items-center justify-center bg-[#ffffff80]">
                            <Loading />
                        </div>
                    ) : (
                        <>
                            <div className="flex h-4/5 w-full flex-col items-center overflow-y-auto">
                                <div className="w-11/12 overflow-y-auto">
                                    {CartList.map((item, index) => {
                                        return (
                                            <SidebarProductItem
                                                key={item.productId}
                                                userId={item.userId}
                                                productId={item.productId}
                                                name={item.name}
                                                images={item.images[0]}
                                                size={item.size}
                                                price={item.price}
                                                quantity={item.quantity}
                                                sku={item.sku}
                                            />
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex w-full flex-col items-center justify-between gap-1 pb-10">
                                <div className="flex items-center justify-between gap-1">
                                    <p>Sub Total: </p>
                                    <p>${subTotal}</p>
                                </div>
                                <div className="flex w-full flex-col items-center justify-center gap-1">
                                    <Button className="w-11/12" content={"VIEW CART"} onClick={handleNavigateToCart} />
                                    <Button className="w-11/12" content={"CHECK OUT"} isPrimary={false} />
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default CartSideBar;
