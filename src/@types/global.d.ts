interface FieldConfig {
  key: string | string[] // 字段名称
  title?: string // 自定义列标题
  render?: (text: any, record: BaseRecord) => React.ReactNode // 自定义渲染函数
  hide?: boolean // 是否隐藏该列
}

// 定义组件的 Props 类型
export interface TableSimpleProps {
  fields: FieldConfig[] // 字段配置
  showActions?: boolean // 是否显示 Actions 列
}
