import fs from 'fs'

export function getFileList(dirName: string, excludeList: string[] = []): string[] {
  let files: string[] = []
  const items = fs.readdirSync(dirName, { withFileTypes: true })
  for (const item of items) {
    if (item.name)
      if (item.isDirectory()) {
        files = [...files, ...getFileList(`${dirName}/${item.name}`)]
      } else {
        files.push(`${dirName}/${item.name}`)
      }
  }
  return files
}
