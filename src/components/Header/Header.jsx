import Box from "@mui/material/Box"

import {MuiSxComponentInject} from "../../modules/MuiSxComponentInject"
import UserMenu from "../UserMenu/UserMenu"
import Logo from "../Logo/Logo"


export default class Header extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "hsl(217, 19%, 27%)",
            }}>
                <Logo />
                <UserMenu />
            </Box>
        )
    }
}
