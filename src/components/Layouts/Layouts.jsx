import React from "react";
import styles from "./styles.module.scss";

const MainLayouts = (props) => {
    const { wrapped_layout, container } = styles;

    return (
        <main className={wrapped_layout}>
            <div className={container}>{props.children}</div>
        </main>
    );
};

export default MainLayouts;
