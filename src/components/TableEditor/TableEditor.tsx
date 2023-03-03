import React from "react"
import {Box, FormControlLabel, TextField} from "@mui/material"
import MUIDataTable from "mui-datatables"

import {mergeSx, ISxProps} from "modules/muiSxComponentInject"
import CustomToolbar from "components/CustomToolbar/CustomToolbar"


const columns = [
    {
        name: "id",
        label: "Id",
        options: {customBodyRender: customBodyRender},
    },
    {
        name: "lastName",
        label: "LastName",
        options: {customBodyRender: customBodyRender},
    },
    {
        name: "firstName",
        label: "FirstName",
        options: {customBodyRender: customBodyRender},
    },
    {
        name: "age",
        label: "Age",
        options: {customBodyRender: customBodyRender},
    },
];


function customBodyRender(value: any, _tableMeta: any, updateValue: any) {
    return <FormControlLabel
        label=""
        control={<TextField value={value} />}
        onChange={event => updateValue((event.target as HTMLInputElement).value)}
    />
}


interface TableEditorProps extends ISxProps {
    data: {[key: string]: any}[]
}


export default function TableEditor({sx, data}: TableEditorProps) {
    sx = mergeSx(sx, {"height": "578px"})

    return (
        <Box sx={sx}>
            <MUIDataTable
                title={"Employee List"}
                data={data}
                columns={columns}
                options={{
                    viewColumns: false,
                    tableBodyMaxHeight: "590px",
                    pagination: false,
                    sort: false,
                    customToolbar: () => (
                        <CustomToolbar />
                    )
                }}
            />
        </Box>
    )
}
