// https://github.com/plopjs/plop/issues/423#issuecomment-2084258869
// ts运行命令
import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { camelCase, pascalCase, snakeCase } from 'change-case'
import type { NodePlopAPI } from 'plop'
import type { ZodObject } from 'zod'

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
const require = createRequire(import.meta.url)

function getModelNames(): string[] {
  const ignoreFiles = ['schema.prisma', 'shared.prisma']
  const schemaDir = path.join(__dirname, 'prisma', 'schema')
  return fs
    .readdirSync(schemaDir)
    .filter((file) => file.endsWith('.prisma') && !ignoreFiles.includes(file))
    .map((file) => file.replace('.prisma', ''))
}

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
        type: 'list',
        name: 'modelName',
        message: 'Select the model name:',
        choices: getModelNames(),
      },
      {
        type: 'input',
        name: 'searchKeys',
        message: 'Enter the search keys (e.g., city, station, 多个key使用英文逗号隔开):',
      },
      {
        type: 'confirm',
        name: 'overwrite',
        message: 'Target page files already exist. Overwrite?',
        default: false,
        when: (answers) => {
          const base = path.join(__dirname, genePath.page, camelCase(answers.modelName))
          return ['index.tsx', 'list.tsx', 'edit.tsx'].some((f) => fs.existsSync(path.join(base, f)))
        },
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
      const pascalName = pascalCase(modelName)
      const { [`${pascalName}CreateSchema`]: createSchema } = require(
        `./src/shared/zod/${pascalName}Schema.ts`,
      )
      const fields = geneFields(createSchema)
      console.log('Fields:', fields) // 打印提取的字段，检查是否正确

      // 定义生成的文件
      const actions = [
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/index.tsx`,
          templateFile: 'plop-templates/index.hbs',
          force: data?.overwrite ?? false,
        },
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/list.tsx`,
          templateFile: 'plop-templates/list.hbs',
          data: { modelName, keys },
          force: data?.overwrite ?? false,
        },
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/edit.tsx`,
          templateFile: 'plop-templates/edit.hbs',
          data: { fields, modelName },
          force: data?.overwrite ?? false,
        },
      ]

      return actions
    },
  })
  plop.setGenerator('schema', {
    description: 'Generate template List and Edit pages',
    prompts: [
      {
        type: 'list',
        name: 'modelName',
        message: 'Select the model name:',
        choices: getModelNames(),
      },
      {
        type: 'confirm',
        name: 'overwrite',
        message: 'Target file already exists. Overwrite?',
        default: false,
        when: (answers) => {
          const targetPath = path.join(__dirname, genePath.schema, `${pascalCase(answers.modelName)}Schema.ts`)
          return fs.existsSync(targetPath)
        },
      },
    ],
    actions: (data) => {
      const modelName = data?.modelName || ''
      const actions = [
        {
          type: 'add',
          path: `${genePath.schema}/{{pascalCase modelName}}Schema.ts`,
          templateFile: 'plop-templates/zodSchema.hbs',
          data: { modelName },
          force: data?.overwrite ?? false,
        },
      ]

      return actions
    },
  })
}