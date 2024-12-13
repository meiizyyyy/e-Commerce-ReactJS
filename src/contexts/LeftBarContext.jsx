import { createContext, useEffect, useState } from "react";

export const LeftBarContext = createContext(false);
export const LeftBarWrapper = (props) => {
    const [isLeftBarOpen, setIsLeftBarOpen] = useState(false);

    if (isLeftBarOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return <LeftBarContext.Provider value={{ isLeftBarOpen, setIsLeftBarOpen }}>{props.children}</LeftBarContext.Provider>;
};
