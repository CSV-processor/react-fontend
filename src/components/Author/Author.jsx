import ClassNameComponent from "../../modules/ClassNameComponent"

import "./Author.sass"


export default class Author extends ClassNameComponent {
    render = () => <>
        <div className={this.className}>
            Created by <a class={this.cn("link")()} href="https://github.com/LEv145">LEv145</a> with love&lt;3
        </div>
    </>
}
