import React from "react"
import {withNaming} from "@bem-react/classname"


const cn = withNaming({e: "__", m: "_"})


export default class ClassNameComponent extends React.Component {
    constructor(props) {
        super(props)
        this.baseClassName = (
            this.constructor.name
            .replace(/([a-z0–9])([A-Z])/g, "$1-$2")
            .toLowerCase()
        )
        this.className = cn(this.baseClassName)({}, [props.className])
    }

    cn (elem) {
        return cn(this.baseClassName, elem)
    }

    renderElements() {
        throw new Error("You have to implement the method doSomething!")
    }

    render = () => <>
        <div className={this.className}>
            renderElements()
        </div>
    </>
}
