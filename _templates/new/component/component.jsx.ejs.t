---
to: <%= absPath %>/<%= component_name %>.jsx
---
import ClassNameComponent from "../../modules/ClassNameComponent"

import "./<%= component_name %>.sass"


export default class <%= component_name %> extends ClassNameComponent {
    render = () => <>
        <div className={this.className}></div>
    </>
}
