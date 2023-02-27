import Box from "@mui/material/Box"

import {MuiSxComponentInject} from "../../modules/MuiSxComponentInject"
import Author from "../Author/Author"


export default class Footer extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",

                padding: "20px",

                backgroundColor: "hsl(223, 14%, 10%)",
            }}>
                <Author />
            </Box>
        )
    }
}
