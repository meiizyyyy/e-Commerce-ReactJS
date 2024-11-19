import { createContext, useEffect, useState } from "react";

export const OurShopContext = createContext();

export const OurShopWrapper = (props) => {
    const sortOption = [
        {
            label: "Default sorting",
            value: "0",
        },
        {
            label: "Sort by popularity",
            value: "1",
        },
        {
            label: "Sort by average rating",
            value: "2",
        },
        {
            label: "Sort by latest",
            value: "3",
        },
        {
            label: "Sort by price: low to high",
            value: "4",
        },
        {
            label: "Sort by price: high to low",
            value: "5",
        },
    ];

    const showOption = [
        {
            label: "8",
            value: "8",
        },
        {
            label: "12",
            value: "12",
        },
        {
            label: "all",
            value: "",
        },
    ];

    const [sortID, setSortID] = useState(0);
    const [showID, setShowID] = useState(8);
    const [showGrid, setShowGrid] = useState(true);
    const values = {
        sortOption,
        showOption,
        setSortID,
        setShowID,
        setShowGrid,
        sortID,
        showID,
        showGrid,
    };

    return <OurShopContext.Provider value={values}>{props.children}</OurShopContext.Provider>;
};
