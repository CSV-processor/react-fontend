import React from "react"
import ReactDOM from "react-dom/client"
import {createTheme, ThemeProvider} from "@mui/material/styles"

import "./index.css"

import Wrapper from "./components/Wrapper/Wrapper"


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(191, 89%, 42%)",
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Wrapper/>
    </ThemeProvider>
  </React.StrictMode>
)
