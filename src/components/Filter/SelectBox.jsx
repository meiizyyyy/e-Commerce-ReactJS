import React from "react";
import styles from "./styles.module.scss";
const SelectBox = ({ options, getValue, type, currentValue }) => {
    const { select__box } = styles;

    return (
        <select className={select__box} onChange={(e) => getValue(e.target.value, type) } value={currentValue}>
            {options.map((option) => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
};

export default SelectBox;
