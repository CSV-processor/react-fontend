import React from "react"
import {Box, InputBase} from "@mui/material"
import MUIDataTable, {TableToolbarSelect} from "mui-datatables"

import {generateSx, ISxProps} from "modules/MuiSxComponentInject"


const data = [
    {id: 1, lastName: "Snow", firstName: "Man", age: 140},
    {id: 1, lastName: "Snow", firstName: "Man", age: 140},
    {id: 1, lastName: "Snow", firstName: "Man", age: 140},
    {id: 1, lastName: "Snow", firstName: "Man", age: 140},
    {id: 1, lastName: "Snow", firstName: "Man", age: 140},
    {id: 1, lastName: "Snow", firstName: "Man", age: 140},
    {id: 1, lastName: "Snow", firstName: "Man", age: 140},
    {id: 1, lastName: "Snow", firstName: "Man", age: 140},
    {id: 1, lastName: "Snow", firstName: "Man", age: 140},
    {id: 1, lastName: "Snow", firstName: "Man", age: 140},
]

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


function customBodyRender(value: any, _tableMeta: any, _updateValue: any) {
    let type = "string"
    if (typeof value === "number") type = "number"

    return <InputBase defaultValue={value} type={type} />
}


export default function TableEditor({sx}: ISxProps) {
    const thisSx = {"height": "578px"}
    sx = generateSx({sx: thisSx, parentSx: sx})

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
                }}
            />
        </Box>
    )
}
