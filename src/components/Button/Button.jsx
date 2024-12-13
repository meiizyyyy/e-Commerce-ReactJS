import React from "react";
import classNames from "classnames";
const Button = ({ content, isPrimary = true, ...props }) => {
    return (
        <button
            className={classNames("flex h-10 w-44 items-center justify-center rounded border border-black text-sm transition-all duration-300", {
                "bg-mine-shaft-900 text-white hover:bg-transparent hover:text-mine-shaft-900": isPrimary,
                "border-black bg-transparent text-chicago-700 hover:bg-mine-shaft-900 hover:text-white": !isPrimary,
            })}
            //nhan tat ca props truyen xuong
            {...props}>
            {content}
        </button>
    );
};

export default Button;
