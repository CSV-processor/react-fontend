import Box from "@mui/material/Box"

import {MuiSxComponentInject} from "../../modules/MuiSxComponentInject"


export default class UserMenu extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box sx={{width: "60px"}}>
                <Box sx={{
                    height: "100%",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "hsl(193, 95%, 68%)",
                    fontFamily: "\"Roboto\", sans-serif",
                    fontWeight: "bold",
                    "&:hover": {
                        cursor: "pointer",
                        color: "hsl(193, 95%, 50%)",
                    }
                }}>
                    Login
                </Box>
            </Box>
        )
    }
}
