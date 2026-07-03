// https://github.com/plopjs/plop/issues/423#issuecomment-2084258869
// ts运行命令
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { camelCase, pascalCase, snakeCase } from 'change-case'
import fse from 'fs-extra'
import type { NodePlopAPI } from 'plop'
import type { ZodObject } from 'zod'

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const require = createRequire(import.meta.url)

const genePath = {
  page: path.join(ROOT, 'src', 'pages'),
  schema: path.join(ROOT, 'src', 'shared', 'zod'),
}

const RESOURCES_PATH = path.join(ROOT, 'src', 'resources.ts')
const templatePath = path.join(ROOT, 'hb-templates', 'plop')

/** Unwrap Zod optional/nullable wrappers to get the base type */
function getBaseType(schema: any): string {
  let cur = schema
  while (cur._def && cur._def.innerType) {
    cur = cur._def.innerType
  }
  return cur._def?.type ?? 'unknown'
}

function geneFields(schema: ZodObject<any>) {
  return Object.keys(schema.shape).map((key) => ({
    name: key,
    type: getBaseType(schema.shape[key]),
    listName: pascalCase(key) + 'List',
    listExpr: '{' + pascalCase(key) + 'List}',
    mapName: pascalCase(key) + 'Map',
  }))
}

function getModelNames(): string[] {
  const ignoreFiles = ['schema.prisma', 'shared.prisma']
  const schemaDir = path.join(ROOT, 'prisma', 'schema')
  return fse
    .readdirSync(schemaDir)
    .filter((file) => file.endsWith('.prisma') && !ignoreFiles.includes(file))
    .map((file) => file.replace('.prisma', ''))
}

/** Ensure resource exists in resources.ts, append if missing */
function ensureResource(modelName: string) {
  const content = fse.readFileSync(RESOURCES_PATH, 'utf-8')
  const resourceKey = camelCase(modelName)

  // Check if resource already exists
  const nameRegex = /name:s*['"]" + resourceKey + "['"]/
  if (nameRegex.test(content)) {
    console.log('  [skip] resource "' + resourceKey + '" already exists in resources.ts')
    return
  }

  // Find the last closing bracket of the array
  const lastBracket = content.lastIndexOf(']')
  if (lastBracket === -1) {
    console.warn('  [warn] Could not parse resources.ts — skipping resource injection')
    return
  }

  const before = content.slice(0, lastBracket).trimEnd()
  const needsComma = !before.endsWith(',')
  const insert =
    (needsComma ? ',' : '') +
    `
  {
    name: '${resourceKey}',
    list: '/${resourceKey}',
    create: '/${resourceKey}/create',
    edit: '/${resourceKey}/edit/:id',
    show: '/${resourceKey}/show/:id',
    meta: {
      canDelete: true,
    },
  },`

  const updated = content.slice(0, lastBracket) + insert + '\n' + content.slice(lastBracket)
  fse.writeFileSync(RESOURCES_PATH, updated, 'utf-8')
  console.log('  [write] Added resource "' + resourceKey + '" to resources.ts')
}

function registerHelpers(plop: NodePlopAPI) {
  plop.setHelper('pascalCase', pascalCase)
  plop.setHelper('camelCase', camelCase)
  plop.setHelper('snakeCase', snakeCase)
  plop.setHelper('eq', (a: any, b: any) => a === b)
}

function registerActions(plop: NodePlopAPI) {
  plop.setActionType('ensureResource', (answers) => {
    const modelName = (answers as any).modelName || ''
    ensureResource(modelName)
    return 'Resource ensured for ' + modelName
  })
}

export default function (plop: NodePlopAPI) {
  registerHelpers(plop)
  registerActions(plop)

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
          const base = path.join(genePath.page, camelCase(answers.modelName))
          return ['index.tsx', 'list.tsx', 'edit.tsx'].some((f) =>
            fse.existsSync(path.join(base, f)),
          )
        },
      },
    ],
    actions: (data) => {
      const modelName = data?.modelName || ''
      const searchKeys = data?.searchKeys
        .split(',')
        .map((item: string) => item.trim())
        .filter(Boolean)
      const keys = { searchKeys }
      // 提取模型字段
      const pascalName = pascalCase(modelName)
      const { [`${pascalName}CreateSchema`]: createSchema } = require(
        path.join(ROOT, 'src', 'shared', 'zod', `${pascalName}Schema.ts`),
      )
      const fields = geneFields(createSchema)
      const enumFields = fields.filter((f) => f.type === 'enum')
      console.log('Fields:', fields)
      console.log('Enum fields:', enumFields)

      const actions: any[] = [
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/index.tsx`,
          templateFile: `${templatePath}/index.hbs`,
          force: data?.overwrite ?? false,
        },
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/list.tsx`,
          data: { modelName, keys, enumFields },
          templateFile: `${templatePath}/list.hbs`,
          force: data?.overwrite ?? false,
        },
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/edit.tsx`,
          templateFile: `${templatePath}/edit.hbs`,
          data: { fields, enumFields, modelName },
          force: data?.overwrite ?? false,
        },
        {
          type: 'ensureResource',
          data: { resourceKey: camelCase(modelName) },
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
          const targetPath = path.join(genePath.schema, `${pascalCase(answers.modelName)}Schema.ts`)
          return fse.existsSync(targetPath)
        },
      },
    ],
    actions: (data) => {
      const modelName = data?.modelName || ''
      const actions = [
        {
          type: 'add',
          path: `${genePath.schema}/{{pascalCase modelName}}Schema.ts`,
          templateFile: `${templatePath}/zodSchema.hbs`,
          data: { modelName },
          force: data?.overwrite ?? false,
        },
      ]

      return actions
    },
  })
}
