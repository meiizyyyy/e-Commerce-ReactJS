import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
const Button = ({ content, isPrimary = true, ...props }) => {
    const { button, button__primary, button__secondary } = styles;

    return (
        <button
            className={classNames(button, {
                [button__primary]: isPrimary,
                [button__secondary]: !isPrimary,
            })}
            //nhan tat ca props truyen xuong
            {...props}>
            {content}
        </button>
    );
};

export default Button;
