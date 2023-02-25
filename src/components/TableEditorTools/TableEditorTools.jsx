import Box from "@mui/material/Box"

import MuiSxComponentInject from "../../modules/MuiSxComponentInject"
import TableTools from "../TableTools/TableTools"
import TableRowTools from "../TableRowTools/TableRowTools"


export default class TableEditorTools extends MuiSxComponentInject {
    generateRender() {
        return (
             <Box sx={{justifyContent: "space-between", display: "flex"}}>
                <TableRowTools />
                <TableTools />
            </Box>
        )
    }
}
