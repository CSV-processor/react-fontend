import {stringify} from "csv-stringify/sync"

import {DataGridItems} from "../../types"
import {AbstractTableDump, DumpError} from "../abstract"


export class CsvTableDump extends AbstractTableDump {
    dump(data: DataGridItems): string {
        let dumpedData: string
        try {
            dumpedData = stringify(data, {header: true})
        } catch (error) {
            throw new DumpError()
        }
        return dumpedData
    }
}
