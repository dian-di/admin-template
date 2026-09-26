import { pathToFileURL } from 'node:url'
import fse from 'fs-extra'

/** 通过 import() 加载已有 const 文件，提取 enum 对象与 label 映射 */
export async function loadExistingEnum(filePath: string, enumName: string) {
  if (!fse.pathExistsSync(filePath)) return null
  try {
    const fileUrl = pathToFileURL(filePath).href
    const mod = await import(fileUrl)
    const enumObj = mod[enumName]
    const mapObj = mod[`${enumName}Map`]
    if (!enumObj || !mapObj) return null

    const values = Object.keys(enumObj)
    const labels: Record<string, string> = { ...mapObj }
    return { values, labels }
  } catch {
    return null
  }
}

/** 合并：保留已有值与 labels，追加新增值（新值 label 默认为自身） */
export function mergeEnum(
  prismaValues: string[],
  existing: { values: string[]; labels: Record<string, string> } | null,
) {
  const existingValues = existing?.values ?? []
  const existingLabels = existing?.labels ?? {}

  const mergedValues = [...existingValues]
  const mergedLabels = { ...existingLabels }

  for (const val of prismaValues) {
    if (!mergedValues.includes(val)) {
      mergedValues.push(val)
    }
    if (!(val in mergedLabels)) {
      mergedLabels[val] = val
    }
  }

  return { values: mergedValues, labels: mergedLabels }
}
