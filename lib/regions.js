export const fs = require('fs').promises
const path = require('path')

const dataDir = path.resolve(process.cwd(), 'public', 'data')

// TODO: check nesting level for early exit
async function readMunicipalities (root, prefix = '') {
  const filesList = await fs.readdir(root, { withFileTypes: true })
  const res = []
  for (const dirent of filesList) {
    const isDir = dirent.isDirectory()

    res.push(prefix + dirent.name)

    if (isDir) {
      const inner = await readMunicipalities(path.resolve(root, dirent.name), `${dirent.name}/`)
      res.push(...inner)
    }
  }
  return res.map(item => item.replace('.json', ''))
}

export async function getDepartmentsPath () {
  const files = await fs.readdir(dataDir)
  return files.map(filename => ({
    params: {
      regiones: filename
    }
  }))
}

export async function getMunicipalitesPath () {
  const contents = await readMunicipalities(dataDir)
  const files = contents
    .filter(filename => {
      return filename.includes('/') && !filename.endsWith('_map') && !filename.endsWith('.svg')
    })
    .map(filename => {
      const [regiones, municipio] = filename.split('/')
      return {
        regiones, municipio
      }
    })
    .filter(file => file.regiones !== file.municipio)
  const paths = files.map(filename => ({
    params: filename
  }))
  return paths
}

export async function getDepartmentData (slug) {
  const content = await fs.readFile(path.join(dataDir, `${slug}/${slug}.json`), 'utf8')
  return content
}

export async function getMunicipalityData (region, slug) {
  const content = await fs.readFile(path.join(dataDir, `${region}/${slug}.json`), 'utf8')
  return content
}

export async function getMapData (slug) {
  const content = await fs.readFile(path.join(dataDir, `${slug}/${slug}_map.json`), 'utf8')
  return content
}
