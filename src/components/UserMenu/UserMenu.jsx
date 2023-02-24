import ClassNameComponent from "../../modules/ClassNameComponent"

import "./UserMenu.sass"


export default class UserMenu extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            <div className={this.cn("title")()}>Login</div>
        </div>
    </>
}
