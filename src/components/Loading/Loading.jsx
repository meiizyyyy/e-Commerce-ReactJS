import React from "react";
import styles from "./styles.module.scss";
import { AiOutlineLoading } from "react-icons/ai";
const Loading = () => {
    const { loading } = styles;
    return <AiOutlineLoading className={loading} />;
};

export default Loading;
