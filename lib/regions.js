import fs from 'fs/promises'
import path from 'path'

const dataDir = path.resolve(process.cwd(), 'public', 'data')

export async function getRegionsPath () {
  const filesList = await fs.readdir(dataDir)
  const files = filesList.map(filename => filename.replace('.json', ''))
  return files.map(filename => ({
    params: {
      regiones: filename
    }
  }))
}

export async function getRegionData (slug) {
  const content = await fs.readFile(path.join(dataDir, `${slug}.json`), 'utf8')
  return content
}
