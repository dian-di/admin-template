import { exec } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const directoryPath = path.join(__dirname, 'prisma/schema')

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error(`无法扫描目录: ${err}`)
  }

  for (const file of files) {
    const filePath = path.join(directoryPath, file)
    // 检查是否是文件
    fs.stat(filePath, (err, stat) => {
      if (err) {
        return console.error(`无法获取文件信息: ${err}`)
      }
      if (stat.isFile() && file.endsWith('.prisma')) {
        const command = `prisma-case-format -f ${filePath} --map-table-case=snake --map-field-case=snake`
        exec(command, (error, _, __) => {
          if (error) {
            console.error(`执行命令时出错: ${error}`)
            return
          }
        })
      }
    })
  }
})
