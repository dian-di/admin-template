import type z from 'zod'
import type { ZodType } from 'zod'

export const isRequiredByFieldName = (paths: string[], schema: ZodType) => {
  let shape = unwrapToObject(schema)
  if (!shape) throw new Error('schema is not ZodObject-like')

  for (const path of paths) {
    if (shape) {
      shape = shape?.shape[path]
    }
  }

  // 如果是Optional类型，表示字段可为空
  return !isZodOptional(shape)
}

const unwrapToObject = (
  input: unknown
): z.ZodObject<any> | null => {
  let current: any = input
  while (typeof current === 'object' && current) {
    if ('shape' in current) return current as z.ZodObject<any>
    if ('unwrap' in current && typeof current.unwrap === 'function') {
      current = current.unwrap()
      continue
    }
    if ('_def' in current && current._def && typeof current._def === 'object') {
      const def = current._def as Record<string, unknown>
      if ('innerType' in def) {
        current = (def as any).innerType
        continue
      }
      if ('schema' in def) {
        current = (def as any).schema
        continue
      }
    }
    break
  }
  return null
}

const isZodOptional = (schema: unknown): schema is z.ZodOptional<any> =>
  typeof schema === 'object' && !!schema && 'unwrap' in schema

// removed isZodObject (unused)
