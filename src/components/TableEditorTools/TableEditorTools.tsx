import React from "react"
import {Box} from "@mui/material"

import {generateSx, ISxProps} from "modules/MuiSxComponentInject"
import TableTools from "components/TableTools/TableTools"


export default function TableEditorTools({sx = {}}: ISxProps) {
    const thisSx = {justifyContent: "space-between", display: "flex"}
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>
            <TableTools />
        </Box>
    )
}
