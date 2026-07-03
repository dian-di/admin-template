import { z } from 'zod';

export const DemoScalarFieldEnumSchema = z.enum(['id','url','title','description','status','createdAt','updatedAt']);

export default DemoScalarFieldEnumSchema;
