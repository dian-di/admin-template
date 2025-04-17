// https://juejin.cn/post/7355340024533254163

import { Form, type FormProps } from 'antd'
import { createSchemaFieldRule } from 'antd-zod'
import type { Rule } from 'antd/es/form'
import React, { useMemo } from 'react'
import type z from 'zod'

import { isRequiredByFieldName } from './utils'

type Combine<T, U> = Omit<T, keyof U> & U

interface ComponentProps {
  rules?: any // Adjust the type as needed based on your actual prop requirements
}

interface ChildProps {
  props: { name: string }
}

function ZodForm<
  T extends z.ZodObject<any> | z.ZodEffects<z.ZodObject<any>>,
  K extends (values: z.infer<T>) => void,
>({
  zodSchema,
  onFinish,
  children,
  ...props
}: Combine<
  FormProps,
  {
    children?: React.ReactElement | React.ReactElement[]
    zodSchema?: T
    onFinish?: K
  }
>) {
  // 如果不传 zodSchema，则直接使用 antd 的 Form
  if (!zodSchema) {
    return <Form {...props}>{children}</Form>
  }

  const rule = useMemo(() => {
    // 使用antd-zod库生成校验规则
    return createSchemaFieldRule(zodSchema)
  }, [zodSchema])

  function renderChildren() {
    return React.Children.map(children, (child) => {
      if (!child) {
        return child
      }

      const name = (child as ChildProps).props.name
      let nameList: string[] = []
      if (name) {
        if (!Array.isArray(name)) {
          nameList = [(child as ChildProps).props.name]
        }
        // 根据字段名，判断是否是必填
        const required = isRequiredByFieldName(nameList, zodSchema!)
        const rules: Rule[] = [rule]

        if (required) {
          rules.push({ required: true, message: '' })
        }

        return React.cloneElement(child as React.ReactElement<ComponentProps>, {
          rules,
        })
      }

      return child
    })
  }

  return (
    <Form {...props} onFinish={onFinish}>
      {renderChildren()}
    </Form>
  )
}

export default ZodForm
