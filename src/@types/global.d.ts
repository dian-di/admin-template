interface FieldConfig {
  key: string | string[]
  title?: string
  render?: (text: any, record: BaseRecord) => React.ReactNode
  hide?: boolean
}

export interface TableSimpleProps {
  fields: FieldConfig[]
  showActions?: boolean
  /** Map of field key -> enum label map, e.g. { status: StatusMap, completed: CompletedMap } */
  enumMap?: Record<string, Record<string, string>>
}
