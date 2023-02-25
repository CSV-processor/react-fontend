import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"

import MuiSxComponentInject from "../../modules/MuiSxComponentInject"
import AddRowIcon from "../AddRowIcon/AddRowIcon"
import AddColumnIcon from "../AddColumnIcon/AddColumnIcon"


export default class TableTools extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box>
                <IconButton aria-label="add-row">
                    <AddRowIcon />
                </IconButton>
                <IconButton aria-label="add-column">
                    <AddColumnIcon />
                </IconButton>
            </Box>
        )
    }
}
