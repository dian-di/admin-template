import fse from 'fs-extra'
import Handlebars from 'handlebars'
import { TEMPLATE_PATH } from './constants'
import { lcFirst } from './utils'

const template = Handlebars.compile(fse.readFileSync(TEMPLATE_PATH, 'utf-8'))

/** 渲染单个 enum 常量文件 */
export function generateEnumFile(
  enumName: string,
  values: string[],
  labels: Record<string, string>,
) {
  return template({
    name: enumName,
    entries: values.map((v) => ({ value: v, label: labels[v] ?? v })),
  })
}

/** 生成 barrel index（export * from './xxx'） */
export function generateBarrelIndex(enumNames: string[]) {
  const lines = enumNames.map((name) => `export * from './${lcFirst(name)}'`)
  lines.push('')
  return lines.join('\n')
}
