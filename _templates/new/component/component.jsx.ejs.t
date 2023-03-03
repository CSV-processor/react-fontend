---
to: <%= absPath %>/<%= component_name %>.jsx
---
import React from "react"
import {Box} from "@mui/material"

import {mergeSx, ISxProps} from "modules/MuiSxComponentInject"


export default function <%= component_name %>({sx}: ISxProps) {
    sx = mergeSx(sx, {})

    return (
        <Box sx={sx}>

        </Box>
    )
}
