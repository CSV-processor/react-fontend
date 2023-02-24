import Button from "@mui/material/Button";

import ClassNameComponent from "../../modules/ClassNameComponent"
import {cn} from "../../modules/BemClassname"

import "./component.sass"


export default class ToolsMenu extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <Button variant="contained" className={cn("tools-menu", "button")()}>Import</Button>
            <Button variant="contained" className={cn("tools-menu", "button")()}>Save</Button>
            <Button variant="contained" className={cn("tools-menu", "button")()}>Export</Button>
        </div>
    )
}
