import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"


export default class Main extends ClassNameComponent {
    render = () => (
        <div className={this.className}></div>
    )
}
