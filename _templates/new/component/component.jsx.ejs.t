---
to: <%= absPath %>/<%= component_name %>.jsx
---
import React from "react"
import {Box} from "@mui/material"

import {generateSx, ISxProps} from "modules/MuiSxComponentInject"


export default function <%= component_name %>({sx}: ISxProps) {
    const thisSx = {

    }
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>

        </Box>
    )
}
