import React from "react";
import classNames from "classnames";
const Button = ({ content, isPrimary = true, ...props }) => {
    return (
        <button
            className={classNames("h-10 w-44 rounded-s border-black text-sm text-white transition-all duration-300", {
                "bg-mine-shaft-900 hover:text-mine-shaft-900 border hover:bg-transparent": isPrimary,
                "hover:bg-mine-shaft-900 border border-black bg-transparent hover:text-white": !isPrimary,
            })}
            //nhan tat ca props truyen xuong
            {...props}>
            {content}
        </button>
    );
};

export default Button;
