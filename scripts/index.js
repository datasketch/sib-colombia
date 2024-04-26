const fs = require('fs').promises
const path = require('path')

const dataDir = path.resolve(process.cwd(), 'public', 'data')

async function getDepartmentsPath () {
  const files = await fs.readdir(dataDir)
  return files
}

async function main() {
  const data = await getDepartmentsPath()

  const publishersFile = await fs.readFile(path.resolve(path.join(process.cwd(), 'static', 'data'), 'publicador.json'), 'utf8')

  const publishers = JSON.parse(publishersFile)

  const files = await Promise.all(data.map(async (dir) => {
    const dirPath = path.resolve(process.cwd(), 'public', 'data', dir)
    const files = await fs.readdir(dirPath)
    const filterFiles = files.filter(e => e !== dir + '.json')

    let extra = []

    if (filterFiles.length > 0) {
      extra = await Promise.all(filterFiles.map(async (file) => {
        const content = await fs.readFile(path.join(dataDir, `${dir}/${file}`), 'utf8')

        let parseContent = []
        try {
          parseContent = JSON.parse(content).publicadores.map(e => {
            const found = publishers.find(f => f.slug === e.slug_publicador)
            if (found) {
              e.tipo_organizacion = found.tipo_organizacion
            } else {
              e.tipo_organizacion = ''
            }
            return e
          })
        } catch (error) {
          parseContent = JSON.parse(content).publicadores.publicadores_list.map(e => {
            const found = publishers.find(f => f.slug === e.slug_publicador)
            if (found) {
              e.tipo_organizacion = found.tipo_organizacion
            } else {
              e.tipo_organizacion = ''
            }
            return e
          })
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

  fs.writeFile(ruta, json, 'utf8', (err) => {
    if (err) {
      console.error('Error al guardar el archivo JSON:', err);
      return;
    }
    console.log('El archivo JSON ha sido guardado correctamente.');
  });
}

main()
