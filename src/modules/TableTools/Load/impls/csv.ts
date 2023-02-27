import {parse} from "csv-parse/sync"

import {DataGridItems} from "../../types"
import {AbstractTableLoad, LoadError} from "../abstract"


export class CsvTableLoad extends AbstractTableLoad {
    load(data: string): DataGridItems {
        let parsedData: DataGridItems
        try {
            parsedData = parse(data, {columns: true, skip_empty_lines: true})
        } catch (error) {
            throw new LoadError()
        }
        return parsedData
    }
}
