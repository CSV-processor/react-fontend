import React from "react"
import {cn} from "@bem-react/classname"


export default class ClassNameComponent extends React.Component {
    constructor(props, baseClassName) {
        super(props)
        this.className = cn(baseClassName)({}, [props.className])
    }
}
