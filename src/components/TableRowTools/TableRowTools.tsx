import React from "react"
import {Delete as DeleteIcon} from "@mui/icons-material"
import {Box, IconButton} from "@mui/material"

import {generateSx, ISxProps} from "modules/MuiSxComponentInject"


export default function TableRowTools({sx = {}}: ISxProps) {
    let thisSx = {}
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </Box>
    )
}
