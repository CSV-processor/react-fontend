import ClassNameComponent from "../../modules/ClassNameComponent"

import "./component.sass"


export default class Footer extends ClassNameComponent {
    constructor(props) {
        super(props, "footer")
    }

    render = () => (
        <div className={this.className}></div>
    )
}
