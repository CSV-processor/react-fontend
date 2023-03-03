import React from "react"


export interface ISxProps {
    sx?: sxTypes
}
export type sxType = {[key: string]: any}
export type sxTypes = sxType | sxType[]


export function generateSx({
    sx = {},
    parentSx = [],
}: {sx: sxTypes, parentSx: sxTypes}): sxType[] {
    return [sx, ...(Array.isArray(parentSx) ? parentSx : [parentSx])]
}


export class MuiSxComponentInject extends React.Component {
    parentSx: any

    constructor(props: any) {
        super(props)
        this.parentSx = props.sx ?? []
    }

    generateRender() {
        throw new Error(`You have to implement the method "${this.generateRender.name}"!`)
    }

    render() {
        let result: any = this.generateRender()
        let sx = generateSx({sx: result.props.sx, parentSx: this.parentSx})
        return React.cloneElement(result, {sx: sx})
    }
}
