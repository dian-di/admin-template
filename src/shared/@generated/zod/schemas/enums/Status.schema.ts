import * as z from 'zod';

export const StatusSchema = z.enum(['Uninitialized', 'InProgress', 'Completed'])

export type Status = z.infer<typeof StatusSchema>;