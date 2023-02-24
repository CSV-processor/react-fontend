import ClassNameComponent from "../../modules/ClassNameComponent"
import ToolsMenu from "../ToolsMenu/component"
import TableEditor from "../TableEditor/component"

import "./component.sass"


export default class Main extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            <ToolsMenu className={this.cn("tools-menu")()} />
            <TableEditor className={this.cn("table-editor")()} />
        </div>
    </>
}
