import LogoSvg from "./logo.svg";
import {MuiSxComponentInject} from "../../modules/MuiSxComponentInject.tsx"


export default class Logo extends MuiSxComponentInject {
    generateRender() {
        return (
            <img alt="logo" src={LogoSvg}/>
        )
    }
}
