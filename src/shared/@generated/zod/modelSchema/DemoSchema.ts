import { z } from 'zod';
import { StatusSchema } from '../inputTypeSchemas/StatusSchema'

/////////////////////////////////////////
// DEMO SCHEMA
/////////////////////////////////////////

export const DemoSchema = z.object({
  status: StatusSchema,
  id: z.number().int(),
  url: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Demo = z.infer<typeof DemoSchema>

export default DemoSchema;
