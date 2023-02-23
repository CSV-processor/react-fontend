import ClassNameComponent from "../../modules/ClassNameComponent"
import ToolsMenu from "../ToolsMenu/component"

import "./component.sass"


export default class Main extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <ToolsMenu/>
        </div>
    )
}
