import { createContext, useState } from "react";

export const SidebarContext = createContext(false);

export const SidebarWrapper = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState("");

    return <SidebarContext.Provider value={{ isOpen, setIsOpen, type, setType }}>{props.children}</SidebarContext.Provider>;
};
