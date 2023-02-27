import React from "react"
import {Button, Box} from "@mui/material"

import {generateSx, ISxProps} from "modules/MuiSxComponentInject"


export default function ToolsMenu({sx}: ISxProps) {
    const thisSx = {
        display: "flex",
        gap: "5px",

        height: "50px",
    }
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>
            <Button variant="contained" sx={{width: "100%"}}>Import</Button>
            <Button variant="contained" sx={{width: "100%"}}>Save</Button>
            <Button variant="contained" sx={{width: "100%"}}>Export</Button>
        </Box>
    )
}
