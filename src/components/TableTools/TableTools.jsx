import IconButton from "@mui/material/IconButton"

import ClassNameComponent from "../../modules/ClassNameComponent"
import AddRowIcon from "../AddRowIcon/AddRowIcon"
import AddColumnIcon from "../AddColumnIcon/AddColumnIcon"

import "./TableTools.sass"


export default class TableTools extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            <IconButton aria-label="add-row">
                <AddRowIcon />
            </IconButton>
            <IconButton aria-label="add-column">
                <AddColumnIcon />
            </IconButton>
        </div>
    </>
}
