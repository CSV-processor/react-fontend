import React from "react"


export default class MuiSxComponentInject extends React.Component {
    constructor(props) {
        super(props)
        this.parentSx = props.sx ?? []
    }

    generateSx(items = []) {
        let sx = this.parentSx
        return [items, ...(Array.isArray(sx) ? sx : [sx])]
    }
}
