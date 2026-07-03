import { z } from 'zod';

export const EntryScalarFieldEnumSchema = z.enum(['id','url','title','description','status','createdAt','updatedAt']);

export default EntryScalarFieldEnumSchema;
