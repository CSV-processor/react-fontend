import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import Box from "@mui/material/Box"

import MuiSxComponentInject from "../../modules/MuiSxComponentInject"


export default class TableRowTools extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Box>
        )
    }
}
