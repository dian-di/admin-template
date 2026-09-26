import * as z from 'zod';

export const DemoScalarFieldEnumSchema = z.enum(['id', 'url', 'title', 'description', 'status', 'completed', 'type', 'createdAt', 'updatedAt'])

export type DemoScalarFieldEnum = z.infer<typeof DemoScalarFieldEnumSchema>;