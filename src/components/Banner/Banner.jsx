import React from "react";

import Button from "@c/Button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/OurShop");
    };

    return (
        <>
            <div className="bg-banner flex min-h-[750px] items-center justify-center bg-center bg-no-repeat">   
                <div className="flex flex-col items-center justify-center text-center px-4 gap-8">
                    <h1 className="text-shark-950 text-[42px] leading-[52px]">XStore Marseille04 Demo</h1>
                    <div className="text-chicago-700"> Make yours celebrations even more special this years with beautiful.</div>
                    <Button content={"Go to shop"} onClick={handleClick} />
                </div>
            </div>
        </>
    );
};

export default Banner;
