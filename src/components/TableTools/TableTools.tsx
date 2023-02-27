import React from "react"
import {Box, IconButton} from "@mui/material"

import {generateSx, ISxProps} from "modules/MuiSxComponentInject"
import AddRowIcon from "components/AddRowIcon/AddRowIcon"
import AddColumnIcon from "components/AddColumnIcon/AddColumnIcon"


export default function TableEditor({sx = {}}: ISxProps) {
    const thisSx = {}
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>
            <IconButton aria-label="add-row">
                <AddRowIcon />
            </IconButton>
            <IconButton aria-label="add-column">
                <AddColumnIcon />
            </IconButton>
        </Box>
    )
}
