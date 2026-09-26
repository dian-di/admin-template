import * as z from 'zod';
import { CompletedSchema } from '../enums/Completed.schema';
import { StatusSchema } from '../enums/Status.schema';
import { TypeSchema } from '../enums/Type.schema';

export const DemoSchema = z.object({
  id: z.number().int(),
  url: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  status: StatusSchema.default("Uninitialized"),
  completed: CompletedSchema.default("Uncompleted"),
  type: TypeSchema.default("Text"),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Demo = z.infer<typeof DemoSchema>;
