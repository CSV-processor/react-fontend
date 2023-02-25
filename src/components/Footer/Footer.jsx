import ClassNameComponent from "../../modules/ClassNameComponent"

import Author from "../Author/Author"

import "./Footer.sass"


export default class Footer extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            <Author className={this.cn("author")()}/>
        </div>
    </>
}
