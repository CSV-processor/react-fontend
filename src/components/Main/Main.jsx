import ToolsMenu from "../ToolsMenu/ToolsMenu"
import TableEditor from "../TableEditor/TableEditor.tsx"
import Box from "@mui/material/Box"

import {MuiSxComponentInject} from "../../modules/MuiSxComponentInject.tsx"


export default class Main extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box sx={{backgroundColor: "hsl(220, 15%, 16%)"}}>
                <ToolsMenu sx={{margin: "0 10px"}} />
                <TableEditor sx={{margin: "10px 10px 0 10px"}} />
            </Box>
        )
    }
}
