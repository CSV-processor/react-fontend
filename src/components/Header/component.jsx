import ClassNameComponent from "../../modules/ClassNameComponent"
import UserMenu from "../UserMenu/component"
import {cn} from "../../modules/BemClassname"

import "./component.sass"
import logo from "./logo.svg";


export default class Header extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <img className={cn("header", "logo")()} alt="logo" src={logo} />
            <UserMenu className={cn("header", "user-menu")()} />
        </div>
    )
}
