import React from "react";
const NavigationBar = ({ leftContent, rightContent }) => {
    return (
        <div className="flex w-full items-start justify-start gap-2 px-2 text-sm text-mine-shaft-900 md:items-center md:justify-between 2xl:max-w-[1250px]">
            <div className="text-mine-shaft-400">{leftContent}</div>
            <div className="hidden text-mine-shaft-400 md:block">{rightContent}</div>
        </div>
    );
};

export default NavigationBar;
