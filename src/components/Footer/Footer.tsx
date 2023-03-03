import React from "react"
import {Box} from "@mui/material"

import Author from "components/Author/Author"
import {generateSx, ISxProps} from "modules/muiSxComponentInject"


export default function Footer({sx}: ISxProps) {
    const thisSx = {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",

        padding: "20px",

        backgroundColor: "hsl(223, 14%, 10%)",
    }
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>
            <Author />
        </Box>
    )
}
