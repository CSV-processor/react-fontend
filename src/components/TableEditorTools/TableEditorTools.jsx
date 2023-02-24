import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"

import ClassNameComponent from "../../modules/ClassNameComponent"
import AddRowIcon from "../AddRowIcon/AddRowIcon"
import AddColumnIcon from "../AddColumnIcon/AddColumnIcon"


import "./TableEditorTools.sass"


export default class TableEditorTools extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            <IconButton aria-label="delete">
                <AddRowIcon />
            </IconButton>
            <IconButton aria-label="delete">
                <AddColumnIcon />
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    </>
}
