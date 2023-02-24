import ClassNameComponent from "../../modules/ClassNameComponent"

import Header from "../Header/component"
import Footer from "../Footer/component"
import Main from "../Main/component"

import "./component.sass"


export default class Wrapper extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
            <Header className="wrapper__header"/>
            <Main className="wrapper__main"/>
            <Footer className="wrapper__footer"/>
        </div>
    )
}
