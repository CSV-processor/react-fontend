import React from "react"
import {Box} from "@mui/material"

import ToolsMenu from "components/ToolsMenu/ToolsMenu"
import TableEditor from "components/TableEditor/TableEditor"
import {mergeSx, ISxProps} from "modules/muiSxComponentInject"
import {CsvTableLoad, CsvTableDump, ParsedResult} from "modules/tableTools"


export default function Main({sx}: ISxProps) {
    sx = mergeSx(sx, {backgroundColor: "hsl(220, 15%, 16%)"})

    const [data, setData] = React.useState<ParsedResult>({data: [], columns: []})
    const csvTableLoader = new CsvTableLoad()
    const csvTableDumper = new CsvTableDump()

    function handleImportClick(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) return

        const file = event.target.files[0]
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = () => {
            const result = reader.result as string
            const parsedResult = csvTableLoader.load(result)
            setData(parsedResult)
        }
    }

    function handleExportClick(event: React.MouseEvent<HTMLLabelElement>) {
        const csvString = csvTableDumper.dump(data)
        const encodedCsv = encodeURIComponent(csvString)
        const link = document.createElement("a")
        link.href = `data:text/csv;charset=utf-8,${encodedCsv}`
        link.download = "data.csv"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Box sx={sx}>
            <ToolsMenu
                sx={{margin: "0 10px"}}
                onImportClick={handleImportClick}
                onExportClick={handleExportClick}
            />
            <TableEditor
                sx={{margin: "10px 10px 0 10px"}}
                data={data.data}
            />
        </Box>
    )
}
