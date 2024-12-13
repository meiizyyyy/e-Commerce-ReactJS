import React from "react";
const NavigationBar = ({ leftContent, rightContent }) => {
    return (
        <div className="flex items-center justify-between gap-2 px-2 text-sm text-mine-shaft-900">
            <div className="text-mine-shaft-400">{leftContent}</div>
            <div className="text-mine-shaft-400">{rightContent}</div>
        </div>
    );
};

export default NavigationBar;
