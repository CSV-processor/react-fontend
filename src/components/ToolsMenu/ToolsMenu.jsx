import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import MuiSxComponentInject from "../../modules/MuiSxComponentInject"


export default class ToolsMenu extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box sx={{
                display: "flex",
                gap: "5px",

                height: "50px",
            }}>
                <Button variant="contained" sx={{width: "100%"}}>Import</Button>
                <Button variant="contained" sx={{width: "100%"}}>Save</Button>
                <Button variant="contained" sx={{width: "100%"}}>Export</Button>
            </Box>
        )
    }
}
