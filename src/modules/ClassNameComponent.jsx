import React from "react"
import {cn} from "@bem-react/classname"


export default class ClassNameComponent extends React.Component {
    constructor(props) {
        super(props)
        let className = this.constructor.name
        let baseClassName = className.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase()
        this.className = cn(baseClassName)({}, [props.className])
    }
}
