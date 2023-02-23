import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"


export default class UserMenu extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <div className="user-menu__title">Login</div>
        </div>
    )
}
