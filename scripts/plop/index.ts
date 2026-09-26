import type { NodePlopAPI } from 'plop'
import { registerSchemaGenerator } from './generators/schema'
import { registerTemplateGenerator } from './generators/template'
import { registerActions, registerHelpers } from './register'

export default function (plop: NodePlopAPI) {
  registerHelpers(plop)
  registerActions(plop)

  registerTemplateGenerator(plop)
  registerSchemaGenerator(plop)
}
