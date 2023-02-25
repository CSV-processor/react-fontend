import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"

import ClassNameComponent from "../../modules/ClassNameComponent"

import "./TableRowTools.sass"


export default class TableRowTools extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    </>
}