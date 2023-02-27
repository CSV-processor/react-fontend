import Box from "@mui/material/Box"
import Link from "@mui/material/Link"

import {MuiSxComponentInject} from "../../modules/MuiSxComponentInject"


export default class Author extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box sx={{
                color: "hsl(36, 2%, 91%)",
                fontFamily: "\"Roboto\", sans-serif",
                fontSize: "15px",
                fontWeight: "bold",
            }}>
                Created by <Link href="https://github.com/LEv145">
                    LEv145
                </Link> with love&lt;3
            </Box>
        )
    }
}
