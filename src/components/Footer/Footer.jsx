import React from "react";

import Logo from "@images/marseille-logo-white.png";
import Debit from "@icons/svgs/Debit.svg";
import { Link } from "react-router-dom";
import { data } from "./data";

const Footer = () => {
    return (
        <div className="mt-24 flex flex-col items-center justify-center gap-10 bg-[#363636] text-white">
            <div>
                <Link to={"/"} className="flex items-center justify-center pt-14">
                    <img style={{ width: "153px", height: "53px" }} src={Logo} alt="" />
                </Link>
            </div>
            <div className="hover:text- container flex flex-wrap items-center justify-center gap-10 px-2">
                {data.map((item, index) => {
                    return (
                        <div className="hover:text-shark-400 duration-300 hover:transition-all hover:duration-300">
                            <Link to={item.href} key={index}>
                                {item.content}
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center justify-center">
                <div>Guaranteed safe checkout</div>
            </div>
            <div className="flex h-max w-9 justify-center gap-8">
                <img src={Debit} alt="12312312" />
                <img src={Debit} alt="123" />
                <img src={Debit} alt="123123" />
                <img src={Debit} alt="123123" />
                <img src={Debit} alt="123123" />
            </div>

            <div className="flex items-center justify-center mb-20">
                <p>Copyright © Here </p>
            </div>
        </div>
    );
};

export default Footer;
