import type {SxProps, Theme} from "@mui/material/styles"


export interface ISxProps {
    sx?: SxProps<Theme>
}


export function mergeSx(
    parentSx: SxProps<Theme> = [],
    sx: SxProps<Theme> = {},
): SxProps<Theme> {
    return [sx, ...(Array.isArray(parentSx) ? parentSx : [parentSx])]
}


//export class MuiSxComponentInject extends React.Component {
//    parentSx: any

//    constructor(props: any) {
//        super(props)
//        this.parentSx = props.sx ?? []
//    }

//    generateRender() {
//        throw new Error(`You have to implement the method "${this.generateRender.name}"!`)
//    }

//    render() {
//        let result: any = this.generateRender()
//        let sx = mergeSx({sx: result.props.sx, parentSx: this.parentSx})
//        return React.cloneElement(result, {sx: sx})
//    }
//}
