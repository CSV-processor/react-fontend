import Box from "@mui/material/Box"
import {DataGrid} from "@mui/x-data-grid"

import MuiSxComponentInject from "../../modules/MuiSxComponentInject"
import TableEditorTools from "../TableEditorTools/TableEditorTools"


const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const columns = [
    { field: "id", width: 90, editable: true},
    { field: "lastName", width: 90, editable: true},
    { field: "firstName", width: 90, editable: true},
];


export default class TableEditor extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box sx={{"height": "578px"}}>
                <TableEditorTools sx={{marginTop: "15px"}} />
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
}
