import { List, useTable } from '@refinedev/antd'
import type { HttpError } from '@refinedev/core'
import { Button, Form, Input, Select, Space } from 'antd'
import type { FieldConfig } from '@/@types/global'
import TableSimple from '@/components/TableSimple'
import type { Entry } from '@/shared/@generated/zod/modelSchema/EntrySchema'
import { StatusList } from '@/shared/const'

interface ISearch {
  subProjectUuid: string
  title: string
  status: string
}

export const EntryList: React.FC<{ fields: FieldConfig[] }> = ({ fields }) => {
  const { tableProps, searchFormProps } = useTable<Entry, HttpError, ISearch>({
    syncWithLocation: true,
    resource: 'entry',
    onSearch: (values) => {
      return [
        {
          field: 'sub_project_uuid', // 注意，只有search参数里的field是snake_case, 其它地方字段都是驼峰
          operator: 'eq',
          value: values.subProjectUuid,
        },
        {
          field: 'title',
          operator: 'contains',
          value: values.title,
        },
        {
          field: 'status',
          operator: 'eq',
          value: values.status,
        },
      ]
    },
  })

  return (
    <List>
      <Form {...searchFormProps}>
        <Space>
          <Form.Item name='subProjectUuid'>
            <Input placeholder='Search by SubProjectUuid' />
          </Form.Item>
          <Form.Item name='title'>
            <Input placeholder='Search by Title' />
          </Form.Item>
          <Form.Item name='status'>
            <Select options={StatusList} className='w-300' placeholder='Status' allowClear />
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
