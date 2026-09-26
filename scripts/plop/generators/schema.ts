import path from 'node:path'
import { pascalCase } from 'change-case'
import fse from 'fs-extra'
import type { NodePlopAPI } from 'plop'
import { genePath, TEMPLATE_PATH } from '../constants'
import { getModelNames } from '../utils/models'

/** 注册 schema 生成器：为选中模型生成 Zod schema 文件 */
export function registerSchemaGenerator(plop: NodePlopAPI) {
  plop.setGenerator('schema', {
    description: 'Generate schema',
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
          templateFile: `${TEMPLATE_PATH}/zodSchema.hbs`,
          data: { modelName },
          force: data?.overwrite ?? false,
        },
        {
          type: 'biomeFormat',
          files: [path.join(genePath.schema, `${pascalCase(modelName)}Schema.ts`)],
        },
      ]

      return actions
    },
  })
}
