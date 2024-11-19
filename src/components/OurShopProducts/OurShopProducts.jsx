import React, { useContext } from "react";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./styles.module.scss";
import { OurShopContext } from "../../contexts/OurShop.context";
import Button from "../Button/Button";
const OurShopProducts = ({ data }) => {
    const { showGrid } = useContext(OurShopContext);

    const { container__highlight, container__product, container__productList } = styles;
    return (
        <>
            <div className={showGrid ? container__product : container__productList}>
                {data.map((item) => {
                    return <ProductItem key={item._id} image={item.images[0]} hoverImage={item.images[1]} name={item.name} price={item.price} details={item} isHomePage={false} />;
                })}
            </div>
            <div style={{ textAlign: "center"}}>
                <Button content={"Load more product"} isPrimary={false} />
            </div>
        </>
    );
};

export default OurShopProducts;
