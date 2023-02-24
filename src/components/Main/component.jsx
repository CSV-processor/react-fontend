import ClassNameComponent from "../../modules/ClassNameComponent"
import ToolsMenu from "../ToolsMenu/component"
import TableEditor from "../TableEditor/component"
import {cn} from "../../modules/BemClassname"

import "./component.sass"


export default class Main extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <ToolsMenu className={cn("main", "tools-menu")()} />
            <TableEditor className={cn("main", "table-editor")()} />
        </div>
    )
}
