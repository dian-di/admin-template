import { z } from 'zod';
import { StatusSchema } from '../inputTypeSchemas/StatusSchema'

/////////////////////////////////////////
// ENTRY SCHEMA
/////////////////////////////////////////

export const EntrySchema = z.object({
  status: StatusSchema,
  id: z.number().int(),
  subProjectUuid: z.string(),
  url: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Entry = z.infer<typeof EntrySchema>

export default EntrySchema;
