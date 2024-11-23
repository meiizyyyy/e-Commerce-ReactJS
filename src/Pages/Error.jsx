import { Link, NavLink, useRouteError } from "react-router-dom";
import React from "react";
import { Button, Result } from "antd";
import MainLayouts from "@c/Layouts/Layouts";
import Header from "@c/Header/Header";
import Footer from "@c/Footer/Footer";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <Header />
            <MainLayouts>
                <Result
                    status={error.status}
                    title="Oops!"
                    subTitle={error.statusText || error.message}
                    extra={
                        <Button type="primary" style={{ backgroundColor: "#222222", borderRadius: "2px" }}>
                            <Link to="/">Back to Homepage</Link>
                        </Button>
                    }
                />
            </MainLayouts>
            <Footer />
        </div>
    );
}
