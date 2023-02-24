import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"

import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"


export default class TableEditorTools extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    </>
}
