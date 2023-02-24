import Button from "@mui/material/Button";

import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"


export default class ToolsMenu extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <Button variant="contained" className="tools-menu__button">Import</Button>
            <Button variant="contained" className="tools-menu__button">Save</Button>
            <Button variant="contained" className="tools-menu__button">Export</Button>
        </div>
    )
}
