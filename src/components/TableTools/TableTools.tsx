import React from "react"
import {IconButton, Tooltip} from "@mui/material"

import AddRowIcon from "components/AddRowIcon/AddRowIcon"
import AddColumnIcon from "components/AddColumnIcon/AddColumnIcon"


export default function CustomToolbar() {
    return (
        <>
            <Tooltip title={"custom icon"}>
                <IconButton aria-label="add-row">
                    <AddRowIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={"custom icon"}>
                <IconButton aria-label="add-column">
                    <AddColumnIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}
