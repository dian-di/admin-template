import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { camelCase, pascalCase } from 'change-case'

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * 注册 Handlebars 辅助函数
 */
function registerHelpers(plop) {
  plop.setHelper('pascalCase', pascalCase)
  plop.setHelper('camelCase', camelCase)
}

/**
 * 将 Prisma 字段类型映射为 Zod 类型
 */
function mapPrismaTypeToZodType(type) {
  switch (type) {
    case 'String':
      return 'string'
    case 'Int':
    case 'Float':
      return 'number'
    case 'Boolean':
      return 'boolean'
    case 'DateTime':
      return 'date'
    default:
      return 'unknown'
  }
}

/**
 * 提取 Prisma 模型字段
 */
function extractFields(modelContent, modelName) {
  const modelRegex = new RegExp(`model ${modelName} {([^}]*)}`, 'g')
  const modelMatch = modelRegex.exec(modelContent)

  if (!modelMatch) {
    throw new Error(`Model ${modelName} not found in schema.prisma`)
  }

  return modelMatch[1]
    .split('\n')
    .filter((line) => {
      // 过滤空行和以 @@ 开头的行
      const trimmedLine = line.trim()
      return trimmedLine && !trimmedLine.startsWith('@@')
    })
    .map((line) => {
      // 提取字段名称和类型
      const [name, type] = line.trim().split(/\s+/)
      return { name, type, zodType: mapPrismaTypeToZodType(type) }
    })
}

/**
 * 生成文件路径
 */
function getModelPath(modelName) {
  return path.join(__dirname, 'prisma', 'schema', `${modelName}.prisma`)
}

export default function (plop) {
  // 注册 Handlebars 辅助函数
  registerHelpers(plop)

  plop.setGenerator('template', {
    description: 'Generate template List and Edit pages',
    prompts: [
      {
        // type: (String) Type of the prompt. Defaults: input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
        type: 'input',
        name: 'modelName',
        message: 'Enter the model name (e.g., template):',
      },
      {
        type: 'input',
        name: 'searchKeys',
        message: 'Enter the model name (e.g., template):',
      },
    ],
    actions: (data) => {
      const { modelName } = data

      // 检查 Prisma 模型文件是否存在
      const modelPath = getModelPath(modelName)
      console.log('Model Path:', modelPath) // 打印路径，检查是否正确

      if (!fs.existsSync(modelPath)) {
        throw new Error(`Prisma schema file not found at ${modelPath}`)
      }

      // 读取 Prisma 模型文件
      const schemaContent = fs.readFileSync(modelPath, 'utf-8')

      // 提取模型字段
      const fields = extractFields(schemaContent, pascalCase(modelName))
      console.log('Fields:', fields) // 打印提取的字段，检查是否正确

      // 定义生成的文件
      const actions = [
        {
          type: 'add',
          path: 'src/pagesDemo/{{camelCase modelName}}/index.tsx',
          templateFile: 'plop-templates/index.hbs',
          data: { fields, modelName },
        },
        {
          type: 'add',
          path: 'src/pagesDemo/{{camelCase modelName}}/list.tsx',
          templateFile: 'plop-templates/list.hbs',
          data: { fields, modelName },
        },
        {
          type: 'add',
          path: 'src/pagesDemo/{{camelCase modelName}}/edit.tsx',
          templateFile: 'plop-templates/edit.hbs',
          data: { fields, modelName },
        },
        {
          type: 'add',
          // path: 'src/shared/zod/{{pascalCase modelName}}Schema.ts',
          path: 'src/pagesDemo/zod/{{pascalCase modelName}}Schema.ts',
          templateFile: 'plop-templates/zodSchema.hbs',
          data: { fields, modelName },
        },
      ]

      console.log('Actions:', actions) // 打印 actions，检查是否正确
      return actions
    },
  })
}
