import {ParsedResult} from "../types"

export abstract class AbstractTableLoad {
    abstract load(data: string): ParsedResult
}

export class LoadError extends Error {
    constructor(message: string = "") {
        super(message)
    }
}
