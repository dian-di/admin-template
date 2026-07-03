import { DeleteButton, EditButton, ShowButton } from '@refinedev/antd'
import type { BaseRecord } from '@refinedev/core'
import { Space, Table } from 'antd'
import type { ColumnType } from 'antd/es/table'
import dayjs from 'dayjs'
import type { TableSimpleProps } from '../@types/global'

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

const TableSimple: React.FC<TableSimpleProps> = ({ fields, enumMap, showActions = true, ...tableProps }) => {
  const columns: ColumnType<BaseRecord>[] = fields
    .filter((field) => !field.hide)
    .map((field) => {
      let render = field.render ? field.render : (text: any) => text || '--'

      // enum map lookup takes priority over default render
      if (!field.render && enumMap && typeof field.key === 'string' && enumMap[field.key]) {
        const map = enumMap[field.key]
        render = (text: any) => map[text] || text || '--'
      }

      if (typeof field.key === 'string' && isDateField(field.key)) {
        render = (text: any) => dataFormat(text)
      }

      return {
        dataIndex: field.key,
        title: field.title || geneTitle(field.key),
        render,
      }
    })

  if (showActions) {
    columns.push({
      title: 'Actions',
      dataIndex: 'actions',
      render: (_: any, record: BaseRecord) => (
        <Space>
          <EditButton hideText size='small' recordItemId={record.id} />
          <ShowButton hideText size='small' recordItemId={record.id} />
          <DeleteButton hideText size='small' recordItemId={record.id} />
        </Space>
      ),
    })
  }

  return <Table {...tableProps} rowKey='id' columns={columns} />
}

export default TableSimple
