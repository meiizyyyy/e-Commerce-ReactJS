import { Link, NavLink, useRouteError } from "react-router-dom";
import React from "react";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return <>Error</>;
}
