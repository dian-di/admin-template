import type { FieldConfig } from '@/@types/global'
import TableSimple from '@/components/TableSimple'
import type { Entry } from '@/shared/@generated/zod/modelSchema/EntrySchema'
import { List, useTable } from '@refinedev/antd'
import type { HttpError } from '@refinedev/core'
import { Button, Form, Input, Space } from 'antd'

interface ISearch {
  SubProjectUuid: string
  Title: string
}

export const EntryList: React.FC<{ fields: FieldConfig[] }> = ({ fields }) => {
  const { tableProps, searchFormProps } = useTable<Entry, HttpError, ISearch>({
    syncWithLocation: true,
    resource: 'entry',
    onSearch: (values) => {
      return [
        {
          field: 'sub_project_uuid',
          operator: 'eq',
          value: values.SubProjectUuid,
        },
        {
          field: 'title',
          operator: 'contains',
          value: values.Title,
        },
      ]
    },
  })

  return (
    <List>
      <Form {...searchFormProps}>
        <Space>
          <Form.Item name="SubProjectUuid">
            <Input placeholder="Search by SubProjectUuid" />
          </Form.Item>
          <Form.Item name="Title">
            <Input placeholder="Search by Title" />
          </Form.Item>
          <Form.Item>
            <Button onClick={searchFormProps.form?.submit}>Search</Button>
          </Form.Item>
        </Space>
      </Form>
      <TableSimple {...tableProps} fields={fields} />
    </List>
  )
}
