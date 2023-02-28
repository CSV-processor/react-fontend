import React from "react"
import {Box} from "@mui/material"

import ToolsMenu from "components/ToolsMenu/ToolsMenu"
import TableEditor from "components/TableEditor/TableEditor"
import {generateSx, ISxProps} from "modules/MuiSxComponentInject"


export default function Main({sx}: ISxProps) {
    const thisSx = {backgroundColor: "hsl(220, 15%, 16%)"}
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>
            <ToolsMenu sx={{margin: "0 10px"}} />
            <TableEditor sx={{margin: "10px 10px 0 10px"}} />
        </Box>
    )
}
