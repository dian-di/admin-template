import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import fse from 'fs-extra'
import Handlebars from 'handlebars'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')

const SCHEMA_PATH = path.join(ROOT, 'prisma', 'schema', 'shared.prisma')
const ZOD_DIR = path.join(ROOT, 'src', 'shared', '@generated', 'zod', 'inputTypeSchemas')
const CONST_DIR = path.join(ROOT, 'src', 'shared', 'const')

const templatePath = path.join(ROOT, 'hb-templates', 'enum-const.hbs')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function lcFirst(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

function renameFile(from: string, to: string) {
  if (from === to) return
  if (!fse.pathExistsSync(from)) return
  const tmp = `${from}.tmp`
  fse.renameSync(from, tmp)
  fse.renameSync(tmp, to)
}

// ---------------------------------------------------------------------------
// 1. Read enum names from shared.prisma
// ---------------------------------------------------------------------------

function getEnumNames(schemaPath: string) {
  const content = fse.readFileSync(schemaPath, 'utf-8')
  const names: string[] = []
  const re = /^enum\s+(\w+)/gm
  let m
  while ((m = re.exec(content)) !== null) {
    names.push(m[1])
  }
  return names
}

// ---------------------------------------------------------------------------
// 2. Read enum values from generated Zod schema
// ---------------------------------------------------------------------------

function getEnumValues(enumName: string) {
  const filePath = path.join(ZOD_DIR, `${enumName}Schema.ts`)
  if (!fse.pathExistsSync(filePath)) {
    console.warn(`  [warn] Zod schema not found: ${enumName}Schema.ts`)
    return null
  }
  const content = fse.readFileSync(filePath, 'utf-8')
  const m = /z\.enum\(\[([^\]]+)\]/.exec(content)
  if (!m) return null
  return m[1].split(',').map((s) => s.trim().replace(/^\x27|\x27$/g, ''))
}

// ---------------------------------------------------------------------------
// 3. Load existing const file via import()
// ---------------------------------------------------------------------------

async function loadExistingEnum(filePath: string, enumName: string) {
  if (!fse.pathExistsSync(filePath)) return null
  try {
    const fileUrl = pathToFileURL(filePath).href
    const mod = await import(fileUrl)
    const enumObj = mod[enumName]
    const mapObj = mod[`${enumName}Map`]
    if (!enumObj || !mapObj) return null

    const values = Object.keys(enumObj)
    const labels: Record<string, string> = { ...mapObj }
    return { values, labels }
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// 4. Merge: existing values + labels preserved, new values appended
// ---------------------------------------------------------------------------

function mergeEnum(
  prismaValues: string[],
  existing: { values: string[]; labels: Record<string, string> } | null,
) {
  const existingValues = existing?.values ?? []
  const existingLabels = existing?.labels ?? {}

  const mergedValues = [...existingValues]
  const mergedLabels = { ...existingLabels }

  for (const val of prismaValues) {
    if (!mergedValues.includes(val)) {
      mergedValues.push(val)
    }
    if (!(val in mergedLabels)) {
      mergedLabels[val] = val
    }
  }

  return { values: mergedValues, labels: mergedLabels }
}

// ---------------------------------------------------------------------------
// 5. Code generation via HBS template
// ---------------------------------------------------------------------------

const template = Handlebars.compile(fse.readFileSync(templatePath, 'utf-8'))

function generateEnumFile(enumName: string, values: string[], labels: Record<string, string>) {
  return template({
    name: enumName,
    entries: values.map((v) => ({ value: v, label: labels[v] ?? v })),
  })
}

function generateBarrelIndex(enumNames: string[]) {
  const lines = enumNames.map((name) => `export * from './${lcFirst(name)}'`)
  lines.push('')
  return lines.join('\n')
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const enumNames = getEnumNames(SCHEMA_PATH)
  if (enumNames.length === 0) {
    console.log('No enums found in shared.prisma.')
    return
  }

  fse.ensureDirSync(CONST_DIR)

  const generated: string[] = []

  for (const enumName of enumNames) {
    const values = getEnumValues(enumName)
    if (!values) continue

    const targetFile = path.join(CONST_DIR, lcFirst(enumName) + '.ts')
    const legacyFile = path.join(CONST_DIR, enumName + '.ts')

    let existing = await loadExistingEnum(targetFile, enumName)
    if (!existing && lcFirst(enumName) !== enumName) {
      existing = await loadExistingEnum(legacyFile, enumName)
      if (existing) {
        renameFile(legacyFile, targetFile)
        console.log('  [migrate] ' + enumName + '.ts -> ' + lcFirst(enumName) + '.ts')
      }
    }

    const { values: mergedValues, labels } = mergeEnum(values, existing)

    if (fse.pathExistsSync(targetFile)) {
      const currentContent = fse.readFileSync(targetFile, 'utf-8')
      const newContent = generateEnumFile(enumName, mergedValues, labels)
      if (currentContent === newContent) {
        console.log('  [skip] ' + lcFirst(enumName) + '.ts - no changes')
        generated.push(enumName)
        continue
      }
    }

    fse.writeFileSync(targetFile, generateEnumFile(enumName, mergedValues, labels), 'utf-8')
    console.log('  [write] ' + lcFirst(enumName) + '.ts')
    generated.push(enumName)
  }

  const indexPath = path.join(CONST_DIR, 'index.ts')
  fse.writeFileSync(indexPath, generateBarrelIndex(generated), 'utf-8')
  console.log('  [write] index.ts (barrel)')

  console.log('\nDone - synced ' + generated.length + ' enum(s) to src/shared/const/')
}

main()
