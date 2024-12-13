import React from "react";

import CountdownTime from "@c/CountdownTime/CountdownTime";
import Button from "@c/Button/Button";
import { useNavigate } from "react-router-dom";

const BannerCountdown = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/OurShop");
    };
    const targetDate = "2025";

    return (
        <div className="w-[95%] flex h-full pb-6 lg:pb-0 md:w-full flex-col items-center justify-center gap-6 bg-homeCountDown bg-cover bg-center bg-no-repeat lg:h-full lg:w-[56%]">
            <div className="mt-16 flex max-w-64 flex-wrap items-center justify-center gap-3 xl:flex-nowrap">
                <CountdownTime targetDate={targetDate} />
            </div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h2 className="mb-2 text-center text-3xl capitalize text-shark-950">The classics make a comeback</h2>
                </div>
                <div>
                    <Button content={"Buy now"} onClick={handleClick} />
                </div>
            </div>
        </div>
    );
};

export default BannerCountdown;
