import ClassNameComponent from "../../modules/ClassNameComponent"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main"

import "./Wrapper.sass"


export default class Wrapper extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            <Header className={this.cn("header")()} />
            <Main className={this.cn("main")()} />
            <Footer className={this.cn("footer")()} />
        </div>
    </>
}
