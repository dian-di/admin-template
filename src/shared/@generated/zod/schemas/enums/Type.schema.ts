import * as z from 'zod';

export const TypeSchema = z.enum(['Text', 'Image', 'Video'])

export type Type = z.infer<typeof TypeSchema>;