import React from "react"
import {Box} from "@mui/material"

import ToolsMenu from "components/ToolsMenu/ToolsMenu"
import TableEditor from "components/TableEditor/TableEditor"
import {generateSx, ISxProps} from "modules/muiSxComponentInject"
import {CsvTableLoad, ParsedOneData} from "modules/tableTools"


export default function Main({sx}: ISxProps) {
    const thisSx = {backgroundColor: "hsl(220, 15%, 16%)"}
    sx = generateSx({sx: thisSx, parentSx: sx})

    const [data, setData] = React.useState<ParsedOneData[]>([])
    const loader = new CsvTableLoad()

    function handleImportClick (event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) return

        const file = event.target.files[0]

        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = () => {
            const result = reader.result as string
            const data_ = loader.load(result)
            setData(data_.data)
        }
    }

    return (
        <Box sx={sx}>
            <ToolsMenu sx={{margin: "0 10px"}} onImportClick={handleImportClick} />
            <TableEditor
                sx={{margin: "10px 10px 0 10px"}}
                data={data}
            />
        </Box>
    )
}
