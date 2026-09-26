import ZodForm from '@/components/zodForm'
import { DemoCreateSchema } from '@/shared/zod/DemoSchema'
import { Edit, useForm } from '@refinedev/antd'
import { Form, Input, Select } from 'antd'
import { StatusList, CompletedList, TypeList } from '@/shared/const'

export const DemoEdit = () => {
  const { formProps, saveButtonProps } = useForm({})

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <ZodForm zodSchema={ DemoCreateSchema } {...formProps} layout="vertical">
        <Form.Item label="Url" name="url">
            <Input placeholder="请输入url" />
        </Form.Item>
        <Form.Item label="Title" name="title">
            <Input placeholder="请输入title" />
        </Form.Item>
        <Form.Item label="Description" name="description">
            <Input placeholder="请输入description" />
        </Form.Item>
        <Form.Item label="Status" name="status">
            <Select options={StatusList} className='w-300' placeholder='Status' allowClear />
        </Form.Item>
        <Form.Item label="Completed" name="completed">
            <Select options={CompletedList} className='w-300' placeholder='Completed' allowClear />
        </Form.Item>
        <Form.Item label="Type" name="type">
            <Select options={TypeList} className='w-300' placeholder='Type' allowClear />
        </Form.Item>
      </ZodForm>
    </Edit>
  )
}
