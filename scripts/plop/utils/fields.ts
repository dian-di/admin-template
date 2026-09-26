import { pascalCase } from 'change-case'
import type { ZodObject } from 'zod'

/** Unwrap Zod optional/nullable wrappers to get the base type */
export function getBaseType(schema: any): string {
  let cur = schema
  while (cur._def?.innerType) {
    cur = cur._def.innerType
  }
  return cur._def?.type ?? 'unknown'
}

/** 从 Zod schema 提取页面生成所需的字段元数据 */
export function geneFields(schema: ZodObject<any>) {
  return Object.keys(schema.shape).map((key) => ({
    name: key,
    type: getBaseType(schema.shape[key]),
    listName: `${pascalCase(key)}List`,
    listExpr: `{${pascalCase(key)}List}`,
    mapName: `${pascalCase(key)}Map`,
  }))
}
