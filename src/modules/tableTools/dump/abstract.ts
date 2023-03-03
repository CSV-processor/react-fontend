import {DataGridItems} from "../types"

export abstract class AbstractTableDump {
    abstract dump(data: DataGridItems): string
}

export class DumpError extends Error {
    constructor(message: string = "") {
        super(message)
    }
}
