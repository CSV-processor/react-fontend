import React from "react";

const logo: string = require("./logo.svg").default


export default function Logo() {
    return (
        <img alt="logo" src={logo}/>
    )
}
