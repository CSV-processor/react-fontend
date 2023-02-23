import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"


export default class Main extends ClassNameComponent {
    constructor(props) {
        super(props, "main")
    }

    render = () => (
        <div className={this.className}></div>
    )
}
