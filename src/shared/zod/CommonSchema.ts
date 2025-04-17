import { z } from 'zod'

export const PageSchema = z.object({
  page: z.number(),
  limit: z.number(),
})
