import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"


export default class UserMenu extends ClassNameComponent {
    constructor(props) {
        super(props, "user-menu")
    }

    render = () => (
        <div className={this.className}></div>
    )
}
