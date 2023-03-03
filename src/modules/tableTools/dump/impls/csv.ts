import {stringify} from "csv-stringify/browser/esm/sync"

import {AbstractTableDump, DumpError} from "../abstract"
import type {ParsedResult} from "../../types"


export class CsvTableDump extends AbstractTableDump {
    dump(parsedData: ParsedResult): string {
        try {
            return stringify(parsedData.data, {header: true, columns: parsedData.columns})
        } catch (error) {
            throw new DumpError()
        }
    }
}
