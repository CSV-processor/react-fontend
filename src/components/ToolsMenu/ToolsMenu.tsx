import React from "react"
import {Button, Box} from "@mui/material"

import {generateSx, ISxProps} from "modules/muiSxComponentInject"


interface IToolsMenuProps extends ISxProps {
    onImportClick?: React.ChangeEventHandler | undefined
    onExportClick?: React.ChangeEventHandler | undefined
}


interface IButton {
    onChange: React.ChangeEventHandler | undefined,
    name: string,
    props?: {[k: string]: any}
}


export default function ToolsMenu({sx, onImportClick, onExportClick}: IToolsMenuProps) {
    const thisSx = {
        display: "flex",
        gap: "5px",

        height: "50px",
    }
    sx = generateSx({sx: thisSx, parentSx: sx})

    const buttons = [
        {onChange: onImportClick, name: "Import", props: {accept: ".csv", type: "file"}},
        {onChange: onExportClick, name: "Export"},
    ]

    return (
        <Box sx={sx}>{createButton(buttons)}</Box>
    )
}


function createButton(buttons: IButton[]) {
    return buttons.map((item) => (
        <Button variant="contained" component="label" sx={{width: "100%"}}>
            <input hidden onChange={item.onChange} {...(item.props ?? {})} />
            {item.name}
        </Button>
    ))
}
