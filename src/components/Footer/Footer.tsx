import React from "react"
import {Box} from "@mui/material"

import Author from "components/Author/Author"
import {mergeSx, ISxProps} from "modules/muiSxComponentInject"


export default function Footer({sx}: ISxProps) {
    sx = mergeSx(sx, {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",

        padding: "20px",

        backgroundColor: "hsl(223, 14%, 10%)",
    })

    return (
        <Box sx={sx}>
            <Author />
        </Box>
    )
}
