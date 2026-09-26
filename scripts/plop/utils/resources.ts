import { camelCase } from 'change-case'
import fse from 'fs-extra'
import { RESOURCES_PATH } from '../constants'

/** Ensure resource exists in resources.ts, append if missing */
export function ensureResource(modelName: string) {
  const content = fse.readFileSync(RESOURCES_PATH, 'utf-8')
  const resourceKey = camelCase(modelName)

  // Check if resource already exists
  const nameRegex = new RegExp(String.raw`name:\s*['"]${resourceKey}['"]`)
  if (nameRegex.test(content)) {
    console.log(`  [skip] resource "${resourceKey}" already exists in resources.ts`)
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

  const updated = `${content.slice(0, lastBracket) + insert}\n${content.slice(lastBracket)}`
  fse.writeFileSync(RESOURCES_PATH, updated, 'utf-8')
  console.log(`  [write] Added resource "${resourceKey}" to resources.ts`)
}
