import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"


export default class ToolsMenu extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <div className="tools-menu__button"></div>
            <div className="tools-menu__button"></div>
            <div className="tools-menu__button"></div>
        </div>
    )
}
