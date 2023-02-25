import ClassNameComponent from "../../modules/ClassNameComponent"

import "./Footer.sass"


export default class Footer extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            <div class={this.cn("author")()}>
                Created by <a class={this.cn("link")()} href="https://github.com/LEv145">LEv145</a> with love&lt;3</div>
        </div>
    </>
}
