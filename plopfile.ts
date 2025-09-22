// https://github.com/plopjs/plop/issues/423#issuecomment-2084258869
// ts运行命令
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { camelCase, pascalCase, snakeCase } from 'change-case'
import type { NodePlopAPI } from 'plop'
import type { ZodObject } from 'zod'
//  udpate your schema path here
import { EntryCreateSchema as createSchema } from './src/shared/zod/EntrySchema'

const genePath = {
  page: 'src/pages',
  schema: 'src/shared/zod',
}

function geneFields(schema: ZodObject<any>) {
  return Object.keys(schema.shape).map((key) => ({
    name: key,
    type: schema.shape[key]._def.typeName,
  }))
}

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function registerHelpers(plop: NodePlopAPI) {
  plop.setHelper('pascalCase', pascalCase)
  plop.setHelper('camelCase', camelCase)
  plop.setHelper('snakeCase', snakeCase)
}

export default function (plop: NodePlopAPI) {
  registerHelpers(plop)

  plop.setGenerator('template', {
    description: 'Generate template List and Edit pages',
    prompts: [
      {
        type: 'input',
        name: 'modelName',
        message: 'Enter the model name (e.g., project, entry):',
      },
      {
        type: 'input',
        name: 'searchKeys',
        message: 'Enter the search keys (e.g., city, station, 多个key使用英文逗号隔开):',
      },
    ],
    actions: (data) => {
      const modelName = data?.modelName || ''
      const searchKeys = data?.searchKeys
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
      const keys = { searchKeys }
      // 提取模型字段
      const fields = geneFields(createSchema)
      // biome-ignore lint/suspicious/noConsoleLog: <explanation>
      console.log('Fields:', fields) // 打印提取的字段，检查是否正确

      // 定义生成的文件
      const actions = [
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/index.tsx`,
          templateFile: 'plop-templates/index.hbs',
        },
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/list.tsx`,
          templateFile: 'plop-templates/list.hbs',
          data: { modelName, keys },
        },
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/edit.tsx`,
          templateFile: 'plop-templates/edit.hbs',
          data: { fields, modelName },
        },
      ]

      return actions
    },
  })
  plop.setGenerator('schema', {
    description: 'Generate template List and Edit pages',
    prompts: [
      {
        type: 'input',
        name: 'modelName',
        message: 'Enter the model name (e.g., template):',
      },
    ],
    actions: (data) => {
      const modelName = data?.modelName || ''
      const actions = [
        {
          type: 'add',
          path: `${genePath.schema}/zod/{{pascalCase modelName}}Schema.ts`,
          templateFile: 'plop-templates/zodSchema.hbs',
          data: { modelName },
        },
      ]

      return actions
    },
  })
}
