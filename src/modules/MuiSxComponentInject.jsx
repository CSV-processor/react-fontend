import React from "react"


export default class MuiSxComponentInject extends React.Component {
    constructor(props) {
        super(props)
        this.parentSx = props.sx ?? []
    }

    generateSx(sx) {
        sx = sx ?? {}
        return [
            sx,
            ...(Array.isArray(this.parentSx) ? this.parentSx : [this.parentSx])
        ]
    }

    generateRender() {
        throw new Error(`You have to implement the method "${this.generateRender.name}"!`)
    }

    render() {
        let result = this.generateRender()
        let sx = this.generateSx(result.props.sx)
        return React.cloneElement(result, {sx: sx})
    }
}
