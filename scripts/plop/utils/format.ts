import { execFileSync } from 'node:child_process'
import path from 'node:path'
import fse from 'fs-extra'
import { ROOT } from '../constants'

/** Format generated files with the project's Biome (biome format --write). */
export function biomeFormatFiles(files: string[]) {
  const existing = files.filter((f) => fse.existsSync(f))
  if (existing.length === 0) return
  const biomeCli = path.join(ROOT, 'node_modules', '@biomejs', 'biome', 'bin', 'biome')
  if (!fse.existsSync(biomeCli)) {
    throw new Error(`Biome CLI not found at ${biomeCli} (run pnpm install first)`)
  }
  execFileSync(process.execPath, [biomeCli, 'format', '--write', ...existing], {
    cwd: ROOT,
    stdio: 'inherit',
  })
}
