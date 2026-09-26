import fse from 'fs-extra'

/** 首字母小写 */
export function lcFirst(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

/** 两步 rename（先 .tmp 再目标），跨设备安全 */
export function renameFile(from: string, to: string) {
  if (from === to) return
  if (!fse.pathExistsSync(from)) return
  const tmp = `${from}.tmp`
  fse.renameSync(from, tmp)
  fse.renameSync(tmp, to)
}
