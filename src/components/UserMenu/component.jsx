import ClassNameComponent from "../../modules/ClassNameComponent"
import {cn} from "../../modules/BemClassname"

import "./component.sass"


export default class UserMenu extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <div className={cn("user-menu", "title")()}>Login</div>
        </div>
    )
}