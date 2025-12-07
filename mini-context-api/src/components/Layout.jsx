import React from "react";
import { Header } from "../../../react-router/src/components";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
}