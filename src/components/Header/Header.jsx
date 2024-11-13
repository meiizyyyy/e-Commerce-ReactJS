import React from "react";
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./data";
import styles from "./styles.module.scss";
import MenuTitle from "./Menu/MenuTitle";
import Logo from "@images/Logo-retina.png";
import Cart from "@icons/svgs/Cart.svg";
import Favorite from "@icons/svgs/Favorite.svg";
import Compare from "@icons/svgs/Compare.svg";
import { Link } from "react-router-dom";

const Header = () => {
    const { container, container__header, container__headerIcon, container__headerBox, container__headerMenu } = styles;

    return (
        <div className={container}>
            <div className={container__header}>
                <div className={container__headerBox}>
                    <div className={container__headerIcon}>
                        {dataBoxIcon.map((item, index) => {
                            return <BoxIcon type={item.type} href={item.href} key={index} />;
                        })}
                    </div>
                    <div className={container__headerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => {
                            return <MenuTitle content={item.content} href={item.href} key={index} />;
                        })}
                    </div>
                </div>

                <div>
                    <Link to={"/"}>
                        <img style={{ width: "153px", height: "53px" }} src={Logo} alt="" />
                    </Link>
                </div>

                <div className={container__headerBox}>
                    <div className={container__headerMenu}>
                        {dataMenu.slice(3, 7).map((item, index) => {
                            return <MenuTitle content={item.content} href={item.href} key={index} />;
                        })}
                    </div>
                    <div className={container__headerBox}>
                        <img src={Compare} alt="" />
                        <img src={Favorite} alt="" />
                        <img src={Cart} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
