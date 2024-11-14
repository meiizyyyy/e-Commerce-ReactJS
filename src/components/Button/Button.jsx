import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
const Button = ({ content, isPrimary = true }) => {
    const { button, button__primary, button__secondary } = styles;

    return (
        <button
            className={classNames(button, {
                [button__primary]: isPrimary,
                [button__secondary]: !isPrimary,
            })}>
            {content}
        </button>
    );
};

export default Button;
