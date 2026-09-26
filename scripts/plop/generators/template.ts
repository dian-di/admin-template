import path from 'node:path'
import { camelCase, pascalCase } from 'change-case'
import fse from 'fs-extra'
import type { NodePlopAPI } from 'plop'
import { genePath, RESOURCES_PATH, requireFromRoot, TEMPLATE_PATH } from '../constants'
import { geneFields } from '../utils/fields'
import { getModelNames } from '../utils/models'

/** 注册 template 生成器：为选中模型生成 List/Edit 页面并注入 resources */
export function registerTemplateGenerator(plop: NodePlopAPI) {
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
      const pageDir = path.join(genePath.page, camelCase(modelName))
      const { [`${pascalName}CreateSchema`]: createSchema } = requireFromRoot(
        path.join(genePath.schema, `${pascalName}Schema.ts`),
      )
      const fields = geneFields(createSchema)
      const enumFields = fields.filter((f) => f.type === 'enum')
      // console.log('Fields:', fields)
      // console.log('Enum fields:', enumFields)

      const actions: any[] = [
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/index.tsx`,
          templateFile: `${TEMPLATE_PATH}/index.hbs`,
          force: data?.overwrite ?? false,
        },
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/list.tsx`,
          data: { modelName, keys, enumFields },
          templateFile: `${TEMPLATE_PATH}/list.hbs`,
          force: data?.overwrite ?? false,
        },
        {
          type: 'add',
          path: `${genePath.page}/{{camelCase modelName}}/edit.tsx`,
          templateFile: `${TEMPLATE_PATH}/edit.hbs`,
          data: { fields, enumFields, modelName },
          force: data?.overwrite ?? false,
        },
        {
          type: 'ensureResource',
          data: { resourceKey: camelCase(modelName) },
        },
        {
          type: 'biomeFormat',
          files: [
            path.join(pageDir, 'index.tsx'),
            path.join(pageDir, 'list.tsx'),
            path.join(pageDir, 'edit.tsx'),
            RESOURCES_PATH,
          ],
        },
      ]

      return actions
    },
  })
}
