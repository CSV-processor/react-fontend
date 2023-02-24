import ClassNameComponent from "../../modules/ClassNameComponent"
import UserMenu from "../UserMenu/component"

import "./component.sass"
import logo from "./logo.svg";


export default class Header extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <img className="header__logo" alt="logo" src={logo}/>
            <UserMenu className="header__user-menu"/>
        </div>
    )
}
