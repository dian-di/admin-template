import { z } from 'zod';

export const EntryScalarFieldEnumSchema = z.enum(['id','subProjectUuid','url','title','description','status','createdAt','updatedAt']);

export default EntryScalarFieldEnumSchema;
