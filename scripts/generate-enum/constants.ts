import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** 仓库根目录 */
export const ROOT = path.resolve(__dirname, '../..')

/** enum 定义源：prisma/schema/shared.prisma */
export const SCHEMA_PATH = path.join(ROOT, 'prisma', 'schema', 'shared.prisma')

/** prisma-zod-generator 生成的 enum schema 目录 */
export const ZOD_DIR = path.join(ROOT, 'src', 'shared', '@generated', 'zod', 'schemas', 'enums')

/** 生成的 enum 常量输出目录 */
export const CONST_DIR = path.join(ROOT, 'src', 'shared', 'const')

/** Handlebars 模板 */
export const TEMPLATE_PATH = path.join(ROOT, 'hb-templates', 'enum-const.hbs')
