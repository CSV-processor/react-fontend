import React from "react"
import {Box, Link} from "@mui/material"

import {generateSx, ISxProps} from "modules/MuiSxComponentInject"


export default function Author({sx}: ISxProps) {
    const thisSx = {
        color: "hsl(36, 2%, 91%)",
        fontFamily: "\"Roboto\", sans-serif",
        fontSize: "15px",
        fontWeight: "bold",
    }
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>
            Created by <Link href="https://github.com/LEv145">
                LEv145
            </Link> with love{"<3"}
        </Box>
    )
}
