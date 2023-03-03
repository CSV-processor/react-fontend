import React from "react"
import {Button, Box} from "@mui/material"

import {mergeSx, ISxProps} from "modules/muiSxComponentInject"


interface IToolsMenuProps extends ISxProps {
    onImportClick: React.ChangeEventHandler<HTMLInputElement>
    onExportClick: React.MouseEventHandler<HTMLLabelElement>
}


interface IButton {
    children: JSX.Element,
    props?: {[k: string]: any}
}


export default function ToolsMenu({sx, onImportClick, onExportClick}: IToolsMenuProps) {
    sx = mergeSx(sx, {
        display: "flex",
        gap: "5px",

        height: "50px",
    })

    const buttons: IButton[] = [
        {children:
            <>
                <input hidden onChange={onImportClick} accept=".csv" type="file" />
                Import
            </>
        },
        {children: <>Export</>, props: {onClick: onExportClick}}
    ]

    return (
        <Box sx={sx}>{createButton(buttons)}</Box>
    )
}


function createButton(buttons: IButton[]) {
    return buttons.map((item) => (
        <Button
            variant="contained"
            component="label"
            sx={{width: "100%"}}
            {...(item.props ?? {})
        }>
            {item.children}
        </Button>
    ))
}
