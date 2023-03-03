import React from "react"
import {Box} from "@mui/material"

import UserMenu from "components/UserMenu/UserMenu"
import Logo from "components/Logo/Logo"
import {mergeSx, ISxProps} from "modules/muiSxComponentInject"


export default function Header({sx}: ISxProps) {
    sx = mergeSx(sx, {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "hsl(217, 19%, 27%)",
    })

    return (
        <Box sx={sx}>
            <Logo />
            <UserMenu />
        </Box>
    )
}
