import Box from "@mui/material/Box"

import {MuiSxComponentInject} from "../../modules/MuiSxComponentInject.tsx"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main"


export default class Wrapper extends MuiSxComponentInject {
    generateRender() {
        return (
            <Box sx={{
                display: "grid",
                gridTemplateAreas: `
                    "header"
                    "main"
                    "footer"
                `,
                gridTemplateRows: "50px 1fr 130px",
            }}>
                <Header sx={{gridArea: "header"}} />
                <Main sx={{gridArea: "main", paddingTop: "10px"}} />
                <Footer sx={{gridArea: "footer"}}/>
            </Box>
        )
    }
}
