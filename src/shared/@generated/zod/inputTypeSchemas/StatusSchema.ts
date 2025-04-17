import { z } from 'zod';

export const StatusSchema = z.enum(['Uninitialized','InProgress','Completed']);

export type StatusType = `${z.infer<typeof StatusSchema>}`

export default StatusSchema;
