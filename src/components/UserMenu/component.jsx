import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"


export default class UserMenu extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
<<<<<<< HEAD
            <div className="user-menu__title">Login</div>
=======
            <div className={this.cn("title")()}>Login</div>
>>>>>>> fa2923b (v 0.2.5)
        </div>
    )
}
