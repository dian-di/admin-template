import path from 'node:path'
import fse from 'fs-extra'
import { ZOD_DIR } from './constants'

/** 从 shared.prisma 读取所有 enum 名 */
export function getEnumNames(schemaPath: string) {
  const content = fse.readFileSync(schemaPath, 'utf-8')
  const names: string[] = []
  const re = /^enum\s+(\w+)/gm
  let m: string[] | null
  // biome-ignore lint/suspicious/noAssignInExpressions: <>
  while ((m = re.exec(content)) !== null) {
    names.push(m[1])
  }
  return names
}

/** 从生成的 Zod enum schema 读取 enum 值列表（无对应 schema 时返回 null） */
export function getEnumValues(enumName: string) {
  const filePath = path.join(ZOD_DIR, `${enumName}.schema.ts`)
  if (!fse.pathExistsSync(filePath)) {
    console.warn(`  [warn] Zod schema not found: ${enumName}.schema.ts`)
    return null
  }
  const content = fse.readFileSync(filePath, 'utf-8')
  const m = /z\.enum\(\[([^\]]+)\]/.exec(content)
  if (!m) return null
  return m[1].split(',').map((s) => s.trim().replace(/^\x27|\x27$/g, ''))
}
