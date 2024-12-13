import React from "react";

import MainLayouts from "@c/Layouts/Layouts";
const HighlightTitle = ({ mainText, subText }) => {
    return (
        <>
            <div className="lg:max-w-[1240px] mb-4 mt-16 flex items-center justify-center text-nowrap md:w-[95%] md:before:h-[4px] md:before:w-1/2 md:before:border-b md:before:border-t md:after:h-[4px] md:after:w-1/2 md:after:border-b md:after:border-t">
                <div className="text-center">
                    <div className="text-sm uppercase leading-8 text-chicago-700">{subText} </div>
                    <div className="flex items-center justify-center text-2xl leading-8 text-mine-shaft-900">{mainText}</div>
                </div>
            </div>
        </>
    );
};

export default HighlightTitle;
