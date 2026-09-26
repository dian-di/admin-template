import path from 'node:path'
import fse from 'fs-extra'
import { ROOT } from '../constants'

const ignoreFiles = ['schema.prisma', 'shared.prisma']

/** 扫描 prisma/schema 下的模型定义文件，返回模型名列表 */
export function getModelNames(): string[] {
  const schemaDir = path.join(ROOT, 'prisma', 'schema')
  return fse
    .readdirSync(schemaDir)
    .filter((file) => file.endsWith('.prisma') && !ignoreFiles.includes(file))
    .map((file) => file.replace('.prisma', ''))
}
