import React from "react";
const MainLayouts = (props) => {
    return (
        <main className="flex justify-center">
            <div className="container flex flex-col items-center">{props.children}</div>
        </main>
    );
};

export default MainLayouts;
