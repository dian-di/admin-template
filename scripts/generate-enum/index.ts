import path from 'node:path'
import fse from 'fs-extra'
import { CONST_DIR, SCHEMA_PATH } from './constants'
import { loadExistingEnum, mergeEnum } from './merge'
import { generateBarrelIndex, generateEnumFile } from './render'
import { getEnumNames, getEnumValues } from './sources'
import { lcFirst, renameFile } from './utils'

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

    const targetFile = path.join(CONST_DIR, `${lcFirst(enumName)}.ts`)
    const legacyFile = path.join(CONST_DIR, `${enumName}.ts`)

    let existing = await loadExistingEnum(targetFile, enumName)
    if (!existing && lcFirst(enumName) !== enumName) {
      existing = await loadExistingEnum(legacyFile, enumName)
      if (existing) {
        renameFile(legacyFile, targetFile)
        console.log(`  [migrate] ${enumName}.ts -> ${lcFirst(enumName)}.ts`)
      }
    }

    const { values: mergedValues, labels } = mergeEnum(values, existing)

    if (fse.pathExistsSync(targetFile)) {
      const currentContent = fse.readFileSync(targetFile, 'utf-8')
      const newContent = generateEnumFile(enumName, mergedValues, labels)
      if (currentContent === newContent) {
        console.log(`  [skip] ${lcFirst(enumName)}.ts - no changes`)
        generated.push(enumName)
        continue
      }
    }

    fse.writeFileSync(targetFile, generateEnumFile(enumName, mergedValues, labels), 'utf-8')
    console.log(`  [write] ${lcFirst(enumName)}.ts`)
    generated.push(enumName)
  }

  const indexPath = path.join(CONST_DIR, 'index.ts')
  fse.writeFileSync(indexPath, generateBarrelIndex(generated), 'utf-8')
  console.log('  [write] index.ts (barrel)')

  console.log(`\nDone - synced ${generated.length} enum(s) to src/shared/const/`)
}

main()
