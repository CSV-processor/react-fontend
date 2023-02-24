import ClassNameComponent from "../../modules/ClassNameComponent"

import Header from "../Header/component"
import Footer from "../Footer/component"
import Main from "../Main/component"

import "./component.sass"


export default class Wrapper extends ClassNameComponent {
    render = () => (
        <div className={this.className}>
<<<<<<< HEAD
            <Header className="wrapper__header"/>
            <Main className="wrapper__main"/>
            <Footer className="wrapper__footer"/>
=======
            <Header className={this.cn("header")()} />
            <Main className={this.cn("main")()} />
            <Footer className={this.cn("footer")()} />
>>>>>>> fa2923b (v 0.2.5)
        </div>
    )
}
