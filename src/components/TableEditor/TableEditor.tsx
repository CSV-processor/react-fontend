import React from "react"
import {Box} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"

import {generateSx, ISxProps} from "modules/MuiSxComponentInject"


const rows = [
    {id: 1, lastName: "Snow", firstName: "Jon", age: 35},
    {id: 2, lastName: "Lannister", firstName: "Cersei", age: 42},
    {id: 3, lastName: "Lannister", firstName: "Jaime", age: 45},
    {id: 4, lastName: "Stark", firstName: "Arya", age: 16},
    {id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null},
    {id: 6, lastName: "Melisandre", firstName: null, age: 150},
    {id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44},
    {id: 8, lastName: "Frances", firstName: "Rossini", age: 36},
    {id: 9, lastName: "Roxie", firstName: "Harvey", age: 65},
];
const columns = [
    {field: "id", headerName: "Id", editable: true, type: "number"},
    {field: "lastName", headerName: "Last name", editable: true},
    {field: "firstName", headerName: "First name", editable: true},
    {field: "age", headerName: "Age", editable: true, type: "number"},
]


export default function TableEditor({sx}: ISxProps) {
    const thisSx = {"height": "578px"}
    sx = generateSx({sx: thisSx, parentSx: sx})

    return (
        <Box sx={sx}>
            <DataGrid
                sx={{marginTop: "3px"}}
                rows={rows}
                columns={columns}
                pageSize={20}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    )
}
