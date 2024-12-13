import React from "react";
const SidebarHeader = ({ icon, title }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            {icon}
            <div>{title}</div>
        </div>
    );
};

export default SidebarHeader;
