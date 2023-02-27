import React from "react"
import {Box} from "@mui/material"

import {generateSx, ISxProps} from "modules/MuiSxComponentInject"


export default function UserMenu({sx}: ISxProps) {
    const thisSx = {width: "60px"}
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>
            <Box sx={{
                height: "100%",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: "hsl(193, 95%, 68%)",
                fontFamily: "\"Roboto\", sans-serif",
                fontWeight: "bold",
                "&:hover": {
                    cursor: "pointer",
                    color: "hsl(193, 95%, 50%)",
                }
            }}>Login</Box>
        </Box>
    )
}
