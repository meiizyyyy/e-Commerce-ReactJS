import React, { useContext } from "react";
import ProductItem from "@c/ProductItem/ProductItem";
import { OurShopContext } from "@contexts/OurShop.context";
import { StoreContext } from "@contexts/Store.context";
import { AiOutlineLoading } from "react-icons/ai";
import Button from "@c/Button/Button";
import { getProductInfoAPI } from "@services/api.service.";

const OurShopProducts = ({ data, handleLoadMoreProduct }) => {
    const { showGrid, total } = useContext(OurShopContext);
    const { isButtonLoading, setIsButtonLoading } = useContext(StoreContext);

    return (
        <>
            <div className={showGrid ? "mt-2 flex w-full flex-wrap items-start justify-evenly gap-5 2xl:max-w-[1250px]" : "flex flex-col items-start justify-center gap-5"}>
                {data.map((item) => {
                    return (
                        <ProductItem
                            key={item._id}
                            productID={item._id}
                            image={item.images[0]}
                            hoverImage={item.images[1]}
                            name={item.name}
                            price={item.price}
                            details={item}
                            isHomePage={false}
                            variant="ourShop"
                        />
                    );
                })}
            </div>
            {data.length < total && (
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <Button
                        content={isButtonLoading ? <AiOutlineLoading className="loading tex animate-spin" /> : "Load more product"}
                        isPrimary={true}
                        onClick={handleLoadMoreProduct}
                    />
                </div>
            )}
        </>
    );
};

export default OurShopProducts;
