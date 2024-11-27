import { createContext, useState } from "react";

export const TopBarContext = createContext();

export const TopBarWrapper = (props) => {
    const [isTopBarOpen, setIsTopBarOpen] = useState(false);

    return <TopBarContext.Provider value={{ isTopBarOpen, setIsTopBarOpen }}>{props.children}</TopBarContext.Provider>;
};
