import { createContext, useState } from "react";

export const SidebarContext = createContext(false);

export const SidebarWrapper = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    if (isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    const [type, setType] = useState("");

    return <SidebarContext.Provider value={{ isOpen, setIsOpen, type, setType }}>{props.children}</SidebarContext.Provider>;
};
