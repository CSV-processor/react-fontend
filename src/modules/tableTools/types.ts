export type ParsedColumn = string
export type ParsedOneData = {[key: string]: any}
export interface ParsedResult {
    columns: ParsedColumn[]
    data: ParsedOneData[]
}
