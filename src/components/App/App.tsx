import React from "react"
import {Box} from "@mui/material"

import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import Main from "components/Main/Main"
import {mergeSx, ISxProps} from "modules/muiSxComponentInject"


export default function App({sx}: ISxProps) {
    sx = mergeSx(sx, {
        display: "grid",
        gridTemplateAreas: `
            "header"
            "main"
            "footer"
        `,
        gridTemplateRows: "50px 1fr 130px",
    })

    return (
        <Box sx={sx}>
            <Header sx={{gridArea: "header"}} />
            <Main sx={{gridArea: "main", paddingTop: "10px"}} />
            <Footer sx={{gridArea: "footer"}}/>
        </Box>
    )
}
