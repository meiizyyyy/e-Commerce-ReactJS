import React from "react";

const SelectBox = ({ options, getValue, type, currentValue }) => {
    const { showOption, sortOption } = options;

    console.log(type);

    return (
        <select
            className={`max-w-20 cursor-pointer overflow-auto text-ellipsis border p-1 leading-8 md:max-w-72 `}
            onChange={(e) => getValue(e.target.value, type)}
            value={currentValue}>
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
