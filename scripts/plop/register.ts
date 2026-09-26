import { camelCase, pascalCase, snakeCase } from 'change-case'
import type { NodePlopAPI } from 'plop'
import { biomeFormatFiles } from './utils/format'
import { ensureResource } from './utils/resources'

/** 注册全局 Handlebars helper */
export function registerHelpers(plop: NodePlopAPI) {
  plop.setHelper('pascalCase', pascalCase)
  plop.setHelper('camelCase', camelCase)
  plop.setHelper('snakeCase', snakeCase)
  plop.setHelper('eq', (a: any, b: any) => a === b)
}

/** 注册跨 generator 复用的自定义 action */
export function registerActions(plop: NodePlopAPI) {
  plop.setActionType('ensureResource', (answers) => {
    const modelName = (answers as any).modelName || ''
    ensureResource(modelName)
    return `Resource ensured for ${modelName}`
  })
  plop.setActionType('biomeFormat', (_answers, config) => {
    const files = ((config as any).files ?? []) as string[]
    biomeFormatFiles(files)
    return `Biome formatted ${files.length} file(s)`
  })
}
