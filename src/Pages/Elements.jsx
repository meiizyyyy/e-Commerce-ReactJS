import React from "react";
import MainLayouts from "@c/Layouts/Layouts";
import NavigationBar from "@c/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";
import HighlightTitle from "@c/HighlightTitle/HighlightTitle";
const ElementsPage = () => {
    return (
        <>
            <MainLayouts>
                <NavigationBar
                    leftContent={
                        <>
                            <Link to="/">Home {`>`}</Link> Elements
                        </>
                    }
                    rightContent={<Link to={-1}>&lt; Return to previous page</Link>}
                />
                <HighlightTitle mainText={"This Page is under development"} subText={"please comeback later!"} />
            </MainLayouts>
        </>
    );
};

export default ElementsPage;
