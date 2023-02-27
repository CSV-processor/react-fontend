import React from "react"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"

import {generateSx, ISxProps} from "modules/MuiSxComponentInject"
import AddRowIcon from "../AddRowIcon/AddRowIcon"
import AddColumnIcon from "../AddColumnIcon/AddColumnIcon"


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
