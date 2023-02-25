---
to: <%= absPath %>/<%= component_name %>.jsx
---
import Box from "@mui/material/Box"

import MuiSxComponentInject from "../../modules/MuiSxComponentInject"


export default class <%= component_name %> extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box sx={{}}>
            </Box>
        )
    }
}
