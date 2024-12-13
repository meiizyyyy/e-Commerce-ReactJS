import React from "react";
import BannerCountdown from "@c/BannerCountdown/BannerCountdown";
import ProductItem from "@c/ProductItem/ProductItem";
const HighlightMainProduct = (props) => {
    const { data } = props;

    return (
        <div className="flex max-w-[100%] flex-col items-center justify-between gap-3 md:flex-row lg:min-w-[120px]">
            <BannerCountdown />
            <div className="flex items-start justify-end gap-3 md:h-full">
                {data.map((item) => {
                    return (
                        <ProductItem
                            variant="highlight"
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
    );
};

export default HighlightMainProduct;
