import React, { useContext } from "react";

import { TfiLayoutGrid4 } from "react-icons/tfi";
import { CiCircleList } from "react-icons/ci";
import { OurShopContext } from "@contexts/OurShop.context";
import SelectBox from "./SelectBox";
const Filter = () => {
    const { showOption, sortOption, setSortID, setShowID, setShowGrid, showGrid } = useContext(OurShopContext);

    const handleSelectedValue = (value, type) => {
        if (type === "sort") {
            setSortID(value);
        } else {
            setShowID(value);
        }
    };

    const handleShowGrid = (type) => {
        if (type === "grid") {
            setShowGrid(true);
        } else {
            setShowGrid(false);
        }
    };
    return (
        <div className="flex w-full items-center justify-between gap-2 py-4 px-2 md:px-0 text-sm text-mine-shaft-900 2xl:max-w-[1250px]">
            <div className="flex items-center justify-between gap-5">
                <SelectBox options={sortOption} getValue={handleSelectedValue} type="sort" />
                <div className="flex cursor-pointer items-center justify-between gap-2">
                    <TfiLayoutGrid4
                        style={{ fontSize: "25px" }}
                        onClick={() => {
                            handleShowGrid("grid");
                        }}
                    />
                    <div style={{ height: "25px", width: "1px", backgroundColor: "#e1e1e1" }} />
                    <CiCircleList
                        style={{ fontSize: "25px" }}
                        onClick={() => {
                            handleShowGrid("list");
                        }}
                    />
                </div>
            </div>
            <div className="flex items-center justify-between gap-2">
                <span>Show</span>
                <SelectBox options={showOption} getValue={handleSelectedValue} type="show" />
            </div>
        </div>
    );
};

export default Filter;
