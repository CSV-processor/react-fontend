import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"
import logo from "./logo.svg";


export default class Header extends ClassNameComponent {
    constructor(props) {
        super(props, "header")
    }

    render = () => (
        <div className={this.className}>
            <img className="header__logo" alt="logo" src={logo}/>
            <div className="header__user-menu"></div>
        </div>
    )
}
