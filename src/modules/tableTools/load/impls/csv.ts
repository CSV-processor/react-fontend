import {parse} from "csv-parse/browser/esm/sync"

import {ParsedResult, ParsedColumn, ParsedOneData} from "../../types"
import {AbstractTableLoad, LoadError} from "../abstract"


export class CsvTableLoad extends AbstractTableLoad {
    load(data: string): ParsedResult {
        const columnsData = this._parseColumnsData(data)
        const rawColumns = this._parseRawColumns(data)
        const columns = this._getColumnsFromRaw(rawColumns)

        return {columns: columns, data: columnsData}
    }

    _parseColumnsData(data: string): ParsedOneData[] {
        try {
            return parse(data, {columns: true})
        } catch (error) {
            throw new LoadError()
        }
    }

    _parseRawColumns(data: string): string[][] {
        try {
            return parse(data, {to_line: 1})
        } catch (error) {
            throw new LoadError()
        }
    }

    _getColumnsFromRaw(raw: string[][]): ParsedColumn[]  {
        const columns = raw[0]
        if (typeof columns === "undefined") throw new LoadError()

        return columns
    }
}
