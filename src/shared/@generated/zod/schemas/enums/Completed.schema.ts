import * as z from 'zod';

export const CompletedSchema = z.enum(['Completed', 'Uncompleted'])

export type Completed = z.infer<typeof CompletedSchema>;