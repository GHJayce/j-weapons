interface String {
  clueTrim(needle?: string): string
  clueTrimLeft(needle?: string): string
  clueTrimRight(needle?: string): string
  toLower(): string
  toUpper(): string
  insert(needle: string, index: number): string
  indexReplace(needle: string, index: number): string
  rangeIndexReplace(needle: string, startIndex?: number, endIndex?: number): string
  getShowCount(needle: string): number
  getShowCounts(): object
  batchReplace(needle: object): string
  sprintf(...params: string[]): String
}
