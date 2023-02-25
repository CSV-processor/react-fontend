import ClassNameComponent from "../../modules/ClassNameComponent"
import TableTools from "../TableTools/TableTools"
import TableRowTools from "../TableRowTools/TableRowTools"


import "./TableEditorTools.sass"


export default class TableEditorTools extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            <TableRowTools />
            <TableTools />
        </div>
    </>
}
