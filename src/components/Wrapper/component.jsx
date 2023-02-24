import ClassNameComponent from "../../modules/ClassNameComponent"
import {cn} from "../../modules/BemClassname"

import Header from "../Header/component"
import Footer from "../Footer/component"
import Main from "../Main/component"

import "./component.sass"


export default class Wrapper extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <Header className={cn("wrapper", "header")()} />
            <Main className={cn("wrapper", "main")()} />
            <Footer className={cn("wrapper", "footer")()} />
        </div>
    )
}
