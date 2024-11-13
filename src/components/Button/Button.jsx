import React from "react";
import styles from "./styles.module.scss";
const Button = ({ content }) => {
    const { button } = styles;

    return <button className={button}>{content}</button>;
};

export default Button;
