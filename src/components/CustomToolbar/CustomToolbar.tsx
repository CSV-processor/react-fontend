import React from "react"
import {IconButton, Tooltip} from "@mui/material"

import AddRowIcon from "components/AddRowIcon/AddRowIcon"
import AddColumnIcon from "components/AddColumnIcon/AddColumnIcon"


export default function CustomToolbar() {
    return (
        <>
            <Tooltip title={"Add row"}>
                <IconButton aria-label="add-row">
                    <AddRowIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={"Add column"}>
                <IconButton aria-label="add-column">
                    <AddColumnIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}
