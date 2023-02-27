import React from "react"
import {Box} from "@mui/material"

import UserMenu from "components/UserMenu/UserMenu"
import Logo from "components/Logo/Logo"
import {generateSx, ISxProps} from "modules/MuiSxComponentInject"


export default function Header({sx}: ISxProps) {
    const thisSx = {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "hsl(217, 19%, 27%)",
    }
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>
            <Logo />
            <UserMenu />
        </Box>
    )
}
