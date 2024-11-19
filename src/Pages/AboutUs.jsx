import React from "react";
import MainLayouts from "../components/Layouts/Layouts";
import HighlightTitle from "../components/HighlightTitle/HighlightTitle";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
    return (
        <>
            <MainLayouts>
                <NavigationBar
                    leftContent={
                        <>
                            <Link to="/">Home {`>`}</Link> About Us
                        </>
                    }
                    rightContent={<Link to={-1}>&lt; Return to previous page</Link>}
                />
                <HighlightTitle mainText={"Welcome to the Marseille04 Shop"} subText={"we try our best for you"} />
            </MainLayouts>
        </>
    );
};

export default AboutUsPage;
