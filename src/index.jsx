import React from "react"
import ReactDOM from "react-dom/client"

import "./index.sass"

import Wrapper from "./components/Wrapper/component"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Wrapper/>
  </React.StrictMode>
)
