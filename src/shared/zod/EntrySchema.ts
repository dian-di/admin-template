import { EntrySchema } from '../@generated/zod/modelSchema/EntrySchema'

const EntryCreateSchema = EntrySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export { EntrySchema, EntryCreateSchema }
