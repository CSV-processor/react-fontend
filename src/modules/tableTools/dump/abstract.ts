import {ParsedResult} from "../types"

export abstract class AbstractTableDump {
    abstract dump(data: ParsedResult): string
}

export class DumpError extends Error {
    constructor(message: string = "") {
        super(message)
    }
}
