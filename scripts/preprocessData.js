const fs = require('fs').promises
const path = require('path')

const dataDir = path.resolve(process.cwd(), 'public', 'data')

async function getDepartmentsPath () {
  const files = await fs.readdir(dataDir)
  return files
}

async function main () {
  const data = await getDepartmentsPath()

  const publishersFile = await fs.readFile(path.resolve(path.join(process.cwd(), 'static', 'data'), 'publicador.json'), 'utf8')

  const publishers = JSON.parse(publishersFile)

  const files = await Promise.all(data.map(async (dir) => {
    const dirPath = path.resolve(process.cwd(), 'public', 'data', dir)
    const files = await fs.readdir(dirPath)
    const filterFiles = files.filter(e => e !== dir + '.json' && !e.includes('_map') && !e.includes('.svg'))

    let extra = []

    if (filterFiles.length > 0) {
      extra = await Promise.all(filterFiles.map(async (file) => {
        const content = await fs.readFile(path.join(dataDir, `${dir}/${file}`), 'utf8')

        let parseContent = []
        try {
          const tmp = Array.isArray(JSON.parse(content).publicadores) ? JSON.parse(content).publicadores : JSON.parse(content).publicadores.publicadores_list
          parseContent = tmp.map(e => {
            const found = publishers.find(f => f.slug === e.slug_publicador)
            if (found) {
              e.tipo_organizacion = found.tipo_organizacion
            } else {
              e.tipo_organizacion = ''
            }
            return e
          })
        } catch (error) {
          console.log(error)
        }
        return {
          name: file.slice(0, -5),
          list: parseContent
        }
      }))
    }
    const content = await fs.readFile(path.join(dataDir, `${dir}/${dir}.json`), 'utf8')

    const obj = {
      name: dir,
      list: JSON.parse(content).publicadores.publicadores_list.map(e => {
        const found = publishers.find(f => f.slug === e.slug_publicador)
        if (found) {
          e.tipo_organizacion = found.tipo_organizacion
        } else {
          e.tipo_organizacion = ''
        }
        return e
      }),
      graph: JSON.parse(content).publicadores.publicadores_tipo,
      extra
    }
    return obj
  }))

  const json = JSON.stringify(files)

  const ruta = './static/data/publicadorExtend.json'

  try {
    fs.writeFile(ruta, json, 'utf8', (err) => {
      if (err) {
        throw new Error('Error al guardar el archivo JSON: ' + err)
      }
      console.log('El archivo JSON ha sido guardado correctamente.')
    })
  } catch (error) {
    console.error('Se produjo un error al intentar guardar el archivo JSON:', error.message)
  }
}

main().catch(e => { process.exit(1) })
