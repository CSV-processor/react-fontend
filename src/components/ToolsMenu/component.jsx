import Button from "@mui/material/Button";

import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"


export default class ToolsMenu extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
<<<<<<< HEAD
            <Button variant="contained" className="tools-menu__button">Import</Button>
            <Button variant="contained" className="tools-menu__button">Save</Button>
            <Button variant="contained" className="tools-menu__button">Export</Button>
=======
            <Button variant="contained" className={this.cn("button")()}>Import</Button>
            <Button variant="contained" className={this.cn("button")()}>Save</Button>
            <Button variant="contained" className={this.cn("button")()}>Export</Button>
>>>>>>> fa2923b (v 0.2.5)
        </div>
    )
}
