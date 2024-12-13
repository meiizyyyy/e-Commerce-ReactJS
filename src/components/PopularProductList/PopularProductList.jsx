import React from "react";

import ProductItem from "@c/ProductItem/ProductItem";

const PopularProductList = (props) => {
    const { data } = props;
    return (
        <>
            <div className="mt-3 flex items-center justify-center md:w-[container] xl:w-[1240px]">
                <div className="flex flex-wrap items-start gap-0">
                    {data.map((item) => {
                        return (
                            <ProductItem
                                variant="popular"
                                key={item._id}
                                productID={item._id}
                                image={item.images[0]}
                                hoverImage={item.images[1]}
                                name={item.name}
                                price={item.price}
                                details={item}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default PopularProductList;
