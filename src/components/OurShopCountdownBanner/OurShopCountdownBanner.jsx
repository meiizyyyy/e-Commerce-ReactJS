import React from "react";
import CountdownTime from "@c/CountdownTime/CountdownTime";

import Button from "@c/Button/Button";
import { useNavigate } from "react-router-dom";

const OurShopCountdownBanner = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/OurShop");
    };
    const targetDate = "2025";
    return (
        <div className="bg-ourShopCountDown mt-4 flex h-full w-full flex-col items-center justify-center gap-4 bg-cover bg-center bg-no-repeat py-10 text-center md:w-full 2xl:max-w-[1250px]">
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                <CountdownTime targetDate={targetDate} />
            </div>
            <div>
                <h2 className="text-3xl capitalize leading-10 text-shark-950">The classics make a comeback</h2>
            </div>
            <div>
                <Button content={"Buy now"} onClick={handleClick} />
            </div>
        </div>
    );
};

export default OurShopCountdownBanner;
