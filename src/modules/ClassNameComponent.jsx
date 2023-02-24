import React from "react"
import {cn} from "./BemClassname"


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
}
