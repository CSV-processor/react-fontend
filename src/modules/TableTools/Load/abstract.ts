import {DataGridItems} from "../types"

export abstract class AbstractTableLoad {
    abstract load(data: string): DataGridItems
}

export class LoadError extends Error {
    constructor(message: string = "") {
        super(message)
    }
}
