import React from "react";
import styles from "./styles.module.scss";
import Logo from "@images/marseille-logo-white.png";
import Debit from "@icons/svgs/Debit.svg";
import { Link } from "react-router-dom";
import { data } from "./data";

const Footer = () => {
    const { container__footer, container__footer__link, footer__linkItem, footer__checkout, footer__checkoutTitle, footer__checkoutItem, footer__copyright } = styles;
    return (
        <div className={container__footer}>
            <div>
                <Link to={"/"}>
                    <img style={{ width: "153px", height: "53px" }} src={Logo} alt="" />
                </Link>
            </div>
            <div className={container__footer__link}>
                {data.map((item, index) => {
                    return (
                        <div>
                            <Link className={footer__linkItem} to={item.href}>
                                {item.content}
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className={footer__checkout}>
                <div className={footer__checkoutTitle}>Guaranteed safe ckeckout</div>
                <div className={footer__checkoutItem}>
                    <img src={Debit} alt="" />
                    <img src={Debit} alt="" />
                    <img src={Debit} alt="" />
                    <img src={Debit} alt="" />
                    <img src={Debit} alt="" />
                </div>
            </div>
            <div className={footer__copyright}>
                <p>Copyright © Here </p>
            </div>
        </div>
    );
};

export default Footer;
