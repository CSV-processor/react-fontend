import React from "react"
import {Box, Link} from "@mui/material"

import {mergeSx, ISxProps} from "modules/muiSxComponentInject"


export default function Author({sx}: ISxProps) {
    sx = mergeSx(sx, {
        color: "hsl(36, 2%, 91%)",
        fontFamily: "\"Roboto\", sans-serif",
        fontSize: "15px",
        fontWeight: "bold",
    })

    return (
        <Box sx={sx}>
            Created by <Link href="https://github.com/LEv145">
                LEv145
            </Link> with love{"<3"}
        </Box>
    )
}
