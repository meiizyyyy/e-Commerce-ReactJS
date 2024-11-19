import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { CiCircleList } from "react-icons/ci";
import { OurShopContext } from "../../contexts/OurShop.context";
import SelectBox from "./SelectBox";
const Filter = () => {
    const { filter__container, filter__leftContent, filter__rightContent, select__box, showType } = styles;

    const { showOption, sortOption, setSortID, setShowID, setShowGrid, showGrid } = useContext(OurShopContext);

    // console.log(showOption);
    // console.log(sortOption);
    console.log(showGrid);

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
        <div className={filter__container}>
            <div className={filter__leftContent}>
                <SelectBox options={sortOption} getValue={handleSelectedValue} type="sort" />
                <div className={showType}>
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
            <div className={filter__rightContent}>
                <span>Show</span>
                <SelectBox options={showOption} getValue={handleSelectedValue} type="show" />
            </div>
        </div>
    );
};

export default Filter;
