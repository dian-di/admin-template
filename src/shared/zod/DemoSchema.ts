import { DemoSchema } from '../@generated/zod/modelSchema/DemoSchema'

// 创建时使用的 Schema（省略部分字段）
const DemoCreateSchema = DemoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export { DemoCreateSchema, DemoSchema }
