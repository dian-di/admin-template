import type { TableSimpleProps } from '@/@types/global'
import { DeleteButton, EditButton, ShowButton } from '@refinedev/antd'
import type { BaseRecord } from '@refinedev/core'
import { Space, Table } from 'antd'
import type { ColumnType } from 'antd/es/table'
import dayjs from 'dayjs'

function dataFormat(text: string, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!text) return '--'
  return dayjs(text).format(format)
}

function geneTitle(title: string | string[]) {
  let titleRes = ''
  if (Array.isArray(title)) {
    titleRes = title.join('.')
  } else {
    titleRes = title
  }
  return titleRes.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
}

const dateFieldList = ['createdAt', 'updatedAt']
function isDateField(field: string) {
  return dateFieldList.includes(field)
}

const TableSimple: React.FC<TableSimpleProps> = ({ fields, showActions = true, ...tableProps }) => {
  // const { tableProps } = useTable({
  //   syncWithLocation: true,
  // })

  // 动态生成列配置
  const columns: ColumnType<BaseRecord>[] = fields
    .filter((field) => !field.hide) // 过滤掉需要隐藏的字段
    .map((field) => {
      // 如果字段是日期类型，则使用 dataFormat 函数进行格式化\
      let render = field.render ? field.render : (text: any) => text || '--'
      if (typeof field.key === 'string' && isDateField(field.key)) {
        render = (text: any) => dataFormat(text)
      }
      return {
        dataIndex: field.key,
        title: field.title || geneTitle(field.key), // 默认标题生成规则
        render,
      }
    })

  // 添加 Actions 列
  if (showActions) {
    columns.push({
      title: 'Actions',
      dataIndex: 'actions',
      render: (_: any, record: BaseRecord) => (
        <Space>
          <EditButton hideText size="small" recordItemId={record.id} />
          <ShowButton hideText size="small" recordItemId={record.id} />
          <DeleteButton hideText size="small" recordItemId={record.id} />
        </Space>
      ),
    })
  }

  return <Table {...tableProps} rowKey="id" columns={columns} />
}

export default TableSimple
