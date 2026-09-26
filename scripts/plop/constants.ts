// https://github.com/plopjs/plop/issues/423#issuecomment-2084258869
// ts运行命令
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** 仓库根目录 */
export const ROOT = path.resolve(__dirname, '../..')

/** 从仓库根目录解析依赖（用于加载生成的 Zod schema 等 TS 文件） */
export const requireFromRoot = createRequire(import.meta.url)

/** 各生成器产物的目标目录 */
export const genePath = {
  page: path.join(ROOT, 'src', 'pages'),
  schema: path.join(ROOT, 'src', 'shared', 'zod'),
}

/** Refine resources 配置文件 */
export const RESOURCES_PATH = path.join(ROOT, 'src', 'resources.ts')

/** Handlebars 模板目录 */
export const TEMPLATE_PATH = path.join(ROOT, 'hb-templates', 'plop')
