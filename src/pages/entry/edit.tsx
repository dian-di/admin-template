import ZodForm from '@/components/zodForm'
import { StatusList } from '@/shared/const'
import { EntryCreateSchema } from '@/shared/zod/EntrySchema'
import { Edit, useForm } from '@refinedev/antd'
import { Form, Input, Select } from 'antd'

export const EntryEdit = () => {
  const { formProps, saveButtonProps } = useForm({})
  // test uuid: c2d29867-3d0b-d497-9191-18a9d8ee7830
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <ZodForm zodSchema={EntryCreateSchema} {...formProps} layout="vertical">
        <Form.Item label="Title" name="title">
          <Input placeholder="请输入标题" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input placeholder="请输入描述" />
        </Form.Item>
        <Form.Item label="Url" name="url">
          <Input placeholder="请输入URL" />
        </Form.Item>
        <Form.Item label="Status" name="status">
          <Select options={StatusList} className="w-300" placeholder="Status" allowClear />
        </Form.Item>
        <Form.Item label="Sub Project" name="subProjectUuid">
          <Input placeholder="请输入Sub Project id" />
        </Form.Item>
      </ZodForm>
    </Edit>
  )
}
